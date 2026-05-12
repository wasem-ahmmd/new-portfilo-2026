"use client";

import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-linear-to-b from-white via-[#FFF8F2] to-white overflow-hidden"
    >
      {/* Soft brand glow background */}
      <div className="absolute top-1/4 -right-32 w-md h-112 bg-[#D1701F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-md h-112 bg-[#000000]/5 rounded-full blur-3xl pointer-events-none" />
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D1701F]/10 border border-[#D1701F]/20 text-[#D1701F] text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D1701F] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#D1701F]" />
            </span>
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] mb-5">
            Let&apos;s build{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-[#D1701F] to-[#000000] bg-clip-text text-transparent">
                something great
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-2"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,0 100,4 T200,3"
                  stroke="#D1701F"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Have a project in mind or just want to chat? I&apos;m always open to
            new opportunities and collaborations.
          </p>
        </div>

        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Left: Info panel (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            {/* Availability hero card */}
            <div className="relative overflow-hidden bg-gray-950 text-white rounded-2xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
              {/* Decorative blob */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#D1701F]/30 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#D1701F]/20 border border-[#D1701F]/30 text-[#D1701F] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1701F] animate-pulse" />
                  Available
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-2 tracking-tight">
                  Currently accepting new projects.
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  Typically replies within{" "}
                  <span className="text-white font-semibold">24 hours</span>.
                </p>
                <a
                  href="mailto:wasemahmmd@gmail.com"
                  className="inline-flex items-center gap-2 text-[#D1701F] text-sm font-semibold hover:gap-3 transition-all"
                >
                  Start a conversation
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Compact contact rows */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <InfoRow
                icon="email"
                label="Email"
                value="wasemahmmd@gmail.com"
                href="mailto:wasemahmmd@gmail.com"
              />
              <InfoRow
                icon="phone"
                label="Phone"
                value="+91 78893 27898"
                href="tel:+917889327898"
              />
              <InfoRow
                icon="location"
                label="Location"
                value="Mendhar, Poonch, J&K, India"
              />
            </div>

            {/* Social */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-500">
                  Follow Me
                </span>
                <div className="flex gap-2.5">
                  <SocialLink href="https://github.com" label="GitHub">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://linkedin.com" label="LinkedIn">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </SocialLink>
                  <SocialLink
                    href="https://www.facebook.com/share/16vAXHzQX4/"
                    label="Facebook"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </SocialLink>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (3 cols) */}
          <div className="lg:col-span-3 relative">
            {/* Decorative accent corner */}
            <div
              aria-hidden
              className="absolute -top-3 -right-3 w-24 h-24 rounded-2xl bg-linear-to-br from-[#D1701F] to-[#000000] opacity-10 blur-2xl"
            />
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">
                    Send me a message
                  </h3>
                  <p className="text-sm text-gray-500">
                    Fill out the form and I&apos;ll get back to you soon.
                  </p>
                </div>
                <span className="hidden md:flex w-11 h-11 rounded-xl bg-linear-to-br from-[#D1701F] to-[#000000] items-center justify-center shadow-[0_4px_14px_rgba(209,112,31,0.35)]">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>

              <form
                ref={formRef}
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <Field
                    id="name"
                    label="Your Name"
                    placeholder="John Doe"
                    type="text"
                    focused={focused}
                    setFocused={setFocused}
                  />
                  <Field
                    id="email"
                    label="Email Address"
                    placeholder="john@example.com"
                    type="email"
                    focused={focused}
                    setFocused={setFocused}
                  />
                </div>

                <Field
                  id="subject"
                  label="Subject"
                  placeholder="Project inquiry"
                  type="text"
                  focused={focused}
                  setFocused={setFocused}
                />

                <Field
                  id="message"
                  label="Your Message"
                  placeholder="Tell me about your project, timeline and budget..."
                  textarea
                  focused={focused}
                  setFocused={setFocused}
                />

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#D1701F] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Your information is safe with me.
                  </p>
                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-linear-to-br from-[#D1701F] to-[#000000] text-white font-semibold text-sm rounded-full px-7 py-3.5 shadow-[0_4px_14px_rgba(209,112,31,0.35)] hover:shadow-[0_8px_24px_rgba(209,112,31,0.5)] hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Compact contact row used in info card ---------- */
function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const iconSvg = {
    email: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    location: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    phone: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  }[icon];

  const content = (
    <div className="group flex items-center gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-[#FFF8F2] transition-colors duration-300">
      <span className="w-10 h-10 rounded-xl bg-[#D1701F]/10 flex items-center justify-center text-[#D1701F] group-hover:bg-[#D1701F] group-hover:text-white transition-colors duration-300 shrink-0">
        {iconSvg}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-0.5">
          {label}
        </div>
        <div className="text-sm font-semibold text-gray-900 truncate group-hover:text-[#D1701F] transition-colors duration-300">
          {value}
        </div>
      </div>
      {href && (
        <svg
          className="w-4 h-4 text-gray-300 group-hover:text-[#D1701F] group-hover:translate-x-0.5 transition-all duration-300 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}

/* ---------- Field with floating-ish label ---------- */
function Field({
  id,
  label,
  placeholder,
  type = "text",
  textarea,
  focused,
  setFocused,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  focused: string | null;
  setFocused: (v: string | null) => void;
}) {
  const isActive = focused === id;
  const sharedClass = `peer w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none transition-all duration-200 placeholder:text-gray-400 ${
    isActive
      ? "border-[#D1701F] bg-white shadow-[0_0_0_4px_rgba(209,112,31,0.1)]"
      : "border-gray-200 hover:border-gray-300"
  }`;

  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-xs font-semibold tracking-wide mb-2 transition-colors duration-200 ${
          isActive ? "text-[#D1701F]" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          className={`${sharedClass} resize-none`}
          placeholder={placeholder}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={sharedClass}
          placeholder={placeholder}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
        />
      )}
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#D1701F] hover:border-[#D1701F] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
      aria-label={label}
    >
      {children}
    </a>
  );
}
