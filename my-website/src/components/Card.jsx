import moonPic from '../assets/snow_moon.jpg'

function Card(){

    return(

        <div className="card">
            <img className='card_img' src={moonPic} alt="A full moon"></img>
            <h2>Snow Moon</h2>
            <p>Full moon in 2026</p>
        </div>
    );

}

export default Card