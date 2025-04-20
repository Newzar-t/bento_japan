function EventsComingButton({name, image, date, link})
{
    return (
        <a href={link} className="events-coming-span">
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p>{date}</p>
        </a>
    )
}

export default EventsComingButton;