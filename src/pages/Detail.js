import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Detail } from '../components';

export default function Films () {
    const planets = useSelector((state) => state.planets);

    return (
        <div>
            <Detail title="Star Wars Planet Detail" data={planets.detail} />
            <Link to="/">
                <p>Back to Planets</p>
            </Link>
        </div>        
    );
}