import React, { ReactElement } from 'react';
import styles from './Trademark.module.scss';
import { Logo, LogoText } from '../../assets/svgs/svgs';

export interface ITradeMarkProps {
    url?: string;
}

export const Trademark = (props: ITradeMarkProps): ReactElement => {
    const { url } = props;
    const logoClickHandler = () => {
        // check if valid url
        if (url) window.open(url, '__blank');
    };
    return (
        <div className={styles.wrapper}>
            <p className={styles.poweredBy}>Powered By</p>
            <div className={styles.logoSpace} role="link" onClick={logoClickHandler}>
                <Logo className={styles.logo} />
                <LogoText className={styles.logoText} />
            </div>
        </div>
    );
};
