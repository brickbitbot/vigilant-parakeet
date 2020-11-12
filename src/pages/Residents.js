import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '../components/Grid';

export default function Residents() {
    const residents = useSelector(state => state.residents);
    const header = [
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
    ];

    return (
         <div>
             <Grid title="Star Wars Residents" header={header} data={residents} />
             <Link to="/">
                <p>Back to Planets</p>
            </Link>
         </div>        
    )
}