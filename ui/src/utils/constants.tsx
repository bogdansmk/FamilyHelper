import { IMenuItem } from "../components/LeftMenu/LeftMenu";
import PeopleCommunity from "@fluentui/svg-icons/icons/people_community_20_filled.svg";
import Calendar from "@fluentui/svg-icons/icons/calendar_rtl_20_regular.svg";
import List from "@fluentui/svg-icons/icons/text_bullet_list_square_20_regular.svg";
import Logout from "@fluentui/svg-icons/icons/arrow_exit_20_regular.svg";

export const MenuItems: IMenuItem[] = [
    { id: 0, title: 'My family', url: '/my-family', icon: <img src={PeopleCommunity} alt={''} /> },
    { id: 1, title: 'Calendar', url: '/calendar', icon: <img src={Calendar} alt={''} /> },
    { id: 2, title: 'Lists', url: '/lists', icon: <img src={List} alt={''} /> },
    { id: 3, title: 'Logout', url: '/', icon: <img src={Logout} alt={''} /> },
];

