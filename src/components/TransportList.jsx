import ShopsComponent from "./ShopsComponent"

import Bus from '../assets/bus-svgrepo-com.png';
import Taxi from '../assets/taxi-svgrepo-com.png';
import Train from '../assets/train-station-mark-svgrepo-com.png';

const transports = [
  {
    name: "Bus",
    type: "Public transportation",
    description: "Buses in Japan are punctual, affordable, and ideal for getting around cities or visiting tourist sites. Instructions are often available in English.",
    image: Bus,
    link: "https://www.japan-guide.com/e/e2015.html",
  },
  {
    name: "Taxi",
    type: "Private transportation",
    description: "Taxis in Japan are very clean, safe, and driven by professional drivers. Although a bit expensive, they are convenient for late-night travel or areas not covered by trains.",
    image: Taxi,
    link: "https://www.japan-guide.com/e/e2021.html",
  },
  {
    name: "Train",
    type: "Rail transportation",
    description: "Japanese trains are among the fastest and most reliable in the world. The Shinkansen (bullet train) is an essential way to travel between major cities.",
    image: Train,
    link: "https://www.japan-guide.com/e/e2018.html",
  }
];


function TransportList()
{
    return(
        <>
        <h2>A list of transport available in the city !</h2>
        <p>It can be hard to find the best way to moove around. Find here a list of transport and be redirect to a guide to help you traveling smart !</p>

        <div className="activity-list">

        {transports.map((transport, index) => (
            <ShopsComponent
                key={index}
                name={transport.name}
                type={transport.type}
                description={transport.description}
                image={transport.image}
                link={transport.link}
                className="image-contain"
            />
        ))}

        </div>
        </>
    )
}

export default TransportList;