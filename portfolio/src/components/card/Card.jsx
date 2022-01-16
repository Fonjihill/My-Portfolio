import './card.css'
import { Button, ButtonGroup, Center,Box } from "@chakra-ui/react";

const Card = ({img, link}) => {
    return (
      <div className="c">
        <div className="c-browser">
          <div className="c-circle"></div>
          <div className="c-circle"></div>
          <div className="c-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <Box>
            <Button boxShadow="dark-lg" colorScheme="crimson" className="c-btn">
              View the Project
            </Button>
          </Box>

          <img scr={img} alt="" className="c-img" />
        </a>
      </div>
    );
}

export default Card
