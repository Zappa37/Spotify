class Songs {
    constructor(title, album, band, genre ) {
        this.title = title;
        this.album = album;
        this.band = band;
        this.genre = genre;

        this.reviews = [];
    }      
};

class Playlists  {
    
    constructor(name) {
        this.name = name || 0;
        this.songs = []; 
        }
    
    addSong(Song) { 
        this.songs.push(Song);
    }

    removeSong(Song) {
        if (songs.includes(Song)) {
            songs.pop(Song);
        }
    }

};



class User {
    constructor(name) {
        this.name = name;
        this.myPlaylists = [];
        this.notifications = [];
    }

    createPlaylists(Playlist) {
       
        this.myPlaylists.push(Playlist);
    }

    deletePlaylists(Playlist) {
        if (myPlaylists.includes(Playlist)) {
            myPlaylists.pop(Playlist);
        }
    };
  
};


    let currentSong = 0;

    let playPlaylist = (Playlists) => {
        let endOfPlaylist = false;
    

        for (let i = 0; i < Playlists.songs.length; i++) { 
            console.log("Estás escuchando" + Playlists.songs[i] + " de" + Songs[i].banda); 
            if (i = Playlists.song.length-1) {
                endOfPlaylist = true; 
            }
        };
    };

    let nextSong = (songs) => {
        currentSong = currentSong++;
        if (endOfPlaylist = true) {
            console.log("Se termino la Playlist");
        }
    };
    
    let previousSong = (songs) => {

            Playlists.songs[i] = Playlists.songs[i--];
            if (i< 1) {
                console.log("Esta es la primera canción.");
            }
        };

    let playlistByGenre = [];

    let playlistByBand = [];

    let sameGenre = (genre) => {
        for (let i = 0; i < songs.length; i++) { //esto solo itera las canciones del usuario, cómo haría para iterar todas las de plataforma?
            if (songs[i].genre == genre) {
                playlistByGenre.push(songs[i]);
            }
        }        
    };

    let sameBand = (band) => {
        for (let i = 0; i < songs.length; i++) { //mismo problema que con la función anterior
            if (songs[i].band == band) {
                playlistByBand.push(songs[i]);
            }
        }
    };

   
 
    let suscribeBand = (band, songs, Playlists) => {
        if (songs.band == band) {
            notifications.push("Nueva canción de " + band);
            notificationRead = false;
        } else if (Playlists.songs.band == band) {
            notifications.push("Nueva canción de " + band + "en " + Playlists);
            notificationRead = false;
        }

    };


    let suscribeGenre = (genre, songs, Playlists) => {
        if (songs.genre == genre) {
            notifications.push("Nueva canción de " + genre);
            notificationRead = false;
        } else if (Playlists.songs.genre == genre) {
            notifications.push("Nueva canción de " + genre + "en " + Playlists);
            notificationRead = false;
        }

    };


    let getUnreadNotifications = (notifications) => {
        
        unreadNotifications = [];
        this.unreadNotifications.push(notification);
        Notification.read = true;

    };


    let deleteSong = (Songs) => {
        songs.forEach((songs, index) => {
            if (Songs === songs) {
                followedUsers.splice(index, 1);
            }
        })
    };

    let deleteSongsFromBand = (band) => {
        songs.forEach((songs, index) => {
            if (band === songs) {
                followedUsers.splice(index, 1);
            }
        })
    };

    // en estas dos funciones me faltaría borrarlas de la plataforma y las playlist 


    let addReview = (review) =>  {
        if (review >= 1 && x <= 5) {
        reviews.push(review);
        }
    }; 

    let modifyReview = (modifiedReview) => {
        if (modifiedReview >= 1 && x <= 5) {
            reviews.forEach((reviews, index) => {
                if (modifiedReview = reviews) {
                    reviews[i] = modifiedReview;
                }
            })
        }
    };

    let deleteReview = (review) => {
        reviews.forEach((review, index) {
            if (review === reviews) {
                reviews.splice(index, 1);
            }
        })
    };

    




    

    




