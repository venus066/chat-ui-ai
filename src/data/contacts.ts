import avatar1 from "../assets/images/users/avatar-1.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar3 from "../assets/images/users/avatar-3.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
import avatar6 from "../assets/images/users/avatar-6.jpg";
import avatar7 from "../assets/images/users/avatar-7.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import avatar10 from "../assets/images/users/avatar-10.jpg";

export interface ContactTypes {
  id: string | number;
  firstName: string;
  lastName: string;
  profileImage?: any;
}
const contacts: ContactTypes[] = [
  {
    id: "614ecab426f59ce2863e106e",
    firstName: "Sanford",
    lastName: "Phelps",
  },
  {
    id: "614ecab4aeecaa03e8244d57",
    firstName: "Carla",
    lastName: "Serrano",
    profileImage: avatar1,
  },
  {
    id: "614ecab44abffd0867521196",
    firstName: "Alvarez",
    lastName: "Luna",
  },
  {
    id: "614ecab463eda97c2df4fe9a",
    firstName: "Norris",
    lastName: "Decker",
    profileImage: avatar2,
  },
  {
    id: "614ecab4ac946a9bdafa4e3b",
    firstName: "Marguerite",
    lastName: "Campbell",
    profileImage: avatar4,
  },
  {
    id: "614ecab41f60c4fdffe639c8",
    firstName: "Katrina",
    lastName: "Winters",
    profileImage: avatar3,
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
  },
  {
    id: "614ecab4fd445a537e2bb2b5",
    firstName: "Dean",
    lastName: "Vargas",
  },
  {
    id: "614ecab4ebb18e740e372e80",
    firstName: "Earnestine",
    lastName: "Sears",
    profileImage: avatar5,
  },
  {
    id: "614ecab4fec7ab1ffb2a497d",
    firstName: "Melody",
    lastName: "Montoya",
  },
  {
    id: "614ecab4363b167c147a422b",
    firstName: "Zimmerman",
    lastName: "Langley",
  },
  {
    id: "614ecab44fe4db874560b822",
    firstName: "Wallace",
    lastName: "Lane",
    profileImage: avatar6,
  },
  {
    id: "614ecab49b13ce36ad017914",
    firstName: "Jennifer",
    lastName: "Ramirez",
    profileImage: avatar7,
  },
  {
    id: "614ecab48c8cc404a0604fc4",
    firstName: "Heath",
    lastName: "Jarvis",
  },
  {
    id: "614ecab45f5f3e45d25d5bbd",
    firstName: "Kitty",
    lastName: "Cannon",
  },
  {
    id: "614ecab49785656f162d67db",
    firstName: "Tonia",
    lastName: "Clay",
    profileImage: avatar8,
  },
  {
    id: "614ecab4a4666b6ff5f7864f",
    firstName: "Hendrix",
    lastName: "Martin",
    profileImage: avatar9,
  },
  {
    id: "614ecab43dbce45d6d996d9f",
    firstName: "Donaldson",
    lastName: "Riddle",
    profileImage: avatar10,
  },
  {
    id: "614ecab41b1f288b60a9f5c9",
    firstName: "Daniels",
    lastName: "Webster",
  },
  {
    id: "614ecab413673c7385945500",
    firstName: "Shawna",
    lastName: "Wright",
  },
];
export { contacts };
