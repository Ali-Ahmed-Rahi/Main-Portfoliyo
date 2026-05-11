import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import ExperienceSection from "../components/Experiences";
import Projec from "../components/projec";
import Skills from "../components/Skills";

const HomeBar = () => {
  return (
    <div className="space-y-28">
      <div>
        <section id="home" >
          <Banner />
        </section>

        <section id="about" className="border-t-2 md:border-none border-yellow-500 rounded-3xl p-5 md:p-0 mt-10">
          <AboutMe />
        </section>
      </div>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projec />
      </section>

      <section>
        <ExperienceSection />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomeBar;
