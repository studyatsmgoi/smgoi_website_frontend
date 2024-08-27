import HeroCard from "@/components/hero/HeroCard";
import HeroImage from "@/assets/welcome/welcome.jpg";
import MainCaraousel from "@/components/caraousel/MainCaraousel";
function Home() {
  const heading = "Welcome to Sankat Mochan Group of Institutions";
  const description = "Join us at Sankat Mochan Group of Institutions for a transformative education. Our cutting-edge facilities and dedicated faculty empower students to excel and achieve their goals. For details, contact us at contact@smgoi.com or call +91 8960788977. Visit our campus in Sultanpur and start your journey to success!";

  return (
    <>
     <HeroCard image={HeroImage} heading={heading} description={description}  />
     <MainCaraousel />
    </>
  );
}

export default Home;
