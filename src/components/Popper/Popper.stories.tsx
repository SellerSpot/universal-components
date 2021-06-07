import { Card, CardActions, CardContent } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Button } from '../Button/Button';
import { Popper as PopperComponent, IPopperProps } from './Popper';

const Template: Story<IPopperProps> = () => {
    const getPopperContent: IPopperProps['popperContent'] = ({ closePopperHandler }) => {
        return (
            <Card>
                <CardContent>Hi there</CardContent>
                <CardActions>
                    <Button label={'Close'} theme="accent" onClick={closePopperHandler} />
                    <Button label={'Hi'} theme="primary" />
                </CardActions>
            </Card>
        );
    };

    return (
        <PopperComponent
            popperContent={getPopperContent}
            placement={'right'}
            offsetX={5}
            offsetY={5}
        >
            {({ openPopperHandler }) => (
                <Button
                    label={'Press To Pop'}
                    variant="contained"
                    theme="primary"
                    onClick={(event) => {
                        openPopperHandler({ anchorEl: event.currentTarget });
                    }}
                />
            )}
        </PopperComponent>
    );
};

export const Popper = Template.bind({});

export default {
    title: 'Universal Components/Atoms/Popper',
    component: PopperComponent,
} as Meta;
