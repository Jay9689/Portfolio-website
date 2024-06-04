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
    github: "https://github.com/Jay9689/Airbnb-Devop",
    demo: "https://airbnb-project-98pl.onrender.com/listings",
  },
  2: {
    title: "Hallo-In chat App",
    image: projectTwo,
    description: (
      <>
        <p>
          Frontend: React, Zustand, React Context<br />
          Styling: Tailwind CSS, daisyUI <br />
          Authentication: JSON Web Token (JWT), Auth Middlewares <br />
          Backend: Nodejs, Exprerss, MongoDB Atlas, Socket.IO <br />
          Architecture: MVC Framework <br />
        </p>
      </>
    ),
    github: "https://github.com/Jay9689/ChatApp",
    demo: "https://chatapp-a0m0.onrender.com/",
  },
  3: {
    title: "E-commerce Store",
    image: projectThree,
    description: (
      <>
        <p>
          <strong>Under Development</strong><br />
          Frontend: React, Redux-Toolkit<br />
          Styling: Tailwind CSS, TailwindUI <br />
          Authentication: Passport JS, Auth: Passport JWT<br />
          Payments : Stripe <br />
          Architecture: MVC Framework <br />
          Backend: Nodejs, Exprerss, MongoDB Atlas <br />
        </p>
      </>
    ),
    github: "https://github.com/Jay9689/E-Commerce",
    demo: "https://mern-ecommerce-sooty-tau.vercel.app/",
  },
};

export default projects;
