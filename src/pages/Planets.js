import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadPlanetsSuccess, loadFilmsSuccess, loadResidentsSuccess, loadDetailSuccess } from '../redux/actions';
import { loadSingle, loadMultiple } from '../service'
import { Grid, Modal } from '../components';

export default function Planets() {
    const history = useHistory();
    const planets = useSelector((state) => state.planets);
    const dispatch =  useDispatch();
    const [close, setClose] = useState(true);
    const [data, setData] = useState([]);
    const header = [
        'name',
        'rotation_period',
        'orbital_period',
        'diameter',
        'climate',
        'gravity',
        'terrain',
        'surface_water',
        'population',
        'residents',
        'films',
        'action'
      ];
    const modalData = [
        {
            'field': 'name',
            'type': 'text',
            'require': true
        },
        {
            'field': 'rotation_period',
            'type': 'number',
            'require': true
        },
        {
            'field': 'orbital_period',
            'type': 'number',
            'require': true
        },
        {
            'field': 'diameter',
            'type': 'number',
            'require': true
        },
        {
            'field': 'climate',
            'type': 'text',
            'require': true
        },
        {
            'field': 'gravity',
            'type': 'text',
            'require': true
        },
        {
            'field': 'terrain',
            'type': 'dropdown',
            'data': [
                0,
                1,
                2
            ],
            'require': true
        },
        {
            'field': 'surface_water',
            'type': 'number',
            'require': true
        }
    ];

    useEffect(() => {
        const loadPlanets = async () => {
            const data = await loadSingle("https://swapi.dev/api/planets");
            dispatch(loadPlanetsSuccess(data.count, data.next, data.previous, data.results))                          
        }

        loadPlanets();
    }, []);

    useEffect(()=>{
        generateData(planets.results)
    }, [planets.results])

    const goToFilms = (data) => async () => {
        const films = await loadMultiple(data);
        dispatch(loadFilmsSuccess(films));
        history.push('/films');
    }

    const goToResidents = (data) => async () => {
        const residents = await loadMultiple(data);
        dispatch(loadResidentsSuccess(residents));
        history.push('/residents');
    }

    const goToDetail = (data) => () => {
        dispatch(loadDetailSuccess(data))
        history.push('/detail')
    }

    const onSubmit = (e) => {
        e.preventDefault(e);
        console.log(e.target.name.value);
        setClose(true)
    }

    const openModal = () => {
        setClose(false);
    }

    const onClose = () => {
        setClose(true);
    }

    const generateData = (array) => { 
        for (var i in array) {           
            array[i].action = (
                <div>
                    <button onClick={goToFilms(array[i].films)}>Go to Films</button>
                    <button onClick={goToResidents(array[i].residents)}>Go to Residents</button>
                    <button onClick={goToDetail(array[i])}>Go to Detail</button>
                </div>                
            );
        }
        setData(array)
    }

    return (
        <div>
            <Grid title="Star Wars Planets" header={header} data={data} />
            <button style={{float: "right", margin: '1rem'}} onClick={openModal}>Add New Planets</button>
            { !close && <Modal onSubmit={onSubmit} data={modalData} onClose={onClose} close={close} /> }
        </div>        
    )
}