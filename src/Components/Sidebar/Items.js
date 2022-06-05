import React from 'react';
import styles from './styles.module.css';

function Items(props) {

    function clickHandler(name){
        alert(name)
    }

    return (
        <div className={styles.itemsWrapper}>
            <div className={styles.heading}>
                <h4>{props.heading}</h4>
            </div>
        <div>
            <p>{props.items.map((c)=>{
                return(
                    <div className={styles.items}>
                        <p onClick={() => clickHandler(c.name)}>{c.name}</p>
                    </div>
                );
            })}</p>
        </div>
        </div>
    );
}

export default Items;