import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

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

    alert("Redirecting you to the Whatsapp please wait...");

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

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

  const inputClass =
    "w-full px-4 py-3 border border-black/10 rounded-xl bg-[#f5f5f7] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-shadow";
  const labelClass = "block text-sm font-medium text-[#1d1d1f]/80 mb-2";

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#f5f5f7]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-4 text-[#1d1d1f]">
            Ready to start learning?
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73]">
            Get in touch today and take the first step towards academic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-sm border border-black/5 overflow-hidden">
            <h3 className="text-2xl font-semibold mb-6 text-[#1d1d1f]">Enroll Now</h3>

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
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter student name"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
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
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label htmlFor="standard" className={labelClass}>
                  Current Standard *
                </label>
                <select
                  id="standard"
                  name="standard"
                  required
                  value={formData.standard}
                  onChange={handleChange}
                  className={inputClass}
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
              </div>

              <div>
                <label htmlFor="Board" className={labelClass}>
                  Choose the Board *
                </label>
                <select
                  id="Board"
                  name="board"
                  required
                  value={formData.board}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select Board of Student</option>
                  <option value="State Board">State Board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                </select>
              </div>

              <div>
                <label htmlFor="interest" className={labelClass}>
                  Area of Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select area of interest</option>
                  <option value="regular">Regular Classes</option>
                  <option value="scholarship">Scholarship Exam Preparation</option>
                  <option value="olympiad">Olympiad Preparation</option>
                  <option value="german">German Language</option>
                  <option value="japanese">Japanese Language</option>
                  <option value="french">French Language</option>
                </select>
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
                  className={`${inputClass} resize-none`}
                  placeholder="Please share previous year's marks and any subjects you'd like to focus on, so we can tailor our approach."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={redirecting}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                className={`w-full bg-[#0071e3] text-white px-8 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group
        ${redirecting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#0077ed]"}`}
              >
                {redirecting ? "Submitted" : "Submit Enrollment"}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-sm border border-black/5 space-y-6 overflow-hidden">
              <h3 className="text-2xl font-semibold text-[#1d1d1f]">Get in touch</h3>

              <div className="flex items-start gap-4">
                <div className="bg-[#f5f5f7] p-3 rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0071e3]" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold mb-1 text-[#1d1d1f]">Phone</div>
                  <div className="text-[#6e6e73] text-sm sm:text-base break-words">
                    +91 90110 12814
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f5f5f7] p-3 rounded-xl flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0071e3]" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold mb-1 text-[#1d1d1f]">Email</div>
                  <div className="text-[#6e6e73] text-sm sm:text-base break-words">
                    mathmaamacademy@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f5f5f7] p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0071e3]" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold mb-1 text-[#1d1d1f]">Address</div>
                  <div className="text-[#6e6e73] text-sm sm:text-base">
                    Balaji Residency,
                    <br />
                    Pimple Gurav, Pune – 411061
                    <br />
                    Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-[#1d1d1f] rounded-3xl p-6 sm:p-9 text-white overflow-hidden">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-white/10 p-2.5 rounded-lg">
                  <Clock className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold">Class Timings</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between gap-2 flex-wrap">
                  <span className="text-sm sm:text-base text-white/70">Weekdays</span>
                  <span className="font-medium text-sm sm:text-base">
                    8:00 AM – 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between gap-2 flex-wrap">
                  <span className="text-sm sm:text-base text-white/70">Weekends</span>
                  <span className="font-medium text-sm sm:text-base">
                    8:00 AM – 6:00 PM
                  </span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-white/60">
                    Flexible batch timings available. Contact us for a
                    personalized schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
