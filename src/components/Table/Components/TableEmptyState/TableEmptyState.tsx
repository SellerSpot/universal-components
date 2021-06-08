import { CSSProperties } from '@material-ui/styles';
import React, { ReactElement } from 'react';
import styles from './TableEmptyState.module.scss';
import { EmptyStateIcon } from '../../../../assets/svgs/EmptyStateIcon/EmptyStateIcon';

export const TableEmptyState = (props: {
    tableContainerHeight?: number;
    message?: string;
    primaryCallToAction?: ReactElement;
}): ReactElement => {
    // props
    const {
        message = 'No Table Data Found',
        primaryCallToAction,
        tableContainerHeight = 100,
    } = props;

    // styles
    const wrapperStyle: CSSProperties = {
        height: tableContainerHeight - 100,
    };

    // draw
    return (
        <div className={styles.wrapper} style={wrapperStyle}>
            <EmptyStateIcon className={styles.icon} />
            <h5>{message}</h5>
            {primaryCallToAction}
        </div>
    );
};
