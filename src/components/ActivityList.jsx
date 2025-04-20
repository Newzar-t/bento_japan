import ReservationButton from "./ReservationButton";
import ActivityPhoto from '../assets/activity_karaoke.jpeg'

function ActivityList(){
    return (
        <>
        <h2>The current trend !</h2>
        <div className="activity-list">

            <span className="weekly-top-info">
                <img className="weekly-image" src={ActivityPhoto} alt="Photo of the current trending activity"/>
                <span className="weekly-top-text">
                <h3>Karaoke!</h3>
<p>A traditional yet super fun activity! You can find various karaoke spots with many options and songs from all around the world! You can also order some fresh juices and snacks to go along with your melody! Our favorite karaoke spot? Le Bar Amiici!</p>

                </span>
            </span>
              
              <ReservationButton link="https://amici-shinnjuku.com/" text="Reserve a table"/>

              <h2>Find other spots in your area</h2>

              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5449.446722512772!2d139.70072055099496!3d35.69520893517738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skaraoke%20tokyo!5e0!3m2!1sfr!2sfr!4v1744993431541!5m2!1sfr!2sfr" width="80%" height="250" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div></>
    );
}

export default ActivityList;