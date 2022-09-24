import React,{ ChangeEvent,ReactElement,useEffect,useState,KeyboardEvent } from 'react';
import '../../src/assets/css/invite.css';
import Link from "../../src/assets/images/link.svg";
import { getAccess} from '../helper';
import Chip from "../components/Chip";
import { v4 as uuid4 } from 'uuid';
import { access } from '../classes';


const Access : React.FC<access> = (props) : ReactElement =>
{

    const [ accessTypes,setType ] = useState<string[]>([""]);
    useEffect( () =>
    {
        setType(getAccess());
    },[])
    return (
        <div className="AccessScreen col-flex">
            {
                accessTypes.map( function( data : string,keyIndex : number )
                {
                    return (
                        <div className={ keyIndex == accessTypes.length - 1 ? ( props.selected ? "accessName red selected" : "accessName red" ) : ( props.selected ? "accessName selected" : "accessName" ) } onClick={ () => { props.click()} }>{ data }</div>
                    );
                }
                )
            }
        </div>
    );
}

export default Access;

