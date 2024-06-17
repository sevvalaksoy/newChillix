import { useEffect, useState } from "react";
import { userSuggestionsData } from "../userSuggestions";
import Suggestion from "../components/Suggestion/Suggestion";
import Hero from "../components/Hero/Hero"

/* eslint-disable react/prop-types */
export default function Home (props){
    const [suggestions, setSuggestions] = useState([]);
    const {activeProfile} = props;
    const {name} = activeProfile;

    useEffect(()=>{
        const suggestionData = userSuggestionsData[activeProfile.id];
        setSuggestions(suggestionData);
    },[activeProfile]);

    useEffect(()=>{
        console.log("mount oldu");
        return function () {
            console.log("unmount oldu");
        }
    },[]);

    return(
        <>
            <Hero activeProfile={activeProfile}/>
            {suggestions.map((suggestion, index)=>{
                return <Suggestion key={index} suggestion={suggestion}/>
            })} 
        </>
    )
}