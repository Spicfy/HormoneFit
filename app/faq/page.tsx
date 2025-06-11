"use client";

import React, { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}
interface Section {
  section: string;
  faqs: FAQ[];
}

const FAQ_DATA: Section[] = [
  {
    section: "Hormone Fit",
    faqs: [
      { q: "What is Hormone Fit?", a: "HormoneFit is a virtual clinic specializing in personalized menopause care for women across Canada." },
      { q: "Who can use Hormone Fit?", a: "HormoneFit is designed for women experiencing menopause or perimenopause symptoms who want expert, personalized care." },
      { q: "Can I be accurately assessed remotely?", a: "Yes! Our clinicians use comprehensive assessments and secure video visits to understand your symptoms and needs." },
      { q: "Does HormoneFit replace my doctor?", a: "HormoneFit works alongside your primary care provider to offer specialized menopause support." },
      { q: "It's an emergency. What do I do?", a: "If you are experiencing a medical emergency, please call 911 or go to your nearest emergency room." },
    ],
  },
  {
    section: "Online Visits",
    faqs: [
      { q: "How does the visit work?", a: "You'll complete an online assessment and meet with a menopause specialist via secure video call." },
      { q: "How quickly will a healthcare practitioner review my online visit?", a: "Most visits are reviewed within 1-2 business days." },
      { q: "Do I need to complete my online visit at a scheduled time?", a: "You can complete your assessment anytime, and schedule your video visit at your convenience." },
      { q: "I completed my online visit. Now what?", a: "Your care team will review your information and reach out with next steps or a treatment plan." },
      { q: "Can I just get the treatment and skip the online visit?", a: "A virtual assessment is required to ensure safe, personalized care." },
      { q: "Does the online visit require a phone or video appointment?", a: "Most visits are done by secure video, but some follow-ups may be by phone or secure messaging." },
    ],
  },
  {
    section: "Pricing and Payment",
    faqs: [
      { q: "How much is the online visit?", a: "$49 per month for unlimited virtual consultations, plus a one-time $99 program fee." },
      { q: "How much will my treatment cost?", a: "Treatment costs vary based on your personalized plan. All pricing is transparent before you start." },
      { q: "How do I change my credit card information?", a: "You can update your payment details in your secure patient portal." },
      { q: "How much does a checkup visit cost?", a: "Checkup visits are included in your monthly membership." },
      { q: "Why do I see a transaction on my credit card for my denied online visit?", a: "If your visit is not approved, you will not be charged." },
      { q: "Why can't I see medication prices on the website?", a: "Medication prices depend on your insurance and province. Your care team will review all costs with you." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards." },
    ],
  },
  {
    section: "Our Healthcare Practitioners",
    faqs: [
      { q: "How do I communicate with my HormoneFit practitioner?", a: "You can message your care team anytime through your secure portal." },
      { q: "What does your medical team do?", a: "Our team reviews your symptoms, creates your care plan, and supports you throughout your journey." },
      { q: "Who are the practitioners that will be reviewing my online visit?", a: "All practitioners are licensed Canadian healthcare professionals specializing in menopause care." },
      { q: "Can I see the same HormoneFit practitioner after my initial assessment?", a: "We do our best to provide continuity of care with the same provider whenever possible." },
      { q: "Can you refer me to a psychiatrist or psychologist?", a: "If needed, we can help coordinate referrals to mental health specialists." },
    ],
  },
  {
    section: "Privacy and Security",
    faqs: [
      { q: "Is this legal?", a: "Yes, HormoneFit operates in compliance with all Canadian healthcare regulations." },
      { q: "Is this safe?", a: "Your privacy and safety are our top priorities. All data is encrypted and confidential." },
      { q: "Is my information private and secure?", a: "Yes, we use industry-leading security protocols to protect your information." },
      { q: "How is my privacy protected?", a: "We never share your information without your consent." },
      { q: "Can I have my medical records shared with my primary care provider?", a: "Yes, we can securely share your records with your permission." },
    ],
  },
];

export default function FAQPage() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<string | null>(null);

  return (
    <main className="bg-white min-h-screen font-sans pb-0">
      <div className="w-full min-h-screen bg-white text-black px-4 md:px-24 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-left">Frequently Asked Questions</h1>
        {FAQ_DATA.map((section) => (
          <div key={section.section} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-accent1">{section.section}</h2>
            {section.faqs.map((faq, idx) => {
              const uniqueId = `${section.section}-${idx}`;
              const isOpen = openQuestionIndex === uniqueId;
              return (
                <div key={uniqueId} className="border-b border-gray-200 mb-4">
                  <button
                    className={`w-full text-left py-4 flex justify-between items-center transition-colors ${
                      isOpen
                        ? "text-accent1 font-bold text-xl"
                        : "text-black font-medium text-lg"
                    }`}
                    onClick={() =>
                      setOpenQuestionIndex(isOpen ? null : uniqueId)
                    }
                  >
                    {faq.q}
                    <span
                      className={`ml-4 transition-transform duration-200 text-2xl text-gray-400 ${
                        isOpen ? "rotate-180 text-accent1" : ""
                      }`}
                    >
                      ⌄
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-4 text-gray-700 text-base px-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
}
