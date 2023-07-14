import react from "react";

const Card = () => {
    return (
        <>
            <div className="movie">

                <img src="images/paris-poster.jpg" className="movie_poster"></img>
                
                <div className="movie-details">

                    <div div className="movie-details_box" >
                        <h4 className="box-title">Movie Title</h4>
                        <p className="movie-details_rating">9.7</p>
                    </div>

                    <div div className="movie-details_overview">
                        <h1>overwiev</h1>
                        <span>
                            Some big text about move. Description. Comment. Ans so on.
                            Oh it such a beautiful movie. I have never seen such an amazing film.
                            Ad some more good and bad critics from auditory of this movies
                        </span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Card;

