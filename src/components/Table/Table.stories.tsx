import { Meta, Story } from '@storybook/react/types-6-0';
import React, { CSSProperties } from 'react';
import { colorThemes } from '../../theme/theme';
import { ITableProps, Table as TableComponent } from './Table';

// interface
interface IBrandData {
    id: string | number;
    name: string;
    value: number;
}

const Template: Story = () => {
    // styling
    const wrapperStyle: CSSProperties = {
        width: '100vw',
        height: '100vh',
        backgroundColor: colorThemes.default.backgroundTertiary,
    };

    // props
    const tableProps: ITableProps<IBrandData> = {
        data: [
            { id: 0, name: 'Adidas', value: 10 },
            { id: 1, name: 'Nick', value: 20 },
            { id: 2, name: 'Rebook', value: 40 },
        ],
        shape: [
            {
                columnName: 'SNo',
                customRenderer: ({ rowIndex }) => (rowIndex as number) + 1,
            },
            {
                columnName: 'Name',
                dataKey: 'name',
            },
            {
                columnName: 'Cost',
                dataKey: 'value',
                customRenderer: ({ rowIndex }) => (rowIndex as number) + 1,
            },
        ],
        uniqueKey: 'id',
    };

    return (
        <div style={wrapperStyle}>
            <TableComponent {...tableProps} />
        </div>
    );
};

export const Table = Template.bind({});

export default {
    title: 'Design System/Atoms/Table',
    component: TableComponent,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;
