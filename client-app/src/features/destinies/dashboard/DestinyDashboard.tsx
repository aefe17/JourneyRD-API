import React from 'react';
import { Destiny } from '../../../app/models/destiny';
import {Grid, List} from 'semantic-ui-react'
import DestinyList from './DestinyList';

interface Props{
    destinies: Destiny[];
}

export default function DestinyDashboard({destinies}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <DestinyList destinies={destinies}/>
            </Grid.Column>
        </Grid>
    )
}