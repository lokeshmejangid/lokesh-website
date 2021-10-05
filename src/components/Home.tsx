import React from 'react';
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';
import Typed from 'react-typed';
import { Avatar, Grid } from '@material-ui/core';
import backgroundImg from '../../public/images/site-background.jpg';
import avatar from "../lokesh.png";

const StyledConatiner = styled(Grid)`
    .icon {
        position:absolute;
        top:1%;
        right:1%;
        list-style: none;
    }
    .margin-bottom {
        marginBotton:1em;
    }
`;
const StyledWarpper = styled.div`
    position: absolute;
    top: 32%;
    left: 50%;
    width:100vw;
    text-align: center;
    transform: translate(-50%, 50%);
`;
const StyledAvtar = styled(Avatar)`
    width:4em !important;
    height:4em !important;
    margin:1em;
`;

const StyledName = styled(Typography)`
    color: white;
`;

const StyledDescription = styled(Typography)`
    color: white;
`;

const Home = () => {
    return (
        <StyledConatiner>
            <StyledWarpper>
                <Grid container justify="center">
                    <StyledAvtar src={avatar} alt="Lokesh Jangid" />
                </Grid>
                <StyledName variant="h4">
                    <Typed strings={["LOKESH JANGID"]} typeSpeed={40} />
                </StyledName>
                <StyledDescription variant="h5">
                    <Typed
                        strings={[
                            "Frontend Developer",
                            "Android Native App Developer",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </StyledDescription>
            </StyledWarpper>
            <Grid container justify="center">
                    <ul className="icon">
                        <li className="marginBottom">
                            <a href="https://github.com/lokeshmejangid/lokeshjangid">
                            <img src="/images/github.png" height="40px" width="40px" />
                            </a>
                        </li>
                        <li className="marginBottom">
                            <a href="https://www.instagram.com">
                            <img src="/images/instagram.png" height="40px" width="40px" />
                            </a>
                        </li>
                        <li className="marginBottom">
                            <a href="https://linkedin.com/in/lokesh-jangid-a9b1161ab">
                            <img src="/images/linkedin.png" height="40px" width="40px" />
                            </a>
                        </li>
                        <li className="marginBottom">
                            <a href="https://twitter.com/LokeshJ09575482">
                            <img src="/images/twitter.png" height="40px" width="40px" />
                            </a>

                        </li>
                        <li className="marginBottom">
                            <a href="https://www.facebook.com/profile.php?id=100011437129111">
                            <img src="/images/fb.png" height="40px" width="40px" />
                            </a>
                        </li>
                    </ul>
                </Grid>
        </StyledConatiner>
    )
}

export default Home;