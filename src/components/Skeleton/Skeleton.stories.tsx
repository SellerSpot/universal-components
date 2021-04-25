import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Avatar } from '../Avatar/Avatar';
import { Skeleton as SkeletonComponent, ISkeletonProps } from './Skeleton';

const Template: Story<ISkeletonProps> = (args: ISkeletonProps) => (
    <>
        <SkeletonComponent {...args} variant={'circle'}>
            <Avatar content={'T'} size={'small'} />
        </SkeletonComponent>
        <SkeletonComponent variant="text" width={'200px'} />
        <SkeletonComponent variant="text" width={'200px'} />
    </>
);

export const Skeleton = Template.bind({});
Skeleton.args = {} as ISkeletonProps;

export default {
    title: 'Components/Atoms',
    component: SkeletonComponent,
} as Meta;
