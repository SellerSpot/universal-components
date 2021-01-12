import { css } from '@emotion/css';

export interface ICheckboxClasses {
    checkboxGroupWrapper: string;
}

export const getCheckboxClasses = (): ICheckboxClasses => {
    return {
        checkboxGroupWrapper: css`
            height: 100%;
            width: 100%;
            background-color: red;
        `,
    };
};
