import Icon from '@iconify/react';
import React, { ReactElement } from 'react';
import { IComponentEvents } from 'typings/common.types';
import { ICONS } from '../../utilities/icons/icons';
import styles from './ExpandPluginMenuButton.module.scss';

export interface IExpandPluginMenuButtonProps {
    onClick?: IComponentEvents['onClick'];
}

export const ExpandPluginMenuButton = (props: IExpandPluginMenuButtonProps): ReactElement => {
    const { onClick } = props;
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <Icon icon={ICONS.keyboardArrowRight} />
        </div>
    );
};
