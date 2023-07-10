import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar(){
    return(
        <>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item header>
                        <img src ="" alt="logo" style={{marginRight: '10px'}}/> Journey RD
                    </Menu.Item>    
                    <Menu.Item name='Destinos' position='right'/>
                    <Menu.Item name='Contactos' />
                    <Menu.Item name='Ingresar ' />
                    <Menu.Item>
                        <Button possitve content='Nuevo Destino' />
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    )
}