import { Circle, Divider, Flex } from "@chakra-ui/react"
import { HeroImage } from "./HeroImage"
import { HeroText } from "./HeroText"
import { CircleIcon,OvalIcon } from "@/components/shared/backgroundIcons"



export function Hero(){
    return(
        <Flex justifyContent={["center","center","space-between"]} alignItems="center" flexDirection={["column","column","row-reverse"]}>
            <HeroImage href={"./images/me.png"} alt="me"/>
            <HeroText/>
            <OvalIcon position="absolute" top="130" left="0"/>
            <CircleIcon position="absolute" bottom="500" right="0"/>
        </Flex>
    )
}