import styled from "styled-components";

const Card = styled.img`
width: 16%;
`

export default function Movie (props){
    const {movie} = props;

    return (
        <Card src={movie.backdrop_path}/>
    )
}