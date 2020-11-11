import React from 'react';
import styled from 'styled-components';

const SocialDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
left: 0;
top: 38%;
color: white;
.title {
    font-size: 3em;
    border: 8px solid white;
    padding: 1px 5px;
}

.social-links {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
}
    .fab {
        color: white;
        font-size: 3.3em;

    }
`;

const Social = () => {
    return (
        <SocialDiv >
            <h1 className="title">follow for updates</h1>
            <div className="social-links">
                <a href="https://twitter.com/" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://discord.com/" className="social-link"><i className="fab fa-discord"></i></a>
                <a href="https://medium.com/" className="social-link"><i className="fab fa-medium"></i></a>
            </div>
        </SocialDiv>
    );
}

export default Social;
