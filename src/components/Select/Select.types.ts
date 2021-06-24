interface ISelectOption {
    value: string;
    label: string;
}

export interface ISelectProps {
    options: ISelectOption[];
    name?: string;
    autoFocus?: boolean;
    closeMenuOnSelect?: boolean;
    value?: ISelectOption;
    isLoading?: boolean;
    isDisabled?: boolean;
    menuIsOpen?: boolean;
    isMulti?: boolean;
    defaultValue?: ISelectOption;
    onChange?: (option: ISelectOption) => void;
}
