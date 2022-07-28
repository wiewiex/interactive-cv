export default function singleInstitution({ dates, name, description }) {
  return (
    <div className="singleInstitution">
      <p className="dates">{dates}</p>
      <h5 className="name">{name}</h5>
      <p className="description">{description}</p>
    </div>
  );
}
