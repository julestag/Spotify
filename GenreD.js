import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GenreDetails() {
    const [genre, setGenre] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/genres/${id}`)
            .then(response => response.json())
            .then(data => {
                setGenre(data);
            })
            .catch(error => {
                console.error('Error fetching :', error);
            });
    }, [id]);

    if (!genre) { // verifie la présence d'album
        return;
    }



    return ( // SI presence d'album affiche la div 
        <div>
            <h1>ok</h1>
            <h2>{genre.name}</h2> {/* ?? */}
            <p>Nombre d'albums : {genre.albums.length}</p>
            {genre.albums.map(album => (
                <li key={genre.id}>
                    Album {album}
                </li>
            )
            )}
        </div>
    );
}

export default GenreDetails;
