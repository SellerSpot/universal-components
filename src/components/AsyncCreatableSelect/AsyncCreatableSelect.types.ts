import { ISelectOption } from '../../typings/common.types';

export interface IAsyncCreatableSelectProps {
    defaultOptions?: ISelectOption[];
    loadOptions: (value: string) => Promise<ISelectOption[]>;
    name?: string;
    autoFocus?: boolean;
    formatCreateLabel?: (inputValue: string) => string;
    onCreateOption?: (option: string) => void;
    closeMenuOnSelect?: boolean;
    value?: ISelectOption;
    isLoading?: boolean;
    isDisabled?: boolean;
    menuIsOpen?: boolean;
    isMulti?: boolean;
    defaultValue?: ISelectOption;
    onChange?: (option: ISelectOption) => void;
}
