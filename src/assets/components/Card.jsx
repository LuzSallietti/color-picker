import { ColorContainer } from "../styles/StyledComponents";

const Card = ({ name, color }) => {
  return (
    <>
      <ColorContainer
        width={"395px"}        
        backgroundColor={"#f4f0f8"}
        margin={"16px 0"}
        padding={"16px"}
        borderRadius={"25px"}
        display={"block"}
        textAlign={"center"}
      >
        <h2>¡Hola {name}! &#128515;</h2>
        <p>
          Tu color es <b>#{color}</b>
        </p>
        <ColorContainer
          height={"75px"}
          backgroundColor={`#${color}`}
          borderRadius={"10px"}
          display={"flex"}
        />
      </ColorContainer>
    </>
  );
};

export default Card;
