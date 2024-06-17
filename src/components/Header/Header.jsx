import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import User from "./User"

const Chillix = styled.p`
    color: red;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: left;
    margin: auto;
    padding: 1rem;
    display: flex;
`
const HomeLink = styled.p`
    color: white;
    font-size: 1rem;
    justify-content: center;
    &:hover {
        filter: brightness(80%);
        cursor: pointer;
    }
`
const TvShows = styled.p`
    color: white;
    font-size: 1rem;
    &:hover {
        filter: brightness(80%);
    }
`
const Movies = styled.p`
    color: white;
    font-size: 1rem;
    &:hover {
        filter: brightness(80%);
    }
`
const NewPopular = styled.p`
    color: white;
    font-size: 1rem;
    &:hover {
        filter: brightness(80%);
    }
`

export default function Header (props){
    const {activeProfile} = props;
    return (
        <div style={{display:"flex", justifyContent:"space-between", width:"100%", position:"absolute", top:"0"}}>
            <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                <Chillix>CHILLIX</Chillix>
                <HomeLink>Home</HomeLink>
                <TvShows>Tv Shows</TvShows>
                <Movies>Movies</Movies>
                <NewPopular>New & Popular</NewPopular>
            </div>
            <div style={{display:"flex", alignItems:"center", marginRight:"-5rem"}}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{width:"100px"}}/>
                <User activeProfile={activeProfile}/>
            </div>
        </div>
    )
}