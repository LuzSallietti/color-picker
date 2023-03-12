import { GlobalStyle } from "./assets/styles/GlobalStyles";
import { Container } from "./assets/styles/StyledComponents";
import Form from "./assets/components/Form";
import Card from "./assets/components/Card";
import { useState } from "react";

function App() {
  const [activeCard, setActiveCard] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    color: "",
  });

  return (
    <>
      <GlobalStyle />
      <Container>       
        <Form
          showUserData={() => setActiveCard(true)}
          handleUserValues={(values) => setUserData(values)}
        />        
        {activeCard && <Card name={userData.name} color={userData.color} />}
      </Container>
    </>
  );
}

export default App;