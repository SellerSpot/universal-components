import React, { ReactElement } from 'react';

export interface ISliderModalProps {
    show?: boolean;
    sliderHeader?: ReactElement;
    children?: ReactElement;
    sliderFooter?: ReactElement;
    disableBackdropClick?: boolean;
    onClose?: (event: React.MouseEvent) => void;
    width?: React.CSSProperties['width'];
    showCloseButton?: boolean;
    showBackButton?: boolean;
}
