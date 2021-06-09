import { ReactElement, ChangeEvent } from 'react';
import { IColors, IFontSizes, TMuiThemes } from '../../theme/theme';

export interface IInputFieldProps {
    id?: string;
    name?: string;
    className?: string;
    value?: string;
    label?: string;
    variant?: 'outlined' | 'filled' | 'standard';
    type?: 'text' | 'password' | 'number' | 'email';
    /**
     * Preset themes
     */
    theme?: keyof TMuiThemes;
    /**
     * Maximum value incase of numeric input
     */
    maxNumericValue?: number;
    /**
     * Minimum value incase of numeric input
     */
    minNumericValue?: number;
    /**
     * Maximum length for text
     */
    maxLength?: number;
    /**
     * If the default padding to serve as placeholder for helper text should be disabled
     */
    disableHelperTextPlaceholderPadding?: boolean;
    suffix?: ReactElement | string | number;
    prefix?: ReactElement | string | number;
    size?: 'medium' | 'small';
    multiline?: boolean;
    /**
     * Number of rows if the multiline option is set to true.
     */
    rows?: number;
    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    maxRows?: number;
    disableAutoComplete?: boolean;
    onKeyDown?: (key: React.KeyboardEvent<HTMLDivElement>) => void;
    fullWidth?: boolean;
    /**
     * Direction of text input
     */
    direction?: 'ltr' | 'rtl';
    placeHolder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Toggle to control if the inputField content should be selected on click
     */
    selectTextOnFocus?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    helperMessage?: {
        enabled: boolean;
        content?: string;
        type?: 'loading' | 'success' | 'error' | 'warning' | 'none';
    };
    colors?: IColors;
    fontSizes?: IFontSizes;
    tabIndex?: number;
}
