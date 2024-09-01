import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <div className="footer-separator"></div>
    <div className="container">
      <div className="Contact">
        <span className="method">Phone</span>
        <span className="detail">+91-600-307-6845</span>
      </div>
      <div className="Contact">
        <span className="method">Email</span>
        <span className="detail">parthopratimchoudhury03@gmail.com</span>
      </div>
      <div className="Contact">
        <span className="method">Follow Me</span>
        <span className="detail">
          <span className="socialMediaIcons">
            <Link
              to={
                "https://www.linkedin.com/in/partho-pratim-choudhury-055719228/"
              }
              target="_blank"
              className="icons"
              >
              <LinkedInIcon />
            </Link>
            <Link
              to={"https://github.com/Partho-Pratim-Choudhury"}
              target="_blank"
              className="icons"
              >
              <GitHubIcon />
            </Link>
            <Link
              to={"https://www.facebook.com/parthopratim.choudhury.7"}
              target="_blank"
              className="icons"
              >
              <FacebookIcon />
            </Link>
            <Link
              to={"https://www.instagram.com/_partho_pratim_choudhury_/"}
              target="_blank"
              className="icons"
              >
              <InstagramIcon />
            </Link>
          </span>
        </span>
      </div>
    </div>
    </>
  );
}
