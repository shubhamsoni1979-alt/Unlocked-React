import GradientASCII from "../components/GradientASCII";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-background">
        <GradientASCII
          colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
          shape="horizon"
          cellSize={16}
          density={0.75}
          lightMode={false}
        />
      </div>

      <div className="home-content">

        <div className="home-content">
          {/* <span className="hero-badge">
    Your React Learning Journey Starts Here
  </span> */}

          <h1>
            Think React.<span> Build</span> Anything.
          </h1>

          <p>
            Learn React from the ground up. Master components,
            hooks, state management, and build real-world
            projects — one step at a time.
          </p>

          <div className="hero-buttons">
            <Link to="/start-learning" className="primary-btn">
              Start Learning →
            </Link>

          </div>
        </div>

      </div>
    </section>


  );
}


export default Home;