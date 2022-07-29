export default function SingleTechnology({ icon, name, level }) {
  return (
    <div className="singleTechnology">
      <img src={icon} alt={name + " icon"} />
      <div className="level">
        <h4>{name}</h4>
        <div className="active" />
        <div className={level === 1 ? "" : "active"} />
        <div className={level === 3 ? "active" : ""} />
      </div>
    </div>
  );
}
