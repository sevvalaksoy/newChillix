/* eslint-disable react/prop-types */
import styled from "styled-components";
import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = styled.div`
padding: 1rem;
width: 100%;
overflow: scroll;
`

const Title = styled.h2`
color: white;
text-align: left;
`
    


export default function Suggestion (props){
    const [movies, setMovies] = useState([]);
    const {suggestion} = props;
    const {title, category} = suggestion;

    useEffect(()=>{
        /* const options = {
            method: 'GET',
            url: 'https://movies-api14.p.rapidapi.com/movies',
            headers: {
              'x-rapidapi-key': '646bd6424bmshd9115359e316e12p155c16jsnfb04ba88df76',
              'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
            }
          }; */
        axios.get('https://movies-api14.p.rapidapi.com/'+category, {headers: {
            'x-rapidapi-key': '646bd6424bmshd9115359e316e12p155c16jsnfb04ba88df76',
            'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
          }})
        .then((response)=>{
            console.log(response.data);
            const random = Math.floor(Math.random()*response.data.movies.length-11);
            setMovies(response.data.movies.slice(random,random+11));
        })
        .catch((error)=>{
            console.warn(error);
        });
    },[category])

    return (
        <Card>
        <Title>
            {title}
        </Title>
        <Movies movies={movies}/>
        </Card>
    )
}