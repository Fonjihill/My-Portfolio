import './about.css'
import te2 from "../../img/te2.jpeg"

export const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={te2} className="a-img" alt="">
                    
                    </img>
                </div>
            </div>

            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-desc'>
               I'm a web developer from Lyon, France. I'm currently studying for a degree at Epitech as a web and mobile project manager.
               In my spare time I like working with few and select clients and working on some projects.
                Like actually I'm working on a mobile application for freelance Services.
                </p>
            </div>
        </div>
    )
}

export default About