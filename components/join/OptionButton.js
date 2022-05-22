import Image from 'next/image'
import React, {useState} from 'react';


export default function OptionButton(props){
    const [isSelected, setSelect] = useState(props.selected);
    if(isSelected){
        return <button onClick={setSelect(!isSelected)} className="tetiary-1"><Image src={props.icon}/>{props.content}</button>
    }
    else{
        return <button onClick={setSelect(!isSelected)} className="tetiary-1 text-black/40"><Image src={props.icon}/>{props.content}</button>
    }
}