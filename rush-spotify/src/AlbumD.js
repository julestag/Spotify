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
        <h2>{album.album.name}</h2> {/* ?? */}
        <p>id de l'artiste : {album.album.artist_id}</p>
    <p>{album.album.description}</p>
    <img src={album.album.cover} alt={album.album.name} />
    <p>date de sortie : {album.album.release_date}</p>
    <p>Rangs de popularité : {album.album.popularity}</p>
        <p>Nombre de titre: {album.tracks.length}</p>
        <ul>
            {album.tracks.map(track => ( // map les Tracks a track pour sortir les clef name et sa durée
                <li key={track.id}>
                <h4>{track.name}</h4>
                <p>Durée : {track.duration} secondes</p>
                <audio controls src={track.mp3}></audio>
              </li>
            ))}
        </ul>
    </div>
);
}

export default AlbumDetails;