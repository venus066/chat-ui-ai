import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, UncontrolledTooltip } from 'reactstrap';

// redux
import { useSelector, useDispatch } from "react-redux";

// actions
import { changeTab } from "../../redux/actions";

// costants
import { LAYOUT_MODES, TABS } from "../../constants/index";

//images
import avatar1 from "../../assets/images/users/avatar-1.jpg";

// menu
import { MENU_ITEMS, MenuItemType } from "./menu";

const LogoLightSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M8.5,18l3.5,4l3.5-4H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2H8.5z M7,7h10v2H7V7z M7,11h7v2H7V11z" /></svg>
    );
};

const LogoDarkSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M8.5,18l3.5,4l3.5-4H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2H8.5z M7,7h10v2H7V7z M7,11h7v2H7V11z" /></svg>
    );
};

const Logo = () => {
    return (
        <div className="navbar-brand-box">
            <Link to="#" className="logo logo-dark">
                <span className="logo-sm">
                    <LogoLightSVG />
                </span>
            </Link>

            <Link to="#" className="logo logo-light">
                <span className="logo-sm">
                    <LogoDarkSVG />
                </span>
            </Link>
        </div>
    );
};

interface MenuNavItemProps {
    item: MenuItemType;
    selectedTab: TABS.BOOKMARK | TABS.CALLS | TABS.CHAT | TABS.CONTACTS | TABS.SETTINGS | TABS.USERS;
    onChangeTab: (id: TABS.BOOKMARK | TABS.CALLS | TABS.CHAT | TABS.CONTACTS | TABS.SETTINGS | TABS.USERS) => void;
}
const MenuNavItem = ({ item, selectedTab, onChangeTab }: MenuNavItemProps) => {

    const onClick = () => {
        onChangeTab(item.tabId);
    };
    return (
        <>
            <NavItem className={item.className} id={`${item.key}-container`}>
                <NavLink active={selectedTab === item.tabId} id={item.key} role="tab" onClick={onClick}>
                    <i className={item.icon}></i>
                </NavLink>
            </NavItem>
            <UncontrolledTooltip target={`${item.key}-container`} placement="right">
                {item.tooltipTitle}
            </UncontrolledTooltip>
        </>
    );
};

interface ThemeModeChangerProps {
    themeMode: LAYOUT_MODES.DARK | LAYOUT_MODES.LIGHT;
    onChangeMode: () => void;
}
const ThemeModeChanger = ({ themeMode, onChangeMode }: ThemeModeChangerProps) => {

    const onClick = () => {
        onChangeMode();
    };
    return (
        <NavItem className="mt-auto" id="color-mode">
            <NavLink className="nav-link light-dark" onClick={onClick}>
                <i className='bx bx-moon'></i>
            </NavLink>
            <UncontrolledTooltip placement="right" target="color-mode">
                <span className='light-mode'>Light</span>
                <span className='dark-mode'>Dark</span> Mode
            </UncontrolledTooltip>
        </NavItem>
    );
};

const ProfileDropdownMenu = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <Dropdown nav isOpen={dropdownOpen} className="profile-user-dropdown" toggle={toggle}>
            <DropdownToggle nav className="bg-transparent">
                <img src={avatar1} alt="" className="profile-user rounded-circle" />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem className="d-flex align-items-center justify-content-between">Profile <i className="bx bx-user-circle text-muted ms-1"></i></DropdownItem>
                <DropdownItem className="d-flex align-items-center justify-content-between">Setting <i className="bx bx-cog text-muted ms-1"></i></DropdownItem>
                <DropdownItem className="d-flex align-items-center justify-content-between" href="/auth-changepassword">Change Password <i className="bx bx-lock-open text-muted ms-1"></i></DropdownItem>

                <DropdownItem />
                <DropdownItem className="d-flex align-items-center justify-content-between" href="/logout">Log out <i className="bx bx-log-out-circle text-muted ms-1"></i></DropdownItem>

            </DropdownMenu>
        </Dropdown>
    );
};
interface SideMenuProps {
    themeMode: LAYOUT_MODES.DARK | LAYOUT_MODES.LIGHT;
    onChangeMode: () => void;
}
const SideMenu = ({ themeMode, onChangeMode }: SideMenuProps) => {
    const dispatch = useDispatch();
    const menuItems: MenuItemType[] = MENU_ITEMS;
    const { activeTab } = useSelector(
        (state: any) => ({
            activeTab: state.Layout.activeTab,
        })
    );

    /* 
    tab activation
    */
    const [selectedTab, setSelectedTab] = useState<TABS.BOOKMARK | TABS.CALLS | TABS.CHAT | TABS.CONTACTS | TABS.SETTINGS | TABS.USERS>(TABS.CHAT);
    const onChangeTab = (id: TABS.BOOKMARK | TABS.CALLS | TABS.CHAT | TABS.CONTACTS | TABS.SETTINGS | TABS.USERS) => {
        setSelectedTab(id);
        dispatch(changeTab(id));
    };

    useEffect(() => {
        setSelectedTab(activeTab);
    }, [activeTab]);

    return (
        <div className="side-menu flex-lg-column">

            {/* LOGO */}
            <Logo />
            {/* end navbar-brand-box */}

            {/* Start side-menu nav */}
            <div className="flex-lg-column my-0 sidemenu-navigation">
                <Nav pills className="side-menu-nav" role="tablist">

                    {
                        (menuItems || []).map((item: MenuItemType, key: number) =>
                            <MenuNavItem
                                item={item}
                                key={key}
                                selectedTab={selectedTab}
                                onChangeTab={onChangeTab}
                            />
                        )
                    }

                    {/* change mode */}
                    <ThemeModeChanger themeMode={themeMode} onChangeMode={onChangeMode} />

                    {/* profile menu dropdown */}
                    <ProfileDropdownMenu />
                </Nav>
            </div>
            {/* end side-menu nav */}
        </div>
    );
};

export default SideMenu;