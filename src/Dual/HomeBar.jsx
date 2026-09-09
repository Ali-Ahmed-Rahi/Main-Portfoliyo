import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import ExperienceSection from "../components/Experiences";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Reveal from "../helpers/Reveal";

const HomeBar = () => {
  return (
    <div className="space-y-28">
      <div>
        <section id="home">
          <Banner />
        </section>

        <section
          id="about"
          className="border-t-2 md:border-none border-yellow-500 rounded-3xl p-5 md:p-0 mt-10"
        >
          <Reveal>
            <AboutMe />
          </Reveal>
        </section>
      </div>

      <section id="skills">
        <Reveal>
          <Skills />
        </Reveal>
      </section>

      <section id="projects">
        <Reveal>
          <Project />
        </Reveal>
      </section>

      <section>
        <Reveal>
          <ExperienceSection />
        </Reveal>
      </section>

      <section id="contact">
        <Reveal>
          <Contact />
        </Reveal>
      </section>
    </div>
  );
};

export default HomeBar;
