import React from 'react';
import styled from 'styled-components';

import phases from '../../assets/img/phase0.PNG';

const MapMain = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
background-color: #121212;
height: 70vh;
width: 65%;
padding-top: 40px;
color: white;
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

p {
    font-size: 1.3em;
    width: 90%;
    margin: 10px auto;
}
.phase {
    font-size: 1.3em;
    font-weight: bold;
    margin-left: 10px;
}

.phases {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position : relative;
    top: 9%;
   
    img {
        width: 95%;
    }
}
@media(max-width: 1920px) {
    p {
        margin: 5px auto;
        font-size: 1.2em;
    }
    .phase {
        font-size: 1.2em;
    }
}
@media(max-width: 1440px) {
    padding-top: 30px;
    p {
        font-size: 1em;
        width: 90%;
        margin: 5px auto;
    }
    .phase {
        font-size: 1.1em;
        font-weight: bold;
        margin-left: 10px;
    }
    
    .phases {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position : relative;
        top: 12%;
       
        img {
            width: 95%;
        }
    }
}
//max-width 1440px
@media(max-width: 1280px) {
    padding-top: 30px;
    p {
        font-size: 1em;
        width: 90%;
        margin: 5px auto;
    }
    .phase {
        font-size: 1em;
        font-weight: bold;
        margin-left: 10px;
    }
    
    .phases {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position : relative;
        top: 9%;
       
        img {
            width: 80%;
        }
    }
}
//max-width 1280px
@media(max-width: 970px) {
    width: 90%;
    height: 40vh;
    overflow-y: scroll;

}

`;

const RoadmapMain = () => {
    return (
        <MapMain>
            
            <p><span className="phase">Phase 0</span>  is the initial groundwork phase of the Array ecosystem, which takes high-yield tokens and consolidates them into ETH for withdrawal, locking in DeFi gains. Phase 0 will also roll out a PICKLE management feature, which automatically harvests the accrued PICKLE from Jars and puts it into the Pickle profit-sharing pool for WETH. Array’s end goal is ETH in, ETH out. With Array, users will not need to juggle dozens of DeFi tokens.</p>
            <p><span className="phase">Phase 1</span>  is the first roll-out of the Array Index, an algorithmically weighted and staked DeFi index, which maximizes yield while minimizing risk. This is built off of Phase 0’s automatic ETH harvesting feature. Unlike other similar protocols, no VCs means we can send all of the profits back to users.</p>
            <p><span className="phase">Phase 2</span>  is the introduction of non-DeFi tokens that can be indexed and purchased. Theoretically, any ERC-20 can be placed into a weighted index and bundled for easy portfolio management.</p>
            <p><span className="phase">Phase 3</span> is the final phase for the initial Array protocol. It will allow users to create and deploy their own Array Indexes, with any ERC-20 token, and stake tokens if needed. Users will be able to join created Indexes and charge performance fees, allowing experienced traders to profit off of their efforts. </p>

            <div className="phases">
                <img src={phases} alt="Graph of array phases"/>
            </div>
            
        </MapMain>
    );
}

export default RoadmapMain;
