// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { Navbar } from "@/components/layout/Navbar";

// const faqs = [
//   {
//     question: "What does this platform do?",
//     answer:
//       "Our AI-powered solution simplifies complex legal documents—like rental agreements, loan contracts, and terms of service—into plain language summaries. This helps you understand your rights and obligations before making decisions.",
//   },
//   {
//     question: "Is my data private and secure?",
//     answer:
//       "Yes. Your documents are processed in a private and secure environment. We do not share, sell, or store your personal data beyond what is required to provide the service.",
//   },
//   {
//     question: "Can this replace a lawyer?",
//     answer:
//       "No. Our tool is designed to provide clear explanations and insights into legal documents, but it does not constitute legal advice. For legal disputes or decisions, you should always consult a licensed attorney.",
//   },
//   {
//     question: "Which types of documents can I upload?",
//     answer:
//       "You can upload contracts, rental agreements, loan documents, terms of service, privacy policies, and similar legal documents. The AI will highlight key clauses and provide simplified explanations.",
//   },
//   {
//     question: "Is the service free to use?",
//     answer:
//       "We provide a free basic version for individuals. Advanced features, such as detailed clause-by-clause breakdowns and small business tools, are available through premium plans.",
//   },
// ];

// export default function FAQPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//    <div className="min-h-screen bg-gradient-to-b from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd]">
//       {/* Navbar */}
//       <Navbar />

//       {/* Page Content */}
//       <div className="flex-1 px-6 py-12 max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
//           Frequently Asked Questions
//         </h1>
//         <p className="text-center text-gray-600 mb-12">
//           Find quick answers about our AI solution for demystifying legal documents.
//         </p>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border rounded-xl shadow-sm bg-white"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 focus:outline-none"
//               >
//                 <span>{faq.question}</span>
//                 <ChevronDown
//                   className={`h-5 w-5 transform transition-transform ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { Navbar } from "@/components/layout/Navbar";
// import faqBg from "@/assets/faqbg2.jpg";

// const faqs = [
//   {
//     question: "What does this platform do?",
//     answer:
//       "Our AI-powered solution simplifies complex legal documents—like rental agreements, loan contracts, and terms of service—into plain language summaries. This helps you understand your rights and obligations before making decisions.",
//   },
//   {
//     question: "Is my data private and secure?",
//     answer:
//       "Yes. Your documents are processed in a private and secure environment. We do not share, sell, or store your personal data beyond what is required to provide the service.",
//   },
//   {
//     question: "Can this replace a lawyer?",
//     answer:
//       "No. Our tool is designed to provide clear explanations and insights into legal documents, but it does not constitute legal advice. For legal disputes or decisions, you should always consult a licensed attorney.",
//   },
//   {
//     question: "Which types of documents can I upload?",
//     answer:
//       "You can upload contracts, rental agreements, loan documents, terms of service, privacy policies, and similar legal documents. The AI will highlight key clauses and provide simplified explanations.",
//   },
//   {
//     question: "Is the service free to use?",
//     answer:
//       "We provide a free basic version for individuals. Advanced features, such as detailed clause-by-clause breakdowns and small business tools, are available through premium plans.",
//   },
// ];

// export default function FAQPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Navbar */}
//       <Navbar />
//         {/* Abstract overlay shapes */}
//         <div
//   className="absolute inset-0 bg-cover opacity-20"
//   style={{ backgroundImage: `url(${faqBg})` }}
// ></div>
//       {/* Page Content */}
//       <div className="flex-1 px-6 py-12 max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
//           Frequently Asked Questions
//         </h1>
//         <p className="text-center text-gray-800 mb-12">
//           Find quick answers about our AI solution for demystifying legal documents.
//         </p>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 rounded-xl shadow-md bg-white/90 backdrop-blur-sm hover:shadow-lg hover:border-blue-800 transition"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-900 font-medium hover:text-blue-900 focus:outline-none"
//               >
//                 <span>{faq.question}</span>
//                 <ChevronDown
//                   className={`h-5 w-5 transform transition-transform ${
//                     openIndex === index ? "rotate-180 text-purple-500" : ""
//                   }`}
//                 />
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// // "use client";

// // import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// // export default function FAQPage() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd] p-10">

// //       <div className="max-w-3xl mx-auto">
// //         <h1 className="text-3xl font-bold text-center mb-4 text-[#1e3a8a]">
// //           Frequently Asked Questions
// //         </h1>
// //         <p className="text-center text-gray-600 mb-10">
// //           Find quick answers about our AI solution for demystifying legal documents.
// //         </p>

// //         <Accordion type="single" collapsible className="space-y-4">
// //           <AccordionItem value="item-1">
// //             <AccordionTrigger className="bg-white shadow-md rounded-lg px-4 py-3 hover:shadow-lg transition">
// //               What does this platform do?
// //             </AccordionTrigger>
// //             <AccordionContent className="bg-white px-4 py-3 rounded-b-lg text-gray-600">
// //               Our platform uses AI to simplify complex legal documents into clear, accessible guidance.
// //             </AccordionContent>
// //           </AccordionItem>

// //           <AccordionItem value="item-2">
// //             <AccordionTrigger className="bg-white shadow-md rounded-lg px-4 py-3 hover:shadow-lg transition">
// //               Is my data private and secure?
// //             </AccordionTrigger>
// //             <AccordionContent className="bg-white px-4 py-3 rounded-b-lg text-gray-600">
// //               Yes, we prioritize privacy and ensure that your uploaded documents are safe and confidential.
// //             </AccordionContent>
// //           </AccordionItem>

// //           <AccordionItem value="item-3">
// //             <AccordionTrigger className="bg-white shadow-md rounded-lg px-4 py-3 hover:shadow-lg transition">
// //               Can this replace a lawyer?
// //             </AccordionTrigger>
// //             <AccordionContent className="bg-white px-4 py-3 rounded-b-lg text-gray-600">
// //               No, our platform is meant to provide clarity, not replace professional legal advice.
// //             </AccordionContent>
// //           </AccordionItem>

// //           <AccordionItem value="item-4">
// //             <AccordionTrigger className="bg-white shadow-md rounded-lg px-4 py-3 hover:shadow-lg transition">
// //               Which types of documents can I upload?
// //             </AccordionTrigger>
// //             <AccordionContent className="bg-white px-4 py-3 rounded-b-lg text-gray-600">
// //               You can upload rental agreements, loan contracts, terms of service, and similar legal documents.
// //             </AccordionContent>
// //           </AccordionItem>

// //           <AccordionItem value="item-5">
// //             <AccordionTrigger className="bg-white shadow-md rounded-lg px-4 py-3 hover:shadow-lg transition">
// //               Is the service free to use?
// //             </AccordionTrigger>
// //             <AccordionContent className="bg-white px-4 py-3 rounded-b-lg text-gray-600">
// //               Yes, our basic service is free, with premium features available for advanced needs.
// //             </AccordionContent>
// //           </AccordionItem>
// //         </Accordion>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { Navbar } from "@/components/layout/Navbar";
// import faqBg from "@/assets/faq.png";

// const faqs = [
//   {
//     question: "What does this platform do?",
//     answer:
//       "Our AI-powered solution simplifies complex legal documents—like rental agreements, loan contracts, and terms of service—into plain language summaries. This helps you understand your rights and obligations before making decisions.",
//   },
//   {
//     question: "Is my data private and secure?",
//     answer:
//       "Yes. Your documents are processed in a private and secure environment. We do not share, sell, or store your personal data beyond what is required to provide the service.",
//   },
//   {
//     question: "Can this replace a lawyer?",
//     answer:
//       "No. Our tool is designed to provide clear explanations and insights into legal documents, but it does not constitute legal advice. For legal disputes or decisions, you should always consult a licensed attorney.",
//   },
//   {
//     question: "Which types of documents can I upload?",
//     answer:
//       "You can upload contracts, rental agreements, loan documents, terms of service, privacy policies, and similar legal documents. The AI will highlight key clauses and provide simplified explanations.",
//   },
//   {
//     question: "Is the service free to use?",
//     answer:
//       "We provide a free basic version for individuals. Advanced features, such as detailed clause-by-clause breakdowns and small business tools, are available through premium plans.",
//   },
// ];

// export default function FAQPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen flex flex-col relative overflow-hidden">
//       {/* Navbar */}
//       <Navbar />

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${faqBg})` }}
//       >
//         <div className="absolute inset-0 bg-black/30" /> {/* dark overlay for readability */}
//       </div>

//       {/* Page Content */}
//       <div className="relative flex-1 px-6 py-12 max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">
//           Frequently Asked Questions
//         </h1>
//         <p className="text-center text-gray-200 mb-12">
//           Find quick answers about our AI solution for demystifying legal documents.
//         </p>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border border-white/20 rounded-xl shadow-lg bg-white/20 backdrop-blur-md hover:shadow-xl hover:border-blue-400 transition"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium hover:text-blue-200 focus:outline-none"
//               >
//                 <span>{faq.question}</span>
//                 <ChevronDown
//                   className={`h-5 w-5 transform transition-transform ${
//                     openIndex === index ? "rotate-180 text-blue-300" : ""
//                   }`}
//                 />
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-4 text-gray-100">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import faqBg from "@/assets/faq.png";

const faqs = [
  {
    question: "What does this platform do?",
    answer:
      "Our AI-powered solution simplifies complex legal documents—like rental agreements, loan contracts, and terms of service—into plain language summaries. This helps you understand your rights and obligations before making decisions.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Yes. Your documents are processed in a private and secure environment. We do not share, sell, or store your personal data beyond what is required to provide the service.",
  },
  {
    question: "Can this replace a lawyer?",
    answer:
      "No. Our tool is designed to provide clear explanations and insights into legal documents, but it does not constitute legal advice. For legal disputes or decisions, you should always consult a licensed attorney.",
  },
  {
    question: "Which types of documents can I upload?",
    answer:
      "You can upload contracts, rental agreements, loan documents, terms of service, privacy policies, and similar legal documents. The AI will highlight key clauses and provide simplified explanations.",
  },
  {
    question: "Is the service free to use?",
    answer:
      "We provide a free basic version for individuals. Advanced features, such as detailed clause-by-clause breakdowns and small business tools, are available through premium plans.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar (keeps its original styling) */}
      <Navbar />

      {/* FAQ Section with Background */}
      <div className="relative flex-1 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${faqBg})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Page Content */}
        <div className="relative px-6 py-12 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-200 mb-12">
            Find quick answers about our AI solution for demystifying legal documents.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/20 rounded-xl shadow-lg bg-white/20 backdrop-blur-md hover:shadow-xl hover:border-blue-400 transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium hover:text-blue-200 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform ${
                      openIndex === index ? "rotate-180 text-blue-300" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-100">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
