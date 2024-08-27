import FacultyCard from "@/components/faculty/FacultyCard";
import Section from "@/components/faculty/section/Section";
import Usman from "@/assets/departments/science/usman.webp";
import Sunita from "@/assets/departments/science/sunita.webp";
import Sakshi from "@/assets/departments/science/sakshi.webp";
import Anjali from "@/assets/departments/science/anjali.webp";
import Arun from "@/assets/departments/mathematics/arun.webp";
import Shiv from "@/assets/departments/mathematics/shivkumar.webp";
import Pammi from "@/assets/departments/mathematics/pammi.webp";
import HariOm from "@/assets/departments/computerscience/hariom.webp";
import Shailesh from "@/assets/departments/english/shailesh.webp";
import Archana from "@/assets/departments/english/archana.webp";
import Ankit from "@/assets/departments/english/ankit.webp";
import Akanksha from "@/assets/departments/english/akanksha.webp";
import Jaya from "@/assets/departments/english/jaya.webp";
import Khushi from "@/assets/departments/english/khushi.webp";
import Sunil from "@/assets/departments/hindi/sunil.webp";
import Satyaveer from "@/assets/departments/hindi/satyaveer.webp";
import Renu from "@/assets/departments/hindi/renu.webp";
import Pratiksha from "@/assets/departments/hindi/pratiksha.webp";
import Pramod from "@/assets/departments/socialstudies/pramod.webp";
import BlurFade from "@/components/ui/blurfade";
interface FacultyMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface Department {
  title: string;
  description: string;
  members: FacultyMember[];
}
function Faculty() {
  const facultyData: Record<string, Department> = {
    science: {
      title: "Department Of Science 👨‍🏫",
      description:
        "At the heart of academic excellence, the Department of Science is committed to fostering a dynamic and innovative learning environment.Our dedicated faculty members are passionate about nurturing the next generation of scientists, thinkers, and innovators.",
      members: [
        {
          name: "Usman Khan",
          role: "Assistant Teacher",
          description:
            "Usman Khan, passionate Science Assistant Teacher at Sankat Mochan. Inspiring curiosity, fostering learning, and shaping well-rounded individuals with expertise for the future.",
          image: Usman,
        },
        {
          name: "Sunita Yadav",
          role: "Assistant Teacher",
          description:
            "Sunita Yadav, adept Science Assistant Teacher at Sankat Mochan Group Of Institutions, instills scientific curiosity and critical thinking skills in students.",
          image: Sunita,
        },
        {
          name: "Sakshi",
          role: "Assistant Teacher",
          description:
            "Sakshi, proficient Science Assistant Teacher at Sankat Mochan Group Of Institutions, inspires students with scientific knowledge and hands-on learning experiences.",
          image: Sakshi,
        },
        {
          name: "Anjali Vishwakarma",
          role: "Assistant Teacher",
          description:
            "Anjali Vishwakarma, skilled Science Assistant Teacher at Sankat Mochan Group Of Institutions, fosters scientific inquiry and analytical thinking in students.",
          image: Anjali,
        },
      ],
    },
    mathematics: {
      title: "Department Of Mathematics 👨‍🏫",
      description:
        "At Sankat Mochan Group Of Institutions, our Department of Mathematics is committed to fostering a dynamic learning environment that inspires critical thinking and intellectual growth. Our dedicated faculty members bring a wealth of expertise, passion, and experience to the world of mathematics education.",
      members: [
        {
          name: "Arun Dubey",
          role: "Assistant Teacher",
          description:
            "Arun Dubey, skilled Mathematics Assistant Teacher at Sankat Mochan Group Of Institutions, imparts mathematical expertise and cultivates problem-solving skills in students.",
          image: Arun,
        },
        {
          name: "Shiv Kumar Yadav",
          role: "Assistant Teacher",
          description:
            "Shiv Kumar, skilled assistant teacher, enriches Sankat Mochan's Mathematics Department with expertise.",
          image: Shiv,
        },
        {
          name: "Pammi",
          role: "Assistant Teacher",
          description:
            "Pammi, proficient Mathematics Assistant Teacher at Sankat Mochan Group Of Institutions, nurtures mathematical prowess and facilitates conceptual clarity for students.",
          image: Pammi,
        },
      ],
    },
    computerscience: {
      title: "Department Of Computer Science 👨‍🏫",
      description:
        "At the heart of innovation and excellence, our Department of Computer Science is dedicated to fostering a dynamic learning environment where students embark on a journey of exploration and discovery. As a vital pillar within Sankat Mochan Group of Institutions, we strive to empower our students with cutting-edge knowledge and practical skills, preparing them for the ever-evolving world of technology.",
      members: [
        {
          name: "Hari Om Narayan",
          role: "Assistant Teacher",
          description:
            "Introducing Hari Om Narayan, our dynamic computer science pedagogue, igniting student passion with avant-garde methods to excel in technology.",
          image: HariOm,
        },
      ],
    },
    english: {
      title: "Department Of English 👨‍🏫",
      description:
        "Welcome to the Department of English at Sankat Mochan Group of Institutions, where we strive to cultivate a rich and dynamic learning environment for our students. Our commitment is to empower individuals with the skills and knowledge necessary for effective communication, critical thinking, and a deep appreciation for the English language.",
      members: [
        {
          name: "Shailesh Kumar Pal",
          role: "Assistant Teacher",
          description:
            "Shailesh , skilled assistant proffessor, enriches Sankat Mochan's English Department with expertise, fostering a dynamic and inspiring learning environment.",
          image: Shailesh,
        },
        {
          name: "Archana Srivastava",
          role: "Assistant Teacher",
          description:
            "Meet Archana Srivastava, an esteemed assistant teacher at Sankat Mochan Group of Institutions. Her dedication to education illuminates minds and shapes the future with passion and expertise.",
          image: Archana,
        },
        {
          name: "Ankit",
          role: "Assistant Teacher",
          description:
            "Ankit, a qualified assistant teacher, enhances the English Department at Sankat Mochan with expertise, passion, and a commitment to excellence.",
          image: Ankit,
        },
        {
          name: "Jaya",
          role: "Assistant Teacher",
          description:
            "Jaya, skilled English Assistant Teacher at Sankat Mochan Group Of Institutions, cultivates language proficiency and fosters a love for literature.",
          image: Jaya,
        },
        {
          name: "Akanksha",
          role: "Assistant Teacher",
          description:
            "Akanksha, accomplished English Assistant Teacher at Sankat Mochan Group Of Institutions, nurtures language skills and fosters literary appreciation in students.",
          image: Akanksha,
        },

        {
          name: "Khushi Singh",
          role: "Assistant Teacher",
          description:
            "Khushi Singh, skilled English Assistant Teacher at Sankat Mochan Group Of Institutions, enriches students with language proficiency and literary appreciation.",
          image: Khushi,
        },
      ],
    },
    hindi: {
      title: "Department Of Hindi 👨‍🏫",
      description:
        "Welcome to the Department of Hindi at Sankat Mochan Group of Institutions, where we take pride in promoting the rich cultural and linguistic heritage of our nation. Our department is committed to fostering a deep understanding and appreciation for the Hindi language, literature, and culture.",
      members: [
        {
          name: "Sunil",
          role: "Assistant Teacher",
          description:
            "Sunil, dedicated assistant teacher at Sankat Mochan Group of Institutions, excels in Hindi, bringing expertise and passion to students.",
          image: Sunil,
        },
        {
          name: "Satyaveer",
          role: "Assistant Teacher",
          description:
            "Satyaveer, proficient Hindi Assistant Teacher at Sankat Mochan Group Of Institutions, enriches students with linguistic skills and cultural understanding.",
          image: Satyaveer,
        },
        {
          name: "Pratiksha",
          role: "Assistant Teacher",
          description:
            "Pratiksha, proficient assistant teacher in Hindi at Sankat Mochan Group of Institutions, enriches students with language skills and cultural understanding.",
          image: Pratiksha,
        },
        {
          name: "Renu",
          role: "Assistant Teacher",
          description:
            "Renu, skilled Hindi Assistant Teacher at Sankat Mochan Group Of Institutions, imparts language proficiency and cultural appreciation to students.",
          image: Renu,
        },
      ],
    },
    sst: {
      title: "Department of Social Studies (S.ST.) 👨‍🏫",
      description:
        "At Sankat Mochan Group Of Institutions, our Department of Social Studies (S.ST.) is dedicated to fostering a deep understanding of history, geography, civics, and related disciplines. We believe in providing a holistic educational experience that empowers students to explore the rich tapestry of human civilization and society.",
      members: [
        {
          name: "Pramod",
          role: "Assistant Teacher",
          description:
            "Pramod, skilled Social Studies Assistant Teacher at Sankat Mochan Group Of Institutions, imparts historical knowledge and cultural understanding to students.",
          image: Pramod,
        },
        {
          name: "Archana Srivastava",
          role: "Assistant Teacher",
          description:
            "Archana Srivastava, accomplished assistant teacher in Social Studies at Sankat Mochan Group of Institutions, fosters critical thinking and global awareness.",
          image: Archana,
        },
        {
          name: "Ankit",
          role: "Assistant Teacher",
          description:
            "Ankit, skilled assistant teacher in Social Studies at Sankat Mochan Group of Institutions, enhances students' understanding of diverse cultures and societies.",
          image: Ankit,
        },
        {
          name: "Pammi",
          role: "Assistant Teacher",
          description:
            "Pammi, skilled Social Studies Assistant Teacher at Sankat Mochan Group Of Institutions, imparts historical and societal knowledge with enthusiasm.",
          image: Pammi,
        },
      ],
    },
  };
  return (
    <>
      {Object.keys(facultyData).map((departmentKey) => {
        const department = facultyData[departmentKey];
        const urlFriendlyId = `department-of-${departmentKey}`
          .toLowerCase()
          .replace(/\s+/g, "-");
        return (
          <Section
            key={departmentKey}
            id={urlFriendlyId}
            title={department.title}
            description={department.description}
          >
            {department.members.map((faculty, index) => (
              <BlurFade duration={1} amount={0.5} key={index}>
                <FacultyCard
                  name={faculty.name}
                  role={faculty.role}
                  description={faculty.description}
                  image={faculty.image}
                />
              </BlurFade>
            ))}
          </Section>
        );
      })}
    </>
  );
}

export default Faculty;
