import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const getDetails = async() => {
        const json = await (await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
        setDetail(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getDetails()
    }, [])
    console.log(detail);
    console.log(id);

    return(
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div>
                <h1>{detail.title}</h1>
                <img src={detail.medium_cover_image} />
                <p>stars : {detail.rating}</p>
            </div>}
        </div>
    )
}
export default Detail;