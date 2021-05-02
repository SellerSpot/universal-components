import { PopperPlacementType } from '@material-ui/core';
import { ReactElement } from 'react';

type IPopperContentProps = (props: { closePopperHandler: () => void }) => ReactElement;

type IPopperChildrenProps = (props: {
    openPopperHandler: (props: { anchorEl: HTMLElement }) => void;
    closePopperHandler: () => void;
}) => ReactElement;

export interface IPopperProps {
    children?: IPopperChildrenProps;
    popperContent?: IPopperContentProps;
    offsetX?: number;
    offsetY?: number;
    placement?: PopperPlacementType;
}
