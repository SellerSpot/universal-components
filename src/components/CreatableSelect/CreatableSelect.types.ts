interface ICreatableSelectOption {
    value: string;
    label: string;
}

export interface ICreatableSelectProps {
    options: ICreatableSelectOption[];
    name?: string;
    autoFocus?: boolean;
    label?: string;
    helperMessage?: {
        enabled: boolean;
        content?: string;
        type?: 'error' | 'message';
    };
    formatCreateLabel?: (inputValue: string) => string;
    onCreateOption?: (option: string) => void;
    closeMenuOnSelect?: boolean;
    value?: ICreatableSelectOption;
    isLoading?: boolean;
    isDisabled?: boolean;
    menuIsOpen?: boolean;
    isMulti?: boolean;
    defaultValue?: ICreatableSelectOption;
    onChange?: (option: ICreatableSelectOption) => void;
}
