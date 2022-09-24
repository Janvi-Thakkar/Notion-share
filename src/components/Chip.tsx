import { ReactElement,useState } from 'react';
import '../../src/assets/css/chip.css';
import Close from "../../src/assets/images/close.svg";
import { chip} from "../classes";

const Chip : React.FC<chip> = ( {person,type,uuid,group,click}) : ReactElement =>
{
    return (
        <div className="chip row-flex">
            <div className="med-text dark">
                {person!=null?person.person:(group!=null?group.group:"")}
            </div>
            <img src={ Close } onClick={ () => {click(uuid)}} />
        </div>
    );
}

export default Chip;