import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import { addSnapshotListeners } from '../../lib/firebase';
import './App.css';

function App() {
  const [agendamentos, updateAgendamentos] = useState({});

  useEffect(() => {
    console.log('uhu');
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

  console.log(agendamentos);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">SEF Monitor</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
