import { Flex } from "@chakra-ui/react";
import { HeroImage } from "./HeroImage";
import { HeroText } from "./HeroText";

export function Hero() {
  return (
    <Flex
      justifyContent={["center", "center", "space-between"]}
      alignItems="center"
      flexDirection={["column", "column", "row-reverse"]}
    >
      <HeroImage href={"./images/me.png"} alt="me" />
      <HeroText />
    </Flex>
  );
}
