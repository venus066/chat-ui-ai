import React, { useEffect, useState } from "react";

// costants
import { LAYOUT_MODES } from "../../constants/index";

// utils
import { changeBodyAttribute } from "../../utils/index";

// components
import SideMenu from "./SideMenu";

interface IndexProps {
  children: any;
}
const Index = (props: IndexProps) => {

  // theme mode handeling
  const [themeMode, setThemeMode] = useState<LAYOUT_MODES.DARK | LAYOUT_MODES.LIGHT>(LAYOUT_MODES.LIGHT);
  const onChangeMode = () => {
    let mode = themeMode;
    if (mode === LAYOUT_MODES.LIGHT) {
      setThemeMode(LAYOUT_MODES.DARK);
    } if (mode === LAYOUT_MODES.DARK) {
      setThemeMode(LAYOUT_MODES.LIGHT);
    }
  };
  useEffect(() => {
    changeBodyAttribute("data-layout-mode", themeMode);
  }, [themeMode]);

  return (
    <div className="layout-wrapper d-lg-flex">

      {/* side menu */}
      <SideMenu themeMode={themeMode} onChangeMode={onChangeMode} />

      {props.children}
    </div>
  );
};

export default Index;
