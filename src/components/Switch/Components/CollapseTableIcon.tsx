import React, { ReactElement } from 'react';
import { ICONS } from '../../../utilities/icons';
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
                    <ICONS.MdKeyboardArrowUp size={iconSize} />
                ) : (
                    <ICONS.MdKeyboardArrowDown size={iconSize} />
                )
            }
            size="small"
            onClick={() => toggleRowExpansion(rowIndex)}
        />
    );
};
