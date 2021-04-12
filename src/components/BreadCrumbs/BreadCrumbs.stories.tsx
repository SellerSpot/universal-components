import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BreadCrumbs as BreadCrumbsComponent, IBreadCrumbsProps } from './BreadCrumbs';

const Template: Story = (args: IBreadCrumbsProps) => (
    <BrowserRouter>
        <BreadCrumbsComponent {...args} />
    </BrowserRouter>
);

export const BreadCrumbs = Template.bind({});
BreadCrumbs.args = {
    crumbs: [
        {
            title: 'Point Of Sale',
            route: '/pos',
        },
        {
            title: 'Sales',
            route: '/pos/sales',
        },
        {
            title: 'New Sale',
            route: '/pos/sales/newsale',
        },
    ],
} as IBreadCrumbsProps;

export default {
    title: 'Components/Atoms',
    component: BreadCrumbsComponent,
} as Meta;
