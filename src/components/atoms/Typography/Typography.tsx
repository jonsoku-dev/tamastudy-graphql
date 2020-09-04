import React, { ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Container = styled.div<TypographyProps>`
    ${(p) => p.theme.typography[p.variant ?? 'body2']};
    color: ${(p) => (p.color ? p.color : 'black')};
`;

export interface TypographyProps {
    variant?: 'title' | 'desc' | 'mainMenu' | 'subMenu' | 'common';
    color?: string;
    tag?: ElementType;
    display?: 'initial' | 'block' | 'inline';
    children?: ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ tag, variant = 'common', children, ...props }) => {
    const typoStyles = theme.typography[variant];
    return (
        <Container as={tag} style={typoStyles} {...props}>
            {children}
        </Container>
    );
};
