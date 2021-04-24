import React, { ReactElement } from 'react';
import {
    TableRow as MUITableRow,
    TableCell as MUITableCell,
    Collapse as MUICollapse,
} from '@material-ui/core';

export interface ICollapsableContentRowProps {
    collapsedContent: ReactElement;
    rowIndex: number;
    totalTableWidth: number;
    expandedRowsSet: Set<number>;
    unmountOnCollapse: boolean;
}

export const CollapsableContentRow = (props: ICollapsableContentRowProps): ReactElement => {
    const {
        collapsedContent,
        rowIndex,
        totalTableWidth,
        expandedRowsSet,
        unmountOnCollapse,
    } = props;
    return (
        <MUITableRow>
            <MUITableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={totalTableWidth}>
                <MUICollapse in={expandedRowsSet.has(rowIndex)} unmountOnExit={unmountOnCollapse}>
                    {collapsedContent}
                </MUICollapse>
            </MUITableCell>
        </MUITableRow>
    );
};
