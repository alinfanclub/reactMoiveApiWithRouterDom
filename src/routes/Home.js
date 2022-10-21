import {useEffect, useState } from "react";
import "../main.css";
import Movie from "../components/Movie";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoives] = useState([])
  const getMoives = async() => {
    const json = await (await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`))).json()
    setMoives(json.data.movies)
    setLoading(false)
  };
  useEffect(() => {
    getMoives()
  },[])

  console.log(movies);

  return (
    <div>
     {loading ? <h1>loading...</h1> : 
     <div>
        {movies.map((item) => (
          <Movie 
          key={item.id}
          title={item.title} 
          year={item.year} 
          mediumCoverImage={item.medium_cover_image} 
          ytTrailerCode={item.yt_trailer_code} 
          genres={item.genres}
          summary={item.summary}
          id={item.id}
          /> 
        ))}
      </div>}
    </div>
  );
}

export default Home;