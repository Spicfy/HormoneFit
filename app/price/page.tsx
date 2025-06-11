"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full text-left py-4 font-semibold text-lg text-blacktxt hover:text-purple-700 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          className={`w-5 h-5 transition-transform duration-200 text-purple-600 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
          ></path>
        </svg>
      </button>
      {isOpen && (
        <p className="text-secondarytxt text-base pb-4 pr-6 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default function PricePage() {
  const [isYearly, setIsYearly] = useState(false);

  const faqData = [
    {
      question: "Is HormoneFit covered by insurance?",
      answer:
        "Many extended health plans cover our services. We provide detailed receipts that you can submit to your insurance provider for reimbursement. We recommend checking with your provider for specific coverage details.",
    },
    {
      question: "Can I cancel my membership anytime?",
      answer:
        "Yes, you can cancel your monthly membership at any time. Annual memberships can be cancelled within the first 30 days for a full refund, or after that for a prorated refund minus a small administrative fee.",
    },
    {
      question: "How quickly can I see a doctor?",
      answer:
        "Most members can book same-day or next-day appointments. Urgent care appointments are typically available within hours. Our goal is to connect you with a specialist as quickly as possible.",
    },
    {
      question: "Are your doctors licensed in Canada?",
      answer:
        "Yes, all of our doctors are fully licensed to practice medicine in Canada and have specialized training in menopause care. We have doctors licensed in every province and territory.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-white text-blacktxt py-20 px-4 md:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Personalized Care for Your Menopause Journey</h1>
        <p className="text-lg text-secondarytxt mb-12">Choose the option that best supports your wellness needs</p>

        <div className="flex items-center justify-center mb-10">
            <button
                className={`px-6 py-2 rounded-full font-semibold text-base transition-all ${
                    !isYearly ? "bg-whitetxt text-accent1 shadow" : "bg-transparent text-secondarytxt"
                }`}
                onClick={() => setIsYearly(false)}
            >
                Monthly
            </button>
            <button
                className={`px-6 py-2 rounded-full font-semibold text-base transition-all ml-2 ${
                    isYearly ? "bg-whitetxt text-accent1 shadow" : "bg-transparent text-secondarytxt"
                }`}
                onClick={() => setIsYearly(true)}
            >
                Annual <span className="ml-1 text-accent1 font-medium">{isYearly && "Save 15%"}</span>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-whitetxt rounded-2xl shadow p-8 flex flex-col items-center border border-accent2/30">
            <h3 className="text-xl font-bold text-blacktxt mb-2">HormoneFit</h3>
            <p className="text-secondarytxt mb-4">For occasional care needs</p>
            <div className="text-4xl font-bold text-blacktxt mb-1">$125 <span className="text-base font-normal text-secondarytxt">per visit</span></div>
            <ul className="text-secondarytxt text-base space-y-2 mb-8 mt-4 w-full text-left">
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>One-time virtual consultation</li>
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>Personalized treatment plan</li>
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>Prescription if needed</li>
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>24-hour follow-up support</li>
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>Nutritional counselling</li>
            </ul>
            <Link href="#" className="border border-accent2 text-purple-600 font-semibold rounded-lg px-6 py-2 mt-auto hover:bg-purple-50 transition">Book a Visit</Link>
          </div>

          <div className="bg-whitetxt rounded-2xl shadow-lg p-8 flex flex-col items-center border border-accent2 relative scale-105 z-10">
            <span className="absolute top-4 right-4 bg-accent1 text-white text-xs font-bold px-3 py-0.9 rounded-full">★ Most Popular</span>
            <h3 className="text-xl font-bold text-blacktxt mb-2">HormoneFit+</h3>
            <p className="text-secondarytxt mb-4">Comprehensive ongoing care</p>
            <div className="text-4xl font-bold text-blacktxt mb-1">
              {isYearly ? "$499" : "$49"}
              <span className="text-base font-normal text-secondarytxt">{isYearly ? " per year" : " per month"}</span>
            </div>
            {isYearly && (
              <div className="text-xs text-purple-600 font-semibold mb-2">2 months free</div>
            )}
            <ul className="text-secondarytxt text-base space-y-2 mb-8 mt-4 w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 text-left">
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>Unlimited virtual consultations</li>
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>Ongoing treatment adjustments</li>
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>Prescription renewals</li>
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>Priority scheduling</li>
              <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>{isYearly ? "15% off all products" : "10% off all products"}</li>
              {isYearly && (
                <>
                  <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>Free shipping on all products</li>
                  <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span>Annual comprehensive review</li>
                </>
              )}
            </ul>
            <Link href="#" className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-lg px-6 py-3 mt-auto hover:opacity-90 transition">
              {isYearly ? "Start Annual Membership" : "Start Monthly Membership"}
            </Link>
          </div>

          <div className="bg-whitetxt rounded-2xl shadow p-8 flex flex-col items-center border border-accent2/30">
            <h3 className="text-xl font-bold text-blacktxt mb-2">Individual Services</h3>
            <p className="text-secondarytxt mb-4">Pay only for what you need</p>
            <ul className="text-secondarytxt text-base space-y-2 mb-8 mt-4 w-full text-left">
              <li className="flex justify-between"><span>Initial Consultation</span><span className="font-semibold">$149</span></li>
              <li className="flex justify-between"><span>Follow-up</span><span className="font-semibold">$89</span></li>
              <li className="flex justify-between"><span>Urgent Care</span><span className="font-semibold">$199</span></li>
              <li className="flex justify-between"><span>Prescription Renewal</span><span className="font-semibold">$49</span></li>
              <li className="flex justify-between"><span>Lab Work Review</span><span className="font-semibold">$69</span></li>
            </ul>
            <Link href="#" className="border border-accent2 text-purple-600 font-semibold rounded-lg px-6 py-2 mt-auto hover:bg-purple-50 transition">Book a Service</Link>
          </div>
        </div>

        <div className="mt-12 text-center text-secondarytxt text-base">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span>All plans include access to our secure patient portal and educational resources</span>
            <span className="flex items-center gap-2 text-purple-600 text-sm">
              ✓ No hidden fees
              <span className="text-gray-400">|</span>
              Cancel anytime
              <span className="text-gray-400">|</span>
              Insurance receipts provided
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mt-20 mb-8 text-blacktxt">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-4xl mx-auto text-left">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </main>
  );
}
