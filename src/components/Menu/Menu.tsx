import { Menu as MUIMenu, MenuItem } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { IMenuProps } from './Menu.types';

export { IMenuProps } from './Menu.types';

const getMenuItems = (props: {
    items: IMenuProps['items'];
    dense: IMenuProps['dense'];
    handleMenuClose: () => void;
}) => {
    const { dense, items, handleMenuClose } = props;
    return items.map((item, itemIndex) => {
        const { onClick, content, disableGutters } = item;
        const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            if (!!onClick) onClick(event);
            handleMenuClose();
        };

        return (
            <MenuItem
                disableGutters={disableGutters}
                dense={dense}
                key={itemIndex}
                onClick={handleClick}
            >
                {content}
            </MenuItem>
        );
    });
};

export const Menu = (props: IMenuProps): ReactElement => {
    const { children, dense, items, onClose } = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const openMenuHandler = (eventElement: HTMLElement) => {
        setAnchorEl(eventElement);
    };

    const handleMenuClose = () => {
        if (!!onClose) onClose();
        setAnchorEl(null);
    };

    return (
        <>
            {children({ openMenuHandler })}
            <MUIMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={!!anchorEl}
                onClose={handleMenuClose}
            >
                {getMenuItems({
                    dense,
                    handleMenuClose,
                    items,
                })}
            </MUIMenu>
        </>
    );
};
