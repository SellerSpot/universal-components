import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { generateRandomString } from '../../utilities';
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
            key: generateRandomString(),
            content: 'Sno',
            align: 'right',
            width: '5%',
        },
        {
            key: generateRandomString(),
            content: 'Name',
            width: '50%',
        },
        {
            key: generateRandomString(),
            content: 'Password',
            width: '45%',
        },
    ],
    body: ({ toggleRowExpansion }) => [
        {
            cells: [
                {
                    key: generateRandomString(),
                    content: '1',
                    align: 'right',
                },
                {
                    key: generateRandomString(),
                    content: 'Rohit',
                },
                {
                    key: generateRandomString(),
                    content: 'passwordstring',
                },
            ],
            key: 'asdf',
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
                    key: generateRandomString(),
                    content: '2',
                    align: 'right',
                },
                {
                    key: generateRandomString(),
                    content: 'Immi',
                },
                {
                    key: generateRandomString(),
                    content: 'passwordstring',
                },
            ],
            key: 'asdfdfs',
            collapsedContent: <h6>This is Collapsed Content</h6>,
        },
        {
            cells: [
                {
                    key: generateRandomString(),
                    content: '3',
                    align: 'right',
                },
                {
                    key: generateRandomString(),
                    content: 'Thaya',
                },
                {
                    key: generateRandomString(),
                    content: 'passwordstring',
                },
            ],
            key: 'asdfdsfasd',
            collapsedContent: <h6>This is Collapsed Content</h6>,
        },
        {
            cells: [
                {
                    key: generateRandomString(),
                    content: '4',
                    align: 'right',
                },
                {
                    key: generateRandomString(),
                    content: 'Immi',
                },
                {
                    key: generateRandomString(),
                    content: 'passwordstring',
                },
            ],
            key: 'ass',
            // onClick={(event)=>toggleRowExpansion(3)}
            collapsedContent: (
                <TableComponent
                    variant="simple"
                    size={'small'}
                    maxHeight={200}
                    unmountOnCollapse
                    headers={[
                        {
                            key: generateRandomString(),
                            content: 'Sno',
                            align: 'right',
                            width: '5%',
                        },
                        {
                            key: generateRandomString(),
                            content: 'Name',
                            width: '50%',
                        },
                        {
                            key: generateRandomString(),
                            content: 'Password',
                            width: '45%',
                        },
                    ]}
                    body={({}) => [
                        {
                            cells: [
                                {
                                    key: generateRandomString(),
                                    content: '1',
                                    align: 'right',
                                },
                                {
                                    key: generateRandomString(),
                                    content: 'Rohit',
                                },
                                {
                                    key: generateRandomString(),
                                    content: 'passwordstring',
                                },
                            ],
                            key: 'asdf1',
                        },
                        {
                            cells: [
                                {
                                    key: generateRandomString(),
                                    content: '1',
                                    align: 'right',
                                },
                                {
                                    key: generateRandomString(),
                                    content: 'Rohit',
                                },
                                {
                                    key: generateRandomString(),
                                    content: 'passwordstring',
                                },
                            ],
                            key: 'asdf123',
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
