import { Circle, Divider, Flex } from "@chakra-ui/react"
import { HeroImage } from "./HeroImage"
import { HeroText } from "./HeroText"
import { CircleIcon,OvalIcon } from "@/components/shared/backgroundIcons"



export function Hero(){
    return(
        <Flex justifyContent={["center","center","space-between"]} alignItems="center" flexDirection={["column","row-reverse"]} position="relative">
            <HeroImage href={"./images/me.png"} alt="me"/>
            <HeroText/>
        </Flex>
    )
}