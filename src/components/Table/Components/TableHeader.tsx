import React, { ReactElement } from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';
import { ITableProps } from '../Table.types';

export const TableHeader = (props: {
    hasExpandableRows: ITableProps['hasExpandableRows'];
    headers: ITableProps['headers'];
}): ReactElement => {
    const { hasExpandableRows, headers } = props;
    return (
        <TableHead>
            <TableRow>
                {hasExpandableRows ? <TableCell /> : null}
                {headers.map((header, headerIndex) => {
                    const { content, align, colSpan, padding, rowSpan, width } = header;
                    return (
                        <TableCell
                            key={headerIndex}
                            align={align}
                            colSpan={colSpan}
                            padding={padding}
                            rowSpan={rowSpan}
                            width={width}
                        >
                            {content}
                        </TableCell>
                    );
                })}
            </TableRow>
        </TableHead>
    );
};