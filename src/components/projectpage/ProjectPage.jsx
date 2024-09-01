import "./ProjectPage.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

export default function ProjectPage() {
  return (
    <div className="project-page-container">
      <h1>Projects</h1>
      <div className="project1 project-item">
        <div className="leftside">
          <div className="content">
            <p className="title">ChatsApp</p>
            <p className="description">
              ChatsApp is a real-time chat application built with React.js. It
              uses Firebase Authentication for secure user sign-ups and logins.
              Users can engage in secure, real-time conversations and share
              media files. The platform also includes user management features,
              such as the ability to block other users, enhancing both user
              experience and security.
            </p>
            <div className="links">
              <Link
                to={"https://github.com/Partho-Pratim-Choudhury/ChatsApp"}
                target="_blank"
                className="repo-icon"
              >
                <GitHubIcon id="icon" />
              </Link>
            </div>
          </div>
        </div>
        <Link
          to={"https://github.com/Partho-Pratim-Choudhury/ChatsApp"}
          target="_blank"
          className="rightside"
        >
          <img src="images/chatsAppLogo.png" alt="ChatsApp Logo" />
        </Link>
      </div>
      <div className="project2 project-item">
        <div className="leftside">
          <div className="content">
            <p className="title">Partho Social</p>
            <p className="description">
              ParthoSocial is a versatile social media web application that
              allows users to engage in typical social media activities, such as
              sharing and liking posts, viewing profiles, and following or
              unfollowing other users. The platform also includes robust
              security features, offering secure login and logout
              functionalities to protect user accounts.
            </p>
            <div className="links">
              <Link
                to={"https://github.com/Partho-Pratim-Choudhury/ParthoSocial"}
                target="_blank"
                className="repo-icon"
              >
                <GitHubIcon id="icon" />
              </Link>
            </div>
          </div>
        </div>
        <Link
          to={"https://github.com/Partho-Pratim-Choudhury/ParthoSocial"}
          target="_blank"
          className="rightside"
        >
          <img src="images/parthoSocialLogo.png" alt="Partho Social Logo" />
        </Link>
      </div>
      <div className="project3 project-item">
        <div className="leftside">
          <div className="content">
            <p className="title">Tazza Khabar</p>
            <p className="description">
              Tazza Khabar is a responsive web application that offers users
              access to a diverse array of news articles. Beyond its
              comprehensive news coverage, Tazza Khabar distinguishes itself
              from traditional news apps by integrating a unique weather
              forecasting feature.
            </p>
            <div className="links">
              <Link
                to={"https://github.com/Partho-Pratim-Choudhury/Tazza-Khabar"}
                target="_blank"
                className="repo-icon"
              >
                <GitHubIcon id="icon" />
              </Link>
              <Link
                to={"https://tazza-khabar.netlify.app/"}
                target="_blank"
                className="repo-icon"
              >
                <RemoveRedEyeIcon id="icon" />
              </Link>
            </div>
          </div>
        </div>
        <Link
          to={"https://tazza-khabar.netlify.app/"}
          target="_blank"
          className="rightside"
        >
          <img src="images/tazzaKhabarLogo.png" alt="Tazza Khabar Logo" />
        </Link>
      </div>
    </div>
  );
}
