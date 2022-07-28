import "../styles/Technologies.scss";
import SingleTechnology from "./SingleTechnology";
import SingleTool from "./SingleTool";

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
          level={3}
        />
        <SingleTechnology
          name="HTML5"
          icon="technologies/html5.png"
          level={3}
        />
        <SingleTechnology name="CSS3" icon="technologies/css3.png" level={3} />
        <SingleTechnology
          name="Next.js"
          icon="technologies/next.png"
          level={3}
        />
        <SingleTechnology name="SASS" icon="technologies/sass.png" level={3} />
        <SingleTechnology name="rwd" icon="technologies/rwd.png" level={3} />
        <SingleTechnology name="GIT" icon="technologies/git.png" level={3} />
        <SingleTechnology
          name="Redux"
          icon="technologies/redux.png"
          level={2}
        />
        <SingleTechnology
          name="TypeScript"
          icon="technologies/ts.png"
          level={1}
        />
        <SingleTechnology
          name="Object programming"
          icon="technologies/oop.png"
          level={1}
        />
        <SingleTechnology
          name="Node.js"
          icon="technologies/node.png"
          level={1}
        />
        <SingleTechnology
          name="Docker"
          icon="technologies/docker.webp"
          level={1}
        />
        <SingleTool name="rest" icon="technologies/rest.webp" />
        <SingleTool name="graph ql" icon="technologies/graphql.png" />
        <SingleTool name="WP API" icon="technologies/wordpress.png" />
        <SingleTool name="WC API" icon="technologies/woocommerce.png" />
        <SingleTool name="Firebase" icon="technologies/firebase.png" />
        <SingleTool name="scrum" icon="technologies/scrum.png" />
      </div>
    </section>
  );
}
