import ReservationButton from "./ReservationButton";

import EventsComingButton from "./EventsComingButton";


import EventsTakayama from '../assets/EventsSpringJaponPhoto.jpg';
import EventsHakata from '../assets/FestivalHakataPhoto.jpg';
import EventsOnsen from '../assets/festivalDesLanternesPhoto.png';
import EventsMusic from '../assets/06.webp';
import EventsSumo from '../assets/sumoTournament.jpg';
import EventsShibuya from '../assets/shibuyaMarket.jpeg';
import EventsKazo from '../assets/kazoCitizenpeacefestival.webp';

const eventsComing = [
    {
        name: "Kinosaki Onsen",
        image: EventsOnsen,
        date: "April 23-24",
        href: "https://visitkinosaki.com/events/onsen-festival/",
    },
    {
        name: "Hakata Dontaku Festival",
        image: EventsHakata,
        date: " May 3-4",
        href: "https://www.japan.travel/fr/spot/1972/#:~:text=Un%20jubil%C3%A9,dans%20les%20rues%20de%20Fukuoka%20.",
    },
    {
        name: "きたやま おさむ concert",
        image: EventsMusic,
        date: " September 26",
        href: "https://www.bandsintown.com/fr/e/1035022028-at?came_from=253&utm_medium=web&utm_source=city_page&utm_campaign=just_announced",
    },
    {
        name: "Sumo Tournament",
        image: EventsSumo,
        date: "May, September",
        href: "https://www.japan-guide.com/e/e2080.html",
    },
    {
        name: "Shibuya Vintage Market",
        image: EventsShibuya,
        date: "May 4",
        href: "https://tokyocheapo.com/events/shibuya-vintage-artisan-market/20250504/",
    },
    {
        name: "Kazo Peace Festival",
        image: EventsKazo,
        date: "May 4",
        href: "https://tokyocheapo.com/events/kazo-citizens-peace-festival/",
    }
]

function EventsComingList() {
    return (
        <div className="more-activity-list">
            
                {eventsComing.map((event, index) => (
                    <EventsComingButton key={index} name={event.name} image={event.image} date={event.date} link={event.href} />
                ))}
            

        </div>
    )
}

function EventsList(){
    return (
        <>
             <h2>Weekly top !</h2>
        <div className="activity-list">
        <span className="weekly-top-info">
                <img className="weekly-image" src={EventsTakayama} alt="Photo from the weekly top"/>
                <span className="weekly-top-text">
                <h3>Takayama Spring Festival, <b>April 2025</b></h3>
                <p>The Takayama Spring Festival (Sannō Matsuri), which celebrates the arrival of spring, is part of the festivities related to the Hie Shrine. The festival takes place mainly in the upper part of the city, on the southern side of Yasukawa Street.</p>
                </span>
            </span>
              
              <ReservationButton link="https://www.instagram.com/ittenbari_/" text="See more"/>

              <h2>There is also more coming in Tokyo !</h2>
              <EventsComingList/>
             </div></>
    )
}

export default EventsList;