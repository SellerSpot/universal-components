import { Fade, Popper as MUIPopper } from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import { IPopperProps } from './Popper.types';
export { IPopperProps } from './Popper.types';

export const Popper = (props: IPopperProps): ReactElement => {
    const { children, placement, popperContent, offsetX, offsetY } = props;
    const [anchorElState, setAnchorElState] = useState<HTMLElement>(null);
    const openPopperHandler = (props: { anchorEl: HTMLElement }) => {
        const { anchorEl } = props;
        setAnchorElState(anchorEl);
    };

    const closePopperHandler = () => {
        setAnchorElState(null);
    };

    return (
        <>
            {children({ openPopperHandler, closePopperHandler })}
            <MUIPopper
                open={!!anchorElState}
                anchorEl={anchorElState}
                placement={placement}
                modifiers={{
                    flip: {
                        enabled: false,
                    },
                    // preventOverflow: {
                    //     enabled: true,
                    //     boundariesElement: 'scrollParent',
                    // },
                    offset: {
                        enabled: true,
                        offset: `${offsetX},${offsetY}`,
                    },
                }}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        {popperContent({ closePopperHandler })}
                    </Fade>
                )}
            </MUIPopper>
        </>
    );
};
