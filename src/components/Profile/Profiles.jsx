/* eslint-disable react/prop-types */
import { useState } from "react"
import {profilesData} from "../../Profiles"
import styled from "styled-components"
import Profile from "./Profile"

const ProfilesContainer = styled.div`
display: flex;
gap: 1 rem;
justify-content: center;
`

export default function Profiles (props){
    const [profiles] = useState(profilesData);
    const {setActiveProfile} = props;

    return (
        <div>
            <ProfilesContainer>
                {
                    profiles.map((profile)=>{
                        return  <Profile key={profile.id} profile={profile} setActiveProfile={setActiveProfile}></Profile>
                    })
                }
            </ProfilesContainer>
        </div>
    )
}