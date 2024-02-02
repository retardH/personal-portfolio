'use server';
import EmailForm from '@/email';
import React from 'react';
import { Resend } from 'resend';
import { getErrorMessage } from './utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: any) => {
  console.log('received data === ', data);
  const senderEmail = data.senderEmail as string;
  const message = data.message as string;

  let response;
  try {
    response = resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'hzrni.dev@gmail.com',
      reply_to: senderEmail,
      subject: 'Message from portfolio contact form.',
      react: React.createElement(EmailForm, {
        senderEmail: senderEmail,
        message: message,
      }),
    });

    return {
      data: response,
    };
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
