import React, { ReactElement } from 'react';
import { Button } from 'components/Button/Button';
import styled from 'styled-components';
import { cssColors, cssVariables } from 'components/config';
import lodash from 'lodash';

export interface IConfirmDialogProps {
    active?: boolean;
    title?: JSX.Element;
    content?: JSX.Element;
    footer?: JSX.Element;
    style?: React.CSSProperties;
}

export const ConfirmDialog = (props: IConfirmDialogProps): ReactElement => {
    const defaultProps: IConfirmDialogProps = {
        title: <p style={{ fontSize: cssVariables['--font-size-header'] }}>Sample Header</p>,
        content: <div style={{ width: '100%', height: '50px' }}>This is sample content</div>,
        footer: (
            <div>
                <Button label={'One Step from Success'} />
                <Button label={'Success'} />
            </div>
        ),
    };

    const requiredProps = lodash.merge(defaultProps, props);

    const ConfirmDialogWrapper = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${cssVariables['--z-index-confirm-dialog']};
        overflow: hidden;
        transition: background-color 0.2s ease-in-out 0s;
        visibility: ${requiredProps.active ? 'visible' : 'hidden'};
        background: ${requiredProps.active ? cssColors['--overlay-color'] : 'transparent'};
    `;

    const ConfirmDialogContentWrapper = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.2s ease-in-out 0s;
        opacity: ${requiredProps.active ? 1 : 0};
    `;

    const Content = styled.div`
        position: relative;
        width: 40%;
        height: 160px;
        background-color: ${cssColors['--primary-background-color']};
        border: 1px solid ${cssColors['--primary-background-color']};
        box-shadow: ${cssVariables['--shadow-style']};
        border-radius: ${cssVariables['--border-radius']};
        padding: 20px;
        padding-bottom: 10px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 30px 1fr 30px;
        row-gap: 10px;
    `;

    return (
        <ConfirmDialogWrapper>
            <ConfirmDialogContentWrapper>
                <Content>
                    {requiredProps.title}
                    {requiredProps.content}
                    {requiredProps.footer}
                </Content>
            </ConfirmDialogContentWrapper>
        </ConfirmDialogWrapper>
    );
};
