import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import CachedIcon from '@material-ui/icons/Cached';

export interface ButtonProps {
    /**
     * 버튼의 모드
     */
    mode?: 'primary' | 'danger' | 'success' | 'warning';
    /**
     * 버튼색상
     */
    backgroundColor?: string;
    /**
     * 버튼 글자 크기
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 버튼 내부 스트링
     */
    label: string;
    /**
     * 온클릭함수
     */
    onClick?: () => void;
    className?: string;
    loading?: boolean;
    disabled?: boolean;
}

const Wrapper = styled.button<{
    backgroundColor?: ButtonProps['backgroundColor'];
    mode: ButtonProps['mode'];
    size: ButtonProps['size'];
    disabled: ButtonProps['disabled'];
    loading: ButtonProps['loading'];
}>`
    background-color: ${(p) => p.backgroundColor};
    border-radius: 8px;
    box-sizing: border-box;
    padding: 0.6em 1.2em;
    display: flex;
    align-items: center;
    ${(p) => {
        if (p.mode === 'primary') {
            return p.theme.buttons.primary;
        } else if (p.mode === 'danger') {
            return p.theme.buttons.danger;
        } else if (p.mode === 'success') {
            return p.theme.buttons.success;
        } else if (p.mode === 'warning') {
            return p.theme.buttons.warning;
        }
    }};
    ${(p) => {
        if (p.size === 'small') {
            return p.theme.fonts.small;
        } else if (p.size === 'medium') {
            return p.theme.fonts.medium;
        } else if (p.size === 'large') {
            return p.theme.fonts.large;
        }
    }};
    ${(t) =>
        t.disabled &&
        css`
            background-color: #cccccc;
            color: #666666;
            pointer-events: none;
        `};
    ${(t) =>
        t.loading &&
        css`
            pointer-events: none;
        `};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const IconBox = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${rotate} 2s linear infinite;
    margin-right: 8px;
`;

/**
 * 버튼 입니다.
 */
export const Button: React.FC<ButtonProps> = ({
    mode = 'primary',
    size = 'medium',
    backgroundColor,
    className,
    label,
    loading = false,
    disabled = false,
    ...props
}) => {
    return (
        <Wrapper
            type="button"
            mode={mode}
            size={size}
            backgroundColor={backgroundColor}
            className={className}
            disabled={disabled}
            loading={loading}
            {...props}
        >
            {loading && (
                <IconBox>
                    <CachedIcon />
                </IconBox>
            )}
            {label}
        </Wrapper>
    );
};
