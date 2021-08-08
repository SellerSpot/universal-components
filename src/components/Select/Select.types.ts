import { ISelectOption } from '../../typings/common.types';

export interface ISelectProps {
    options: ISelectOption[];
    name?: string;
    label?: string;
    helperMessage?: {
        enabled: boolean;
        content?: string;
        type?: 'error' | 'message';
    };
    isClearable?: boolean;
    autoFocus?: boolean;
    closeMenuOnSelect?: boolean;
    value?: ISelectOption | ISelectOption;
    isLoading?: boolean;
    isDisabled?: boolean;
    menuIsOpen?: boolean;
    isMulti?: boolean;
    defaultValue?: ISelectOption;
    onChange?: (option: ISelectOption | ISelectOption[]) => void;
}
