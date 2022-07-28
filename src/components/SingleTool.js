export default function SingleTool({ icon, name }) {
  return (
    <div className="singleTechnology">
      <img src={icon} alt={name + " icon"} />
      <h4>{name}</h4>
    </div>
  );
}
