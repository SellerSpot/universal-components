import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { IconButton as IconButtonComponent, IIconButtonProps } from './IconButton';
import { ICONS } from '../../utilities/icons';
import { defaultColors, defaultFontSizes } from '../../theme/storybookTheme';

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
    title: 'Components/Atoms',
    component: IconButtonComponent,
} as Meta;
