import React from 'react';
import styles from './Tab.module.css';

const Tab = (props) => {
    const { tabArray, tabIndex, setTabIndex } = props;

    return (
        <div className={styles.tab}>
            {
                tabArray.map((tab, index) => (
                    <div className={
                        index === tabIndex ?
                        styles.selectedTab :
                        styles.notSelectedTab
                    } onClick = { (e) => setTabIndex(index) }>
                        {tab.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Tab;