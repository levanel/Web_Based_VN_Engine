import React from 'react'
import preview from "../chapterselectionfol/preview.json"
const chapterPreview=()=>{
    return(
        <div ClassName="Gapp">
        <h1>Fetched this shit for you</h1>
        {preview && preview.map(({name, id})=>(
            <div key={id} className="row">
            <strong>{name}</strong>
            </div>
        ))}
        </div>
    );
}