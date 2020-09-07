import React, { useState } from 'react'
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export function Store() {

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];
    
    const[mode, setMode] = useState('view_module');

    const onSwitch = () => {
        setMode(mode === 'view_list' ? 'view_module' : 'view_list');
    }

    return (
        <div className="store">
            <IconSwitch icon={mode} onSwitch={onSwitch}></IconSwitch>
            { mode === 'view_list' && <ListView items={products}></ListView>}
            { mode === 'view_module' && <CardsView items={products}></CardsView>}
        </div>
    )
}
