import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Button, Container } from 'semantic-ui-react';
import DestinyDashboard from '../../features/destinies/dashboard/DestinyDashboard';
import { Destiny } from '../models/destiny'
import agent from '../api/agent';
import DestinyStore from '../stores/destinyStore';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from './LoadingComponent';

function App() {

  const {destinyStore} = useStore()

  const [destinies, setDestinies] = useState<Destiny[]>([]);

  useEffect(() => {
    destinyStore.loadDestinies();
  }, [destinyStore])

if(destinyStore.loadingInitial) return <LoadingComponent content='Cargando Destinos' />

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <DestinyDashboard  destinies={destinyStore.destinies}/>
      </Container>
    </>
  );
}

export default observer(App);
