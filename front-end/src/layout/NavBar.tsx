import React from 'react';
import {Button, Container, Menu} from 'semantic-ui-react'

function NavBar(){
    return(
        <Menu inverted fixed='top'>
                <img src='' alt='logo' style={{}}/>
            <Container>
                    <Menu.Item name='inicio' to='/' exact header> Inicio</Menu.Item>
                    <Menu.Item name='' to='/Destinos' exact header> Destinos</Menu.Item>
                    <Menu.Item name='' to='/Contactos' exact header> Contactos</Menu.Item>
                    <Button to={'/login'} inverted size='medium' positon='right' content='Iniciar Sesión'/>
            </Container>
        </Menu>
    );
}

export default NavBar;