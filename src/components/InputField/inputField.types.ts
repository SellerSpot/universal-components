import { IGetInputFieldClasses } from './inputField.styles';

export interface IInputFieldProps {
    /**
     * Used by formik to auto-detect the field name when used for validation
     */
    name?: string;
    /**
     * Title field for tooltip purposes
     */
    title?: string;
    /**
     * Placeholder inside the inputField
     */
    placeHolder?: string;
    /**
     * Label to appear above the inputField
     */
    label?: string;
    /**
     * Label to appear below the inputField
     */
    helperText?: string;
    /**
     * Allow or Disallow user from editing the inputField
     */
    disabled?: boolean;
    /**
     * Value to show in the inputField
     */
    value?: string;
    /**
     * Type of data to be allowed in the inputField
     */
    type?: 'number' | 'text' | 'email' | 'password';
    /**
     * Preset sizes for the inputField
     * @options
     * compact - no borders, smaller text size (to be used inside tables and other mini-inputs)
     * default - default input height
     */
    size?: 'compact' | 'default';
    /**
     * Component to show in front of the inputField
     */
    prefix?: JSX.Element;
    /**
     * Component to show after the inputField
     */
    suffix?: JSX.Element;
    /**
     * Shows '*' after label to indicate the field is required
     */
    required?: boolean;
    /**
     * Error message and error visibility flag
     */
    error?: {
        showError: boolean;
        errorMessage: string;
    };
    /**
     * If the inputField value must be auto selected when the inputField is tapped on
     */
    selectTextOnFocus?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    style?: {
        /**
         * Handles styling for the whole InputField component (label+prefix+<input>+suffix+helper)
         */
        inputFieldOverallWrapper?: React.CSSProperties;
        /**
         * Handles styling for the label above the inputField
         */
        label?: React.CSSProperties;
        /**
         * Handles styling for the helper text below the inputField
         */
        helperLabel?: React.CSSProperties;
        /**
         * Handles styling for the REQUIRED '*' shown if the required prop is set to true
         */
        requiredSpan?: React.CSSProperties;
        /**
         * Handles styling for the inputField Wrapper (prefix+input+suffix)
         */
        inputWrapperDiv?: React.CSSProperties;
        /**
         * Handles styling for the inputField prefix wrapper
         */
        prefixWrapper?: React.CSSProperties;
        /**
         * Handles styling for the inputField suffix wrapper
         */
        suffixWrapper?: React.CSSProperties;
        /**
         * Handles styling for the inputField <input> component specifically
         * @warning - This styling only affects the input field and the other components cannot react to any breaking changes (like changing height - which should be done using the inputWrapperDiv style prop)
         */
        input?: React.CSSProperties;
    };
    className?: IGetInputFieldClasses;
    /**
     * It gives the direction of user input flow, starts from tabindex 0
     * @default
     * undefined
     */
    tabIndex?: number;
}
