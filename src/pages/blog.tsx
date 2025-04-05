import { motion } from "framer-motion";
import first from "../4.jpg";
import second from "../12.jpg";
import third from "../2.jpg";
import fourth from "../13.jpg";
import fifth from "../1.jpg";
import sixth from "../14.jpg";

export default function BlogPage() {
  return (
    <div className="py-16 bg-dark-100">
      {/* Content Container with Margins */}
      <div className="max-w-7xl mx-auto px-8 sm:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl">Projects</h1>
          <p className="text-gray-300 text-lg mt-4">
            Dastageeri Foundation has made a significant impact through various initiatives and programs, empowering communities and bringing sustainable change.
          </p>
        </motion.div>

        {/* Section 1 */}
        <Section
          id="section1"
          title="Build Our Future"
          content={`Partnering with reputable institutions, we’re currently empowering 20 underprivileged students with quality education, equipping them with the tools and knowledge to build a brighter future. This initiative not only provides academic support but also fosters essential life skills, mentorship, and career guidance to ensure holistic development. Our vision is to transform lives through education, and we remain steadfast in our commitment to expanding this program. We are actively raising funds and seeking partnerships to extend this opportunity to many more deserving students, breaking the cycle of poverty and creating a ripple effect of positive change in their communities. Together, we can bridge the educational gap and build a more equitable society.`}
          images={[first, second]}
        />

        {/* Section 2 */}
        <Section
          id="section2"
          title="Build a Masjid"
          content={`Building a masjid is more than constructing a place of worship—it is creating a space for community, reflection, and spiritual growth. A masjid serves as a cornerstone of Islamic life, offering a sanctuary for prayer, education, and communal activities. Our vision is to construct a masjid that goes beyond prayer, incorporating facilities such as classrooms for Quranic studies, spaces for interfaith dialogue, and areas for social and charitable initiatives. Every element of the masjid is designed with care, ensuring accessibility, sustainability, and a warm atmosphere for all. Together, we can establish a beacon of faith and service that will benefit generations to come, earning ongoing rewards in this life and the hereafter.`}
          images={[third, fourth]}
        />

        {/* Section 3 */}
        <Section
          id="section3"
          title="Ramzan Ration Drives"
          content={`Our flagship initiative has successfully provided monthly rations to over 1,000 families, ensuring that no one goes hungry during the holy month of Ramzan. Each package is thoughtfully curated to meet essential nutritional needs, including staples such as grains, pulses, and cooking essentials, along with items that bring a sense of comfort and dignity to families during this sacred time. This effort extends beyond food distribution, fostering a sense of community and hope for those facing challenging circumstances. As we continue to grow, we aim to reach even more families, ensuring that the spirit of giving and compassion lights up every home in need.`}
          images={[fifth, sixth]}
        />
      </div>
    </div>
  );
}

interface SectionProps {
  id: string;
  title: string;
  content: string;
  images: string[];
}

function Section({ id, title, content, images }: SectionProps) {
  return (
    <motion.div
      id={id}
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-white text-left mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <p className="text-gray-300 text-lg leading-relaxed">{content}</p>
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`${title} ${index + 1}`}
              className="rounded-lg shadow-lg object-cover h-64 w-full hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
