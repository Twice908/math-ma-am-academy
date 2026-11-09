import { Mail, Phone, MapPin, Send, Clock, ChevronDown, Loader2 } from "lucide-react";
import { useState } from "react";
import { h2Class } from "./Section";
import { DiamondRow } from "./Operators";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    standard: "",
    board: "",
    interest: "",
    message: "",
  });

  const [redirecting, setRedirecting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919011012814"; // replace with your WhatsApp number

    const message = `
    New Enrollment Inquiry

    Student Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Standard: ${formData.standard}
    Board: ${formData.board}
    Interest: ${formData.interest}
    Message: ${formData.message || "No additional message"}
  `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Inline status instead of a blocking alert(); same message, same redirect.
    setRedirecting(true);

    setTimeout(() => {
      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    }, 500);
    setFormData({
      name: "",
      email: "",
      phone: "",
      standard: "",
      board: "",
      interest: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const labelClass = "block text-[13.5px] font-medium text-ink/75 mb-2";
  const chevron = (
    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/45" />
  );

  return (
    <section id="contact" className="relative bg-ink text-white py-24 md:py-36 overflow-hidden grain">
      <div aria-hidden className="absolute inset-0 grid-dark opacity-70" />
      <div aria-hidden data-parallax="0.3" className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-magenta/20 blur-[140px]" />
      <div aria-hidden className="absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-violet/25 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-x-16 lg:gap-y-12 lg:grid-rows-[auto_1fr]">
          {/* Pitch */}
          <div className="lg:col-span-5 lg:row-start-1">
            <div>
              <DiamondRow size={12} className="mb-8" />
              <h2 data-split className={h2Class}>
                Ready to start <span className="font-serif-i text-grad pr-1">learning?</span>
              </h2>
              <p data-reveal className="mt-6 text-lg md:text-xl text-white/60 max-w-md leading-relaxed">
                Get in touch today and take the first step towards academic excellence.
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="order-last lg:order-none lg:col-span-5 lg:row-start-2">
            <div>
              {/* Contact Details */}
              <div data-reveal className="lg:-mt-4">
                <h3 className="sr-only">Get in touch</h3>
                <div className="text-[12px] uppercase tracking-[0.2em] text-white/45 mb-4">Get in touch</div>
                <ul className="divide-y divide-white/10 border-y border-white/10">
                  <li>
                    <a href="tel:+919011012814" className="group flex items-center gap-4 py-4">
                      <span className="w-11 h-11 rounded-xl bg-white/[0.07] border border-white/10 grid place-items-center shrink-0 transition-colors group-hover:bg-white group-hover:text-ink">
                        <Phone className="w-[18px] h-[18px]" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-white/45">Phone</span>
                        <span className="block text-[15.5px] text-white/90 group-hover:text-white">+91 90110 12814</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mathmaamacademy@gmail.com" className="group flex items-center gap-4 py-4">
                      <span className="w-11 h-11 rounded-xl bg-white/[0.07] border border-white/10 grid place-items-center shrink-0 transition-colors group-hover:bg-white group-hover:text-ink">
                        <Mail className="w-[18px] h-[18px]" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-white/45">Email</span>
                        <span className="block text-[15.5px] text-white/90 group-hover:text-white break-words">mathmaamacademy@gmail.com</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://maps.app.goo.gl/egSZWonFv1ga5eu27" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 py-4">
                      <span className="w-11 h-11 rounded-xl bg-white/[0.07] border border-white/10 grid place-items-center shrink-0 transition-colors group-hover:bg-white group-hover:text-ink">
                        <MapPin className="w-[18px] h-[18px]" strokeWidth={1.75} />
                      </span>
                      <span>
                        <span className="block text-xs text-white/45">Address</span>
                        <span className="block text-[15.5px] text-white/90 leading-relaxed group-hover:text-white">
                          Balaji Residency,
                          <br />
                          Pimple Gurav, Pune – 411061
                          <br />
                          Maharashtra, India
                        </span>
                        <span className="block text-xs text-cyan mt-1 group-hover:underline">Open in Maps →</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Timings */}
              <div data-reveal className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-[18px] h-[18px] text-cyan" strokeWidth={1.75} />
                  <h3 className="font-display text-lg font-semibold tracking-[-0.01em]">Class Timings</h3>
                </div>
                <div className="space-y-2.5 text-[15px]">
                  <div className="flex justify-between gap-2 flex-wrap">
                    <span className="text-white/60">Weekdays</span>
                    <span className="font-medium tabular-nums">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2 flex-wrap">
                    <span className="text-white/60">Weekends</span>
                    <span className="font-medium tabular-nums">8:00 AM – 6:00 PM</span>
                  </div>
                </div>
                <p className="mt-4 pt-4 border-t border-white/10 text-sm text-white/50">
                  Flexible batch timings available. Contact us for a
                  personalized schedule.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form — sits right after the pitch on mobile */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2">
            <div
              data-reveal
              className="relative rounded-[1.75rem] md:rounded-[2rem] bg-paper text-ink p-6 sm:p-10 md:p-12 shadow-[0_40px_120px_-30px_rgba(142,91,227,0.45)]"
            >
              <div aria-hidden className="absolute inset-x-10 -top-px h-px bg-grad" />
              <div className="flex items-end justify-between gap-4 mb-8">
                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.035em]">Enroll Now</h3>
                <DiamondRow size={10} className="mb-2" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="field"
                    placeholder="Enter student name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="field"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="field"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="standard" className={labelClass}>
                      Current Standard *
                    </label>
                    <div className="relative">
                      <select
                        id="standard"
                        name="standard"
                        required
                        value={formData.standard}
                        onChange={handleChange}
                        className="field"
                      >
                        <option value="">Select standard</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((std) => (
                          <option key={std} value={`${std}`}>
                            {std}
                            {std === 1
                              ? "st"
                              : std === 2
                                ? "nd"
                                : std === 3
                                  ? "rd"
                                  : "th"}{" "}
                            Standard
                          </option>
                        ))}
                      </select>
                      {chevron}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Board" className={labelClass}>
                      Choose the Board *
                    </label>
                    <div className="relative">
                      <select
                        id="Board"
                        name="board"
                        required
                        value={formData.board}
                        onChange={handleChange}
                        className="field"
                      >
                        <option value="">Select Board of Student</option>
                        <option value="State Board">State Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                      </select>
                      {chevron}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className={labelClass}>
                    Area of Interest *
                  </label>
                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="field"
                    >
                      <option value="">Select area of interest</option>
                      <option value="regular">Regular Classes</option>
                      <option value="scholarship">Scholarship Exam Preparation</option>
                      <option value="olympiad">Olympiad Preparation</option>
                      <option value="german">German Language</option>
                      <option value="japanese">Japanese Language</option>
                      <option value="french">French Language</option>
                    </select>
                    {chevron}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="field resize-none"
                    placeholder="Please share previous year's marks and any subjects you'd like to focus on, so we can tailor our approach."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={redirecting}
                  className={`btn-primary w-full rounded-2xl px-8 py-4 text-[16.5px] ${
                    redirecting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {redirecting ? "Submitted" : "Submit Enrollment"}
                  {redirecting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="btn-arrow w-4 h-4" />
                  )}
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={`text-center text-sm text-violet transition-opacity duration-300 ${
                    redirecting ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {redirecting ? "Redirecting you to the Whatsapp please wait..." : " "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
