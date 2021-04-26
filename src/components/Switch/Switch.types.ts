import { IColors, IFontSizes, TMuiThemes } from '../../theme';

export interface ISwitchProps {
    /**
     * Toggles the selected state
     */
    checked?: boolean;
    /**
     * function(event: object) => void
     * @props event: The event source of the callback. You can pull out the new value by accessing
     * @accessing event.target.value (string).
     * event.target.checked (boolean).
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    theme?: keyof TMuiThemes;
    size?: 'small' | 'medium';
    fontSizes?: IFontSizes;
    colors?: IColors;
}
