import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Table, ITableProps } from './Table';

export default {
    title: 'Components',
    component: Table,
} as Meta;

const Template: Story<ITableProps> = (args: ITableProps) => <Table {...args} />;

export const Tables = Template.bind({});
Tables.args = {
    headers: [
        <p key={'1'}>Heading 1</p>,
        <p key={'2'}>Heading 2</p>,
        <p key={'3'}>Heading 3</p>,
        <p key={'4'}>Heading 4</p>,
    ],
    rowData: [
        [
            <p key={'01'}>Cells 01</p>,
            <p key={'02'}>Cells 02</p>,
            <p key={'03'}>Cells 03</p>,
            <p key={'04'}>Cells 04</p>,
        ],
        [
            <p key={'11'}>Cells 11</p>,
            <p key={'12'}>Cells 12</p>,
            <p key={'13'}>Cells 13</p>,
            <p key={'14'}>Cells 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'01'}>Cell 01</p>,
            <p key={'02'}>Cell 02</p>,
            <p key={'03'}>Cell 03</p>,
            <p key={'04'}>Cell 04</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
        [
            <p key={'11'}>Cell 11</p>,
            <p key={'12'}>Cell 12</p>,
            <p key={'13'}>Cell 13</p>,
            <p key={'14'}>Cell 14</p>,
        ],
    ],
} as ITableProps;
