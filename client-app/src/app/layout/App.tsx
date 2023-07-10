import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import DestinyDashboard from '../../features/destinies/dashboard/DestinyDashboard';
import { Destiny } from '../models/destiny'
import axios from 'axios';

function App() {

  const [destinies, setDestinies] = useState<Destiny[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/destiny').then(response => {
      setDestinies(response.data)
    })
  }, [])

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <DestinyDashboard  destinies={destinies}/>
      </Container>
    </>
  );
}

export default App;
