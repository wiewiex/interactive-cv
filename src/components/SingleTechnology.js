export default function SingleTechnology({ icon, name, level }) {
  return (
    <card className="singleTechnology">
      <img src={icon} alt={name + " icon"} />
      <h4>{name}</h4>
      <div className="level">
        <div className="active" />
        <div className={level === 1 ? "" : "active"} />
        <div className={level === 3 ? "active" : ""} />
      </div>
    </card>
  );
}
