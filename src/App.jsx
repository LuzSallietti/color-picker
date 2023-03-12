import { GlobalStyle } from "./assets/styles/GlobalStyles"
import { Container} from "./assets/styles/StyledComponents"
import Form from "./assets/components/Form"
import Card from "./assets/components/Card"
import { useState } from "react"

function App() {
  const [validated, setValidated] = useState(false);
  

  return (
    <>
    <GlobalStyle/>    
    <Container>      
     <Form></Form>
     {validated && <Card/>}
    </Container>
    </>    
  )
}

export default App
