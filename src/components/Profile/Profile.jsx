/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
width: 10%;
max-width: 200px;
padding: 1.5rem;
cursor: pointer;
&:hover h2 {
    color: white;
}
&:hover img{
    border: 2px solid white;
}
`

const Avatar = styled.img`
width: 100%;
border-radius: 0.2rem;
`

const Name = styled.h2`
color: gray;
text-align: center;
`

export default function Profile (props){
const {profile, setActiveProfile} = props;
const {name, avatar} = profile;

let history = useHistory();

const activeProfileHandler = () => {
    //set active profile
    setActiveProfile(profile);
    //history pushla
    history.push("/home");
}

    return(
            <Card onClick={activeProfileHandler}>
                <Avatar src={avatar}/>
                <Name>{name}</Name>
            </Card>
    )
}