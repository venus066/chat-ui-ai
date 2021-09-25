import React from "react";

// simplebar
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

interface AppSimpleBarProps {
  children: any;
  style?: object;
  className?: string;
}
const AppSimpleBar = ({ children, style, className }: AppSimpleBarProps) => {
  return (
    <SimpleBar style={style} className={className}>
      {children}
    </SimpleBar>
  );
};

export default AppSimpleBar;
