import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Table as TableComponent, ITableProps } from './Table';

const Template: Story<ITableProps> = (args: ITableProps) => <TableComponent {...args} />;

export const Table = Template.bind({});

Table.args = {
    hasExpandableRows: true,
    stickyHeader: true,
    headers: [
        {
            content: 'Sno',
            align: 'right',
            width: '5%',
        },
        {
            content: 'Name',
            width: '50%',
        },
        {
            content: 'Password',
            width: '45%',
        },
    ],
    body: ({ toggleRowExpansion }) => [
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
            onClick: () => toggleRowExpansion(0),
            collapsedContent: (
                <div
                    style={{
                        width: '100%',
                        height: '250px',
                        backgroundColor: 'red',
                    }}
                >
                    This is Collapsed Content
                </div>
            ),
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
            collapsedContent: <h6>This is Collapsed Content</h6>,
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
            collapsedContent: <h6>This is Collapsed Content</h6>,
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
            // onClick={(event)=>toggleRowExpansion(3)}
            collapsedContent: (
                <TableComponent
                    variant="simple"
                    size={'small'}
                    unmountOnCollapse
                    headers={[
                        {
                            content: 'Sno',
                            align: 'right',
                            width: '5%',
                        },
                        {
                            content: 'Name',
                            width: '50%',
                        },
                        {
                            content: 'Password',
                            width: '45%',
                        },
                    ]}
                    body={({ toggleRowExpansion }) => [
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
                            onClick: () => toggleRowExpansion(0),
                            collapsedContent: (
                                <div
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        backgroundColor: 'red',
                                    }}
                                >
                                    This is Collapsed Content
                                </div>
                            ),
                        },
                    ]}
                />
            ),
        },
    ],
} as ITableProps;

export default {
    title: 'Components/Atoms/Fullscreen',
    component: TableComponent,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;
