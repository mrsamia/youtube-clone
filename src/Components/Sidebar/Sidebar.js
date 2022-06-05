import React from 'react';
import data from '../../data.json';
import Items from './Items';
import styles from './styles.module.css';

function Sidebar(props) {

    return (
        <div className={styles.sidebarWrapper}>
            {data.sidebar.map((e) => {
                return (
                    <Items heading={e.heading}
                        items={e.items}
                    />
                );
            })}
        </div>
    )

}

export default Sidebar;