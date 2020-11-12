import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

export default function Detail(props) {
    const { title, data } = props;

    return (
        <div className="grid">
            <h1 className="title">{title}</h1>
            <table className='gridTable'>
                <tbody>
                    {Object.keys(data).map((key, index) => (
                        <tr key={index}>
                            <td style={{fontWeight: 'bold'}} >{key.replace('_', " ")}</td>
                            <td>{Array.isArray(data[key]) ? data[key].length : data[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

Detail.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}