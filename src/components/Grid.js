import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

export default function Grid(props) {
    const { title, header, data } = props;

    return (
        <div className="grid">
            <h1 className="title">{title}</h1>
            <table className='gridTable'>
                <thead>
                    <tr>
                        {
                            header.map((name, index) => <th key={index}>{name.replace('_', " ")}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (<tr key={index}>
                            {
                                header.map((name, index) => <td style={Array.isArray(row[name]) || parseInt(row[name]) === Number(row[name]) ? {textAlign: 'right'} : {}} key={index}>{Array.isArray(row[name]) ? row[name].length : row[name]}</td>)
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

Grid.propTypes = {
    title: PropTypes.string,
    header: PropTypes.array,
    data: PropTypes.array
}