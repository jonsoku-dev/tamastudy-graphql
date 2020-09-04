import React, { useState } from 'react';
import { SideBar } from '../../organisms/SideBar/SideBar';
import { Face, Menu } from '@material-ui/icons';
import styled, { css } from 'styled-components';
import { mq } from '../../../styles/mq';
import { Typography } from '../../atoms/Typography/Typography';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    ${mq('dt')`
        width: 640px;
        margin: 0 auto;
    `};
    ${({ theme }) => css`
        grid-template-rows:
            ${theme.appHeader}
            minmax(calc(100vh - ${theme.appHeader} - ${theme.appFooter}), 1fr)
            ${theme.appFooter};
    `};
`;

const Top = styled.div`
    width: 100%;
    height: 48px;
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    align-items: center;
    justify-items: center;
    > div {
        display: flex;
        align-items: center;
        > svg {
            font-size: 2rem;
            cursor: pointer;
        }
    }
`;

const Middle = styled.div``;

const Bottom = styled.div`
    font-size: 1rem;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

export interface PageLayoutProps {
    title: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
            <Wrapper>
                <Top>
                    <div onClick={() => setShowMenu(true)}>
                        <Menu />
                    </div>
                    <Typography>{title}</Typography>
                    <div>
                        <Face />
                    </div>
                </Top>
                <Middle>{children}</Middle>
                <Bottom>ⓒ Tama Corp.</Bottom>
            </Wrapper>
        </>
    );
};
