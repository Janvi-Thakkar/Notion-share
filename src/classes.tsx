
export type members=
{
    uuid : string
    person : string;
    avtar : string;
    details : string;
}

export type access = {
    selected : number,
    click:Function
}

export type group =
{
    uuid : string;
    group : string;
    logo : string;
    details : string;
    members : string[];
}

export type chip =
{
    click : Function;
    uuid : string;
    type : string;
    person ?: members;
    group ?: group;
}

export type groupAction =
{
    type : string,
        payload : group[],
        uuid ?: string,
        details ?: string,
        logo ?: string,
        memberuuid?:string
}

export type memberAction =
    {
        type : string,
        payload : members[]
    }


export type linkAccessAction =
{
        type : string,
        payload : [],
        uuid ?: string,
        useruuid ?: string,
        accessType?:number
}

export type accessDetails =
{
        uuid : string,
        groups : uuidAccess[],
        persons : uuidAccess[],
}

export type uuidAccess =
{
        uuid : string,
    access:number
    }

export type currentAction =
{
        type : string,
    uuid:string
}





