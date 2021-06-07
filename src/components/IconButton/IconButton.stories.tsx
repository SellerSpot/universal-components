import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ICONS } from '../../utilities';
import { IconButton as IconButtonComponent, IIconButtonProps } from './IconButton';
import Icon from '@iconify/react';

const Template: Story<IIconButtonProps> = (args: IIconButtonProps) => (
    <IconButtonComponent {...args} />
);

export const IconButton = Template.bind({});
IconButton.args = {
    theme: 'warning',
    icon: <Icon icon={ICONS.home} />,
} as IIconButtonProps;

export default {
    title: 'Universal Components/Atoms/Icon Button',
    component: IconButtonComponent,
} as Meta;
