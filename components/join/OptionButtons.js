import Image from 'next/image'
import React, {useState} from 'react';
import OptionButton from './OptionButton';

export default function OptionButtons(props){
    const [oneSelected, setOneSelect] = useState(true);
    return(
        <div>
            <OptionButton icon={props.icon1} content={props.content1} selected={oneSelected}/>
            <OptionButton icon={props.icon2} content={props.content2} selected={!oneSelected}/>
        </div>
    )
}