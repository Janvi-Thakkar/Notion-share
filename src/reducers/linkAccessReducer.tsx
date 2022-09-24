import { v4 as uuid4 } from "uuid";
import { linkAccessAction, accessDetails } from "../classes";
import { addGroup, addMember, getAccessDetails, getGroupAccessDetails, getMemberAccessDetails, removeGroup, removeMember, updateGroupAccess, updateMemberAccess } from "../helper";


export const INITIAL_STATE : accessDetails[] = [
    { uuid: uuid4(),persons:[],groups:[] },
    { uuid: uuid4(),persons: [],groups: [] },
];

export const access = ( state : accessDetails[],action : linkAccessAction ) =>
{
    switch ( action.type )
    {
        case "UPDATE_GROUP_ACCESS":
            return {...updateGroupAccess( state,action.uuid ? action.uuid : "",action.useruuid ? action.useruuid : "",action.accessType ? action.accessType : 3) } ;
        case "UPDATE_MEMBER_ACCESS":
            return { ...updateMemberAccess( state,action.uuid ? action.uuid : "",action.useruuid ? action.useruuid : "",action.accessType ? action.accessType : 3 ) };
        case "ADD_GROUP":
            return { ...addGroup( state,action.uuid ? action.uuid : "",action.useruuid ? action.useruuid : "",action.accessType ? action.accessType:2) };
        case "ADD_MEMBER":
            return { ...addMember( state,action.uuid ? action.uuid : "",action.useruuid ? action.useruuid : "",action.accessType ? action.accessType : 2) };
        case "REMOVE_GROUP":
            return { ...removeGroup( state,action.uuid ? action.uuid : "",action.useruuid ? action.useruuid : "") };
        case "REMOVE_MEMBER":
            return { ...removeMember( state,action.uuid ? action.uuid : "",action.useruuid ? action.useruuid : "") };
        case "GET_ACCESS_DETAILS":
            return getAccessDetails( state,action.uuid ? action.uuid : "" );
        case "GET_MEMBER_ACCESS_DETAILS":
            return getMemberAccessDetails( state,action.uuid ? action.uuid : "",action.useruuid ? action.useruuid : "");
        case "GET_GROUP_ACCESS_DETAILS":
            return getGroupAccessDetails( state,action.uuid ? action.uuid : "",action.useruuid ? action.useruuid : "" );
        case "ADD_ACCESS_DETAILS":
            return { ...state,...action.payload };
        default:
            return { ...state,...action.payload };
    }
}