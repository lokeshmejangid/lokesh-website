import React from 'react';
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';
import Typed from 'react-typed';
import { Avatar, Grid } from '@material-ui/core';
import backgroundImg from '../../public/images/site-background.jpg';
import avatar from "../lokesh.png";

const StyledConatiner = styled(Grid)`
    
`;
const StyledWarpper = styled.div`
    position: absolute;
    top: 34%;
    left: 50%;
    width:100vw;
    text-align: center;
    transform: translate(-50%, 50%);
`;
const StyledAvtar = styled(Avatar)`
    width:7em !important;
    height:7em !important;
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
        </StyledConatiner>
    )
}

export default Home;