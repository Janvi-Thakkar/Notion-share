import React, { ChangeEvent, ReactElement,useEffect,useState,KeyboardEvent } from 'react';
import '../../src/assets/css/invite.css';
import Toggle from "../../src/assets/images/toggle.svg";
import Char1 from "../assets/images/character1.svg";
import Group from "../assets/images/group.svg";
import Arrow from "../assets/images/down-arrow.svg";
import Logo from "../../src/assets/images/logo.svg";
import Question from "../assets/images/question.svg";
import Link from "../../src/assets/images/link.svg";
import { getAccessType, searchMember,searchGroup} from '../helper';
import Chip from "../components/Chip";
import { v4 as uuid4 } from 'uuid';
import {chip,group,members} from '../classes'


const Invite : React.FC = () : ReactElement =>
{

    const [ memberList,setMembers ] = useState( [ { uuid: uuid4(),person: "Tom Cook",avtar:Char1,details: "25 workspace members",access: 3 } ] );
    const [ groupList,setGroups ] = useState( [ { uuid:uuid4(),group: "Engineering",details: "25 workspace members",access: 3,members:[uuid4()] } ] );
    const [ selected,setSelected ] = useState<chip[]>([]);
    const [ searchedMem,setSearchMem ] = useState( memberList );
    const [ searchedGroups,setSearchGroup ] = useState( groupList);

    useEffect( () =>
    {
        setSearchMem( memberList );
        setSearchGroup( groupList );
    },[] );

    const enterChip = ( e : KeyboardEvent<HTMLInputElement>) =>
    {
        var code = ( e.keyCode ? e.keyCode : e.which );
        if ( code == 13 )
        {
            if ( searchedMem.length > 0 )
                setSelected( [ ...selected,{ click: remove,uuid: searchedMem[ 0 ].uuid,type: "person",person: searchedMem[ 0 ] } ] );
            else if ( searchedGroups.length > 0 )
                setSelected( [ ...selected,{ click: remove,uuid: searchedGroups[ 0 ].uuid,type: "group",group: searchedGroups[ 0 ] } ])
        }
    }

    const addChip = (type:string,idx:number) =>
    {
       console.log(1)
       if ( type=="person" )
                setSelected( [ ...selected,{ click: remove,uuid: searchedMem[idx].uuid,type: "person",person: searchedMem[idx] } ] );
       else 
                setSelected( [ ...selected,{ click: remove,uuid: searchedGroups[idx].uuid,type: "group",group: searchedGroups[idx] } ] )
     
    }

    function remove(uuid:string) :void
    {
        for ( var i = 0; i < selected.length; i++ )
        {
                if ( selected[ i ].uuid == uuid )
                {
                    selected.splice( i,1 );
                }
        }

    }

    const search = ( e : ChangeEvent<HTMLInputElement>) =>
    {
        setSearchMem( searchMember( memberList,e.currentTarget.value ) );
        setSearchGroup( searchGroup( groupList,e.currentTarget.value ) );
    }

    return (
    <div className="inviteScreen row-flex">
        <div className="inviteBox col-flex">
                <div className="inviteTop row-flex">
                    <div className="left row-flex">
                        {
                            selected.map( function( data : chip, keyIndex : number )
                            {
                                return (
                                    <div key={ data.uuid} ><Chip { ...data }/> </div>
                                );
                            }
                            )
                        }
                        <span className="inputSpan"><input className="inviteInput med-text light" placeholder="People, emails, groups" onChange={ ( e ) => { search( e ) } } onKeyUp={ (e) => {enterChip(e)} }/> </span>
                    </div>
                    <div className="right row-flex">
                        <div className="row-flex accessDetails">
                            <div className="small-text light">{ getAccessType(0) }</div>
                            <img src={ Arrow } className="arrow" />
                        </div>
                       <div className="inviteBtnWhite light med-text">invite</div>
                    </div>
                </div>
                <div className="inviteBody">
                    <div className="left col-flex">
                        <div>{ searchedMem.length > 0 && <div className="inviteTitle">Select a person</div> }
                        {
                                searchedMem.map( function( data : members,keyIndex : number )
                                {
                                    return (
                                        <div className="memName row-flex" key={ data.uuid } id={ "member" + keyIndex }><img src={ data.avtar } className="memAvtar" onClick={ () => { addChip( "person",keyIndex ); console.log(1)} }/>{ data.person }</div>
                                );
                            }
                            )
                            }
                        </div>
                        { searchedGroups.length > 0 && <div className="inviteTitle">Select a group</div> }
                        {
                            searchedGroups.map( function( data : group,keyIndex : number )
                            {
                                return (
                                    <div className="memName row-flex" key={ data.uuid } id={ "group" + keyIndex }><img src={ Group } className="groupAvtar" onClick={ () => { addChip( "group",keyIndex ) } }/>{ data.group }</div>
                                );
                            }
                            )
                        }
                        {
                            searchedGroups.length == 0 && searchedMem.length==0 && <div className="light inviteTitle">No match found</div>
                        }
                    </div>
                </div>
                <div className="shareBottom row-flex">
                    <div className="left row-flex">
                        <img src={ Question } className="question" />
                        <div className="light med-text">learn about sharing</div>
                    </div>
                </div>

        </div>
        
    </div>
    );
}

export default Invite;

