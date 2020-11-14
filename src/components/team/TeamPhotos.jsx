import React from 'react';
import styled from 'styled-components';

import gavin from '../../assets/img/gavin.png';
import josh from '../../assets/img/josh.jpg';


const Photos = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: #121212;
margin-top: 40px;
width: 30%;
scrollbar-color: rgba(255, 255, 255, 0.4);
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 2px;
    height: 100%;
    margin-top: -1.8rem
    
  }
  ::-webkit-scrollbar-track:no-button { 
    width: 100%;
    border-radius: .5rem;
    background-color: rgba(255, 255, 255, 0.4);
  }
  ::-webkit-scrollbar-button {
    color: white;
    
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    
    background-color: rgba(255, 255, 255, 0.4);
 }
@media(max-width: 1920px) {
    width: 40%;
}
@media(max-width: 1440px) {

}
//max-width: 1440px;
@media(max-width: 1280px) {
height: 80vh;
}
@media(max-width: 970px) {
    width: 80%;
    height: 40vh;
    overflow-y: scroll;
    
}
//max-width: 970px
@media(max-width: 500px) {
    height: 60vh;
    margin-top: 30px;
    width: 90%;
    
}
//max-width 500px
@media(max-width: 360px) {
    height: 66vh;
   
    
}
//max-width: 360px
@media(max-width: 320px) {
    height: 80vh;
    
}
//max-width: 320px
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
        desc: 'nerd',
        img: gavin
    },
    {
        id: 5,
        name: 'Josh Humphrey',
        desc: 'Frontend Developer',
        img: josh
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
        font-size: 2em;

    }
    p {
        margin: 5px 20px;
        font-size: 1.8em;
    }
}
@media(max-width: 1920px) {
    img {
        height: 100px;
        width: 100px;
    }
}
//max-width: 1920px
@media(max-width: 1440px) {
    img {
        height: 80px;
        width: 80px;
    }
    .team-member-details {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        color: white;
        h4 {
            margin: 0 20px;
            font-size: 1.8em;
    
        }
        p {
            margin: 5px 20px;
            font-size: 1.4em;
        }
}
//max-width: 1440px
@media(max-width: 1280px) {
    img {
        height: 70px;
        width: 70px;
    }
    .team-member-details {
        h4 {
            font-size: 1.3em;
        }
        p {
            font-size: 1em;
        }
    }
}
//max-width: 1280px



`;

const TeamPhotos = () => {
    return (
        <Photos>
            {teamData.map(item => {
                return (
                    <TeamMember className="team-member">
                        <img src={item.img} alt="item.name"/>
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
