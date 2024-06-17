import styled from "styled-components";

const Card = styled.img`
width: 300px;
&:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`
const Title = styled.p`
    font-size: medium;
    border: .1px solid white;
    padding: .1rem;
    font-weight: bolder;
    position: absolute;
    bottom: 8px;
    left: 16px;
`

export default function Movie (props){
    const {movie} = props;

    return (
        <div style={{position:"relative", textAlign:"center"}}>
        <Card src={movie.backdrop_path}/>
        <Title>{movie.original_title}</Title>
        </div>
    )
}