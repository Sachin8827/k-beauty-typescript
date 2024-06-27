import * as React from "react";
import { ContentProps } from "../Types/Types";

const Content: React.FC<ContentProps> = ({ heading, subHeading, text, buttonValue }) => {
    return <>
        <div className='content'>
            <h6>{heading}</h6>
            <h4>{subHeading}</h4>
            <p>{text}</p>
            <div className="btn">
                <button >{buttonValue}</button>
            </div>
        </div>
    </>
}
export default Content;