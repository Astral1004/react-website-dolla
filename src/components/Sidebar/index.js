import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap,SidebarRoute} from "./SidebarElements";
import {NavLinks} from "../Navbar/NavbarElements";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = 'about'>About</SidebarLink>
                    <SidebarLink to = 'discover'>Discover</SidebarLink>
                    <SidebarLink to = 'services'>Services</SidebarLink>
                    <SidebarLink to='signup'>Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};



export default Sidebar;