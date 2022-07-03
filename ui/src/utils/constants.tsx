import { CalendarMonth, Groups, ListAlt, Logout } from "@mui/icons-material";
import { IMenuItem } from "../components/LeftMenu/LeftMenu";

export const MenuItems: IMenuItem[] = [
    {title: 'My family', url: '/my-family', icon: <Groups fontSize={"large"}/>},
    {title: 'Calendar', url: '/calendar', icon: <CalendarMonth fontSize={"large"}/>},
    {title: 'Lists', url: '/lists', icon: <ListAlt fontSize={"large"}/>},
    {title: 'Logout', url: '/', icon: <Logout fontSize={"large"}/>},
];
