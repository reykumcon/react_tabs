import React from 'react';
import styles from './Tab.module.css';

const Message = (props) => {
    const { tabArray, tabIndex } = props;

    return (
        <div className={styles.message}>
            { tabArray[tabIndex].message }
        </div>
    )
}

export default Message;