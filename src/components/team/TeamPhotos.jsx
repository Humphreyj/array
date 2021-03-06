import React from 'react';
import styled from 'styled-components';

import zack from '../../assets/img/zack.png';
import jhump from '../../assets/img/jhump.jpg';
import joshua from '../../assets/img/Joshua_Headshot.png';
import gavin from '../../assets/img/gavin.jpg';
import Gunnar from '../../assets/img/Gunnar.png';
import bill from '../../assets/img/arraylogofinal.png';


const Photos = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: #121212;
clip-path: polygon(17% 0, 86% 0, 100% 8%, 100% 88%, 100% 100%, 13% 100%, 0 90%, 0 0);
margin-top: 1%;
width: 28%;
padding-left: 5%;
padding-top: 1%;
padding-bottom: 1%;
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
 @media(min-width: 2700px) {
     margin-top: 2%;
 }
 
@media(max-width: 1920px) {
    
}
@media(max-width: 1440px) {
    width: 30%;
}
//max-width: 1440px;
@media(max-width: 1280px) {

}
@media(max-width: 970px) {
    width: 80%;
    margin-bottom: 10%;
    overflow-y: scroll;
    padding-left: 8%;
    padding-bottom: 5%;
    
}
//max-width: 970px
@media(max-width: 500px) {
   
    margin-top: 30px;
    width: 90%;
    
    
}
//max-width 500px
@media(max-width: 360px) {
    
   
    
}
//max-width: 360px
@media(max-width: 320px) {
    
    
}
//max-width: 320px
`

const teamData = [
    {
        id: 0,
        name: 'Gunnar Olsen',
        desc: 'Data  Scientist',
        img: Gunnar
    },
    {
        id: 1,
        name: 'Zack Rowland',
        desc: 'Senior Engineer ',
        img: zack
    },
    {
        id: 4,
        name: 'Josh Humphrey',
        desc: 'Frontend Developer',
        img: jhump
    },
    {
        id: 3,
        name: 'Gavin Nicholson',
        desc: 'Marketing',
        img: gavin
        
    },
    {
        id: 2,
        name: 'Joshua Lapidus',
        desc: 'Operations',
       
        img: joshua
    },
    {
        id: 5,
        name: 'Bill',
        desc: 'Smart Contract Advisor',
        img: bill
    },
    
]

const TeamMember = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
margin:15px 0;


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
        margin: 2px 20px;
        font-size: 1.8em;
    }
    .sub-desc {
        font-size: 1.2em;
        margin-top: 2px;
    }
}
@media(min-width: 2700px) {
    img {
        height: 200px;
        width: 200px;
    }
}
@media(max-width: 2556px) {
    img {
        height: 150px;
        width: 150px;
    }
    .sub-desc {
        font-size: 1em;
    }
}
//max-width: 2556px
@media(max-width: 1920px) {
    .team-member-details {
        h4 {
            font-size: 1.8em;
        }
        p {
            font-size: 1.4em;
        }
        .sub-desc {
            font-size: .9em;
        }
    }
    
    img {
        height: 100px;
        width: 100px;
    }
}
//max-width: 1920px
@media(max-width: 1440px) {
    margin: 12px 0;
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
            font-size: 1.2em;
    
        }
        p {
            margin: 2px 20px;
            font-size: 1em;
        }
        .sub-desc {
            .font-size: .9em;
            margin-top: 2px;
        }
}
//max-width: 1440px
@media(max-width: 1280px) {
    img {
        height: 65px;
        width: 65px;
    }
    .team-member-details {
        h4 {
            font-size: 1.1em;
        }
        p {
            font-size: 1em;
        }
        .sub-desc {
            font-size: .6em;
        }
    }
}
//max-width: 1280px

@media(max-width: 970px) {

}
@media(max-width: 540px) {
    
}
    //max-width: 540px
    @media(max-width: 360px) {
        ;
    }
        //max-width: 360px


`;

const TeamPhotos = () => {
    return (
        <Photos>
            {teamData.map((item) => {
                return (
                    <TeamMember key={item.name} className="team-member">
                        <img src={item.img} alt="item.name"/>
                        <div className="team-member-details">
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                            <p className="sub-desc">{item.subDesc}</p>
                        </div>
                    </TeamMember>
                )
            })}
        </Photos>
    );
}

export default TeamPhotos;
