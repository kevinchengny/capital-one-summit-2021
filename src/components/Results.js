import React from 'react'
import Result from './Result'

function Results ({ results, openPopup, loading }) {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <section className="results">
            {results.map(result => (
                
                <Result key={result.imdbID} result={result} openPopup={openPopup} />
            ))}
        </section>

        // <ul className='results'>
        //     {results.map(result => (
        //         <li key={result.imdbID} result={result} openPopup={openPopup}>
        //         </li>
        //     ))}
        // </ul>
    );
};


export default Results