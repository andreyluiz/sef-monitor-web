import React, { useEffect, useState } from 'react';
import Header from '../Header';
import AvailableTimesTable from '../AvailableTimesTable';
import { addSnapshotListeners } from '../../lib/firebase';

function App() {
  const [selectedService, selectService] = useState('Renovação Título Residência');
  const [schedules, updateSchedules] = useState({});

  useEffect(() => {
    async function fetchSchedules() {
      addSnapshotListeners((service, local, data) => {
        updateSchedules(schedules => ({
          ...schedules,
          [service]: {
            ...schedules[service],
            [local]: data,
          },
        }));
      });
    }
    fetchSchedules();
  }, []);

  const handleServiceChange = e => {
    selectService(e.target.value);
  };
  
  const locations = schedules[selectedService];

  return (
    <React.Fragment>
      <Header />
      <div className="container service-content actived renewal">
        <AvailableTimesTable availableTimes={locations}></AvailableTimesTable>
      </div>
    </React.Fragment>
  );
}

export default App;
