function ReservationButton({link, text})
{
    return(
        <a className="reservation-button" href={link}>{text}</a>
    )
}

export default ReservationButton;