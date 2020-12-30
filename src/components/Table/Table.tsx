import { cx } from '@emotion/css';
import lodash from 'lodash';
import React from 'react';
import { getTableClasses } from './table.styles';

export interface ITableProps {
    headers?: string[] | JSX.Element[];
    rowData?: string[][] | JSX.Element[][];
    style?: {
        tableStyle?: React.CSSProperties;
        headerRowStyle?: React.CSSProperties;
        headerCellStyle?: React.CSSProperties;
        bodyRowStyle?: React.CSSProperties;
    };
    className?: {
        table?: string;
        headerRow?: string;
        headerCell?: string;
        bodyRow?: string;
        bodyCell?: string;
    };
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
    };

    const requiredProps = lodash.merge(defaultProps, props);
    const classNames = getTableClasses(requiredProps);

    return (
        <div
            className={cx(classNames.table, requiredProps.className?.table)}
            style={requiredProps.style?.tableStyle}
        >
            <div
                className={cx(classNames.headerRow, requiredProps.className?.headerRow)}
                style={requiredProps.style?.headerRowStyle}
            >
                {(requiredProps.headers as Array<string | JSX.Element>).map(
                    (heading: string | JSX.Element, index: number) => {
                        return (
                            <div
                                key={index}
                                className={cx(
                                    classNames.headerCell,
                                    requiredProps.className?.headerCell,
                                )}
                                style={requiredProps.style?.headerCellStyle}
                            >
                                {heading}
                            </div>
                        );
                    },
                )}
            </div>
            {(requiredProps.rowData as Array<string[] | JSX.Element[]>).map(
                (row: string[] | JSX.Element[], rowIndex: number) => {
                    return (
                        <div
                            key={rowIndex}
                            className={cx(classNames.bodyRow, requiredProps.className?.bodyRow)}
                            style={requiredProps.style?.bodyRowStyle}
                        >
                            {(row as Array<string | JSX.Element>).map(
                                (cell: string | JSX.Element, cellIndex: number) => {
                                    return (
                                        <div
                                            key={cellIndex}
                                            className={cx(
                                                classNames.headerCell,
                                                requiredProps.className?.headerCell,
                                            )}
                                            style={requiredProps.style?.headerCellStyle}
                                        >
                                            {cell}
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    );
                },
            )}
        </div>
    );
};
