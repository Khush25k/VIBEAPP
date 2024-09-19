document.addEventListener('DOMContentLoaded', () => {
    const artists = {
        "DARSHAN RAVAL": [
            { title: "MAHIYE JINHA SONHA", file: "MAHIYE.mp3" },
            { title: "ANOTHER SONG", file: "2.mp3" }
        ],
        "ANIRUDH RAVICHANDRA": [
            { title: "O BEDARDEYA", file: "2.mp3" },
            { title: "ANOTHER SONG", file: "3.mp3" }
        ]
        // Add more artists and songs here
    };

    const artistElements = document.querySelectorAll('.artist');
    const songList = document.getElementById('song-list');

    artistElements.forEach(artist => {
        artist.addEventListener('click', () => {
            const artistName = artist.getAttribute('data-artist');
            sessionStorage.setItem('selectedArtist', artistName);
            window.location.href = 'songs.html';
        });
    });

    if (songList) {
        const selectedArtist = sessionStorage.getItem('selectedArtist');
        document.getElementById('artist-name').textContent = selectedArtist;
        const songs = artists[selectedArtist] || [];

        songs.forEach(song => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = song.title;
            a.setAttribute('data-song', song.file);
            a.addEventListener('click', (e) => {
                e.preventDefault();
                sessionStorage.setItem('selectedSong', song.file);
                sessionStorage.setItem('selectedSongTitle', song.title);
                window.location.href = 'player.html';
            });
            li.appendChild(a);
            songList.appendChild(li);
        });
    }

    if (window.location.pathname.includes('player.html')) {
        const selectedSong = sessionStorage.getItem('selectedSong');
        const selectedSongTitle = sessionStorage.getItem('selectedSongTitle');
        const selectedArtist = sessionStorage.getItem('selectedArtist');
        const audioSource = document.getElementById('audio-source');
        const audioPlayer = document.getElementById('audio-player');
        const playerBackground = document.getElementById('player-background');
        const songTitle = document.getElementById('song-title');

        audioSource.src = `AUDIO/${selectedSong}`;
        songTitle.textContent = selectedSongTitle;
        playerBackground.style.backgroundImage = `url('IMAGES/${selectedArtist.toLowerCase().replace(/\s/g, '_')}.jpeg')`;
        audioPlayer.load();
        audioPlayer.play();
    }
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const songUrl = urlParams.get('songUrl');

    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const songTitle = document.getElementById('song-title');

    if (songUrl) {
        audioSource.src = songUrl;
        audioPlayer.load(); // Reload the audio element to load the new source
        audioPlayer.play(); // Autoplay the song
        songTitle.textContent = 'Now Playing: ' + getSongTitleFromUrl(songUrl);
    } else {
        songTitle.textContent = 'Song not selected';
    }
});

function getSongTitleFromUrl(songUrl) {
    // You need to implement logic to extract and return the song title from the URL
    // Example: Extract the filename or use a mapping if titles are predefined
    // Replace this with your actual logic based on your URL structure
    return songUrl; // Example: return a formatted song title
}
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const artistList = document.querySelectorAll('.artist');

    artistList.forEach(function(artist) {
        artist.addEventListener('click', function() {
            const artistName = artist.dataset.artist;

            // Redirect to songs.html and pass the artist name as query parameter
            window.location.href = `songs.html?artist=${encodeURIComponent(artistName)}`;
        });
    });
});
