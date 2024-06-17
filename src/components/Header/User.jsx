import styled from "styled-components";

const Card = styled.div`
width: 15%;
max-width: 200px;
margin-right: 1rem;
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

export default function User (props) {
    
    return(
        <Card >
            <Avatar src={props.activeProfile.avatar}/>
        </Card>
)
}