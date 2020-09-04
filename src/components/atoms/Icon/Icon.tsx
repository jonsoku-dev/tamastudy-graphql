import React from 'react';
import styled, { css } from 'styled-components';
import { rotate } from '../../../styles/rotate';

const Wrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${rotate('left')} 2s linear infinite;
    ${({ theme }) => css`
        margin-right: ${theme.space}px;
        margin-left: -${theme.space / 2}px;
    `}
`;

export interface IconProps {}

export const Icon: React.FC<IconProps> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Icon;
