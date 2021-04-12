import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ICONS } from '../../utilities/icons';
import { Avatar as AvatarComponent, IAvatarProps } from './Avatar';

const Template: Story<IAvatarProps> = (args: IAvatarProps) => <AvatarComponent {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
    content: <ICONS.MdHome />,
    imgSrc: '',
    size: 'small',
    theme: 'selected',
    variant: 'rounded',
    className: '',
    disabled: false,
} as IAvatarProps;

export default {
    title: 'Components/Atoms',
    component: AvatarComponent,
} as Meta;
