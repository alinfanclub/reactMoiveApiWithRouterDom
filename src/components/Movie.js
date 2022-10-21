import propTypes from "prop-types"
import {Link} from "react-router-dom";

function Movie({title, year, mediumCoverImage, genres, summary, id}) {
    return (
        <div className="eachMovie">
              <div className="title">
                <h2>
                  <Link to={`/movie/${id}`}>
                    {title}
                  </Link>
                </h2>
                <small>{year}</small>
              </div>
              <img src={mediumCoverImage} />
              <p>{summary != '' ? summary : <span>summary is noting</span>}</p>
              <ul>
               {genres.map((g, index) => (
                <li key={index}>{index+1} : {g}</li>
               )) }
              </ul>
        </div>
    )
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    mediumCoverImage: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string.isRequired),
    summary: propTypes.string.isRequired,
}
export default Movie;