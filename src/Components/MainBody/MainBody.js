import React from 'react';
import data from './Data';
import Items from './Items';
import styles from './mainBody.module.css';

function MainBody(props) {
    return (
        <div className={styles.mainBody}>
            <div className='row'>
                {
                    data.map((e) => {
                        return (
                            <div className={styles.column}>
                                <Items
                                    img={e.vedioUrl}
                                    title={e.title}
                                    channel={e.channel}
                                    views={e.views}
                                    dot={e.dot}
                                    time={e.time}
                                    button={e.button}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default MainBody;