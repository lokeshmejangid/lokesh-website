import React from "react";
import Landing from "./Landing";
import Sidebar from "./components/Sidebar"
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
`;

const SidebarContainer = styled.div`
  width:80px;
`;

const LandingPageContainer = styled.div`
  height:100%;
`;

function App() {
  return (
    <Container>
      {/* <SidebarContainer>
        <Sidebar />
      </SidebarContainer> */}
      <LandingPageContainer>
        <Landing />
      </LandingPageContainer>
    </Container>
  );
}

export default App;
