import { Stack, Heading,Text} from "@chakra-ui/react"
import { LinkTag } from "@/components/shared/link"




export function HeroText(){
    return(
        <Stack color="white" textAlign={["center","left"]} position="relative" width={{sm:"445px"}} >
            <Heading as="h1" width={{sm:"310px"}}>Nice to meet you! I'm <LinkTag href="https://www.linkedin.com/in/joey-quandt/" textTransform={"capitalize"} textDecorationThickness={"4px"}>Joey Quandt.</LinkTag></Heading>
            <Text marginBlock="6">
            Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
            </Text>
            <LinkTag href="https://chakra-ui.com/docs/styled-system/theme">
                Contact me
            </LinkTag>
        </Stack>
    )
}