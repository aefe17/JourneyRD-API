import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react'

function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <img src='/assets/vecteezy_black-and-white-nautical-compass-isolated-on-white_8143436.jpg' alt="logo" style={{ marginRight: '10px', height: '50px' }} />
            <Container>
                <Menu.Item name='' to='/' exact header position='right' > Journey RD </Menu.Item>
                <Menu.Item name='' to='/Destinos' exact header  > Destinos</Menu.Item>
                <Menu.Item name='' to='/Contactos' exact header > Contactos</Menu.Item>
            </Container>
        </Menu>
    );
}

export default NavBar;