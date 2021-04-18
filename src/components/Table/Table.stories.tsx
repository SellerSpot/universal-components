import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Table as TableComponent, ITableProps } from './Table';

const Template: Story<ITableProps> = (args: ITableProps) => <TableComponent {...args} />;

export const Table = Template.bind({});
Table.args = {
    hasExpandableRows: true,
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
    body: [
        {
            cells: [
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
            // collapsedContent: (
            //     <div
            //         style={{
            //             width: '100%',
            //             height: '100%',
            //             backgroundColor: 'red',
            //         }}
            //     >
            //         This is Collapsed Content
            //     </div>
            // ),
        },
        {
            cells: [
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
            // collapsedContent: <h6>This is Collapsed Content</h6>,
        },
        {
            cells: [
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
            // collapsedContent: <h6>This is Collapsed Content</h6>,
        },
        {
            cells: [
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
            collapsedContent: <h6>This is Collapsed Content</h6>,
        },
    ],
} as ITableProps;

export default {
    title: 'Components/Atoms',
    component: TableComponent,
} as Meta;
