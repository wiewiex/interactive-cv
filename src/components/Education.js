import "../styles/Education.scss";
import SingleInstitution from "./SingleInstitution";

export default function Education() {
  return (
    <section className="educationContainer">
      <h3>Education and certificates</h3>
      <div className="codersLab">
        <p className="dates">Nov 2021 - Jun 2022</p>
        <h5 className="name">Coders Lab</h5>
        <p className="description">
          JavaScript Developer
          <div className="links">
            <a href="https://portfolio-lab-project-wiewiex.vercel.app">
              <img src="experience/vercel.png" alt="vercel logo" />
            </a>
            <a href="https://github.com/wiewiex/portfolio-lab-project">
              <img src="experience/github.png" alt="github logo" />
            </a>
          </div>
          <div className="links">
            <a href="https://ciekawsze-zadania.vercel.app">
              <img src="experience/vercel.png" alt="vercel logo" />
            </a>
            <a href="https://github.com/wiewiex/ciekawsze-zadania">
              <img src="experience/github.png" alt="github logo" />
            </a>
          </div>
        </p>
      </div>
      <SingleInstitution
        dates="Oct 2013 - Jun 2018"
        name="Academy of Music in Krakow"
        description="University degree: Master of Arts Specialization: Jazz saxophone"
      />
      <SingleInstitution
        dates="2013 - 2019"
        name="International Jazz Platform"
        description="Participant of five international master workshops, led by outstanding
        jazz musicians from the whole world"
      />
    </section>
  );
}
