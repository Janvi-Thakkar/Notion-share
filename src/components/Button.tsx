import { ReactElement } from 'react';
import '../../src/assets/css/button.css';

interface buttonProps
{
    click : Function;
    img : string;
    bgColor : string;
    text : string;
    color : string
}

const Button : React.FC<buttonProps> = ( { click,img,bgColor,color,text }) : ReactElement =>
{
    return (
        <div className="button" style={ { backgroundColor:bgColor,color:color}} onClick={ () =>{click()} }>
            <span>{ text }</span>
            {img ? <img src={img}  />:<></>}
        </div>
    );
}

export default Button;