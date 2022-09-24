import { ReactElement, ReactSVG, useState } from 'react';
import '../../src/assets/css/home.css';
import Button from "../components/Button"
import ShareImg from "../assets/images/share.svg";
import ShareBox from "../components/ShareBox";

const HomePage : React.FC = () : ReactElement =>
{
    const [ shareBox,openShareBox ] = useState( false );
    const shareObj = { click: share, img: ShareImg, bgColor:"#111827", color:"white",text:"Share"};

    function share():void
    {
        openShareBox( true );
    }

    return (
        <div className="homePage">
            <Button {...shareObj } />
            {shareBox &&
               <div className="shareBoxInst">
                <ShareBox />
            </div>
               }
        </div>
    );
}

export default HomePage;