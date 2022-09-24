import { ReactElement, useEffect, useReducer, useState,dis } from 'react';
import '../../src/assets/css/sharebox.css';
import Toggle from "../../src/assets/images/toggle.svg";
import Web from "../../src/assets/images/web.svg";
import Arrow from "../../src/assets/images/down-arrow.svg";
import Logo from "../../src/assets/images/logo.svg";
import Question from "../../src/assets/images/question.svg";
import Link from "../../src/assets/images/link.svg";
import { useNavigate } from "react-router-dom";
import { getAccessType} from "../helper";
import { chip,group,members, shareObject } from "../classes";
import { v4 as uuid4 } from 'uuid';
import { MEMBER_STATE,updateMembers } from "../reducers/memberReducer";
import { GROUP_STATE,updateGroups } from "../reducers/groupReducer";
import { SELECTED_STATE,access} from "../reducers/selectedReducer";

import { SELECTED_ACTION_TYPE } from "../actions/selectedAction";
import { LINK_STATE,linkAccess } from "../reducers/linkAccessReducer";

import { LINK_ACTION_TYPE } from "../actions/linkAccessAction";
import { MEMBER_ACTION_TYPE } from "../actions/memberAction";
import { GROUP_ACTION_TYPE } from "../actions/groupAction";



const ShareBox : React.FC<shareObject>= (props) : ReactElement =>
{
    const navigate = useNavigate();
    const [ memberList, dispatchMembers] = useReducer( updateMembers,MEMBER_STATE );
    const [ accessBox,setAccessBox ] = useState<boolean[]>( [] );
    const [ accessDetails,setAccessDetails ] = useReducer( linkAccess,LINK_STATE );
    const [ uuid,setUuid ] = useReducer( access,SELECTED_STATE );
    //const [ groupList,dispatch ] = useReducer(updateGroups);

    function changeAccess( idx : number,access : number )
    {
        
    }

    const openAccess=(idx:number) =>
    {
        const access = [ ...accessBox];
        access[ idx ] = !access[ idx ];                 
        setAccessBox( access );
    }

    const changeRoute=()=>
    {
        navigate( "/invite" );
    }

    useEffect( () =>
    {
        dispatchMembers( { type: MEMBER_ACTION_TYPE.ADD_MEMBERS,payload: memberList } );
        
    },[])

    return (
        <div className="shareBox">
            <div className="shareTop row-flex">
                <div className="left row-flex">
                    <img src={Web} className="web"/>
                    <div className="col-flex">
                        <span className="large-text dark">Share to web</span>
                        <span className="med-text light">Publish and share link with anyone</span>
                    </div>
                </div>
                <img src={Toggle }/>
            </div>
            <div className="shareBody col-flex">
                <div className="inviteBox row-flex" onClick={ () =>
                {changeRoute() } }>
                    <input className="inviteInput med-text light" placeholder="People, emails, groups"/>
                    <div className="inviteBtn med-text light col-flex">
                        Invite
                    </div>
                </div>
                <div className="memberList">
                    {
                        memberList.map( function(data:members,keyIndex:number)
                        {
                            return (
                                <div className="members row-flex">
                                    <div className="left row-flex">
                                        <img src={ data.avtar } className="avtar" />
                                        <div className="col-flex">
                                            <span className="large-text dark">{ data.person }</span>
                                            <span className="med-text light">{ data.details }</span>
                                        </div>
                                    </div>
                                    <div className="row-flex accessDetails">
                                        <div className="small-text light">{getAccessType(1)}</div>
                                        <img src={ Arrow } className="arrow" onClick={ () => { openAccess(keyIndex)} }/>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
            <div className="shareBottom row-flex">
                <div className="left row-flex">
                    <img src={ Question } className="question" />
                    <div className="light med-text">learn about sharing</div>
                </div>

                <div className="right row-flex">
                    <img src={Link} className="link" />
                    <div className="dark med-text">Copy Link</div>
                </div>
            </div>

        </div>
    );
}

export default ShareBox;

