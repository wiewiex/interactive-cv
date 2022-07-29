import "../styles/Experience.scss";

export default function Experience() {
  return (
    <section className="experienceContainer">
      <h3>Experience</h3>
      <div className="singleExperience">
        <div className="datesRoleLinks">
          <p className="dates">Apr 2022 - present</p>
          <h5 className="role">Web developer at the Ukrainian Art Fundation</h5>
          <div className="links">
            <a href="https://uaworld.pl">
              <img src="experience/uaworld.png" alt="uaart logo" />
            </a>
            <a href="https://github.com/wiewiex/uaworld.pl-review">
              <img src="experience/github.png" alt="github logo" />
            </a>
          </div>
        </div>
        <p className="description">
          On request of the charity foundation helping the Ukrainian artists
          during the war, I created a website based on React in Next.js. I got
          very involved in this project and developed a lot being able to
          incorporate possibilities that Next.js offers, together with Wordpress
          as Headless CMS. Problems that I encountered made me explore new
          solutions and implement improvements. I learned the integration with
          various API, deployment in GitHub Actions. What’s more, I created my
          first container in Docker and learned how to search StackOverflow more
          efficiently.
        </p>
      </div>
      <div className="singleExperience">
        <div className="datesRoleLinks">
          <p className="dates">Jun 2020 - Jun 2021</p>
          <h5 className="role">
            Founder, CEO, web-developer of naukamuzykionline.pl (not active)
          </h5>
          <div className="links">
            <a href="https://jacekpietrzak.pl/nmo-preview">
              <img src="experience/nmo.png" alt="uaart logo" />
            </a>
          </div>
        </div>
        <p className="description">
          At the beginning of pandemic I founded a company offering online music
          classes. Marketing agency and a graphic designer were engaged in this
          project. I created a website using Wordpress and WooCommerce, took
          responsibility for customer service, employed music teachers and took
          care of organizational matters.
        </p>
      </div>
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
