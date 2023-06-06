import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import Box from "../components/Box/Box.js";

export default function HomePage() {
  return (
    <div>
      <Box colorVariant="green" />
      <Box colorVariant="black" />
      <Box colorVariant="pink" />
      <Box colorVariant="orange" />
      <Box colorVariant="lightblue" />
      <p>previous stuff:</p>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
    </div>
  );
}
