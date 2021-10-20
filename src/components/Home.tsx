import React from 'react';
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';
import Typed from 'react-typed';
import { Avatar, Grid } from '@material-ui/core';
import avatar from "../lokesh.png"
import Parti from './Parti';


const StyledConatiner = styled(Grid)`
    background: url(lokesh-website/images/site-background.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position:fixed;
    height:100%;

    .icon {
        position:absolute;
        top:1%;
        right:2%;
        list-style: none;
        z-index:1;
    }
    .margin-bottom {
        margin-bottom:0.5em;
    }
`;

const StyledWarpper = styled.div`
    position: absolute;
    top: 35%;
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
        <StyledConatiner container spacing={0}>
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
                            "Freelancer",
                            "Frontend Developer",
                            "Android Native App Developer",
                            "Language and Tools",
                            "React Js",
                            "Vue Js",
                            "Electron",
                            "Prime Vue",
                            "Styled Components",
                            "Material UI",
                            "Core Java"
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </StyledDescription>
            </StyledWarpper>
            <Parti />
            <Grid container justify="center">
                <ul className="icon">
                    <li className="margin-bottom">
                        <a href="https://github.com/lokeshmejangid">
                            <img src="/lokesh-website/images/github.png" height="30px" width="30px" />
                        </a>
                    </li>
                    <li className="margin-bottom">
                        <a href="https://www.instagram.com">
                            <img src="/lokesh-website/images/instagram.png" height="30px" width="30px" />
                        </a>
                    </li>
                    <li className="margin-bottom">
                        <a href="https://linkedin.com/in/lokesh-jangid-a9b1161ab">
                            <img src="/lokesh-website/images/linkedin.png" height="30px" width="30px" />
                        </a>
                    </li>
                    <li className="margin-bottom">
                        <a href="https://twitter.com/LokeshJ09575482">
                            <img src="/lokesh-website/images/twitter.png" height="30px" width="30px" />
                        </a>
                    </li>
                    <li className="margin-bottom">
                        <a href="https://www.facebook.com/profile.php?id=100011437129111">
                            <img src="/lokesh-website/images/fb.png" height="30px" width="30px" />
                        </a>
                    </li>
                </ul>
            </Grid>
        </StyledConatiner>
    )
}

export default Home;