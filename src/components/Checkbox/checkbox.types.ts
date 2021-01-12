import { ICheckboxClasses } from './checkbox.styles';

export interface ICheckboxProps {
    /**
     * Specifies options
     */
    options?: string[];
    /**
     * Label message to show above the group of checkboxes
     */
    label?: string;
    /**
     * The name property of all input[type="checkbox"] children
     */
    name?: string;
    /**
     * Used for setting the currently selected values
     * All values in the array will be marked selected
     */
    selectedValues?: string[];
    /**
     * The callback function that is triggered when the state changes
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: ICheckboxClasses;
    style?: {
        /**
         * Wraps the whole Checkbox component
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
