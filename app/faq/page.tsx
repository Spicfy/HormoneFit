"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import Link for the buttons

// Consolidate all FAQ data into a single array as shown in the image
const faqData = [
  {
    question: "What is the difference between perimenopause and menopause?",
    answer:
      "Perimenopause is the transitional phase leading up to menopause, typically lasting 4-8 years. During this time, you may experience irregular periods and begin to have symptoms like hot flashes as hormone levels fluctuate. Menopause is officially diagnosed when you've gone 12 consecutive months without a period, marking the end of reproductive years. Post-menopause refers to the years following menopause.",
  },
  {
    question: "How can I manage hot flashes and night sweats?",
    answer:
      "Hot flashes and night sweats can be managed through various approaches including hormone therapy, non-hormonal medications, and lifestyle adjustments like dressing in layers and avoiding triggers.",
  },
  {
    question: "Why am I experiencing mood changes during menopause?",
    answer:
      "Hormonal fluctuations during menopause, particularly drops in estrogen, can impact brain chemistry and lead to mood swings, irritability, anxiety, and even depression. Stress and sleep disturbances can also contribute.",
  },
  {
    question: "What can I do about vaginal dryness and painful intercourse?",
    answer:
      "Vaginal dryness and painful intercourse are common. Options include vaginal estrogen therapy (creams, rings, tablets), lubricants, moisturizers, and certain non-hormonal oral medications.",
  },
  {
    question: "Is hormone replacement therapy (HRT) safe?",
    answer:
      "For most healthy women experiencing menopause symptoms, HRT is considered safe and effective when initiated appropriately and monitored by a healthcare professional. Individual risks and benefits should be discussed with your doctor.",
  },
  {
    question: "Why am I gaining weight during menopause?",
    answer:
      "Menopausal weight gain, particularly around the abdomen, results from several factors: hormonal changes that affect fat distribution, loss of muscle mass that lowers metabolic rate, age-related metabolic slowdown, and lifestyle factors. This midlife weight gain increases risks for heart disease, diabetes, and certain cancers. Management strategies include increasing physical activity (both cardio and strength training), adjusting caloric intake to match changing metabolism, prioritizing protein and fiber, limiting processed foods and alcohol, and managing stress and sleep.",
  },
  {
    question: "What can I do about brain fog and memory issues?",
    answer:
      "Strategies for brain fog include hormone therapy (for some), regular exercise, adequate sleep, a healthy diet, stress management, and cognitive exercises. Discussing persistent concerns with a doctor is important.",
  },
  {
    question: "How does menopause affect my bone health?",
    answer:
      "Estrogen plays a crucial role in maintaining bone density. After menopause, declining estrogen levels can lead to accelerated bone loss, increasing the risk of osteoporosis and fractures. Calcium, Vitamin D, and weight-bearing exercise are vital.",
  },
  {
    question: "What lifestyle changes can help manage menopause symptoms?",
    answer:
      "Lifestyle changes include a balanced diet, regular exercise, stress reduction techniques (e.g., yoga, meditation), adequate sleep, avoiding triggers for hot flashes (e.g., spicy foods, caffeine, alcohol), and quitting smoking.",
  },
  {
    question: "Are there natural or alternative treatments for menopause symptoms?",
    answer:
      "Some women explore natural remedies like black cohosh, soy isoflavones, or evening primrose oil. Lifestyle changes are also natural approaches. It's essential to discuss any alternative treatments with a healthcare provider to ensure safety and effectiveness.",
  },
  {
    question: "How can I improve my sleep during menopause?",
    answer:
      "Improving sleep involves good sleep hygiene (consistent sleep schedule, dark room, no screens before bed), managing hot flashes, stress reduction, and sometimes hormone therapy or other medications if needed.",
  },
  {
    question: "How does menopause affect my heart health?",
    answer:
      "Estrogen has a protective effect on the heart. After menopause, the risk of cardiovascular disease increases due to changes in cholesterol levels, blood pressure, and fat distribution. Maintaining a healthy lifestyle and regular check-ups are crucial.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
                  <button
        className="flex justify-between items-center w-full text-left py-4 font-semibold text-lg text-accent1 hover:text-accent2 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          className={`w-5 h-5 transition-transform duration-200 text-accent1 ${isOpen ? "rotate-180" : ""}`}
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

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <main className="bg-whitetxt min-h-screen font-sans text-blacktxt py-30 px-4 md:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-secondarytxt mb-12">
          Find answers to common questions about menopause symptoms and treatments
        </p>
        <Link
          href="#" // Placeholder for download link
          className="inline-flex items-center bg-transparent border border-accent1 text-accent1 px-6 py-3 rounded-xl font-semibold hover:bg-accent1 hover:text-whitetxt transition mb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download FAQ Guide
        </Link>

        <div className="space-y-4 text-left">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
        ))}
      </div>

        <Link
          href="/quiz" // Placeholder for quiz link
          className="mt-12 inline-block bg-gradient-to-r from-accent1 to-accent2 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:scale-105 hover:shadow-lg transition"
        >
          Take Our Menopause Assessment Quiz
        </Link>
      </div>
    </main>
  );
}
