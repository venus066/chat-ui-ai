import avatar1 from "../assets/images/users/avatar-1.jpg";
import img4 from "../assets/images/small/img-4.jpg";
import pattern05 from "../assets/images/bg-pattern/pattern-04.png";
import { DISPLAY_TYPES } from "../constants";

export interface BasicDetailsTypes {
    firstName: string;
    lastName: string;
    profile: string;
    coverImage: string;
    email: string;
    location: string;
}

export interface ThemeTypes {
    color: string;
    image: string;
}
export interface PrivacyTypes {
    displayprofilePhoto: string;
    displayLastSeen: boolean;
    displayStatus: DISPLAY_TYPES.EVERYONE | DISPLAY_TYPES.SELECTED | DISPLAY_TYPES.EVERYONE;
    readReceipts: boolean;
    displayGroups: DISPLAY_TYPES.EVERYONE | DISPLAY_TYPES.SELECTED | DISPLAY_TYPES.EVERYONE;
}
export interface SecurityTypes {
    securityNotification: boolean;
}

export interface SettingsTypes {
    basicDetails: BasicDetailsTypes;
    theme: ThemeTypes;
    privacy: PrivacyTypes;
    security: SecurityTypes;
}

let settings: SettingsTypes = {
    basicDetails: {
        firstName: "Kathryn",
        lastName: "Swarey",
        profile: avatar1,
        coverImage: img4,
        email: "adc@123.com",
        location: "California, USA"
    },
    theme: {
        color: "78, 172, 109",
        image: pattern05,
    },
    privacy: {
        displayprofilePhoto: "selected",
        displayLastSeen: true,
        displayStatus: DISPLAY_TYPES.EVERYONE,
        readReceipts: true,
        displayGroups: DISPLAY_TYPES.EVERYONE
    },
    security: {
        securityNotification: false
    }
};

const onChangeSettings = (newSettings: SettingsTypes) => {
    settings = newSettings;
};

export { settings, onChangeSettings };