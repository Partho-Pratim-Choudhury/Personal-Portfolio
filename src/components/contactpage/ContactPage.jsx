import "./ContactPage.css";
import Swal from "sweetalert2";

export default function ContactPage() {
  const sendEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b95ce1ff-6198-4c69-8ae7-b52c33af4699");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Message sent");
      Swal.fire({
        title: "Success!",
        text: "Message Sent!",
      });
    }
  };

  return (
    <div className="contactPageContainer">
      <div className="contactInfo">
        <div className="method">
          <p className="superhead">Contact</p>
          <p className="subp">Looking forward to hearing from you</p>
        </div>
        <div className="method">
          <p className="head">Phone</p>
          <p className="subp">+91-600-307-6845</p>
        </div>
        <div className="method">
          <p className="head">Email</p>
          <p className="subp">parthopratimchoudhury03@gmail.com</p>
        </div>
      </div>
      <div className="contactForm">
        <form onSubmit={sendEmail}>
          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="first-name">First Name</label>
              <input
                className="inputDetail"
                id="first-name"
                name="First Name"
                type="text"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="last-name">Last Name</label>
              <input
                className="inputDetail"
                id="last-name"
                name="Last Name"
                type="text"
              />
            </div>
          </div>
          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="email">Email *</label>
              <input
                className="inputDetail"
                required
                id="email"
                name="Email ID"
                type="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input
                className="inputDetail"
                id="subject"
                name="subject"
                type="text"
              />
            </div>
          </div>
          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </div>
            <input
              type="hidden"
              name="from_name"
              value="My Personal Portfolio"
            ></input>
            <div className="formSubmit">
              <button className="submit-button" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
