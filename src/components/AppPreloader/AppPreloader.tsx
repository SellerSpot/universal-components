import React, { ReactElement } from 'react';
import { CircularProgress } from '..';
import styles from './AppPreloader.module.scss';

interface IAppPreloaderProps {
    message?: string;
}

export const AppPreloader = (props: IAppPreloaderProps): ReactElement => {
    const { message } = props;
    return (
        <div className={styles.container}>
            <CircularProgress />
            {message && <h5>{message}</h5>}
        </div>
    );
};
