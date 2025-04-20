import ReservationButton from './ReservationButton';

function ShopsComponent({name, description, image, link, className})
{
    return (
        <div className="shops-component">
            <img className={className} src={image} alt={name}/>

            <span><h2>{name}</h2>
            <p>{description}</p>
            <ReservationButton link={link} text="Visit the website"/>
           
              </span>
            </div>  
    )
}

export default ShopsComponent;