import React from 'react';
import { Destiny } from '../../../app/models/destiny';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';

interface Props{
    destinies: Destiny[];
}

let DOPCurr = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'DOP'
})


let formatPhoneNumber = (str: string) => {
    let cleaned = ('' + str).replace(/\D/g, '')

    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
      };
    
      return null
}

export default function DestinyList({destinies} : Props){
    return(
        <Segment>
            <Item.Group divided>
                {destinies.map(destiny => (
                    <Item key={destiny.id}>
                        <Item.Content>
                            <Item.Header as='a'>{destiny.name}</Item.Header>
                            <Item.Description>
                                <div>
                                    <Icon name='money bill alternate' />Presupuesto: {DOPCurr.format(destiny.budget)}
                                </div>

                                <div>
                                    <Icon name='phone'/>Número de telefono: {formatPhoneNumber(destiny.phoneNumber)}
                                </div>

                                <div>
                                    <Icon name='user outline'/> Maxima cantidad de { destiny.maxPeople === 1 ? 'persona' : 'personas'}: {destiny.maxPeople}
                                </div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' color='black' content='Mostrar'/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>

    )
}