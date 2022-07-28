import "../styles/Technologies.scss";
import SingleTechnology from "./SingleTechnology";

export default function Technologies() {
  return (
    <section className="technologiesContainer">
      <h3>Technologies and tools</h3>
      <p>So far, my programming experience focused on:</p>
      <div className="technologiesList">
        <SingleTechnology
          name="React"
          icon="technologies/react.png"
          level={3}
        />
        <SingleTechnology
          name="JavaScript"
          icon="technologies/js.png"
          level={2}
        />
        <SingleTechnology
          name="Redux"
          icon="technologies/redux.png"
          level={1}
        />
      </div>
    </section>
  );
}
