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
        <SingleTechnology
          name="Next.js"
          icon="technologies/next.png"
          level={3}
        />
        <SingleTechnology name="SASS" icon="technologies/sass.png" level={3} />
        <SingleTechnology
          name="TypeScript"
          icon="technologies/ts.png"
          level={1}
        />
        <SingleTechnology
          name="HTML5"
          icon="technologies/html5.png"
          level={3}
        />
      </div>
    </section>
  );
}
