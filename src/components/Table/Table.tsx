import { useState } from '@hookstate/core';
import {
    Table as MUITable,
    TableCell,
    TableContainer,
    TableHead as MUITableHead,
    TableRow,
} from '@material-ui/core';
import React, { ReactElement, useEffect, useRef } from 'react';
import { TableBody } from './Components/TableBody';
import { TableEmptyState } from './Components/TableEmptyState/TableEmptyState';
import { TableSkeletonBody } from './Components/TableSkeletonBody';
import styles from './Table.module.scss';
import { ITableProps } from './Table.types';

export {
    ITableCollapsedCustomRenderer,
    ITableProps,
    TTableCellCustomRenderer,
} from './Table.types';

const TableHead = (props: ITableProps) => {
    // props
    const { shape, collapsedContentRenderer } = props;

    // compute
    const hasCollapsedContent = !!collapsedContentRenderer;

    // draw
    return (
        <MUITableHead>
            <TableRow className={styles.headerRow}>
                {hasCollapsedContent ? (
                    <TableCell
                        className={styles.headerCell}
                        key={'expandRowIconColumn'}
                        width="5%"
                    />
                ) : null}
                {shape.map((column, columnIndex) => {
                    // props
                    const { columnName, align, colSpan, padding, rowSpan, width } = column;

                    // compute
                    const cellKey = columnIndex;

                    // draw
                    return (
                        <TableCell
                            className={styles.headerCell}
                            key={cellKey}
                            align={align}
                            padding={padding}
                            rowSpan={rowSpan}
                            width={width}
                            colSpan={colSpan}
                        >
                            {columnName}
                        </TableCell>
                    );
                })}
            </TableRow>
        </MUITableHead>
    );
};

export const Table = (props: ITableProps): ReactElement => {
    // props
    const {
        size,
        isLoading,
        shape,
        collapsedContentRenderer,
        data,
        emptyStateMessage,
        emptyStatePrimaryCallToAction,
    } = props;

    // state
    // table container height so that that skeleton can be properly sized
    const containerHeight = useState(400);

    // hooks
    // to help get the height of table parent
    const tableContainerRef = useRef<HTMLDivElement>(null);

    // effects
    // setting the table container height so that that skeleton can be properly sized
    useEffect(() => {
        if (!!tableContainerRef && isLoading) {
            containerHeight.set(tableContainerRef.current.clientHeight);
        }
    }, [tableContainerRef]);

    // draw
    return (
        <div ref={tableContainerRef} className={styles.tableWrapper}>
            <TableContainer>
                <MUITable size={size}>
                    <TableHead {...props} />
                    {isLoading ? (
                        <TableSkeletonBody
                            shape={shape}
                            tableContainerHeight={containerHeight.get()}
                            hasCollapsedContent={!!collapsedContentRenderer}
                        />
                    ) : (
                        <TableBody {...props} />
                    )}
                </MUITable>
            </TableContainer>
            {data?.length === 0 && !isLoading && (
                <TableEmptyState
                    message={emptyStateMessage}
                    primaryCallToAction={emptyStatePrimaryCallToAction}
                    tableContainerHeight={containerHeight.get()}
                />
            )}
        </div>
    );
};
