import avatar3 from "../assets/images/users/avatar-3.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
import avatar7 from "../assets/images/users/avatar-7.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import avatar10 from "../assets/images/users/avatar-10.jpg";
import { STATUS_TYPES } from "../constants";

export interface UserTypes {
  id: string | number;
  firstName: string;
  lastName: string;
  profileImage?: any;
  meta?: {
    unRead?: number;
    status?: STATUS_TYPES;
  };
}
const favourites: Array<UserTypes> = [
  {
    id: "614ecab4ac946a9bdafa4e3b",
    firstName: "Marguerite",
    lastName: "Campbell",
    profileImage: avatar4,
    meta: {
      unRead: 3,
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    id: "614ecab41f60c4fdffe639c8",
    firstName: "Katrina",
    lastName: "Winters",
    profileImage: avatar3,
    meta: {
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    id: "614ecab400931b0aba9d0d76",
    firstName: "Miranda",
    lastName: "Valentine",
  },
  {
    id: "614ecab4c2a5e35f32f78659",
    firstName: "Faulkner",
    lastName: "Benjamin",
    profileImage: avatar5,
    meta: {
      status: STATUS_TYPES.ACTIVE,
    },
  },
];

let directMessages: Array<UserTypes> = [
  {
    id: "614ecab49785656f162d67db",
    firstName: "Tonia",
    lastName: "Clay",
    profileImage: avatar8,
    meta: {
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    id: "614ecab4a4666b6ff5f7864f",
    firstName: "Hendrix",
    lastName: "Martin",
    profileImage: avatar9,
    meta: {
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    id: "614ecab43dbce45d6d996d9f",
    firstName: "Donaldson",
    lastName: "Riddle",
    profileImage: avatar10,
    meta: {
      unRead: 5,
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    id: "614ecab41b1f288b60a9f5c9",
    firstName: "Daniels",
    lastName: "Webster",
  },
  {
    id: "614ecab49b13ce36ad017914",
    firstName: "Jennifer",
    lastName: "Ramirez",
    profileImage: avatar7,
    meta: {
      status: STATUS_TYPES.ACTIVE,
    },
  },
  {
    id: "614ecab413673c7385945500",
    firstName: "Shawna",
    lastName: "Wright",
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
export {
  favourites,
  directMessages,
  channels,
  onChangeDirectMessages,
  onChangeChannels,
};
