import Icon from '@iconify/react';
import React, { ReactElement } from 'react';
import { ICONS } from '../../../utilities/icons/icons';
import { IconButton } from '../../IconButton/IconButton';

export const CollapseTableIcon = (props: {
    isRowExpanded: boolean;
    toggleRowExpansion: (rowIndex: number) => void;
    rowIndex: number;
}): ReactElement => {
    const { isRowExpanded, toggleRowExpansion, rowIndex } = props;
    const iconSize = '24px';
    return (
        <IconButton
            icon={
                isRowExpanded ? (
                    <Icon icon={ICONS.keyboardArrowUp} height={iconSize} />
                ) : (
                    <Icon icon={ICONS.keyboardArrowDown} height={iconSize} />
                )
            }
            size="small"
            onClick={() => toggleRowExpansion(rowIndex)}
        />
    );
};
