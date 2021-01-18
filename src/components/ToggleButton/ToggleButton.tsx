import { cx } from '@emotion/css';
import React, { useState } from 'react';
import { getToggleButtonClasses, IGetToggleButtonClasses } from './toggleButton.styles';

export interface IToggleButtonProps {
    active: boolean;
    toggleCallback: (activeStatus: boolean) => void;
    style?: {
        toggleButtonWrapperStyle: React.CSSProperties;
        toggleButtonInputStyle: React.CSSProperties;
        actionBlockHolderStyle: React.CSSProperties;
        actionClickBlockStyle: React.CSSProperties;
        sliderHandleStyle: React.CSSProperties;
    };
    className?: IGetToggleButtonClasses;
    /**
     * It gives the direction of user input flow, starts from tabindex 0
     * @default
     * undefined
     */
    tabIndex?: number;
}

export const ToggleButton = (props: IToggleButtonProps): JSX.Element => {
    const [active, setActive] = useState(props.active);
    const classNames = getToggleButtonClasses(active);
    const onClick = (isActive: boolean) => {
        setActive(isActive);
        props.toggleCallback(isActive);
    };
    return (
        <div
            className={classNames.toggleButtonWrapper}
            style={props.style?.toggleButtonWrapperStyle}
        >
            <input
                type="checkbox"
                className={cx(classNames.toggleButtonInput, props.className?.toggleButtonInput)}
                style={props.style?.toggleButtonInputStyle}
                checked={props.active}
                tabIndex={props.tabIndex}
            />
            <div
                className={cx(classNames.actionBlockHolder, props.className?.actionBlockHolder)}
                style={props.style?.actionBlockHolderStyle}
            >
                <div
                    onClick={() => onClick(!active)}
                    className={cx(classNames.sliderHandle, props.className?.sliderHandle)}
                    style={props.style?.sliderHandleStyle}
                ></div>
                <div
                    onClick={() => onClick(false)}
                    className={cx(classNames.actionClickBlock, props.className?.actionClickBlock)}
                    style={props.style?.actionClickBlockStyle}
                ></div>
                <div
                    onClick={() => onClick(true)}
                    className={cx(classNames.actionClickBlock, props.className?.actionClickBlock)}
                    style={props.style?.actionClickBlockStyle}
                ></div>
            </div>
        </div>
    );
};
