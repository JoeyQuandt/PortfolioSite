import { Flex, Icon, Heading } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import Link from 'next/link';
import { PrismicNextLink } from '@prismicio/next';
import type { LayoutDocumentData } from '../../../../prismicio-types';

export function SocialIcons({ data, ...props }: { data: LayoutDocumentData }) {
  return (
    <Flex gap={2.5} {...props}>
      {data.social_icons.map(item => {
        return (
          <PrismicNextLink field={item.link} key={crypto.randomUUID()}>
            <Icon
              as={
                item.social_icon_type === 'github'
                  ? AiFillGithub
                  : item.social_icon_type === 'linkedin'
                    ? AiFillLinkedin
                    : AiFillMail
              }
              boxSize={10}
              _hover={{ color: 'secondary', transition: 'all 0.3s ease' }}
            />
          </PrismicNextLink>
        );
      })}
    </Flex>
  );
}

export function Logo({ data, ...props }: { data: LayoutDocumentData }) {
  return (
    <Link href="/" legacyBehavior {...props}>
      <Flex as="a" mr={2} cursor="pointer" marginTop={5}>
        <Heading
          as="h1"
          fontWeight="700"
          marginBottom={5}
          cursor="pointer"
          _hover={{ color: 'secondary', transition: 'all 0.3s ease' }}
        >
          {data.logo_title}
        </Heading>
      </Flex>
    </Link>
  );
}
