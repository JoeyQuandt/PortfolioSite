import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

type MailTemplateProps = {
  response: boolean;
  name?: string;
  email?: string;
  message?: string;
};

export const MailTemplate = ({ response, name, email, message }: MailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>{response ? 'Email received' : 'Email succesfully send'}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: '#151515',
                secondary: '#4EE1A0',
                tertiary: '#242424',
                error: '#FF6F5B',
                black: '#000000',
                white: '#ffffff',
                gray: '#d9d9d9',
                succes: '#4EE1A0',
                warning: '#FF6F5B',
                neutral: '#E5F4FD',
                transparent: 'transparent',
                current: 'currentColor',
              },
              fontFamily: {
                sans: ['ui-sans-serif', 'system-ui'],
                'space-grotesk': ['Space Grotesk', 'sans-serif'],
              },
            },
          },
        }}
      >
        <Body className="bg-primary my-auto mx-auto font-space-grotesk text-white relative overflow-hidden">
          <Container className="p-[20px] max-w-screen-sm flex justify-center items-center text-center">
            <Section className="mt-[32px] mb-[32px] flex justify-center items-center text-center">
              <Img
                src="https://media.graphassets.com/1o8gz3J0SAyaTwCVo97g"
                width={150}
                alt="logo"
                className="m-auto"
              />
              <Heading>
                {response
                  ? `You got a message from ${name} with ${email} `
                  : 'Mail succesfully received!'}
              </Heading>
            </Section>
            <Section>
              {response && <Heading>Message:</Heading>}
              <Text className="text-center text-lg">
                {response
                  ? message
                  : `Thank you for getting in touch with me I'm excited to hear from you
                    Feel free to explore my portfolio in the meantime to get a better understanding of my front-end design work and creative projects.
                    Thank you for your understanding, and I'm looking forward to connecting with you soon!
                `}
              </Text>
            </Section>
            <Section className="mt-[446px] flex flex-col justify-center items-center text-center">
              <Text className="text-center text-lg">Copyright © 2023. All Rights Reserved.</Text>
              <Heading>joeyquandt</Heading>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
