'use client';
import React from 'react';
import SectionHeader from './section-header';
import SubmitBtn from './submit-btn';
import { useSectionView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/actions';

type ContactForm = {
  senderEmail: string;
  message: string;
};

const Contact = () => {
  const { ref } = useSectionView('Contact');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const action: () => void = handleSubmit(async (data) => {
    const { data: response, error } = await sendEmail(data);

    if (data) {
      console.log('email sent successfully!', response);
    } else if (error) {
      console.log('error: ', error);
    }
    reset();
  });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-[min(100%, 38rem)] scroll-mt-28 text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Let&apos;s Connect</SectionHeader>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:hzrni.dev@gmail.com">
          hzrni.dev@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col gap-5 dark:text-black"
        action={action}
      >
        <div className="w-full">
          <input
            type="email"
            {...register('senderEmail', { required: true, maxLength: 50 })}
            className="borderBlack w-full rounded-lg px-4 py-2 transition-all"
            placeholder="example@gmail.com"
          />
          {errors.senderEmail && (
            <div className="w-full text-left text-sm text-red-600">
              {errors.senderEmail.type === 'maxLength'
                ? 'Sender email max length is 50!'
                : 'Sender email is a required field'}
            </div>
          )}
        </div>
        <div className="w-full">
          <textarea
            rows={8}
            placeholder="your message here..."
            className="borderBlack w-full rounded-lg px-4 py-2 transition-all"
            {...register('message', { required: true, maxLength: 500 })}
          />
          {errors.message && (
            <div className="w-full text-left text-sm text-red-600">
              {errors.message.type === 'maxLength'
                ? 'Message max length is 500!'
                : 'Message is a required field!'}
            </div>
          )}
        </div>
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
