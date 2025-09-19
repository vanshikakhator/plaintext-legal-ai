// import React from "react";
// import { Navbar } from "@/components/layout/Navbar";
// import { Info, Users, ShieldCheck, Cpu } from "lucide-react";
// import { motion } from "framer-motion";

// const AboutUs = () => {
//   const sections = [
//     {
//       title: "Our Mission",
//       text: "We democratize legal knowledge, making complex contracts and terms understandable for everyone, regardless of background or expertise. By simplifying legal language, we empower individuals to make informed decisions and avoid hidden risks.",
//       icon: <Info className="h-6 w-6 text-blue-900" />,
//     },
//     {
//       title: "Our Vision",
//       text: "We envision a world where legal information is transparent, easy to navigate, and accessible to all. Our platform bridges the gap between legal complexity and everyday understanding, protecting both individuals and businesses.",
//       icon: <ShieldCheck className="h-6 w-6 text-blue-900" />,
//     },
//     {
//       title: "Our Team",
//       text: "Our team is a blend of legal experts, data scientists, and designers who are passionate about simplifying legal documents. We combine legal expertise with cutting-edge technology to deliver an unmatched user experience.",
//       icon: <Users className="h-6 w-6 text-blue-900" />,
//     },
//     {
//       title: "Our Technology",
//       text: "Built on Google Cloud’s generative AI, our platform provides clear summaries, highlights risks, explains clauses in plain language, and answers user queries securely, giving peace of mind with every document.",
//       icon: <Cpu className="h-6 w-6 text-blue-900" />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       <section className="bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 py-16 px-6 min-h-screen">
//         {/* Header */}
//         <div className="text-center mb-12 max-w-3xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
//             About Us
//           </h2>
//           <p className="text-lg md:text-xl leading-relaxed text-gray-200">
//             Generative AI for Demystifying Legal Documents
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4">
//           {sections.map((section, index) => (
//             <motion.div
//               key={index}
//               className="bg-white backdrop-blur-lg rounded-2xl p-10 min-h-[350px] shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className="flex items-center mb-4 space-x-3">
//                 {section.icon}
//                 <h3 className="text-3xl font-semibold text-blue-900">
//                   {section.title}
//                 </h3>
//               </div>
//               <p className="text-lg text-slate-700 leading-relaxed">{section.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Info, Users, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/aboutUs.png"; // adjust alias to your setup


const AboutUs = () => {
  const sections = [
    {
      title: "Our Mission",
      text: "We democratize legal knowledge, making complex contracts and terms understandable for everyone, regardless of background or expertise. By simplifying legal language, we empower individuals to make informed decisions and avoid hidden risks.",
      icon: <Info className="h-6 w-6 text-blue-900" />,
    },
    {
      title: "Our Vision",
      text: "We envision a world where legal information is transparent, easy to navigate, and accessible to all. Our platform bridges the gap between legal complexity and everyday understanding, protecting both individuals and businesses.",
      icon: <ShieldCheck className="h-6 w-6 text-blue-900" />,
    },
    {
      title: "Our Team",
      text: "Our team is a blend of legal experts, data scientists, and designers who are passionate about simplifying legal documents. We combine legal expertise with cutting-edge technology to deliver an unmatched user experience.",
      icon: <Users className="h-6 w-6 text-blue-900" />,
    },
    {
      title: "Our Technology",
      text: "Built on Google Cloud’s generative AI, our platform provides clear summaries, highlights risks, explains clauses in plain language, and answers user queries securely, giving peace of mind with every document.",
      icon: <Cpu className="h-6 w-6 text-blue-900" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section with background image */}
      <section
         className="relative py-16 px-6 min-h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* Overlay (optional for darkening/lightening the image) */}
        <div className="absolute inset-0 bg-transparent "></div>

        {/* Content */}
        <div className="relative text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-#0d1b2a">
            About Us
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-900">
            Generative AI for Demystifying Legal Documents
          </p>
        </div>

        {/* Content Grid */}
        <div className="relative max-w-7xl mx-auto grid gap-8 md:grid-cols-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white backdrop-blur-lg rounded-2xl p-10 min-h-[350px] shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4 space-x-3">
                {section.icon}
                <h3 className="text-3xl font-semibold text-blue-900">
                  {section.title}
                </h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
