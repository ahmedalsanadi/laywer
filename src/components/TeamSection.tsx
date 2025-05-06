import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "أحمد اليوسفي",
      position: "المؤسس والمحامي الرئيسي",
      specialty: "قانون مدني وتجاري",
      image: "/images/hero.png"
    },
    {
      name: "محمد الصالحي",
      position: "محامي ومستشار قانوني",
      specialty: "قانون الشركات",
      image: "/images/lawer-2.png"
    },
    {
      name: "فاطمة العمري",
      position: "محامية متخصصة",
      specialty: "قانون الأحوال الشخصية",
      image: "/images/lawer3.png"
    },
    {
      name: "سارة الهاشمي",
      position: "محامي متخصص",
      specialty: "قانون العقارات",
      image: "/images/lawer4.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id='team' className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm font-semibold mb-4">
            فريق العمل
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            فريقنا القانوني المتميز
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            فريق متكامل من المحامين ذوي الخبرة والكفاءة العالية في مختلف المجالات القانونية
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-3 aspect-h-4 relative">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700">
                  {/* Placeholder for image */}
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover  object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-red-600 dark:text-red-400 mb-2 font-medium">
                  {member.position}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;