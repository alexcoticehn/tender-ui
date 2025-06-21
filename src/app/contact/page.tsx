"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    interest: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:megan@tendercounselling.ca?subject=New Contact Form Submission&body=Name: ${form.name}%0DEmail: ${form.email}%0DInterest: ${form.interest}%0DMessage: ${form.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#4b3f32] font-sans">
        <h1 className="text-3xl font-semibold text-center mb-8">Get in Touch</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-[#e5d5c3] rounded px-4 py-2" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-[#e5d5c3] rounded px-4 py-2" />
          </div>

          <div>
            <label className="block mb-1 font-medium">What are you interested in?</label>
            <select name="interest" value={form.interest} onChange={handleChange} required className="w-full border border-[#e5d5c3] rounded px-4 py-2">
              <option value="">-- Please choose --</option>
              <option value="Individual Counselling">Individual Counselling</option>
              <option value="Couples Counselling">Couples Counselling</option>
              <option value="EMDR Therapy">EMDR Therapy</option>
              <option value="Free 15-minute Consultation">Free 15-minute Consultation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea name="message" rows={5} value={form.message} onChange={handleChange} required className="w-full border border-[#e5d5c3] rounded px-4 py-2"></textarea>
          </div>

          <button type="submit" className="bg-[#e2725b] text-white px-6 py-2 rounded hover:bg-[#cf5c46] transition">Send Message</button>
        </form>
    </div>
  );
}


