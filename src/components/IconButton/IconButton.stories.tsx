import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';
import { ICONS } from '../../utilities/icons';
import { IconButton as IconButtonComponent, IIconButtonProps } from './IconButton';

const Template: Story<IIconButtonProps> = (args: IIconButtonProps) => (
    <IconButtonComponent {...args} />
);

export const IconButton = Template.bind({});
IconButton.args = {
    theme: 'warning',
    icon: <ICONS.MdHome />,
    colors: defaultColors,
    fontSizes: defaultFontSizes,
} as IIconButtonProps;

export default {
    title: 'Design System/Atoms/Icon Button',
    component: IconButtonComponent,
} as Meta;
