import { makeStyles } from '@material-ui/core';

export class TableService {
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
