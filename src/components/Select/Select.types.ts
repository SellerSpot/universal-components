interface ISelectOption {
    value: string;
    label: string;
}

export interface ISelectProps {
    options: ISelectOption[];
    name?: string;
    label?: string;
    helperMessage?: {
        enabled: boolean;
        content?: string;
        type?: 'error' | 'message';
    };
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
