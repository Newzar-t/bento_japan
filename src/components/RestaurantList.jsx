import RestaurantImage from '../assets/RestaurantWeeklyRecoImage_.webp'
import ReservationButton from './ReservationButton';

function RestaurantList() {

    
    return (
        <>
        <h2>Weekly top !</h2>
        <div className="activity-list">

            <span className="weekly-top-info">
                <img className="weekly-image" src={RestaurantImage} alt="Photo from the weekly top"/>
                <span className="weekly-top-text">
                <h3>Ittenbari Ramen & Chahan Restaurant</h3>
                <p>Generous ramen and fried rice in a traditional Japanese restaurant, with beer to enjoy a chill evening!</p>

                </span>
            </span>
              
              <ReservationButton link="https://www.instagram.com/ittenbari_/" text="Visit the website !"/>

              <h2>Find other restaurants across the city !</h2>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d87194.03539878092!2d139.74530786707436!3d35.6925674821547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sfr!2sfr!4v1744877232297!5m2!1sfr!2sfr"
                width="80%"
                height="250"
                style={{ border: 0, borderRadius: "2rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div></>
    );
}


export default RestaurantList;