import React from 'react';
import styles from'./mainBody.module.css';

function Items(props) {
    return (
        <div>
            <div className={styles.card} >
                <div>
                    <img className={styles.image} src={props.img}/>
                </div>
                <div>
                    <div className={styles.titleWrapper}>
                        <h6 className={styles.title}>{props.title}</h6>
                    </div>
                    <div>
                        <p>{props.channel}</p>
                    </div>
                    <div>
                        <p>{props.views}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Items;