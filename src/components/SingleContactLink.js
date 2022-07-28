export default function SingleContactLink({ content, icon, url }) {
  return (
    <a href={url} className="singleContactLink">
      <img className="icon" alt="contact link icon" src={icon} />
      <p>{content}</p>
    </a>
  );
}
