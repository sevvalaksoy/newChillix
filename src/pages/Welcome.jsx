import Profiles from "../components/Profile/Profiles";
import styled from "styled-components";

const Button = styled.div`
color: gray;
padding: .5rem 1.5rem;
border: 1px solid gray;
display: inline-block;
`

export default function Welcome (){
    return(
        <>
            <h1>Who is Watching?</h1> 
            <Profiles />
            <Button>Manage Profiles</Button>
        </>
    )
}