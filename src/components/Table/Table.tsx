import { css } from '@emotion/css';
import { cssColors, cssVariables } from 'config';
import lodash from 'lodash';
import React, { ReactNode } from 'react';
import { HorizontalRule } from '../HorizontalRule/HorizontalRule';

export interface ITableProps {
    headers: JSX.Element[];
    rowData: JSX.Element[][];
    style?: React.CSSProperties;
}

export const Table: React.FC<ITableProps> = (props: ITableProps): JSX.Element => {
    const defaultProps: ITableProps = {
        headers: [
            <p key={'1'}>Heading 1</p>,
            <p key={'2'}>Heading 2</p>,
            <p key={'3'}>Heading 3</p>,
            <p key={'4'}>Heading 4</p>,
        ],
        rowData: [
            [
                <p key={'01'}>Cell 01</p>,
                <p key={'02'}>Cell 02</p>,
                <p key={'03'}>Cell 03</p>,
                <p key={'04'}>Cell 04</p>,
            ],
            [
                <p key={'11'}>Cell 11</p>,
                <p key={'12'}>Cell 12</p>,
                <p key={'13'}>Cell 13</p>,
                <p key={'14'}>Cell 14</p>,
            ],
        ],
        style: {},
    };

    const requiredProps = lodash.merge(defaultProps, props);

    const tableClass = css`
        height: 100%;
        width: 100%;
        box-shadow: ${cssVariables['--shadow-style']};
        border-radius: ${cssVariables['--border-radius']};
        overflow-x: auto;
        overflow-y: auto;
        background-color: ${cssColors['--primary-background-color']};
    `;

    const headerRowClass = css`
        display: grid;
        grid-template-columns: ${'repeat(' + requiredProps.headers.length + ',1fr)'};
        grid-template-rows: 1fr;
        gap: 5px;
        position: sticky;
        top: 0;
        width: 100%;
        height: 40px;
        z-index: parseInt(${cssVariables['--z-index-table-header']});
        box-shadow: ${cssVariables['--shadow-style']};
        background-color: ${cssColors['--tertiary-background-color']};
        padding: 0 25px;
    `;

    const cellClass = css`
        width: 100%;
        min-width: 80px;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        cursor: default;
        text-overflow: ellipsis;
        color: ${cssColors['--secondary-font-color']};
        font-size: ${cssVariables['--font-size-secondary']};
    `;

    return (
        <div className={tableClass} style={requiredProps.style}>
            <div className={headerRowClass}>
                {requiredProps.headers.map((heading, index) => {
                    return (
                        <div key={index} className={cellClass}>
                            {heading}
                        </div>
                    );
                })}
            </div>
            <div className={headerRowClass}>
                {requiredProps.headers.map((heading, index) => {
                    return (
                        <div key={index} className={cellClass}>
                            {heading}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
