import { v4 as uuid4 } from "uuid";
import { accessDetails,currentAction} from "../classes";

export const SELECTED_STATE : string | null = uuid4();

export const access = ( state : accessDetails[],action : currentAction ) =>
{
    switch ( action.type )
    {
        case "UPDATE_CURRENT":
            return action.uuid;
        case "GET_CURRENT":
            return state;
    }
}