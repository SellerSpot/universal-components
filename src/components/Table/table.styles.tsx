import { css, cx } from '@emotion/css';
import { cssColors, cssVariables } from '../../config';
import { ITableProps } from './Table';

interface ITableClasses {
    table: string;
    headerRow: string;
    headerCell: string;
    bodyRow: string;
}

export const getTableClasses = (requiredProps: ITableProps): ITableClasses => {
    const table = css`
        height: 100%;
        width: 100%;
        box-shadow: ${cssVariables['--shadow-style']};
        border-radius: ${cssVariables['--border-radius']};
        overflow-x: auto;
        overflow-y: auto;
        background-color: ${cssColors['--primary-background-color']};
    `;

    const headerRow = css`
        width: 100%;
        height: 40px;
        display: grid;
        grid-template-columns: ${'repeat(' + requiredProps.headers.length + ',1fr)'};
        grid-template-rows: 1fr;
        gap: 5px;
        position: 'sticky';
        top: 0;
        z-index: ${cssVariables['--z-index-table-header']};
        box-shadow: 0px 0px 5px 0px var(--shadow-color);
        background-color: ${cssColors['--tertiary-background-color']};
        padding: 0 25px;
    `;

    const headerCell = css`
        width: 100%;
        min-width: 80px;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        cursor: default;
        text-overflow: ellipsis;
        color: ${cssColors['--primary-font-color']};
        font-size: ${cssVariables['--font-size-secondary']};
    `;

    const bodyRow = cx(
        headerRow,
        css`
            background-color: ${cssColors['--primary-background-color']};
        `,
    );
    return {
        table,
        headerRow,
        headerCell,
        bodyRow,
    };
};
