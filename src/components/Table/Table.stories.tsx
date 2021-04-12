import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Table as TableComponent, ITableProps } from './Table';

const Template: Story<ITableProps> = (args: ITableProps) => <TableComponent {...args} />;

export const Table = Template.bind({});
Table.args = {
    headers: [
        {
            content: 'Sno',
        },
        {
            content: 'Name',
        },
        {
            content: 'Password',
        },
    ],
    rowData: [
        [
            {
                content: '1',
            },
            {
                content: 'Rohit',
            },
            {
                content: 'passwordstring',
            },
        ],
    ],
} as ITableProps;

export default {
    title: 'Components/Atoms',
    component: TableComponent,
} as Meta;
