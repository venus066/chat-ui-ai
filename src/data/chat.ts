import { STATUS_TYPES } from "../constants";

import { contacts } from "./contacts";
export interface UserTypes {
  id: string | number;
  firstName: string;
  lastName: string;
  profileImage?: any;
  status?: STATUS_TYPES;
  meta?: {
    unRead?: number;
    status?: STATUS_TYPES;
  };
}
const favourites: Array<UserTypes> = [
  {
    ...contacts[4],
    meta: {
      unRead: 3,
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    ...contacts[5],
    meta: {
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    ...contacts[6],
  },
  {
    ...contacts[7],
    meta: {
      status: STATUS_TYPES.ACTIVE,
    },
  },
];

let directMessages: Array<UserTypes> = [
  {
    ...contacts[16],
  },
  {
    ...contacts[17],
  },
  {
    ...contacts[8],
    meta: {
      unRead: 5,
    },
  },
  {
    ...contacts[18],
  },
  {
    ...contacts[3],
  },
  {
    ...contacts[11],
  },
];

const onChangeDirectMessages = (newData: Array<UserTypes>) => {
  directMessages = newData;
};
export interface ChannelTypes {
  id: number;
  name: string;
  meta?: {
    unRead: number;
  };
}
let channels: Array<ChannelTypes> = [
  {
    id: 1,
    name: "Landing Design",
    meta: {
      unRead: 12,
    },
  },
  {
    id: 2,
    name: "Design Phase 2",
  },
  {
    id: 3,
    name: "Brand Suggestion",
    meta: {
      unRead: 85,
    },
  },
  {
    id: 4,
    name: "Reporting",
  },
];

const onChangeChannels = (newData: Array<ChannelTypes>) => {
  channels = newData;
};

export interface PinTypes {
  id: number;
  title: string;
  desc: string;
  icon: string;
}
const pinnedTabs: Array<PinTypes> = [
  {
    id: 1,
    title: "design-phase-1-approved.pdf",
    desc: "12.5 MB",
    icon: "bx bx-file",
  },
  {
    id: 2,
    title: "Bg Pattern",
    desc: "https://bgpattern.com/",
    icon: "bx bx-pin",
  },
  {
    id: 3,
    title: "Image-001.jpg",
    desc: "4.2 MB",
    icon: "bx bx-image",
  },
  {
    id: 4,
    title: "Images",
    desc: "https://images123.com/",
    icon: "bx bx-file",
  },
  {
    id: 5,
    title: "Bg Gradient",
    desc: "https://bggradient.com/",
    icon: "bx bx-pin",
  },
  {
    id: 6,
    title: "Image-012.jpg",
    desc: "3.1 MB",
    icon: "bx bx-image",
  },
  {
    id: 7,
    title: "analytics dashboard.zip",
    desc: "6.7 MB",
    icon: "bx bx-image",
  },
  {
    id: 8,
    title: "Bg Gradient",
    desc: "https://bggradient.com/",
    icon: "bx bx-file",
  },
  {
    id: 9,
    title: "Image-012.jpg",
    desc: "3.1 MB",
    icon: "bx bx-pin",
  },
  {
    id: 10,
    title: "analytics dashboard.zip",
    desc: "6.7 MB",
    icon: "bx bx-pin",
  },
];
export {
  favourites,
  directMessages,
  channels,
  onChangeDirectMessages,
  onChangeChannels,
  pinnedTabs,
};
