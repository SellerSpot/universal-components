import { CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
import styles from './AppPreloader.module.scss';

export const AppPreloader = (): ReactElement => {
    return (
        <div className={styles.container}>
            <CircularProgress />
        </div>
    );
};
