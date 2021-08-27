// import React from 'react';
import React, {useEffect, useState} from 'react';

function EpisodesList() {

    const [episodes, setEpisodes] = useState([]);

    const initialUrl = 'https://rickandmortyapi.com/api/episode';

    const fetchEpisodes = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setEpisodes(data.results);
        })
        .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchEpisodes(initialUrl);
    }, [])

    return (
        <div className="episodes-list">
            <h1>Episodes list</h1>
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
        </div>
    )
}

export default EpisodesList