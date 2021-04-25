import React, { ReactElement } from 'react';
import { ICONS } from '../../../utilities/icons';
import { IconButton } from '../../IconButton/IconButton';

export const CollapseTableIcon = (props: {
    isRowExpanded: boolean;
    toggleRowExpansion: (rowIndex: number) => void;
    rowIndex: number;
}): ReactElement => {
    const { isRowExpanded, toggleRowExpansion, rowIndex } = props;
    return (
        <IconButton
            icon={
                isRowExpanded ? (
                    <ICONS.MdKeyboardArrowUp size={'24px'} />
                ) : (
                    <ICONS.MdKeyboardArrowDown size={'24px'} />
                )
            }
            size="small"
            onClick={() => toggleRowExpansion(rowIndex)}
        />
    );
};
