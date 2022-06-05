import React from 'react';
import data from '../../data.json';
import Items from './Items';

function Sidebar(props) {
    
    return data.sidebar.map((e) => {
        return (
            <Items heading={e.heading} 
           
            />
        );
    })
}

export default Sidebar;