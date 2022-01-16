import "./list.css"
import Card from '../card/Card';
import {image} from "../../data"


const List = () => {
    return (
      <div className="li">
        <div className="li-texts">
          <h1 className="li-title"> My works</h1>
          <p className="li-desc"></p>
        </div>

        <div className="li-list">
          {image.map((item) => (
            <Card key={item.id} img={item.img} link={item.link} />
          ))}
        </div>

        <div className="li-text">
          <p>
            {" "}
            To be up to date with my evolution, I have created a web application
            where you can register, see the progress of my projects, make
            project proposals and give your opinions. <br></br>
            The website is called
            <a href="https://fonjisocial.netlify.app/"> Fonji's Social</a>{" "}
          </p>
        </div>
      </div>
    );
}

export default List;
