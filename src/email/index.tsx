import {
  Button,
  Html,
  Head,
  Body,
  Preview,
  Container,
  Heading,
  Text,
  Hr,
  Section,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

interface Props {
  senderEmail: string;
  message: string;
}

const Email: React.FC<Props> = ({ senderEmail, message }) => {
  return (
    <Html>
      <Head />
      <Preview>TNew message from your portfolio site.</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading>
                You received the following message from the contact form.
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender email is {senderEmail}.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
