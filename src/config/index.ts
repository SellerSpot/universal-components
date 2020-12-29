export const cssColors = {
    '--default-background-color': '#eeeeee',
    '--default-border-color': '#c0bebe',
    /* mood colors */
    '--success-color': '#4caf50',
    '--success-accent-color': '#D9F7DA',
    '--warning-color': '#ffc107',
    '--warning-accent-color': '#FFFFE6',
    '--danger-color': '#f44336',
    '--danger-accent-color': '#ffdee3',
    '--info-color': '#2196F3',
    '--info-accent-color': '#CCEFFC',
    '--disabled-color': '#ebebe4',
    /* used as overlay backgrounds */
    '--overlay-color': 'rgb(0, 0, 0, 0.5)',
    /* input colors */
    '--input-background-color': '#ffffff',
    '--input-border-color': '#909090',
    '--input-focus-border-color': '#000000',
    /* font colors */
    '--primary-font-color': '#000000',
    '--secondary-font-color': '#808080',
    '--tertiary-font-color': '#a0a0a0',
    '--light-font-color': '#ffffff',
    /* card backgrounds */
    '--primary-background-color': '#ffffff',
    /* page background */
    '--secondary-background-color': '#f3f4f6',
    /* table header" background selected tab */
    '--tertiary-background-color': '#e6e6e6',
};

export const cssVariables = {
    '--border-radius': '0.2rem',
    /* font-sizes */
    '--font-size-extra-large': '36px',
    '--font-size-master': '26px',
    '--font-size-master-sub': '24px',
    '--font-size-header': '20px',
    '--font-size-small-heading': '18px',
    '--font-size-default': '16px',
    '--font-size-secondary': '14px',
    '--font-size-tertiary': '12px',
    /* animation-properties */
    '--transition-duration': '0.3s',
    /* size-properties */
    '--input-field-height': '40px',
    '--input-field-small-height': '20px',
    /* z-index values */
    '--z-index-notify': '10',
    '--z-index-confirm-dialog': '6',
    '--z-index-slider-modal': '5',
    '--z-index-tab-bar': '4',
    '--z-index-dropdown': '3',
    '--z-index-table-header': '2',
    /* div-values */
    '--shadow-style': '0px 0px 3px 0px var(--shadow-color)',
};

export type TMajorColors = 'success' | 'danger' | 'warning' | 'info';
