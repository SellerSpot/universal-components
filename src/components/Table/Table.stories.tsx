import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ITableProps, Table as TableComponent } from './Table';
import styles from './Table.module.scss';

const Template: Story<ITableProps> = (args: ITableProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.tableWrapper}>
                <TableComponent {...args} />
            </div>
        </div>
    );
};

export const Table = Template.bind({});

Table.args = {
    hasExpandableRows: false,
    stickyHeader: true,
    height: 700,
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
                    maxHeight={200}
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
                    body={({}) => [
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
                        },
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
                        },
                    ]}
                />
            ),
        },
    ],
} as ITableProps;

export default {
    title: 'Design System/Atoms/Table',
    parameters: {
        layout: 'fullscreen',
    },
    component: TableComponent,
} as Meta;
