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
    onChange?: (checkedValue: string) => void;
}
