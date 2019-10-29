import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { addSnapshotListeners } from '../../lib/firebase';

function App() {
  const [selectedService, selectService] = useState('Renovação Título Residência');
  const [agendamentos, updateAgendamentos] = useState({});

  useEffect(() => {
    async function fetchAgendamentos() {
      addSnapshotListeners((servico, local, dados) => {
        updateAgendamentos(agendamentos => ({
          ...agendamentos,
          [servico]: {
            ...agendamentos[servico],
            [local]: dados,
          },
        }));
      });
    }
    fetchAgendamentos();
  }, []);

  const handleServiceChange = e => {
    selectService(e.target.value);
  };

  const locais = agendamentos[selectedService];
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Serviço</Form.Label>
          <Form.Control as="select" value={selectedService} onChange={handleServiceChange}>
            <option>Renovação Título Residência</option>
            <option>Concessão Cartão Residência (UE)</option>
          </Form.Control>
        </Form.Group>
        {locais && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Local</th>
                <th>Última atualização</th>
                <th>Datas</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(locais).map(local => {
                const localObj = locais[local];
                return (
                  <tr key={localObj.timestamp}>
                    <td>{local}</td>
                    <td>{localObj.timestamp.toDate().toISOString()}</td>
                    <td>
                      {Object.keys(localObj.datas).map(data => {
                        const dataEHora = `${data} ${localObj.datas[data]}`;
                        return (
                          <Badge key={dataEHora} variant="info">
                            {dataEHora}
                          </Badge>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
