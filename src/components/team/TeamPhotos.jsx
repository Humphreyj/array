import React from 'react';
import styled from 'styled-components';


const Photos = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: #121212;
margin-top: 40px;

width: 30%;


`

const teamData = [
    {
        id: 0,
        name: 'Gunnar Olsen',
        desc: 'Data  Scientist'
    },
    {
        id: 1,
        name: 'weeaboo',
        desc: 'Data  Scientist, Citrix'
    },
    {
        id: 2,
        name: 'old man w/ beard',
        desc: 'Project Manager, previously at Consensys'
    },
    {
        id: 3,
        name: 'programming lawyer guy',
        desc: 'Solidity Developer, Pool-Party and PeepsDemocracy'
    },
    {
        id: 4,
        name: 'gavin',
        desc: 'nerd'
    },
    {
        id: 5,
        name: 'spike from cowboy bebop',
        desc: 'Frontend Developer'
    },
    
]

const TeamMember = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
margin:15px 0;
padding-left: 34px;

img {
    border: 4px solid white;
    height: 134px;
    width: 134px;
}
.team-member-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    h4 {
        margin: 0 20px;
        font-size: 1.7em;

    }
    p {
        margin: 5px 20px;
        font-size: 1.5em;
    }
}


`;

const TeamPhotos = () => {
    return (
        <Photos>
            {teamData.map(item => {
                return (
                    <TeamMember className="team-member">
                        <img src="#" alt="item.name"/>
                        <div className="team-member-details">
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </TeamMember>
                )
            })}
        </Photos>
    );
}

export default TeamPhotos;
