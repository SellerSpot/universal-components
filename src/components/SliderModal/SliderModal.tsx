import React, { ReactElement, useEffect, useState } from 'react';
import styles from './SliderModal.module.scss';
import { ISliderModalProps } from './SliderModal.types';
export { ISliderModalProps } from './SliderModal.types';
import cn from 'classnames';

export const SliderModal = (props: ISliderModalProps): ReactElement => {
    const { show } = props;

    return (
        <div className={cn(styles.backdrop, { [styles.backdropShow]: show })}>
            <div className={cn(styles.sliderModal, { [styles.sliderModalShow]: show })}></div>
        </div>
    );
};
