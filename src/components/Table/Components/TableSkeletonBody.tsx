import Icon from '@iconify/react';
import { TableCell, TableRow, TableBody as MUITableBody } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { ICONS } from '../../../utilities/icons';
import { IconButton } from '../../IconButton/IconButton';
import { Skeleton } from '../../Skeleton/Skeleton';
import cn from 'classnames';
import styles from '../Table.module.scss';
import { ITableProps } from '../Table.types';

export const TableSkeletonBody = (props: {
    shape: ITableProps['shape'];
    tableContainerHeight: number;
    hasCollapsedContent: boolean;
}): ReactElement => {
    // props
    const { shape, tableContainerHeight, hasCollapsedContent } = props;

    // compute
    const heightOfRow = 70;
    const overflowPreventionBufferRows = 1;
    const numberOfSkeletons =
        Math.round(tableContainerHeight / heightOfRow) - overflowPreventionBufferRows;
    const skeletonArray = Array(numberOfSkeletons).fill(0);

    return (
        <MUITableBody>
            {skeletonArray.map((_, rowIndex) => {
                return (
                    <TableRow className={styles.bodyRow} key={rowIndex}>
                        {hasCollapsedContent && (
                            <TableCell
                                className={cn(styles.bodyCell, styles.bodyFirstColumnCell)}
                                width="5%"
                            >
                                <IconButton
                                    size="small"
                                    icon={<Icon icon={ICONS.keyboardArrowDown} height="22px" />}
                                    theme="auto"
                                    disabled
                                />
                            </TableCell>
                        )}
                        {shape.map((column, columnIndex) => {
                            // props
                            const { align, colSpan, padding, rowSpan, width } = column;
                            // styles
                            const tableCellClassName = cn(styles.bodyCell, {
                                [styles.bodyFirstColumnCell]:
                                    !hasCollapsedContent && columnIndex === 0,
                            });
                            // draw
                            return (
                                <TableCell
                                    className={tableCellClassName}
                                    key={columnIndex}
                                    align={align}
                                    padding={padding}
                                    rowSpan={rowSpan}
                                    width={width}
                                    colSpan={colSpan}
                                >
                                    <Skeleton height="26px" width="100%" variant="rect" />
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </MUITableBody>
    );
};
