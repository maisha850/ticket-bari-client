import React from "react";


const faqs = [
  {
    q: "How do I book a ticket on Ticket Bari?",
    a: "Choose your route, select a transport, and confirm your booking. You can review everything in your dashboard.",
  },
  {
    q: "How do I pay for my ticket?",
    a: "Ticket Bari uses Stripe for secure payment. A 'Pay Now' button appears once the vendor approves your booking.",
  },
  {
    q: "Can I cancel a ticket?",
    a: "Cancellation availability depends on the vendor. If allowed, you’ll see a Cancel button in the ticket details.",
  },
  {
    q: "Why is payment disabled after departure?",
    a: "To avoid invalid transactions, payments automatically disable after the scheduled departure time.",
  },
  {
    q: "Where can I see my booked tickets?",
    a: "Go to the 'My Booked Tickets' page to view details, countdown timer, and payment status.",
  },
  {
    q: "What if a vendor rejects my booking?",
    a: "Your booking status will change to 'Rejected' and you won’t need to make any payment.",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-15">

      {/* LEFT – FAQ */}
      <div>
        <h2 className="text-title md:-ml-20 mb-5">
          Ticket Bari – FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="collapse collapse-plus bg-base-200 rounded-xl">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-semibold">
                {item.q}
              </div>
              <div className="collapse-content">
                <p className="text-base leading-relaxed text-gray-600">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT – IMAGE */}
      <div className="flex justify-center">
        <img
          src='https://images.unsplash.com/photo-1728055624777-008a827a4817?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8'
          alt="Ticket Bari FAQ Image"
          className="rounded-2xl shadow-xl w-full h-130 object-cover"
        />
      </div>

    </div>
  );
};

export default FAQ;
