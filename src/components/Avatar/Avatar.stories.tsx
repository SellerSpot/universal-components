import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ICONS } from '../../utilities/icons/icons';
import { Avatar as AvatarComponent, IAvatarProps } from './Avatar';
import Icon from '@iconify/react';

const Template: Story<IAvatarProps> = (args: IAvatarProps) => <AvatarComponent {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
    content: <Icon icon={ICONS.home} />,
    imgSrc: '',
    size: 'small',
    theme: 'selected',
    variant: 'rounded',
    className: '',
    disabled: false,
} as IAvatarProps;

export default {
    title: 'Design System/Atoms/Avatar',
    component: AvatarComponent,
} as Meta;
