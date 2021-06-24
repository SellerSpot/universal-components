import React, { ReactElement } from 'react';
import { CircularProgress } from '..';

export const ReactSelectLoadingIndicator = (): ReactElement => {
    return (
        <div className={'custom-select-loading-indicator-holder'}>
            <CircularProgress theme="auto" size="16px" />
        </div>
    );
};
