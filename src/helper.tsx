import { v4 as uuid4 } from "uuid";
import { ReactElement } from "react";
import Char1 from "../src/assets/images/character1.svg";
import { accessDetails, chip,group,members, uuidAccess } from "../src/classes";
import Logo from "../src/assets/images/logo.svg";
import Avtar from "../src/assets/images/character1.svg";
import Group from "../src/assets/images/group.svg";

const access = [ "Full access","Can edit","Can view","No access" ];


export const getAccessType = ( num : number ) : string=>
{
    return access[ num ];
}

export const searchMember=(list:members[],searchInput:string ):members[] =>
{
    var input,filter,i,txtValue,j=0;
    var ans : members[] = [ { uuid: uuid4(),person: "Everyone at OSlash",avtar: Char1,details: "25 workspace members"}];
    input = searchInput;
    filter = input.toUpperCase();
    if ( input == "" )
    {
        return list;
    }
    for ( i = 0; i < list.length; i++ )
    {
        if ( i == 0 )
            ans = [];
       txtValue = list[i];
       if ( txtValue.person.toUpperCase().indexOf( filter ) > -1 )
       {
            ans[j++]=txtValue;
       }
    }
    return ans;
}

export const searchGroup = ( list : group[],searchInput : string ) : group[] =>
{
    var input,filter,i,txtValue,j = 0;
    var ans : group[] = [ {uuid:uuid4(),group: "",logo:Logo,details: "25 workspace members",members: [ uuid4() ] }];
    input = searchInput;
    filter = input.toUpperCase();
    if ( input == "" )
    {
        return list;
    }
    for ( i = 0; i < list.length; i++ )
    {
        if ( i == 0 )
            ans = [];
        console.log(filter)
        txtValue = list[ i ];
        if ( txtValue.group.toUpperCase().indexOf( filter ) > -1 )
        {
            ans[j++] = txtValue;
        }
    }
    console.log(ans)
    return ans;
}

export const getAccess = ():string[] =>
{
    return access;
}



export const getAccessGroup = ( arr : uuidAccess[],uuid : string ):uuidAccess|null=>
{
    for ( var i = 0; i < arr.length; i++ )
    {
        if ( uuid == arr[ i ].uuid )
        {
            return arr[ i ];
        }
    }
    return null;
}

export const getAccessMember = ( arr : uuidAccess[],uuid : string ) : uuidAccess | null =>
{
    for ( var i = 0; i < arr.length; i++ )
    {
        if ( uuid == arr[ i ].uuid )
        {
            return arr[ i ];
        }
    }
    return null;
}

export const updateGroupAccess = ( arr : accessDetails[],uuid : string,useruuid : string,access:number):accessDetails[]|null=>
{
    for ( var i = 0; i < arr.length; i++)
    {
        if ( uuid != arr[ i ].uuid )
            continue;
        else
            for ( var j = 0; arr[ i ].groups.length; j++ )
            {
                if ( useruuid != arr[ i ].groups[ j ].uuid )
                    continue;
                else
                    arr[ i ].groups[ j ].access = access;
            }

    }
    return arr;

}

export const updateMemberAccess = ( arr : accessDetails[],uuid : string,useruuid : string,access : number ) : accessDetails[] | null =>
{
    for ( var i = 0; i < arr.length; i++ )
    {
        if ( uuid != arr[ i ].uuid )
            continue;
        else
            for ( var j = 0; arr[ i ].persons.length; j++ )
            {
                if ( useruuid != arr[ i ].persons[ j ].uuid )
                    continue;
                else
                    arr[ i ].persons[ j ].access = access;
            }

    }
    return arr;

}


export const removeGroup = ( arr : accessDetails[],uuid : string,useruuid : string ) : accessDetails[] | null =>
{
    for ( var i = 0; i < arr.length; i++ )
    {
        if ( uuid != arr[ i ].uuid )
            continue;
        else
            for ( var j = 0; arr[ i ].groups.length; j++ )
            {
                if ( useruuid != arr[ i ].groups[ j ].uuid )
                    continue;
                else
                    arr[ i ].groups.splice(j,1);
            }

    }
    return arr;
}

export const removeMember = ( arr : accessDetails[],uuid : string,useruuid : string) : accessDetails[] | null =>
{
    for ( var i = 0; i < arr.length; i++ )
    {
        if ( uuid != arr[ i ].uuid )
            continue;
        else
            for ( var j = 0; arr[ i ].persons.length; j++ )
            {
                if ( useruuid != arr[ i ].persons[ j ].uuid )
                    continue;
                else
                    arr[ i ].persons.splice(j,1);
            }

    }
    return arr;

}

export const addGroup = ( arr : accessDetails[],uuid : string,useruuid : string,access:number ) : accessDetails[] | null =>
{
    for ( var i = 0; i < arr.length; i++ )
    {
        if ( uuid != arr[ i ].uuid )
            continue;
        else
            arr[ i ].groups.push( { uuid: useruuid,access: access } );

    }
    return arr;
}

export const addMember = ( arr : accessDetails[],uuid : string,useruuid : string,access:number ) : accessDetails[] | null =>
{
    
    for ( var i = 0; i < arr.length; i++ )
    {
        if ( uuid != arr[ i ].uuid )
            continue;
        else
            arr[ i ].persons.push( { uuid: useruuid,access: access } );

    }
    return arr;

}



export const getAccessDetails = ( arr : accessDetails[],uuid : string ) : accessDetails|null =>
{
    if ( uuid == "" )
        return null;
    for ( var i = 0; i < arr.length; i++ )
    {
        if ( uuid == arr[ i ].uuid )
        {
            return arr[ i ];
        }
    }
    return null;
}

export const getMemberAccessDetails = ( arr : accessDetails[],uuid : string,useruuid:string ) : number | null =>
{
    var accessArr = getAccessDetails( arr,uuid );
    if ( accessArr == null )
        return null;
    var memberArr = accessArr.persons;

    for ( var i = 0; i < memberArr.length; i++ )
    {
        if ( useruuid == memberArr[ i ].uuid )
        {
            return memberArr[ i ].access;
        }
    }
    return 3;
}

export const getGroupAccessDetails = ( arr : accessDetails[],uuid : string,useruuid:string ) : number | null =>
{
    var accessArr = getAccessDetails( arr,uuid );
    if ( accessArr == null )
        return null;
    var groupArr = accessArr.groups;

    for ( var i = 0; i < groupArr.length; i++ )
    {
        if ( useruuid == groupArr[ i ].uuid )
        {
            return groupArr[ i ].access;
        }
    }
    return 3;
}

export const addMembersToGroup = ( arr : group[],uuid : string,memberuuid : string ) : group[] =>
{
    if ( uuid == null || uuid == "" )
        return arr;
    else
        for ( var i = 0; i < arr.length; i++ )
        {
            if ( uuid == arr[ i ].uuid )
            {
                arr[ i ].members = [ ...arr[ i ].members,memberuuid ];
                return arr;
            }
        }
    return arr;
}

export const updateDetails = ( arr : group[],uuid : string,details: string ) : group[] =>
{
    if ( uuid == null || uuid == "" )
        return arr;
    else
        for ( var i = 0; i < arr.length; i++ )
        {
            if ( uuid == arr[ i ].uuid )
            {
                arr[ i ].details = details
                return arr;
            }
        }
    return arr;
}



