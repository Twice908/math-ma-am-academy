import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    standard: '',
    interest: '',
    message: '',
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
Interest: ${formData.interest}
Message: ${formData.message || "No additional message"}
`;

  const encodedMessage = encodeURIComponent(message);
  
  // alert("Redirecting you to the Whatsapp please wait...");
  
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // window.location.href = whatsappURL;
   setRedirecting(true);

  setTimeout(() => {
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }, 500);

  setFormData({
    name: '',
    email: '',
    phone: '',
    standard: '',
    interest: '',
    message: '',
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Start Learning?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with us today and take the first step towards academic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Enroll Now</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter student name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label htmlFor="standard" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Standard *
                </label>
                <select
                  id="standard"
                  name="standard"
                  required
                  value={formData.standard}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select standard</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((std) => (
                    <option key={std} value={`${std}`}>
                      {std}{std === 1 ? 'st' : std === 2 ? 'nd' : std === 3 ? 'rd' : 'th'} Standard
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder="Any specific requirements or questions..."
                ></textarea>
              </div>

                  {redirecting && (
                  <p className="text-green-600 text-sm text-center">
                  Opening WhatsApp chat...
                  </p>
                  )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Submit Enrollment
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1758685734312-5134968399a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHNjaWVuY2UlMjBlZHVjYXRpb258ZW58MXx8fHwxNzcyMDgzMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mathematics and science education"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Visit Our Campus</h3>
                  <p className="text-white/90">Experience our state-of-the-art facilities</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <div className="text-gray-600">+91 98765 43210</div>
                  <div className="text-gray-600">+91 98765 43211</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-gray-600">info@futurelearn.academy</div>
                  <div className="text-gray-600">admissions@futurelearn.academy</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <div className="text-gray-600">
                    123 Education Street,<br />
                    Knowledge Park, City - 400001<br />
                    Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Class Timings</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">4:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span className="font-semibold">9:00 AM - 9:00 PM</span>
                </div>
                <div className="pt-3 border-t border-white/20">
                  <p className="text-sm text-white/90">
                    Flexible batch timings available. Contact us for personalized schedules.
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
