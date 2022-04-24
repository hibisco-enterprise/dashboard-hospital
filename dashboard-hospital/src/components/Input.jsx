import React from "react";
import InputMask from "react-input-mask";

function CardInput(props) {

    return(
        <div className="input">
            <label htmlFor={props.id}>{props.label}</label><br/>
            <InputMask mask={props.mask} maskChar={props.maskChar} id={props.id} placeholder={props.placeholder} type={props.type} onChange={e => props.setValue(e.target.value)} value={props.value}/>
        </div>
    );
}

function CardSelect(props) {
    return(
        <div className="input">
            <label htmlFor={props.id}>{props.label}</label><br/>
            <select id={props.id} onChange={e => props.setValue(e.target.value)} value={props.value}>
                {props.options.map((type)=>(
                    <option value={type}>{type}</option>
                ))}
            </select>
        </div>
    );
}

export {CardInput, CardSelect};