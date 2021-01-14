import { ICheckboxClasses } from './checkbox.styles';

export interface ICheckboxProps {
    /**
     * Label to display above the checkbox.
     * @use - Used to provide a consistent header to a group of checkboxes
     */
    groupLabel?: string;
    /**
     * Label to display next to the checkbox.
     */
    label?: string;
    /**
     * Use this to control the checked state at a higher level and plan to pass in the correct value based on handling onChange events and re-rendering.
     */
    checked?: boolean;
    /**
     * Callback that is called when the checked value has changed.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Disabled state of the checkbox.
     */
    disabled?: boolean;
    className?: ICheckboxClasses;
    style?: {
        /**
         * Styling for the whole checkbox component
         */
        checkboxGroupWrapper?: React.CSSProperties;
        /**
         * Styling for the div containing both the custom checkbox as well as the label string
         */
        checkBoxWrapper?: React.CSSProperties;
        /**
         * Styling for the custom checkbox div
         */
        checkBox?: React.CSSProperties;
        /**
         * Styling for the checkbox if it is active
         */
        checkBoxActive?: React.CSSProperties;
        /**
         * Styling for the check icon inside the Checkbox
         */
        checkBoxCheckIcon?: React.CSSProperties;
        /**
         * Styling for the icon when it is inActive
         */
        checkBoxCheckIconInactive?: React.CSSProperties;
    };
}
