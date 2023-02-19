// working on slider
let playlistSidebar = document.getElementsByClassName("playlistSidebar")[0];
let closeIcon = document.getElementById("closeIcon");
closeIcon.addEventListener("click", () => {
    playlistSidebar.classList.add("sliderAnimate");
})



let playlistIcon = document.getElementById("playlistIcon");
playlistIcon.addEventListener("click", () => {
    playlistSidebar.classList.toggle("sliderAnimate");
})


// select the element
let music_card = document.querySelector(".music-card");
let artistName = document.getElementById("artistName");
let musicName = document.getElementById("musicName");
let current_time = document.getElementById("current_time");
let total_duration = document.getElementById("total_duration");
let shuffleBtn = document.getElementById("shuffle");
let skip_previous = document.getElementById("skip_previous");
let play_pause = document.getElementById("play_pause");
let skip_next = document.getElementById("skip_next");

let slideImg = document.getElementsByClassName("slideImg");
let slideArtistName = document.getElementsByClassName("slideArtistName");
let slideMusicName = document.getElementsByClassName("slideMusicName");
let equalizer = document.getElementsByClassName("equalizer");


let isPlaying = false;
let musicIndex = 0;
let shuffle = false;
let updateTimer;

// Creating a array for song details 
let songItemList = [
    {
        name: "Lahore",
        artist: "Guru Randhawa",
        image: "https://d102-static.filesht.ml/image/elvdMT6ACjPUXx0gQ8s_uW4t9r.jpg",
        url: "https://d102-static.filesht.ml/audio/arNEpSiOTfXPv3UYJ.mp3"
    },

    {
        name: "Kill Chori",
        artist: "Bhuvan Bam",
        image: "https://d102-static.filesht.ml/image/hJBdHl8TqWDeAbk9.jpg",
        url: "https://d102-static.filesht.ml/audio/w_JZx62Naq9jzCoYnS.mp3"
    },

    {
        name: "Naach Meri Rani",
        artist: "Guru Randhawa",
        image: "https://d102-static.filesht.ml/image/rovpNmb3ZSdy2Dw-F9qhO6CPtg.jpg",
        url: "https://d102-static.filesht.ml/audio/xqir7QOSjeADGt6BH-okd5NX1.mp3"
    },

    {
        name: "Arijit Singh",
        artist: "KHAIRIYAT",
        image: "https://d102-static.filesht.ml/image/CAGbw7z4lq_PgrFphnQxK2Zf68.jpg",
        url: "https://d102-static.filesht.ml/audio/lF9cHyuNJSoIUaBi0p5ROf.mp3"
    },

    {
        name: "Mehendi Wale Haath",
        artist: "Guru Randhawa",
        image: "https://d102-static.filesht.ml/image/rt1fi7HVMh9m6G_vjuCxqFk.jpg",
        url: "https://d102-static.filesht.ml/audio/eD5CEiWAo9vRMLx4JGkT.mp3"
    },

    {
        name: "Channa Mereya",
        artist: "Arijit Singh",
        image: "https://d102-static.filesht.ml/image/fh3L0R_YtAZomWOpMUJ.jpg",
        url: "https://d102-static.filesht.ml/audio/QLpt4sOZcuMEgSvJ.mp3"
    },

    {
        name: "Veham",
        artist: "Armaan Malik",
        image: "https://d102-static.filesht.ml/image/Cxm5BNwKSa0veA4uHE1dbr.jpg",
        url: "https://d102-static.filesht.ml/audio/ACzBVqJdKTyrombPGsSRe.mp3"
    },

    {
        name: "Haseen Raat",
        artist: "Bhuvan Bam",
        image: "https://d102-static.filesht.ml/image/LzkxPr5hvoG_ADTumw-pHefK4.jpg",
        url: "https://d102-static.filesht.ml/audio/5xH_RAN8iQzLawjYmIK0.mp3"
    },

    {
        name: "Ghar Se Nikalte Hi",
        artist: "Armaan Malik",
        image: "https://d102-static.filesht.ml/image/_dtUIN9yJ2o8V1lh0uAMOaX.jpg",
        url: "https://d102-static.filesht.ml/audio/JNLiGeTag3P7OuC2DhmqHpWlFr.mp3"
    },

    {
        name: "Tere Mere",
        artist: "Armaan Malik",
        image: "https://d102-static.filesht.ml/image/KCRN_utwcHX3bDgvU.jpg",
        url: "https://d102-static.filesht.ml/audio/UDjs2FM_-cew5XbCdy3lpgEBa6.mp3"
    },

    {
        name: "Jehda Nasha",
        artist: "Tanishk Faridkot",
        image: "https://d102-static.filesht.ml/image/QNT9OaREBlZGY2Uy41bkp0oWD.jpg",
        url: "https://d102-static.filesht.ml/audio/WsNxHo9GgMeUq3IwZk0nyX.mp3"
    },

    {
        name: "YALGAAR",
        artist: "CarryMinati",
        image: "https://d102-static.filesht.ml/image/1y87kNuQ0LYqpK_ab4eW.jpg",
        url: "https://d102-static.filesht.ml/audio/LkmS9IlZqKwO1V7yJEvWdF.mp3"
    },

    {
        name: "Meethi Meethi",
        artist: "Jubin Nautiyal",
        image: "https://d102-static.filesht.ml/image/m4GFBI7A90gWRMv8Koq.jpg",
        url: "https://d102-static.filesht.ml/audio/KsPGvcQMgXyDpoSnYkUx.mp3"
    },

    {
        name: "Mast Nazron Se",
        artist: "Jubin Nautiyal",
        image: "https://d102-static.filesht.ml/image/f7-WT3rHwOFijboYy5XGaCkM6E.jpg",
        url: "https://d102-static.filesht.ml/audio/SWd08ZFX6ikKApRrbjP.mp3"
    },

    {
        name: "Teri Galliyon Se",
        artist: "Jubin Nautiyal",
        image: "https://d102-static.filesht.ml/image/Gz9ZWrIkK6cXPw3anU5LyH.jpg",
        url: "https://d102-static.filesht.ml/audio/I3T8uvjf-z7GK6a1WimdxHRrL.mp3"
    },

    {
        name: "Mile Ho Tum",
        artist: "Neha Kakkar",
        image: "https://d102-static.filesht.ml/image/x40l_FVowasWpITGMR.jpg",
        url: "https://d102-static.filesht.ml/audio/jVcy-MadultCY487zEhq_feN.mp3"
    },

    {
        name: "Main Rahoon Ya Na Rahoon ",
        artist: "Armaan Malik",
        image: "https://d102-static.filesht.ml/image/vM9RYjda2OIyXNrSQEmLG.jpg",
        url: "https://d102-static.filesht.ml/audio/i3FA0VkjS6JEMv17zpD.mp3"
    },

    {
        name: "Oh Humsafar",
        artist: "Neha Kakkar",
        image: "https://i.ytimg.com/vi/g4HDfqEWf6Y/mqdefault.jpg",
        url: "https://d102-static.filesht.ml/audio/vsqOyH2fNJklWDXigw7Ib.mp3"
    },

    {
        name: "GOA BEACH",
        artist: "Tony Kakkar",
        image: "https://d102-static.filesht.ml/image/XF35oWUjEJLwBH8mKQcfs.jpg",
        url: "https://d102-static.filesht.ml/audio/85eaFX-MrnwskVlL2Y.mp3"
    },
    
    {
        name: "High Rated Gabru",
        artist: "Guru Randhawa",
        image: "https://d102-static.filesht.ml/image/b_dWBsEvOfPiU6GmtlXY.jpg",
        url: "https://d102-static.filesht.ml/audio/q3refEMKDOzmonsYZ5xN.mp3"
    },

    {
        name: "COCA COLA",
        artist: "Tony Kakkar",
        image: "https://d102-static.filesht.ml/image/EifuLymJezTsAawRVOCFq8.jpg",
        url: "https://d102-static.filesht.ml/audio/LeRvVDnrq1MzKSHo.mp3"
    },

    {
        name: "Zaroori Tha",
        artist: "Rahat Fateh Ali Khan",
        image: "https://d102-static.filesht.ml/image/aZkCePSfhINpQ835sAOi7r.jpg",
        url: "https://d102-static.filesht.ml/audio/vja73Aseqgo8MP2LB.mp3"
    },

    {
        name: "Lakshya",
        artist: "Javed Akhtar",
        image: "https://d102-static.filesht.ml/image/afZxiPVHwsLgGXmujFE7A.jpg",
        url: "https://d102-static.filesht.ml/audio/3pPaz72rKHIXVsd91FTCJGonj0.mp3"
    },
    
    {
        name: "Tumhe Dillagi",
        artist: "Rahat Fateh Ali Khan",
        image: "https://d102-static.filesht.ml/image/PuzseYUWhvBw-malSLxQ5JX.jpg",
        url: "https://d102-static.filesht.ml/audio/RrSfzBG1WPoIaNX6O84HCm0eU.mp3"
    },
    
    {
        name: "Lakshya ko pana hai",
        artist: "Sandeep Maheshwari",
        image: "https://d102-static.filesht.ml/image/OG7v8HDoJKWS4s9ni1bYwlZNu.jpg",
        url: "https://d102-static.filesht.ml/audio/tyeIc2FNmuCoSwE9HY6v_RJAd.mp3"
    },
    
    {
        name: "Zinda",
        artist: "Farhan Akhtar",
        image: "https://d102-static.filesht.ml/image/1kjt0dx_QPcE5o7FMZCJqV4Ne.jpg",
        url: "https://d102-static.filesht.ml/audio/0Cvd7gQW3N4nBDeMK2.mp3"
    },
    
    {
        name: "Unstoppable ",
        artist: "Lyrics",
        image: "https://d102-static.filesht.ml/image/bW2DiVIyRUSzXeoZwQLf7.jpg",
        url: "https://d102-static.filesht.ml/audio/78vhtZk2A3gw5oJxpMYlG.mp3"
    },
    
    {
        name: "Ik Mulaqaat",
        artist: "Palak M",
        image: "https://d102-static.filesht.ml/image/w2cWL5kyzmMY7qXSsR.jpg",
        url: "https://d102-static.filesht.ml/audio/8ANIUWZ_0goP5JtYcfp9Fl.mp3"
    },
    
    {
        name: "Dekhte Dekhte",
        artist: "Nusrat Saab",
        image: "https://d102-static.filesht.ml/image/ahK49Tn3FecW2lLRZ6qkd1C.jpg",
        url: "https://d102-static.filesht.ml/audio/-P6RSxHBAZQnDUhd2KX7i58tzo.mp3"
    },
    
    {
        name: "Kinna Sona",
        artist: "Meet Bros,Jubin N",
        image: "https://d102-static.filesht.ml/image/KgjwdT4VImqDbNCLo60.jpg",
        url: "https://d102-static.filesht.ml/audio/z7B8QJYhLCkjclOKf2Pg4XpD.mp3"
    }

]




// create a audio object
let audio = document.createElement("audio");


// Load the song details
loadSongDetails(musicIndex);
function loadSongDetails(musicIndex) {
    clearInterval(updateTimer);
    resetValues()
    audio.src = songItemList[musicIndex].url;

    document.body.style.backgroundImage = `-webkit-radial-gradient(center center, rgba(0, 0, 0, 0.4), rgb(0, 0, 0) 90%), url('${songItemList[musicIndex].image}')`;
    // document.body.style.backgroundRepeat = "no-repeat";

    music_card.style.backgroundImage = ` linear-gradient(to bottom, transparent 0%, black), url("${songItemList[musicIndex].image}")`;
    artistName.innerHTML = songItemList[musicIndex].artist;
    musicName.innerHTML = songItemList[musicIndex].name;


    //  Move to the next track if the current finishes playing
    // using the 'ended' event
    audio.addEventListener("ended", nextSong);
}



// for seek value change
function resetValues() {
    current_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    // seekbar.value = 0;
}


// working on play the song
function playSong() {
    audio.play();
    isPlaying = true;
    play_pause.innerHTML = `<span class="material-symbols-outlined" style="font-weight: 100;">pause</span>`;
}



play_pause.addEventListener("click", () => {
    if (!isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
})



// working on pause the song
function pauseSong() {
    audio.pause();
    isPlaying = false;
    play_pause.innerHTML = `<span class="material-symbols-outlined" id="play_pause">play_arrow</span>`;
}



//  working on next button 
function nextSong() {
    nonActiveMusic();  // unselect the select song
    if (musicIndex < songItemList.length - 1) {
        musicIndex += 1;
    }
    else {
        musicIndex = 0;

    }

    // Load the song details
    loadSongDetails(musicIndex);
    playSong();
    activeMusic(); 
}

skip_next.addEventListener("click", () => {
    nextSong();
})



//  working on previous button 
function previousSong() {
    nonActiveMusic();  // unselect the select song
    if (musicIndex > 0) {
        musicIndex -= 1;
    } else {
        musicIndex = songItemList.length - 1;
    }

    // Load the song details
    loadSongDetails(musicIndex);
    playSong();
    activeMusic(); 
}

skip_previous.addEventListener("click", () => {
    previousSong();
})



// working on shuffle
shuffleBtn.addEventListener("click", () => {
    if (shuffle === false) {
        shuffle = true;
        shuffleBtn.classList.add("active");
        randomIndex();
    } else {
        shuffle = false;
        shuffleBtn.classList.remove("active");
    }
})


function randomIndex() {
    musicIndex = Math.floor(Math.random() * songItemList.length);
    loadSongDetails(musicIndex);
    playSong();
    // console.log(musicIndex);
}




// create seekTo function for seek position change
function seekTo() {
    let seekto = audio.duration * (seekbar.value / 100);
    audio.currentTime = seekto;
    console.log(seekto);
}

let seekbar = document.getElementById("seekbar");
seekbar.addEventListener("change", seekTo);




// Set an interval of 1000 milliseconds
// for updating the seek slider
audio.addEventListener("timeupdate", () => {
    updateTimer = setInterval(() => {
        seekUpdate();
    }, 1000);
})



// Create a seek update function
function seekUpdate() {
    let seekPosition = 0;
    // console.log(Math.floor(audio.duration / 60));
    // Check if the current track duration is a legible number
    if (!isNaN(audio.duration)) {
        seekPosition = audio.currentTime * (100 / audio.duration);
        seekbar.value = seekPosition;

        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(audio.currentTime / 60);
        let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(audio.duration / 60);
        let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

        // Add a zero to the single digit time values
        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }

        if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds;
        }

        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
        }

        if (durationMinutes < 10) {
            durationMinutes = "0" + durationMinutes;
        }

        // Display the updated duration
        current_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}



// working on playlist Sidebar
showPlaylist();
function showPlaylist() {
    let musicList = document.getElementById("musicList");

    let html = "";
    let songListArr = songItemList.length - 1;
    for (const key of songItemList) {
        console.log(key);
        html += `<div class="music">
       <div class="img">
           <img class="slideImg" src="${key.image}" alt="">
       </div>
       <div class="musicDetails">
           <h5>
               <p class="slideArtistName">${key.artist}</p>
               <span class="slideMusicName">${key.name}</span>
               <!-- <p class="slideArtistName"><marquee behavior="" direction="">${key.artist}</marquee></p> -->
           </h5>
       </div>
       <div class="equalizerIcon">
           <span class="material-symbols-outlined  equalizer">equalizer</span>
       </div>
   </div>`;
}

musicList.innerHTML = html;
}


let music = document.getElementsByClassName("music");
// music.addEventListener("click", () => {
//     music.classList.add("musicOn");
// })

// music[musicIndex].classList.add("musicOn"); 
activeMusic();
function activeMusic() {
    // music[musicIndex].classList.add("musicOn"); 
    music[musicIndex].style.backgroundColor = "#1c1a1a";
    music[musicIndex].getElementsByClassName("slideArtistName")[0].style.color = "#eb7e00eb";
    music[musicIndex].getElementsByClassName("slideMusicName")[0].style.color = "#eb7e00eb";
    music[musicIndex].getElementsByClassName("equalizer")[0].style.color = "#eb7e00eb";
}

function nonActiveMusic() {
    // music[musicIndex].classList.add("musicOn"); 
    music[musicIndex].style.backgroundColor = "hsl(206, 47%, 3%)";
    music[musicIndex].getElementsByClassName("slideArtistName")[0].style.color = "#ece9e9";
    music[musicIndex].getElementsByClassName("slideMusicName")[0].style.color = "#c8c5c5";
    music[musicIndex].getElementsByClassName("equalizer")[0].style.color = "white";
}


Array.from(music).forEach((element, index) => {
    console.log(element,index);
    element.addEventListener("click", (e)=>{
        nonActiveMusic();  // unselect the select song
        musicIndex = index;
        audio.src = songItemList[musicIndex].url;
        // alert(musicIndex)
        loadSongDetails(musicIndex) 
        playSong();
            activeMusic();

    })
});

