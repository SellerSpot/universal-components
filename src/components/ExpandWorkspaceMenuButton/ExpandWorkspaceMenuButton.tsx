import { IComponentEvents } from 'typings/common.types';
import React, { ReactElement } from 'react';
import styles from './ExpandWorkspaceMenuButton.module.scss';
import { ICONS } from '../../utilities/icons';

export interface IExpandWorkspaceMenuButtonProps {
    onClick?: IComponentEvents['onClick'];
}

export const ExpandWorkspaceMenuButton = (props: IExpandWorkspaceMenuButtonProps): ReactElement => {
    const { onClick } = props;
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <ICONS.MdKeyboardArrowRight />
        </div>
    );
};
