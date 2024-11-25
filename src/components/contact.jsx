import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcefef] to-[#90e0ef] flex flex-col items-center py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#03045e]">We’re Here to Help</h1>
        <p className="text-lg text-[#0077b6] mt-4">
          Our service team is available Mon-Fri (8 AM - 8 PM STD), and on weekends & holidays (9 AM - 6 PM STD).
        </p>
      </header>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Chat Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-[#0077b6]">Start a Chat</h2>
          <p className="text-[#03045e] mt-2">
            We respond right away during normal business hours.
          </p>
          <button className="mt-4 px-4 py-2 bg-[#0077b6] text-white rounded-lg hover:bg-[#00b4d8] transition">
            Start Chat
          </button>
        </div>

        {/* Call Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-[#0077b6]">Give Us a Call</h2>
          <p className="text-[#03045e] mt-2">We strive to answer within one ring.</p>
          <div className="mt-4">
            <p>
              <strong>Patients:</strong> +91 702041088
            </p>
            <p>
              <strong>Providers:</strong> +91 9359367590
            </p>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-[#0077b6]">Send Us an Email</h2>
          <p className="text-[#03045e] mt-2">We’ll respond within a day.</p>
          <a
            href="mailto:service@zocdoc.com"
            className="mt-4 inline-block px-4 py-2 bg-[#0077b6] text-white rounded-lg hover:bg-[#00b4d8] transition"
          >
            Email Us
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-[#03045e] mb-6">
          Have Questions? We’ve Got Answers
        </h2>
        <button className="px-6 py-3 bg-[#fbb13c] text-[#03045e] rounded-lg hover:bg-[#f8e16c] transition">
          Visit Our Help Center
        </button>
      </section>

      {/* Get Started Section */}
      <footer className="mt-16 bg-[#90e0ef] py-6 w-full text-center">
        <p className="text-[#03045e] text-lg">Are you a practice interested in joining Lifeline Devs?</p>
        <button className="mt-2 px-6 py-3 bg-[#0077b6] text-white rounded-lg hover:bg-[#00b4d8] transition">
          Get Started
        </button>
      </footer>
    </div>
  );
};

export default Contact;
