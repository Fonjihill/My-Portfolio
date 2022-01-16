import './about.css'
import te2 from "../../img/te2.jpeg"

export const About = () => {
    return (
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={te2} className="a-img" alt=""></img>
          </div>
        </div>

        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-desc">
            I am a FullStack developer ReactJs/NodeJs web developer based in Lyon.
            Currently, I am training at Epitech-Lyon as a Web and Mobile Project
            Manager. In my spare time, I like to work on specific projects with
            a few clients selected on the spot. For example: I'm currently
            working on a mobile application for independent services.
          </p>
        </div>
      </div>
    );
}

export default About