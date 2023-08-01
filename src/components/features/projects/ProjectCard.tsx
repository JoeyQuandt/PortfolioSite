import { useState } from "react"

import { Stack,Image,Tag,Flex,Heading,Grid,Show,Box} from "@chakra-ui/react"


import { LinkTag } from "@/components/shared/link"

type ProjectCardProps = {
    href: string,
    title: string,
    tags: string[],
    github: string,
}

export function ProjectCard({href,title,tags,github} : ProjectCardProps){
    const [isHovering,setIsHovering] = useState(false)

    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };

    return(
        <Stack gap={4} marginBottom={10}>
            <Box backgroundImage={href} width="100%" backgroundSize="cover" minHeight={["253px","253px","253px","400px"]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {
                    isHovering &&                 
                    <Grid placeItems="center" height="100%" width="100%" background="black" opacity="0.75" filter="auto">
                        <Flex flexDirection="column" gap={10} textAlign="center">
                            <LinkTag href={`./${title}`}>View Project</LinkTag>
                            <LinkTag href={github}>View code</LinkTag>
                        </Flex>
                    </Grid>
                }
            </Box>
            <Heading as="h3">{title}</Heading>
            <Flex flexDirection="row" gap="4">
            {
                tags.map((tag)=>{
                    return(
                        <Tag color="gray" key={crypto.randomUUID()} padding="0">{tag}</Tag>
                    )
                })
            }
            </Flex>
            <Show below="lg">
                <Flex gap={4}>
                    <LinkTag href={`./${title}`}>View Project</LinkTag>
                    <LinkTag href={github}>View code</LinkTag>
                </Flex>
            </Show>
        </Stack>
    )
}