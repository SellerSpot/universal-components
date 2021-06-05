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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const tableWrapperStyle: CSSProperties = {
        width: '600px',
        height: '400px',
        overflow: 'auto',
    };

    // props
    const collapsedContent = () => {
        const collapsedContentStyle: CSSProperties = {
            width: '100%',
            height: 50,
            // backgroundColor: 'white',
        };
        return <div style={collapsedContentStyle}>Collapsed Content</div>;
    };

    const tableProps: ITableProps<IBrandData> = {
        data: [
            { id: 0, name: 'Adidas', value: 10 },
            { id: 1, name: 'Nick', value: 20 },
            { id: 2, name: 'Rebook', value: 40 },
        ],
        shape: [
            {
                columnName: 'SNo',
                align: 'center',
                width: '5%',
                customRenderer: ({ rowIndex }) => (rowIndex as number) + 1,
            },
            {
                columnName: 'Name',
                width: '70%',
                dataKey: 'name',
            },
            {
                columnName: 'Cost',
                dataKey: 'value',
                align: 'right',
                width: '20%',
                customRenderer: ({ rowData }) => `₹${rowData.value}`,
            },
        ],
        uniqueKey: 'id',
        collapsedContentRenderer: () => collapsedContent(),
        multiRowExpansion: true,
    };

    return (
        <div style={wrapperStyle}>
            <div style={tableWrapperStyle}>
                <TableComponent {...tableProps} />
            </div>
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
