import React from 'react';
import {Card} from '../card/card.component';
import './card-list.style.css';

export const CardList = props =>(
        <div className='card-list'>
            {props.monsters.map(undead => (
            <Card key = {undead.id} undead = {undead}/>
          ))}   
        </div>
);

