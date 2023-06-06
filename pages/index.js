import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import Box from "../components/Box/Box.js";
import Container from "../components/Container/Container.js";

export default function HomePage() {
  return (
    <Container direction="row" wrap="wrap">
      <Box colorVariant="green" />
      <Box colorVariant="black" />
      <Box colorVariant="pink" />
      <Box colorVariant="orange" />
      <Box colorVariant="lightblue" />
      <p>previous stuff:</p>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
    </Container>
  );
}
