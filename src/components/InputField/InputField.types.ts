import { ReactElement, ChangeEvent } from 'react';
import { IColors, IFontSizes, TMuiThemes } from '../../theme';

export interface IInputFieldProps {
    id?: string;
    name?: string;
    value?: string;
    label?: string;
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
    suffix?: ReactElement | string | number;
    prefix?: ReactElement | string | number;
    size?: 'medium' | 'small';
    fullWidth?: boolean;
    /**
     * Direction of text input
     */
    direction?: 'ltr' | 'rtl';
    placeHolder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Toggle to control if the inputField content should be selected on click
     */
    selectTextOnClick?: boolean;
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
}
