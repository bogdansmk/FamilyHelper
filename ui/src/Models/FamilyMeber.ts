export default class FamilyMember {
    userInfo: UserInfo;

    constructor( userInfo: UserInfo) {
        this.userInfo = userInfo;
    }
}

class UserInfo{
    firstName: string;

    constructor( firstName: string) {
        this.firstName = firstName;
    }
}