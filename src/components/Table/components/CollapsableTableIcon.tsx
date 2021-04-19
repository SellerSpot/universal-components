import React, { ReactElement } from 'react';
import { TableCell as MUITableCell } from '@material-ui/core';
import styles from '../Table.module.scss';
import cn from 'classnames';
import { IconButton } from '../../IconButton/IconButton';
import { ICONS } from '../../../utilities/icons';

export interface ICollapsableTableIconProps {
    expandedRowsSet: Set<number>;
    rowIndex: number;
    toggleRowExpansion: (rowIndex: number) => void;
}

export const CollapsableTableIcon = (props: ICollapsableTableIconProps): ReactElement => {
    const { expandedRowsSet, rowIndex, toggleRowExpansion } = props;
    return (
        <MUITableCell padding={'checkbox'}>
            <div
                className={cn(styles.expandRowIcon, {
                    [styles.expandRowIconRotated]: expandedRowsSet.has(rowIndex),
                })}
            >
                <IconButton
                    icon={<ICONS.MdKeyboardArrowDown />}
                    theme={'auto'}
                    size={'small'}
                    onClick={() => toggleRowExpansion(rowIndex)}
                />
            </div>
        </MUITableCell>
    );
};
