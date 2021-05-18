export interface ISliderProps {
    defaultValue?: number;
    min?: number;
    max?: number;
    /**
     * Used to set the value shown above the thumb when dragging
     */
    getAriaValueText?: (value: number) => string;
    /**
     * If the value should be displayed when dragging the slider
     */
    valueLabelDisplay?: 'auto' | 'off' | 'on';
    value?: number;
    step?: number;
    onChange?: (event: React.ChangeEvent, value: number | number[]) => void;
}
