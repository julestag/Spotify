import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AlbumDetails() {
    const [album, setAlbum] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/albums/${id}`)
            .then(response => response.json())
            .then(data => {
                setAlbum(data);
            })
            .catch(error => {
                console.error('Error fetching album:', error);
            });
    }, [id]);

    if (!album) { // verifie la présence d'album
        return;
    }



    return ( // SI presence d'album affiche la div 
        <div>
            <h2>{album.album.name}</h2>
            <img src={album.cover} alt={album.name} />
            <p>Nombre de titre: {album.tracks.length}</p>
            <p>{album.mp3}</p>
            <a href={album.cover} ></a>
            <ul>
                {album.tracks.map(track => ( // map les Tracks a track pour sortir les clef name et sa durée
                    <li key={track.id}>
                        Titre - {track.name} - Durée: {track.duration} secondes
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumDetails;
