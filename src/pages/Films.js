import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '../components/Grid';

export default function Films() {
    const films = useSelector(state => state.films);
    const header = [
        'title',
        'episode_id',
        'opening_crawl',
        'director',
        'producer',
        'release_date',
        'characters',
        'planets',
        'starships',
        'vehicles',
        'species'
    ];
    return (
         <div>
             <Grid title="Star Wars Films" header={header} data={films} />
             <Link to="/">
                <p>Back to Planets</p>
            </Link>
         </div>        
    );
}