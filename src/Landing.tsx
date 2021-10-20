import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Parti from "./components/Parti";
import Home from "./components/Home";

const HomeContainer = styled(Grid)`
    
`;

const Landing = () => {
    return(
        <>
            <HomeContainer container spacing={0}>
                <Home />
            </HomeContainer>
        </>
    );
}

export default Landing;