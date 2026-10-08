import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import MagneticButton from './common/MagneticButton';

// EmailJS Vite Environment Variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});
  const shouldReduceMotion = useReducedMotion();
  const editorialEase = [0.16, 1, 0.3, 1];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneTrimmed = formData.phone.trim();
    if (!phoneTrimmed) {
      newErrors.phone = 'Phone number is required';
    } else if (phoneTrimmed.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits)';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMessage('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('[EmailJS] Missing environment variables.');
        throw new Error('EmailJS credentials are not configured');
      }

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      if (formRef.current) {
        formRef.current.reset();
      }
      setErrors({});

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#8F0028', '#F2E5D1', '#D64F63', '#1F1F1F'],
        });
      } catch (err) {}
    } catch (error) {
      console.error('[Contact Form Error]', error);
      setErrorMessage('Unable to send your message right now. Please reach out directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FCF8F2] border-b border-[#F2E5D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Product CTA Card Container */}
        <div className="bg-white border border-[#F2E5D1] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading & Introduction */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono text-[#8F0028] font-bold tracking-widest uppercase block mb-3">
                  05 — INITIATE COLLABORATION
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-black text-[#1F1F1F] tracking-tight leading-tight">
                  Let's build something meaningful.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#1F1F1F]/75 leading-relaxed font-normal">
                Available for UI/UX Designer (Fresher) positions, internships, and collaborative software projects. Target company: <strong className="text-[#8F0028] font-bold">{personalInfo.targetCompany}</strong>.
              </p>

              {/* Direct Info Pills */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between p-3.5 bg-[#FAF4EB] border border-[#F2E5D1] rounded-xl text-xs">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#8F0028]" />
                    <span className="font-mono font-bold text-[#1F1F1F]">{personalInfo.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-2 py-0.5 text-[10px] font-mono font-bold text-[#8F0028] hover:bg-[#8F0028] hover:text-white rounded transition-colors cursor-pointer"
                  >
                    {copied ? 'COPIED' : 'COPY'}
                  </button>
                </div>

                <div className="p-3.5 bg-[#FAF4EB] border border-[#F2E5D1] rounded-xl flex items-center gap-2.5 text-xs font-mono text-[#666666]">
                  <MapPin className="w-4 h-4 text-[#8F0028]" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7 text-left">
              {/* Success Message Banner */}
              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-[#FAF4EB] border border-[#8F0028] text-[#8F0028] text-xs font-mono font-bold flex items-center justify-between">
                  <span>Message dispatched successfully! Sastha will reply promptly.</span>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="text-xs underline cursor-pointer"
                  >
                    Send another
                  </button>
                </div>
              )}

              {/* Error Message Banner */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* The Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-mono font-bold text-[#1F1F1F] uppercase tracking-wider block">
                      FULL NAME <span className="text-[#8F0028]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Alex Rivera"
                      className={`w-full px-4 py-3 bg-[#FAF4EB] border rounded-xl text-xs sm:text-sm text-[#1F1F1F] placeholder-[#8A8A8A] focus:outline-none focus:bg-white transition-all ${
                        errors.name ? 'border-red-400' : 'border-[#F2E5D1] focus:border-[#8F0028]'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] font-mono text-red-600 block">{errors.name}</span>}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-mono font-bold text-[#1F1F1F] uppercase tracking-wider block">
                      EMAIL ADDRESS <span className="text-[#8F0028]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 bg-[#FAF4EB] border rounded-xl text-xs sm:text-sm text-[#1F1F1F] placeholder-[#8A8A8A] focus:outline-none focus:bg-white transition-all ${
                        errors.email ? 'border-red-400' : 'border-[#F2E5D1] focus:border-[#8F0028]'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] font-mono text-red-600 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-mono font-bold text-[#1F1F1F] uppercase tracking-wider block">
                      PHONE NUMBER <span className="text-[#8F0028]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 bg-[#FAF4EB] border rounded-xl text-xs sm:text-sm text-[#1F1F1F] placeholder-[#8A8A8A] focus:outline-none focus:bg-white transition-all ${
                        errors.phone ? 'border-red-400' : 'border-[#F2E5D1] focus:border-[#8F0028]'
                      }`}
                    />
                    {errors.phone && <span className="text-[11px] font-mono text-red-600 block">{errors.phone}</span>}
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-xs font-mono font-bold text-[#1F1F1F] uppercase tracking-wider block">
                      SUBJECT / INQUIRY <span className="text-[#8F0028]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="UI/UX Fresher Opportunity"
                      className={`w-full px-4 py-3 bg-[#FAF4EB] border rounded-xl text-xs sm:text-sm text-[#1F1F1F] placeholder-[#8A8A8A] focus:outline-none focus:bg-white transition-all ${
                        errors.subject ? 'border-red-400' : 'border-[#F2E5D1] focus:border-[#8F0028]'
                      }`}
                    />
                    {errors.subject && <span className="text-[11px] font-mono text-red-600 block">{errors.subject}</span>}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-mono font-bold text-[#1F1F1F] uppercase tracking-wider block">
                    MESSAGE <span className="text-[#8F0028]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Share role details, scope, or timeline..."
                    className={`w-full px-4 py-3 bg-[#FAF4EB] border rounded-xl text-xs sm:text-sm text-[#1F1F1F] placeholder-[#8A8A8A] focus:outline-none focus:bg-white transition-all resize-none ${
                      errors.message ? 'border-red-400' : 'border-[#F2E5D1] focus:border-[#8F0028]'
                    }`}
                  />
                  {errors.message && <span className="text-[11px] font-mono text-red-600 block">{errors.message}</span>}
                </div>

                {/* Send Message Button */}
                <div className="pt-2">
                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#8F0028] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#5E001B] transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
