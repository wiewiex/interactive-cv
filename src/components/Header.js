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
            url="mailto:wiewiex@gmail.com"
          />
          <SingleContactLink
            content="788433833"
            icon="contact-details/phone.png"
            url="tel:+48788433833"
          />
          <SingleContactLink
            content="Kraków"
            icon="contact-details/address.png"
            url="https://goo.gl/maps/VsDf61k5KqwDZfsb9"
          />
          <SingleContactLink
            content="linkedin.com/in/wiewiex"
            icon="contact-details/linkedin.png"
            url="https://linkedin.com/in/wiewiex"
          />
          <SingleContactLink
            content="github.com/wiewiex"
            icon="contact-details/github.png"
            url="https://github.com/wiewiex"
          />
        </section>
        <section className="aboutme">
          <h3>About me</h3>
          <p>
            Since my early childhood I’ve been interested in computer
            technologies. I spent many long nights exploring operating systems,
            creating websites and modifying various software according to my own
            needs. I am a very determined fast learner, experienced in
            development and creating commercial projects from scratch.
          </p>
        </section>
      </div>
    </header>
  );
}
