import { Menu as MUIMenu, MenuItem } from '@material-ui/core';
import React, { ReactElement } from 'react';
import styles from './Menu.module.scss';
import { IMenuProps } from './Menu.types';

export { IMenuProps } from './Menu.types';

const getMenuItems = (props: {
    items: IMenuProps['items'];
    dense: IMenuProps['dense'];
    handleMenuClose: () => void;
}) => {
    const { dense = false, items, handleMenuClose } = props;
    return items.map((item, itemIndex) => {
        const { onClick, content, disableGutters, disabled } = item;
        const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
            if (!!onClick) onClick(event);
            handleMenuClose();
        };

        return (
            <MenuItem
                className={styles.menuItem}
                disableGutters={disableGutters}
                disabled={disabled}
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
        onClose?.();
        setAnchorEl(null);
    };

    return (
        <>
            {children({ openMenuHandler })}
            <MUIMenu
                id="simple-menu"
                anchorEl={anchorEl}
                elevation={1}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                PaperProps={{
                    className: styles.menu,
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
