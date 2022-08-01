import React from 'react';
import styles from './mainBody.module.css';

function Items(props) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card} >
                <div>
                    <img className={styles.image} src={props.img} />
                </div>
                <div>
                    <div className={styles.titleWrapper}>
                        <h6 className={styles.title}>{props.title}</h6>
                    </div>

                    <div className={styles.containWrapper}>
                        <div>
                            <p className={styles.views}>{props.channel}</p>
                        </div>
                        <div className={styles.contain} >
                            <div>
                                <p className={styles.views}>{props.views}</p>
                            </div>
                            <div>
                                <p className={styles.views}>{props.dot}</p>
                            </div>
                            <div>
                                <p className={styles.views}>{props.time}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {props.button?.map((c) => {
                            return (
                                <div className={styles.btn}>
                                    <button>{c.name}</button>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Items;