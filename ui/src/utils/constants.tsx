import { CalendarMonth, Groups, ListAlt, Logout } from "@mui/icons-material";
import { IMenuItem } from "../components/LeftMenu/LeftMenu";

export const MenuItems: IMenuItem[] = [
    {title: 'My family', icon: <Groups fontSize={"large"}/>},
    {title: 'Calendar', icon: <CalendarMonth fontSize={"large"}/>},
    {title: 'Lists', icon: <ListAlt fontSize={"large"}/>},
    {title: 'Logout', icon: <Logout fontSize={"large"}/>},
];
