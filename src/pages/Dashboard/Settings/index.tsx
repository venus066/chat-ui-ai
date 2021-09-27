import React, { useState, useEffect } from "react";
import { Button, Collapse } from "reactstrap";
import classnames from "classnames";

//redux
import { useSelector, useDispatch } from "react-redux";

// components
import Loader from "../../../components/Loader";
import AppSimpleBar from "../../../components/AppSimpleBar";
import UserCoverImage from "./UserCoverImage";

// actions
import { getSettings } from "../../../redux/actions";
import UserProfile from "./UserProfile";
import PersonalInfo from "./PersonalInfo";
import ThemeSettings from "./ThemeSettings";
import Privacy from "./Privacy";
import Security from "./Security";
import Help from "./Help";

// constants
import { SETTINGS_COLLAPSES } from "../../../constants";
interface CollapseItemTypes {
  value: SETTINGS_COLLAPSES.PROFILE | SETTINGS_COLLAPSES.HELP | SETTINGS_COLLAPSES.PRIVACY | SETTINGS_COLLAPSES.SECURITY | SETTINGS_COLLAPSES.THEME;
  label: string;
  icon: string;
  component: any;
}

interface AccordianItemProps {
  item: CollapseItemTypes;
  onChange: (id: null | SETTINGS_COLLAPSES.PROFILE | SETTINGS_COLLAPSES.HELP | SETTINGS_COLLAPSES.PRIVACY | SETTINGS_COLLAPSES.SECURITY | SETTINGS_COLLAPSES.THEME) => void;
  selectedMenu: null | SETTINGS_COLLAPSES.PROFILE | SETTINGS_COLLAPSES.HELP | SETTINGS_COLLAPSES.PRIVACY | SETTINGS_COLLAPSES.SECURITY | SETTINGS_COLLAPSES.THEME;
}
const AccordianItem = ({ item, selectedMenu, onChange }: AccordianItemProps) => {

  const isOpen: boolean = selectedMenu && selectedMenu === item.value ? true : false;
  const toggleCollapse = () => {
    if (isOpen) {
      onChange(null);
    } else {
      onChange(item.value);
    }
  };
  return (
    <div className="accordion-item">
      <div className="accordion-header" id="headerpersonalinfo">
        <Button color="none" className={classnames("accordion-button", "font-size-14", "fw-medium", { "collapsed": !isOpen })}
          onClick={toggleCollapse} type="button"
        >
          <i className={classnames("text-muted", "me-3", item.icon)}></i> {item.label}
        </Button>
      </div>
      <Collapse isOpen={isOpen} id="personalinfo" className="accordion-collapse" aria-labelledby="headerpersonalinfo" data-bs-parent="#settingprofile">
        {item.component}
      </Collapse>
    </div>
  );
};
interface IndexProps { }
const Index = (props: IndexProps) => {
  const dispatch = useDispatch();

  const { settings, getSettingsLoading, isSettingsFetched } = useSelector(
    (state: any) => ({
      settings: state.Settings.settings,
      getSettingsLoading: state.Profile.getSettingsLoading,
      isSettingsFetched: state.Profile.isSettingsFetched,
    })
  );

  // get user settings
  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

  /*
  collapse handeling
  */
  const [selectedMenu, setSelectedMenu] = useState<
    null | SETTINGS_COLLAPSES.PROFILE | SETTINGS_COLLAPSES.HELP | SETTINGS_COLLAPSES.PRIVACY | SETTINGS_COLLAPSES.SECURITY | SETTINGS_COLLAPSES.THEME
  >(SETTINGS_COLLAPSES.PROFILE);

  const collapseItems: CollapseItemTypes[] = [
    {
      value: SETTINGS_COLLAPSES.PROFILE,
      label: "Personal Info",
      icon: "bx bxs-user",
      component: <PersonalInfo basicDetails={settings.basicDetails} />,
    },
    {
      value: SETTINGS_COLLAPSES.THEME,
      label: "Themes",
      icon: "bx bxs-adjust-alt",
      component: <ThemeSettings theme={settings.theme} />
    },
    {
      value: SETTINGS_COLLAPSES.PRIVACY,
      label: "Privacy",
      icon: "bx bxs-lock",
      component: <Privacy privacy={settings.privacy} />
    },
    {
      value: SETTINGS_COLLAPSES.SECURITY,
      label: "Security",
      icon: "bx bxs-check-shield",
      component: <Security security={settings.security} />
    },
    {
      value: SETTINGS_COLLAPSES.HELP,
      label: "Help",
      icon: "bx bxs-help-circle",
      component: <Help />
    },
  ];

  const onChangeCollapse = (id: null | SETTINGS_COLLAPSES.PROFILE | SETTINGS_COLLAPSES.HELP | SETTINGS_COLLAPSES.PRIVACY | SETTINGS_COLLAPSES.SECURITY | SETTINGS_COLLAPSES.THEME) => {
    setSelectedMenu(id);
  };

  return <div className="position-relative">
    {getSettingsLoading && <Loader />}
    <UserCoverImage basicDetails={settings.basicDetails} />

    <UserProfile basicDetails={settings.basicDetails} />
    {/* Start User profile description */}
    <AppSimpleBar className="user-setting" >
      <div id="settingprofile" className="accordion accordion-flush">
        {
          (collapseItems || []).map((item: CollapseItemTypes, key: number) =>
            <AccordianItem item={item} key={key} selectedMenu={selectedMenu} onChange={onChangeCollapse} />
          )
        }
      </div>
      {/* end profile-setting-accordion */}
    </AppSimpleBar>
  </div>;
};

export default Index;
