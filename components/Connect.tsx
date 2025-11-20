"use client";

import { contactData } from '@/lib/siteData';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div id="contact" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
            <div className="md:w-4/5 lg:w-3/4">
                <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text={contactData.mainData.title}>{contactData.mainData.title2}</h6>
                <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">{contactData.mainData.title3}</h2>
                <p className="text-pColor dark:text-white/70">{contactData.mainData.description}</p>
            </div>
            <div className="xl:w-4/5 mt-6">
                <ul className="space-y-3">
                    <li className="list-none inline-block px-4 py-2 border border-black/20 border-dashed rounded-full me-2 text-pColor hover:text-black transition ease-linear duration-100 dark:text-white/70 dark:border-white/20 dark:hover:text-white">Phone: {contactData.mainData.phone}</li>
                    <li className="list-none inline-block px-4 py-2 border border-black/20 border-dashed rounded-full me-2 text-pColor hover:text-black transition ease-linear duration-100 dark:text-white/70 dark:border-white/20 dark:hover:text-white">Email: {contactData.mainData.email}</li>
                    <li className="list-none inline-block px-4 py-2 border border-black/20 border-dashed rounded-full me-2 text-pColor hover:text-black transition ease-linear duration-100 dark:text-white/70 dark:border-white/20 dark:hover:text-white">Address: {contactData.mainData.address}</li>
                </ul>
            </div>
            {/* Contact Form */}
            <form method="post" id="contactform" className="space-y-8 mt-8 lg:mt-12" onSubmit={handleSubmit}>
                <div className="flex w-full space-x-4">
                    <div className="w-1/2">
                        <input className="bg-transparent w-full border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white" type="text" id="name" name="name" placeholder="Name" onChange={handleChange} required />
                    </div>
                    <div className="w-1/2">
                        <input className="bg-transparent w-full border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white" type="email" id="email" name="email" placeholder="E-Mail" onChange={handleChange} required />
                    </div>
                </div>
                <input className="w-full bg-transparent border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white" type="text" id="subject" name="subject" placeholder="Subject" onChange={handleChange} required />
                <textarea className="bg-transparent w-full h-[200px] border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white" name="message" id="message" placeholder="Message" onChange={handleChange}></textarea>
                <button className="inline-block bg-black text-white px-8 py-4 rounded-full font-mono text-sm transition linear duration-100 dark:bg-white/15 dark:hover:bg-white/20" type="submit">Send Message</button>
            </form>
            {/* Submit result */}
            <div className="submit-result">
                {status === 'success' && (
                    <span id="success" className="transition-all duration-200 ease-out text-green-700">Thank you! Your Message has been sent.</span>
                )}
                {status === 'error' && (
                    <span id="error" className="transition-all duration-200 ease-out text-red-600">Something went wrong. Please try again!</span>
                )}
            </div>
        </div>
    );
};

export default Contact;
