import type { NextApiRequest, NextApiResponse } from 'next';
import { MailTemplate } from '../email/MailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_EMAIL_API);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const emailData = req.body;
  try {
    const welcome = await resend.emails.send({
      from: 'JoeyQuandt <response@joeyquandt.nl>',
      to: emailData.email,
      subject: 'Mail succesfully send!',
      react: MailTemplate({ response: false }),
    });

    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['joeyquandt@outlook.com'],
      subject: 'Mail received!',
      react: MailTemplate({
        response: true,
        name: emailData.name,
        message: emailData.message,
        email: emailData.email,
      }),
    });

    const data = {
      welcome: welcome,
      response: response,
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
