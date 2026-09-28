import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import TiltCard from './common/TiltCard';
import { Mail, MapPin, Copy, Check, Send, Download, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

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
    // Clear validation error when user begins typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // 1. Name required
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    // 2. Valid email required
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // 3. Phone required
    const phoneTrimmed = formData.phone.trim();
    if (!phoneTrimmed) {
      newErrors.phone = 'Phone number is required';
    } else if (phoneTrimmed.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits)';
    }

    // 4. Subject required
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // 5. Message required
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions while in-flight
    if (isSubmitting) return;

    // Reset feedback states
    setErrorMessage('');

    // Perform validation
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error(
          '[EmailJS] Missing environment variables. Please ensure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY are defined in your .env file.'
        );
        throw new Error('EmailJS credentials are not configured');
      }

      // Send form data to EmailJS template using emailjs.sendForm
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      // Successful submission: show success state and clear the form
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch (err) {
        // Confetti fallback
      }
    } catch (error) {
      console.error('[Contact Form Error]', error);
      setErrorMessage('Unable to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-24 bg-white border-y border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Open for customer enquiries, UI/UX Designer opportunities, and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Contact Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <TiltCard maxTilt={8}>
              <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-7 sm:p-8 space-y-6 shadow-clean-md">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    Direct Contact Details
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    Official coordinates from resume
                  </p>
                </div>

                {/* Email Card with Copy & Direct Mailto */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <div className="flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-xl shadow-sm">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-2.5 min-w-0 hover:text-blue-600 transition-colors"
                      title="Send direct email"
                    >
                      <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-mono text-zinc-800 truncate font-medium">
                        {personalInfo.email}
                      </span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors shrink-0 ml-2"
                      title="Copy Email to Clipboard"
                      aria-label="Copy Email"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-[11px] font-mono text-emerald-600">
                      Email address copied to clipboard!
                    </p>
                  )}
                </div>

                {/* Location Card */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                    Location
                  </span>
                  <div className="flex items-center gap-2.5 p-3.5 bg-white border border-zinc-200 rounded-xl shadow-sm">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-zinc-800">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Target Company & Role Pill */}
                <div className="p-4 bg-white border border-zinc-200 rounded-2xl shadow-sm space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Target Role:</span>
                    <span className="font-bold text-zinc-900">{personalInfo.targetRole}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Target Company:</span>
                    <span className="font-bold text-blue-600">{personalInfo.targetCompany}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Status:</span>
                    <span className="font-semibold text-emerald-600 font-mono">Fresher (2024–2028)</span>
                  </div>
                </div>

                {/* Resume Download Action */}
                <div className="pt-2">
                  <a
                    href={personalInfo.resumePdf}
                    download="Sastha_K_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-blue-600 text-white font-semibold text-xs shadow transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official Resume</span>
                  </a>
                </div>

              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-7 sm:p-9 shadow-clean-md">
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Message Sent!
                  </h3>
                  <p className="text-zinc-700 text-sm sm:text-base font-medium max-w-md mx-auto">
                    Message sent successfully! Thank you for contacting me.
                  </p>
                  <p className="text-zinc-500 text-xs max-w-sm mx-auto">
                    A confirmation email has been dispatched to your inbox, and I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setErrorMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-800 transition-colors shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Hidden field for EmailJS Reply-To compatibility */}
                  <input type="hidden" name="reply_to" value={formData.email} />

                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      Send a Message
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5">
                      Direct customer enquiry for projects, design feedback, or opportunities
                    </p>
                  </div>

                  {/* Error Notification Banner */}
                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2.5 transition-all"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-zinc-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="e.g. Alex Johnson"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-zinc-200 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-zinc-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-zinc-200 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold text-zinc-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-zinc-200 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-xs font-semibold text-zinc-700">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Design Consultation / Job Inquiry"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                          errors.subject ? 'border-red-400 bg-red-50/30' : 'border-zinc-200 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-zinc-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Hello Sastha, I reviewed your portfolio and would like to discuss a project..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-zinc-200 bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 text-white font-semibold text-xs sm:text-sm hover:bg-blue-600 shadow transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

