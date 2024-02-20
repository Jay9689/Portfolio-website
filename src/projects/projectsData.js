import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Full stack Airbnb clone",
    image: projectOne,
    description: (
      <>
        <p>
          Frontend: HTML5, CSS3, JavaScript ES6+ <br />
          Backend: Node.js (Express.js) MongoDB <br />
          Storage: Cloudinary for user-uploaded content<br />
          Authentication & Authorization: Passport.js<br />
          Implemented MVC Frame-work<br />
        </p>
      </>
    ),
    github: "https://github.com/Jay9689/Airbnb.git",
    demo: "https://cloud.google.com/",
  },
  2: {
    title: "Productivity App",
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
