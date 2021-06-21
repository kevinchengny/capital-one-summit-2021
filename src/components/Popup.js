import React from 'react'

function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>
                    { selected.Title } <span>({ selected.Year })</span>
                </h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} onerror="this.onerror=null; this.src='Default.jpg'" alt="" />
                    <p>Plot: {selected.Plot}</p>
                    <p>Released: {selected.Released}</p>
                    <p>Runtime: {selected.Runtime}</p>
                    <p>Genre: {selected.Genre}</p>
                    <p>Director: {selected.Director}</p>
                </div>

                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup