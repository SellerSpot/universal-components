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
    });

    // handles expanding or collapsing a table row
    static toggleRowExpansion = (props: {
        rowIndex: number;
        expandedRowsSet: Set<number>;
        setExpandedRowsSet: React.Dispatch<React.SetStateAction<Set<number>>>;
        multiExpandableRows: boolean;
    }): void => {
        const { rowIndex, multiExpandableRows, expandedRowsSet, setExpandedRowsSet } = props;
        // creating a new instance of the state to manipulate
        const expandedRowsSetLocal = new Set(expandedRowsSet);
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
        setExpandedRowsSet(expandedRowsSetLocal);
    };
}
