import "../styles/Experience.scss";

export default function Experience2() {
  return (
    <section className="experienceContainer">
      <div className="singleExperience">
        <div className="datesRoleLinks">
          <p className="dates">2012 - present</p>
          <h5 className="role">Professional musician</h5>
          <div className="links">
            <a href="https://jacekpietrzak.pl">
              <img src="experience/wordpress.png" alt="wordpress logo" />
            </a>
            <a href="https://www.facebook.com/jacekpietrzakmusic">
              <img src="experience/fb.png" alt="facebook logo" />
            </a>
          </div>
        </div>
        <p className="description">
          I have 12 years of experience as a professional jazz musician. The
          skills and intuition I have acquired over the years of composing and
          arranging music are very helpful in the context of programming.
        </p>
      </div>
      <div className="singleExperience">
        <h5 className="saxophoneTeacher">Saxophone teacher</h5>
        <div className="datesRoleLinks">
          <p className="dates">Sep 2019 - Jun 2022</p>
          <h6>State Music School of the 1st degree in Miluszowice</h6>
        </div>
        <div className="datesRoleLinks">
          <p className="dates">Feb 2017 - Jun 2018</p>
          <h6>State Music School of the 1st degree in Czasław</h6>
        </div>
      </div>
      <div className="singleExperience">
        <div className="datesRoleLinks">
          <p className="dates">Oct 2018 - Sep 2019</p>
          <h5 className="role">
            Sound engineer at Armada Sound Studio in Krakow
          </h5>
        </div>
      </div>
    </section>
  );
}
