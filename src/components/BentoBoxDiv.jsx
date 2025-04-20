import CarotIcon from "../assets/carottIcon.png";
import CucumberIcon from "../assets/cucumberIcon.png";
import MakiIcon from "../assets/makiIcon.png";
import OnigiriIcon from "../assets/onigiriIcon.png";
import SausageIcon from "../assets/sausageIcon.png";
import SushiIcon from "../assets/sushiIcon.png";
import {useState} from "react";

////

import InformationPage from "./InformationPage";
import RestaurantList  from "./RestaurantList";
import EventsList from "./EventsList";
import ShopsList from "./ShopsList";
import ActivityList from "./ActivityList";
import HotelsList from "./HotelsList";
import TransportList  from "./TransportList";

const icons = [
    {
        url: CarotIcon,
        name: "Restaurants",
        description: "Restaurants in Tokyo",
        list: <RestaurantList/>,
    },
    {
        url: CucumberIcon,
        name: "Events",
        description: "Events happening in Japan",
        list: <EventsList/>,
    },
    {
        url: MakiIcon,
        name: "Hotels",
        description: "Find a place to stay and rest",
        list: <HotelsList/>,
    },
    {
        url: OnigiriIcon,
        name: "Activities",
        description: "Fun activities to do alone or with friends",
        list: <ActivityList />,
    },
    {
        url: SausageIcon,
        name: "Shops",
        description : "Shops to buy souvenirs or gifts",
        list: <ShopsList/>,
    },
    {
        url: SushiIcon,
        name:"Transport",
        description: "Choose the best way to get around the city",
        list: <TransportList/>,
    }
]


function BentoButton({ icon, buttonFunction, onClick }) {
  return (
    <button className="bento-button" onClick={onClick}>
      <img src={icon} alt="icon" />
      <h2>{buttonFunction}</h2>
    </button>
  );
}

function BentoBoxDiv() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleButtonClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleClose = () => {
    setSelectedIcon(null)
  };


  return (
    <div>
      <div className="bento-box-div">
        {icons.map((icon, index) => (
          <BentoButton
            key={index}
            icon={icon.url}
            buttonFunction={icon.name}
            onClick={() => handleButtonClick(icon)}
          />
        ))}
      </div>

      {selectedIcon && (
        <InformationPage
          logo={selectedIcon.url}
          title={selectedIcon.name}
          description={selectedIcon.description}
          list={selectedIcon.list}
          onClose={handleClose} />
      )}
    </div>
  );
}

export default BentoBoxDiv;
