import React, { useState } from 'react';
import Header from "../../Widgets/Header";
import Checkbox from "../../Widgets/Checkbox";
import { BsPencilFill, BsJournalBookmarkFill, BsStars } from "react-icons/bs";

const TattooInfoBlock: React.FC = () => {
    const [ isFlash, setIsFlash ] = useState<boolean>( false );
    const handleIsFlash = ( checked: boolean ) => {
        setIsFlash(checked);
        setIsCustom(false);
        setIsTouchUp(false);
    }
    const [ isTouchUp, setIsTouchUp ] = useState<boolean>( false );
    const handleIsTouchUp = ( checked: boolean ) => {
        setIsTouchUp(checked);
        setIsFlash(false);
        setIsCustom(false);
    }
    const [ isCustom, setIsCustom ] = useState<boolean>( false );
    const handleIsCustom = ( checked: boolean ) => {
        setIsCustom(checked);
        setIsFlash(false);
        setIsTouchUp(false);
    }

    return(
        <div>
            <Header text="Your tattoo" />
            <div className="flex flex-col" >
                <h2 className="text-white italic">I am requesting
                    { ( !isTouchUp && !isCustom && !isFlash ) && "..." }
                    { isTouchUp && " a touch up."}
                    { isFlash && " flash."}
                    { isCustom && " a custom tattoo"}
                </h2>
                <div className="flex justify-between items-center">
                    <div className="w-1/2">
                        <Checkbox label="Touch up" checked={isTouchUp} onChange={handleIsTouchUp} />
                        <Checkbox label="Flash" checked={isFlash} onChange={handleIsFlash} />
                        <Checkbox label="Custom tattoo" checked={isCustom} onChange={handleIsCustom} />
                    </div>
                    <div className="w-1/2 flex item-center justify-center text-white">
                        { isTouchUp && <BsStars size={"5em"} /> }
                        { isCustom && <BsPencilFill size={"5em"} /> }
                        { isFlash && <BsJournalBookmarkFill size={"5em"} /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TattooInfoBlock;