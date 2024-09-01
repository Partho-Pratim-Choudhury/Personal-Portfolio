import "./Homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src="./images/myPic.jpeg" alt="" />
      </div>
      <div className="text-container">
        <div className="introduction">
          <h1>Hello</h1>
          <p className="p1">A Bit About Me</p>
          <p className="p2">
            Hello! I’m Partho Pratim Choudhury, a final-year Computer Science
            and Engineering student at NIT Silchar. My academic journey has been
            driven by a deep passion for competitive coding and web development.
            These interests have not only honed my theoretical knowledge but
            also empowered me to tackle real-world challenges with practical
            solutions. Welcome to my portfolio, where you can explore my
            projects, achievements, and the exciting path I’ve taken in the
            world of technology.
          </p>
        </div>
        <div className="homepage-links">
          <Link
            to="/projects"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="home-link s1">Projects</div>
          </Link>
          <button
            className="home-link s2"
            onClick={() =>
              window.open(
                "./Resume_Partho_Pratim_Choudhury_2112003_CSE_NIT_Silchar.pdf"
              )
            }
          >
            Resume
          </button>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="home-link s3">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
