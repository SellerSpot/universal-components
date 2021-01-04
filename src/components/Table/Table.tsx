import { cx } from '@emotion/css';
import lodash from 'lodash';
import React from 'react';
import { getTableClasses, ITableClasses } from './table.styles';

export interface ITableProps {
    headers?: JSX.Element[];
    rowData?: JSX.Element[][];
    style?: {
        tableStyle?: React.CSSProperties;
        headerRowStyle?: React.CSSProperties;
        headerCellStyle?: React.CSSProperties;
        bodyRowStyle?: React.CSSProperties;
        bodyCellStyle?: React.CSSProperties;
    };
    className?: ITableClasses;
    onClick?: {
        rowClick?: (index: number) => void;
    };
}

export const Table: React.FC<ITableProps> = (props: ITableProps): JSX.Element => {
    const defaultProps: ITableProps = {
        headers: [],
        rowData: [],
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
                            onClick={(event) => requiredProps.onClick?.rowClick(rowIndex)}
                            className={cx(classNames.bodyRow, requiredProps.className?.bodyRow)}
                            style={requiredProps.style?.bodyRowStyle}
                        >
                            {(row as Array<string | JSX.Element>).map(
                                (cell: string | JSX.Element, cellIndex: number) => {
                                    return (
                                        <div
                                            key={cellIndex}
                                            className={cx(
                                                classNames.bodyCell,
                                                requiredProps.className?.bodyCell,
                                            )}
                                            style={requiredProps.style?.bodyCellStyle}
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
