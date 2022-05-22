import FormPage from "./FormPage";
import React, {useState} from "react";


export default function SlideForm(props){
    const [index, setIndex] = useState(0); //TODO: cache this state so that it is saved even if the user closes the page

    return(
        <FormPage label="How Should We Greet You?" placeholder="Ex. Vansh Gehlot" progress="10"/>
    )
}