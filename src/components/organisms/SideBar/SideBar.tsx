import React from 'react';
import { Backdrop } from '../../molecules/Backdrop/Backdrop';
import { SideMenuList } from '../../molecules/SideMenuList/SideMenuList';
import styled from 'styled-components';

const Wrapper = styled.aside``;

export interface SideBarProps {
    showMenu: boolean;
    setShowMenu: any;
}

export const SideBar: React.FC<SideBarProps> = ({ showMenu, setShowMenu }) => {
    return (
        <Wrapper>
            <SideMenuList showMenu={showMenu} setShowMenu={setShowMenu} />
            <Backdrop showMenu={showMenu} setShowMenu={setShowMenu} />
        </Wrapper>
    );
};

