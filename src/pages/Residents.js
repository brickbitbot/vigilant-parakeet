import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '../components/Grid';

export default function Residents () {
    const planets = useSelector((state) => state.planets);
    const [header, setHeader] = useState([
        "name",
        "height",
        "mass",
        "hair_color",
        "skin_color",
        "eye_color",
        "birth_year",
        "gender",
        'films',
        "species",
        "vehicles",
        "starships",

    ]);
     return (
         <div>
             <Grid title="Star Wars Residents" header={header} data={planets.residents} />
             <Link to="/">
                <p>Back to Planets</p>
            </Link>
         </div>        
    )
}