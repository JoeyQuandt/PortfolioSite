import { Box, BoxProps, Container, Flex, Heading, forwardRef } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillGithub,AiFillLinkedin,AiFillMail} from 'react-icons/ai';


const items = [
  {
    href: 'https://github.com/JoeyQuandt',
    icon: AiFillGithub,
  },
  {
    href: 'https://www.linkedin.com/in/joey-quandt/',
    icon: AiFillLinkedin,
  },
  {
    href: 'mailto: joeyquandt@outlook.com',
    icon: AiFillMail,
  },
];


function Navigation(){
  return(
    <Flex gap={2.5}>
      {
        items.map((item)=>{
          return(
            <Link href={item.href} key={crypto.randomUUID()}>
              <Icon as={item.icon} boxSize={10}/>
            </Link>
          )
        })
      }
    </Flex>
  )
}


export function Header() {
  return (
    <Box as="header" color="white">
      <Container>
      <Flex flexShrink={0} alignItems="center" flexDirection={["column","row"]} justifyContent={["center","space-between","space-between"]}>
          <Link href="/" legacyBehavior>
            <Flex as="a" mr={2} cursor="pointer" marginTop={5}>
              <Heading as="h1" fontWeight="700" marginBottom={5}>joeyquandt</Heading>
            </Flex>
          </Link>
          <Navigation/>
        </Flex>
      </Container>
    </Box>
  );
}
