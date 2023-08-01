import { Flex, Grid, Heading, Input, Stack, Textarea } from "@chakra-ui/react"
import { ProjectCard } from "./ProjectCard"
import { LinkTag } from "@/components/shared/link"

const ProjectsData = [
    {
        href: "./images/project.png",
        title: "Design Portfolio",
        tags: ["HTML","CSS"],
        github: "https://github.com/JoeyQuandt"
    },
    {
        href: "./images/project.png",
        title: "Design Portfolio",
        tags: ["HTML","CSS"],
        github: "https://github.com/JoeyQuandt"
    },
    {
        href: "./images/project.png",
        title: "Design Portfolio",
        tags: ["HTML","CSS","JavaScript","React"],
        github: "https://github.com/JoeyQuandt"
    },
    {
        href: "./images/project.png",
        title: "Design Portfolio",
        tags: ["HTML","CSS","JavaScript","React"],
        github: "https://github.com/JoeyQuandt"
    },


]


export function Projects(){
    return(
        <Stack color="white" marginTop={{lg:24}}>
            <Flex justifyContent="space-between" marginBottom={10} alignItems="center">
                <Heading as="h2" fontSize={[40,50,60]}>Projects</Heading>
                <LinkTag href="./contact">Contact Me</LinkTag>
            </Flex>
            <Grid templateColumns={{md:"repeat(2,1fr)"}} gap={5}>
                {
                    ProjectsData.map((item)=>{
                        return(
                            <ProjectCard key={crypto.randomUUID()} href={item.href} title={item.title} tags={item.tags} github={item.github}/>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
}