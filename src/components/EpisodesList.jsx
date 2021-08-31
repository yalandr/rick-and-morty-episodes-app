import React, {useEffect, useState} from 'react';
import Pagination from './Pagination'

function EpisodesList() {

    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});
    
    const initialUrl = 'https://rickandmortyapi.com/api/episode';

    const fetchEpisodes = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setEpisodes(data.results);
            setInfo(data.info)
        })
        .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchEpisodes(initialUrl);
    }, [])

    const onPrevious = () => {
        fetchEpisodes(info.prev)
    }

    const onNext = () => {
        fetchEpisodes(info.next)
    }

    return (
        <div className="episodes-list">
            <h1>Episodes list</h1>
            <Pagination 
                prev={info.prev} 
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext} 
            />
            {
                episodes.map((item, index) => (
                    <div className="episodes-cards-container" key={index}>
                        <div className="episode-card">
                            <h3 className="episode-name">
                                Name: {item.name}
                            </h3>
                            <p className="episide-air-date">
                                <b>Air Date:</b> {item.air_date}
                            </p>
                            <p className="episide-code">
                                <b>Episode code:</b> {item.episode}
                            </p>
                        </div>
                    </div>
                ))
            }
            <Pagination 
                prev={info.prev} 
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext} 
            />
        </div>
    )
}

export default EpisodesList