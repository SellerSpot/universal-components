import React, { ReactElement } from 'react';
import { IComponentEvents } from 'typings/common.types';
import { ICONS } from '../../utilities/icons';
import styles from './ExpandWorkspaceMenuButton.module.scss';

export interface IExpandWorkspaceMenuButtonProps {
    onClick?: IComponentEvents['onClick'];
}

export const ExpandWorkspaceMenuButton = (props: IExpandWorkspaceMenuButtonProps): ReactElement => {
    const { onClick } = props;
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <ICONS.EXPAND_MENU />
        </div>
    );
};
