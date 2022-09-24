import { v4 as uuid4 } from "uuid";
import { chip,group,members,groupAction} from "../classes";
import Logo from "../src/assets/images/logo.svg";
import Group from "../src/assets/images/group.svg";
import { addMembersToGroup, updateDetails } from "../helper";

export const GROUP_STATE : group[] = [
    { group: "Everyone at OSlash",logo: Logo,details: "3 working members",uuid: uuid4(),members: [ ] },
    { group: "Engineering",logo: Group,details: "2 members in a group",uuid: uuid4(),members: [ ] },
    { group: "Product",logo: Group,details: "3 members in a group",uuid: uuid4(),members: [] },
    { group: "Design",logo: Group,details: "3 members in a group",uuid: uuid4(),members: [  ] },
];

export const updateGroups = ( state : group[],action : groupAction ) =>
{
    switch ( action.type )
    {
        case "ADD_GROUPS":
            return { ...state,...action.payload };
        case "UPDATE_GROUPS":
            return { ...state,...action.payload };
        case "GET_GROUPS":
            return { state };
        case "ADD_MEMBERS":
            return addMembersToGroup( state,action.uuid ? action.uuid : "",action.memberuuid ? action.memberuuid : "" );
        case "UPDATE_DETAILS":
            return updateDetails( state,action.uuid ? action.uuid : "",action.details?action.details:"" );
        default:
            return { ...state,...action.payload };
    }
}







