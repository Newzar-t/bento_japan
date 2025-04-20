function InformationPage({logo,title,description, list, onClose})
{

    return(
        <>
        <div className="information-page">
        <span className="weekly-top-span"><img className="logo" src={logo} alt="logo">
        </img>
        <span><h1>{title}</h1><p>{description}</p></span>
        <button className="close-button" onClick={onClose}>X</button></span>
        
        {list}
        </div>
        
        </>
    )
}

export default InformationPage;