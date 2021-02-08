export interface IGetSliderModalStyles {
    /**
     * Wraps the entire sliderModal component
     */
    sliderModalWrapper?: string;
    /**
     * Styling for the backdrop component
     */
    backdropOverlay?: string;
    /**
     * Wraps the SliderContent component and the close button component
     */
    sliderContentWrapper?: string;
    /**
     * Wraps the close button for the slider component
     */
    sliderCloseButtonWrapper?: string;
    /**
     * Wraps the sliderContent
     */
    sliderContent?: string;
}

export interface ISliderModalProps {
    active: boolean;
    children: JSX.Element;
    sliderSize?: '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | '80%' | '90%' | '100%'; // on small screeen by default slider width will span to entire width
    zIndex?: number;
<<<<<<< HEAD
    type?: 'fixed' | 'absolute';
=======
>>>>>>> 63dc32c0825b7beb0797a749f8e5249a079dffac
    onClickBackdrop?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClickEsc?: (event: KeyboardEvent) => void;
    style?: {
        /**
         * Wraps the entire sliderModal component
         */
        sliderModalWrapper?: React.CSSProperties;
        /**
         * Styling for the backdrop component
         */
        backdropOverlay?: React.CSSProperties;
        /**
         * Wraps the SliderContent component and the close button component
         */
        sliderContentWrapper?: React.CSSProperties;
        /**
         * Wraps the close button for the slider component
         */
        sliderCloseButtonWrapper?: React.CSSProperties;
        /**
         * Wraps the sliderContent
         */
        sliderContent?: React.CSSProperties;
    };
    className?: IGetSliderModalStyles;
}
