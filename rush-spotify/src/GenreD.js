import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GenreDetails() {
    const [genre, setGenre] = useState(null);
    const [album, setAlbum] = useState(null);
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

    useEffect(() => {
        fetchGenre();
        fetchAlbums();
    }, [id]);

    const fetchGenre = () => {
        fetch(`http://localhost:8000/genres/${id}`)
            .then(response => response.json())
            .then(data => {
                setGenre(data);
            })
            .catch(error => {
                console.error('Error fetching genre:', error);
            });
    };

    const fetchAlbums = () => {
        fetch(`http://localhost:8000/albums/${id}/`)
            .then(response => response.json())
            .then(data => {
                setAlbum(data);
            })
            .catch(error => {
                console.error('Error fetching albums:', error);
            });
    };

    if (!genre) { // verifie la présence d'album
        return;
    }



    return ( // SI presence d'album affiche la div 
        <div>

            <h2>{genre.genre.name}</h2> {/* ?? */}
            <p>Nombre d'albums : {genre.albums.length}</p>
            <ul>
                {genre.albums.map(album => (
                    <li key={album.id}>
                        <p style={{color: "black"}}> Album {album}</p>
                    </li>
                ))}
            </ul>


        </div>
    );
}

export default GenreDetails;