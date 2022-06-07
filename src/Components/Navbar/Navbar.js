import React from 'react';
import styles from './navbar.module.css';


function Navbar(props) {
    return (
        <div>
            <div className={styles.Nav}>
                <div>
                    <img className={styles.imgSize} src={require('./images/youtube-logo.png')} />
                </div>
                <div className={styles.searchContainer}>
                    <form >
                        <input className={styles.search} type="text" placeholder="Search" name="search" />
                    </form>
                </div>
                <div>
                    <img className={styles.S_imgSize} src={require('./images/S-logo.jpg')} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;