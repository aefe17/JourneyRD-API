import React from 'react';
import NavBar from '../../layout/NavBar';
import { Container, Segment } from 'semantic-ui-react';
import ImageCarousel from '../../layout/ImageCarousel';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Segment textAlign='center' padded='very'>
        <ImageCarousel />
      </Segment>
    </>
  )
}
