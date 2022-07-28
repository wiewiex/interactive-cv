import "../styles/Education.scss";
import SingleInstitution from "./SingleInstitution";

export default function Education() {
  return (
    <section className="educationContainer">
      <h3>Education and certificates</h3>
      <SingleInstitution
        dates="November 2021 - June 2022"
        name="Coders Lab"
        description="JavaScript Developer"
      />
      <SingleInstitution
        dates="October 2013 - June 2018"
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
