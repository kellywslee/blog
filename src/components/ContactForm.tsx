'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner from './Banner';
import type { BannerData } from './Banner';

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: 'Message Sent!', state: 'success' });
    setTimeout(() => setBanner(null), 3000);
  };

  return (
    <section className="flex flex-col items-center w-full">
      {banner && <Banner banner={banner} />}
      <form onSubmit={onSubmit} className="flex flex-col w-full">
        <label htmlFor="from" className="font-bold mb-2">
          Your Email
        </label>
        <input
          id="from"
          type="email"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="mb-2 p-2 rounded-sm"
        />
        <label htmlFor="subject" className="font-bold mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className="mb-2 p-2 rounded-sm"
        />
        <label htmlFor="message" className="font-bold mb-2">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className="mb-2 p-2 rounded-sm"
        />
        <button
          type="submit"
          className="bg-cyan-500 text-sm md:text-base p-2 rounded-lg font-bold hover:bg-cyan-700 hover:text-cyan-50 transition-all"
        >
          Send
        </button>
      </form>
    </section>
  );
}
