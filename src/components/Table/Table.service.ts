import { makeStyles } from '@material-ui/core';
import { TABLE_CONSTANTS } from './Table.constants';
import { ITableProps } from './Table.types';

export default class TableService {
    // the custom row styling for expandable rows
    static customRowStyles = makeStyles({
        root: {
            '& > *': {
                borderBottom: 'unset',
            },
            cursor: 'pointer',
        },
        scrollHide: {
            overflow: 'auto',
        },
        container: {
            maxHeight: 200,
        },
    });

    static computeTableContainerHeight = (props: {
        maxHeight: number;
        numberOfRows: number;
        size: ITableProps['size'];
    }): number => {
        const { maxHeight, numberOfRows, size } = props;
        // if maxHeight is not defined
        if (!maxHeight) return undefined;
        // deciding the rowHeight to use
        const rowHeight =
            size === 'small'
                ? TABLE_CONSTANTS.SMALL_TABLE_ROW_HEIGHT
                : TABLE_CONSTANTS.LARGE_TABLE_ROW_HEIGHT;
        // deciding the header height to use
        const headerHeight =
            size === 'small'
                ? TABLE_CONSTANTS.SMALL_TABLE_HEADER_HEIGHT
                : TABLE_CONSTANTS.LARGE_TABLE_HEADER_HEIGHT;
        // computing total height taken by all rows
        const totalRowHeight = rowHeight * numberOfRows;
        // adding header height to totalHeight
        const totalHeight = totalRowHeight + headerHeight;
        // returning maxHeight if computed height is larger than maxHeight
        return totalHeight <= maxHeight ? totalHeight : maxHeight;
    };

    // handles expanding or collapsing a table row
    static toggleRowExpansion = (props: {
        rowIndex: number;
        expandedRows: Set<number>;
        setExpandedRows: React.Dispatch<React.SetStateAction<Set<number>>>;
        multiExpandableRows: boolean;
    }): void => {
        const { rowIndex, multiExpandableRows, expandedRows, setExpandedRows } = props;
        // creating a new instance of the state to manipulate
        const expandedRowsSetLocal = new Set(expandedRows);
        if (multiExpandableRows) {
            if (expandedRowsSetLocal.has(rowIndex)) {
                expandedRowsSetLocal.delete(rowIndex);
            } else {
                expandedRowsSetLocal.add(rowIndex);
            }
        } else {
            if (expandedRowsSetLocal.has(rowIndex)) {
                expandedRowsSetLocal.clear();
            } else {
                expandedRowsSetLocal.clear();
                expandedRowsSetLocal.add(rowIndex);
            }
        }
        setExpandedRows(expandedRowsSetLocal);
    };
}
