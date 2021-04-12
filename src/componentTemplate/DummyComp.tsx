import React, { ReactElement } from 'react';
import style from './DummyComp.module.scss';
import { IDummyCompProps } from './DummyComp.types';
export { IDummyCompProps } from './DummyComp.types';

export const DummyComp = (props: IDummyCompProps): ReactElement => {
    return <div></div>;
};
