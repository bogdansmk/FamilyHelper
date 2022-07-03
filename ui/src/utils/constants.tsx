import {IMenuItem} from "../components/LeftMenu/LeftMenu";
import PeopleCommunity from "@fluentui/svg-icons/icons/people_community_20_filled.svg";
import Calendar from "@fluentui/svg-icons/icons/calendar_rtl_20_regular.svg";
import List from "@fluentui/svg-icons/icons/text_bullet_list_square_20_regular.svg";
import Logout from "@fluentui/svg-icons/icons/arrow_exit_20_regular.svg";
import {IUser} from "../MyFamily/UserCard/UserCard";
import joseph from './../assets/joseph.png';
import jane from './../assets/jane.png';
import alex from './../assets/alex.png';

export const MenuItems: IMenuItem[] = [
    {id: 0, title: 'My family', url: '/my-family', icon: <img src={PeopleCommunity} alt={''}/>},
    {id: 1, title: 'Calendar', url: '/calendar', icon: <img src={Calendar} alt={''}/>},
    {id: 2, title: 'Lists', url: '/lists', icon: <img src={List} alt={''}/>},
    {id: 3, title: 'Logout', url: '/', icon: <img src={Logout} alt={''}/>},
];

export const Users: IUser[] = [
    {name: 'Joseph', status: 'At work', avatarUrl: joseph, isHead: true},
    {name: 'Jane', status: 'In gym', avatarUrl: jane, tag: {title: 'Wife', color: 'red'}},
    {name: 'Alex', status: 'At school', avatarUrl: alex, tag: {title: 'Son', color: 'green'}}
]
