import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Button } from '../Button/Button';
import { Menu as MenuComponent, IMenuProps } from './Menu';

const Template: Story<IMenuProps> = (args: IMenuProps) => (
    <MenuComponent {...args}>
        {({ openMenuHandler }) => (
            <Button
                theme="primary"
                variant="contained"
                label={'Show Menu'}
                onClick={(event) => openMenuHandler(event.currentTarget)}
            />
        )}
    </MenuComponent>
);

export const Menu = Template.bind({});
Menu.args = {
    items: [
        {
            content: 'Profile',
        },
        {
            content: 'Settings',
        },
    ],
} as IMenuProps;

export default {
    title: 'Components/Atoms',
    component: MenuComponent,
} as Meta;
