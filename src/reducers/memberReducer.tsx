import { v4 as uuid4 } from "uuid";
import { chip,group,members,memberAction } from "../classes";
import Logo from "../src/assets/images/logo.svg";
import Avtar from "../src/assets/images/character1.svg";


export const INITIAL_STATE : members[] = [
    { person: "Tom Cook",avtar: Avtar,details: "tom@oslash.com",uuid: uuid4() },
    { person: "Angel",avtar: Avtar,details: "angel@oslash.com",uuid: uuid4() },
    { person: "Mark",avtar: Avtar,details: "mark@oslash.com",uuid: uuid4() },
    { person: "Melinda",avtar: Avtar,details: "melinda@oslash.com",uuid: uuid4() },
    { person: "Tom Cook",avtar: Avtar,details: "tom@oslash.com",uuid: uuid4() },
    { person: "Angel",avtar: Avtar,details: "angel@oslash.com",uuid: uuid4() },
    { person: "Mark",avtar: Avtar,details: "mark@oslash.com",uuid: uuid4() },
    { person: "Melinda",avtar: Avtar,details: "melinda@oslash.com",uuid: uuid4() }
];


export const updateMembers = ( state : members[],action : memberAction ) =>
{
    switch ( action.type )
    {
        case "ADD_MEMBERS":
            return { ...state,...action.payload };
        case "UPDATE_MEMBERS":
            return { ...state,...action.payload };
        default:
            return { ...state,...action.payload };
    }
}



