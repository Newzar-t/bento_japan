import KyowaHotel from '../assets/kiyowaHotel.webp';
import ParkHyattHotel from '../assets/ParkHyatt.webp';
import ShibaHotel from '../assets/shibaHotel.webp';
import AsakusaHotel from '../assets/asakusaHotel.jpg';
import OneHotel from '../assets/onetokyoHotel.jpg';
import CapsuleHotel from '../assets/capsuleHotel.webp';



import EventsComingButton  from './EventsComingButton';
import ReservationButton from './ReservationButton';

const hotels = [
    {
      name: "Park Hyatt Tokyo",
      image: ParkHyattHotel,
      adresse: "3-7-1-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo, Japon",
      link: "https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph",
    },
    {
      name: "Shiba Park Hotel",
      image: ShibaHotel,
      adresse: "1-5-10 Shiba-Koen, Minato-ku, Tokyo, Japon",
      link: "https://www.shibaparkhotel.com/",
    },
    {
      name: "Asakusa View Hotel",
      image: AsakusaHotel,
      adresse: "3-17-1 Nishiasakusa, Taito-ku, Tokyo, Japon",
      link: "https://www.viewhotels.co.jp/asakusa/",
    },
    {
      name: "ONE@Tokyo",
      image: OneHotel,
      adresse: "1-19-3 Oshiage, Sumida-ku, Tokyo, Japon",
      link: "https://www.onetokyo.com/",
    },
    {
        name: "Shinjuku Kuyakusho-mae",
        image: CapsuleHotel, 
        adresse: "1-2-5 Kabukicho, Shinjuku-ku, Tokyo 160-0021, Japon",
        link: "https://www.booking.com/hotel/jp/shinjuku-kuyakusho-mae-capsule.fr.html",
      }
  ];
  


function HotelsList()
{
    return (
        <><h2>The deal of the week !</h2><div className="activity-list">
            <span className="weekly-top-info">
                <img className="weekly-image" src={KyowaHotel} alt="Photo from the weekly top" />
                <span className="weekly-top-text">
                    <h3><b>-30%</b> at Kyo-Wa Hotel Tokyo</h3>
                    <p>7 Chome-61-10 Kameido, Koto City, Tokyo 136-0071, Japon</p>
                    <p>A 3-star hotel located in Tokyo, featuring an elegant and traditional Japanese style. You'll find very affordable rooms, complete services, and a welcoming staff!</p>

                </span>
            </span>

            <ReservationButton link="https://www.expedia.fr/Tokyo-Hotel-Kyo-Wa-Hotel.h111752913.Description-Hotel?chkin=2025-04-22&chkout=2025-04-23&x_pwa=1&rfrr=HSR&pwa_ts=1745156969421&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5mci9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=3593&destination=Tokyo%2C+Tokyo+%28pr%C3%A9fecture%29%2C+Japon&destType=MARKET&neighborhoodId=179175&selected=111752913&latLong=48.8558%2C2.3494&sort=RECOMMENDED&top_dp=90&top_cur=EUR&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVqNlyI_bC0G32drYvasVePKzXLCJx3gA-OvGtGXBcvWnq5oGCJWvEIaAjVjEALw_wcB&mctc=10&userIntent=&selectedRoomType=325864294&selectedRatePlan=399505919&searchId=d2a8956b-617a-464c-9161-f4c012e6278f" text=" Book a trip ! "/>

            <h2>More hotels approved by our team :</h2>

            <div className='more-activity-list'>
                {hotels.map((hotel, index) => (
                    <EventsComingButton key={index} name={hotel.name} image={hotel.image} date={hotel.adresse} link={hotel.link} />
                ))}
            </div>

        </div></>
    )
}

export default HotelsList ;