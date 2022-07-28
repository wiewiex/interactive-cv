export default function SingleContactLink({ content, icon }) {
  return (
    <a href="/" className="singleContactLink">
      <img className="icon" alt="contact link icon" src={icon} />
      <p>{content}</p>
    </a>
  );
}
