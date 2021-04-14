import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Table as TableComponent, ITableProps } from './Table';

const Template: Story<ITableProps> = (args: ITableProps) => <TableComponent {...args} />;

export const Table = Template.bind({});
Table.args = {
    headers: [
        {
            content: 'Sno',
            align: 'right',
            width: '5%',
        },
        {
            content: 'Name',
        },
        {
            content: 'Password',
        },
    ],
    body: {
        rowData: [
            [
                {
                    content: '1',
                    align: 'right',
                },
                {
                    content: 'Rohit',
                },
                {
                    content: 'passwordstring',
                },
            ],
            [
                {
                    content: '2',
                    align: 'right',
                },
                {
                    content: 'Immi',
                },
                {
                    content: 'passwordstring',
                },
            ],
            [
                {
                    content: '3',
                    align: 'right',
                },
                {
                    content: 'Thaya',
                },
                {
                    content: 'passwordstring',
                },
            ],
            [
                {
                    content: '4',
                    align: 'right',
                },
                {
                    content: 'Immi',
                },
                {
                    content: 'passwordstring',
                },
            ],
        ],
        collapsedContent: <h6>This is Collapsed Content</h6>,
    },
} as ITableProps;

export default {
    title: 'Components/Atoms',
    component: TableComponent,
} as Meta;
