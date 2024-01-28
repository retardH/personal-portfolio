import React from 'react';
import SectionHeader from './section-header';
import SubmitBtn from './submit-btn';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-[min(100%, 38rem)] scroll-mt-28 text-center"
    >
      <SectionHeader>Let&apos;s Connect</SectionHeader>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:hzrni.dev@gmail.com">
          hzrni.dev@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col dark:text-black">
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          className="borderBlack rounded-lg px-4 py-2 transition-all"
          placeholder="example@gmail.com"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={8}
          placeholder="your message here..."
          className="borderBlack my-3 rounded-lg px-4 py-2 transition-all"
        />
        <SubmitBtn />
      </form>
    </section>
  );
};

export default Contact;
