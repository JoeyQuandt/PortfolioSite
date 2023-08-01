import { Flex,Icon,Heading} from "@chakra-ui/react";
import { AiFillGithub,AiFillLinkedin,AiFillMail} from 'react-icons/ai';

import Link from "next/link";


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
  
export function SocialIcons({...props}){
    return(
      <Flex gap={2.5} {...props}>
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

export function Logo({...props}){
    return(
        <Link href="/" legacyBehavior {...props}>
            <Flex as="a" mr={2} cursor="pointer" marginTop={5}>
            <Heading as="h1" fontWeight="700" marginBottom={5}>joeyquandt</Heading>
            </Flex>
        </Link>
    )
}