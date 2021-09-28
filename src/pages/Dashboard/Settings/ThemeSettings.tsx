import React, { useEffect, useState } from 'react';
import classnames from "classnames";

// interface
import { ThemeTypes } from "../../../data/settings";

// components
import ThemeColor from "./ThemeColor";
import ThemeImage from './ThemeImage';

interface ThemeSettingsProps {
    theme: ThemeTypes;
}
const ThemeSettings = ({ theme }: ThemeSettingsProps) => {

    return (
        <div className="accordion-body">
            <ThemeColor theme={theme} />


            <ThemeImage theme={theme} />
        </div>
    );
};

export default ThemeSettings;