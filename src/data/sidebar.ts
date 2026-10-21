import { LuUser, LuWrench, LuLibraryBig } from "react-icons/lu";

export const sidebar = {
  userName: `Matteo Guida`,
  profileImage: `/images/second_profile.png`,
  sections: [
    {
      title: `About Me`,
      url: ``,
      icon: LuUser
    },
    {
      title: `Projects`,
      url: `projects`,
      icon: LuWrench
    },
    {
      title: `Publications`,
      url: `publications`,
      icon: LuLibraryBig
    }
  ]
};