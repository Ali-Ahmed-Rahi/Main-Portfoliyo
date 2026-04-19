import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import ExperienceSection from "../components/Experiences";
import Projec from "../components/projec";
import Skills from "../components/Skills";

const HomeBar = () => {
  return (
    <div className="space-y-28">

      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projec />
      </section>

      <section>
        <ExperienceSection/>
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
};

export default HomeBar;