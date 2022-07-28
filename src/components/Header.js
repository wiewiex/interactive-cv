import "../styles/Header.scss";
import SingleContactLink from "./SingleContactLink";

export default function Header() {
  return (
    <header className="headerContainer">
      <section className="titleContainer">
        <h1>Jacek Pietrzak</h1>
        <h2>Junior Frontend (React) Developer</h2>
      </section>
      <img className="profilowe" alt="profilowe" src="profilowe.png" />
      <div className="contactAndAboutContainer">
        <section className="contactDetails">
          <SingleContactLink
            content="wiewiex@gmail.com"
            icon="contact-details/mail.png"
          />
          <SingleContactLink
            content="788433833"
            icon="contact-details/phone.png"
          />
          <SingleContactLink
            content="Kraków"
            icon="contact-details/address.png"
          />
          <SingleContactLink
            content="linkedin.com/in/wiewiex"
            icon="contact-details/linkedin.png"
          />
          <SingleContactLink
            content="github.com/wiewiex"
            icon="contact-details/github.png"
          />
        </section>
        <section className="aboutme">
          <h3>About me</h3>
          <p>
            Since my early childhood I’ve been interested in computer
            technologies. I spent many long nights exploring operating systems,
            creating websites and modifying various software according to my own
            needs. I am a very determined fast learner, experienced in creating
            commercial projects from scratch.
          </p>
        </section>
      </div>
    </header>
  );
}
