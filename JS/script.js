

class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    push_back(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    pop() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    // isEmpty(){
    //     // console.log(this.item);
    //     if(this.item.length==0){
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}

let hotSpicy = [
//1ST
[
    { name: "Boro Boro", audioPath: "./AUDIOS/Ncs/boroNcs.mp3", cover: "./IMAGES/Ncs/boroNcs.jpg", subHeading: "Arash - Boro Boro (Syvorovv Remix)", songId: "0" },

    { name: "Cradles Remix", audioPath: "./AUDIOS/Ncs/cradlesNcs.mp3", cover: "./IMAGES/Ncs/cradlesNcs.jpg", subHeading: "Svniivan, Edwince & Veronica Bravo", songId: "1" },
    { name: "NEFFEX - Desperate", audioPath: "./AUDIOS/Ncs/desperateNcs.mp3", cover: "./IMAGES/Ncs/desperateNcs.jpg", subHeading: "NEFFEX - Desperate [NCS Release]", songId: "2" },

    { name: "Versace NCS", audioPath: "./AUDIOS/Ncs/versaceNcs.mp3", cover: "./IMAGES/Ncs/versaceNcs.jpg", subHeading: "The Same Persons", songId: "3" },
    { name: "G-Eazy - Far Alone", audioPath: "./AUDIOS/Ncs/farAloneNcs.mp3", cover: "./IMAGES/Ncs/farAloneNcs.jpg", subHeading: " Ft. Jay Ant (alperen karaman remix)", songId: "4" },
    { name: "NCS - Game Over", audioPath: "./AUDIOS/Ncs/gameOverNcs.mp3", cover: "./IMAGES/Ncs/gameOverNcs.jpg", subHeading: "Egzod, EMM -  [NCS Release]", songId: "5" },

    { name: "Say Goodbye - NCS", audioPath: "./AUDIOS/Ncs/goodbyeNcs.mp3", cover: "./IMAGES/Ncs/goodbyeNcs.jpg", subHeading: "Marvin Divine, Unknown Brain", songId: "6" },

    { name: "TheFatRat - MAYDAY", audioPath: "./AUDIOS/Ncs/maydayNcs.mp3", cover: "./IMAGES/Ncs/maydayNcs.jpg", subHeading: "feat. Laura Brehm ", songId: "7" },

    { name: "No Rival", audioPath: "./AUDIOS/Ncs/noRivalNcs.mp3", cover: "./IMAGES/Ncs/noRivalNcs.jpg", subHeading: "Alaina Cross, Egzod, and Maestro Chive", songId: "8" },

    { name: "Phenomenon", audioPath: "./AUDIOS/Ncs/phenomenonNcs.mp3", cover: "./IMAGES/Ncs/phenomenonNcs.jpg", subHeading: "Hoober and Unknown Brain", songId: "9" },

    { name: "NEFFEX Play- Nightcore", audioPath: "./AUDIOS/Ncs/playNcs.mp3", cover: "./IMAGES/Ncs/playNcs.jpg", subHeading: "NEFFEX", songId: "10" },

    { name: "Royalty - NCS", audioPath: "./AUDIOS/Ncs/royaltyNcs.mp3", cover: "./IMAGES/Ncs/royaltyNcs.jpg", subHeading: "Wiguez & Alltair Remix", songId: "11" },

    { name: "Symphony- NCS", audioPath: "./AUDIOS/Ncs/symphonyNcs.mp3", cover: "./IMAGES/Ncs/symphonyNcs.jpg", subHeading: "Donna Tella, Arc North", songId: "12" },
    

],

//2ND Hindi songs
[
    { name: "Chamak Challo", audioPath: "./AUDIOS/Hindi/chammakHindi.mp3", cover: "./IMAGES/Hindi/chammakHindi.jpg", subHeading: "Akon and Hamsika Iyer", songId: "0" },
    { name: "Dekhte Dekhte", audioPath: "./AUDIOS/Hindi/dekhteHindi.mp3", cover: "./IMAGES/Hindi/dekhteHindi.jpg", subHeading: "Atif Aslam", songId: "1" },
    { name: "Main Jaha Rahoon", audioPath: "./AUDIOS/Hindi/mainRahoonHindi.mp3", cover: "./IMAGES/Hindi/mainRahoonHindi.jpg", subHeading: "Krishna Beuraa and Rahat Fateh Ali Khan", songId: "2" },
    { name: "Mora Piya", audioPath: "./AUDIOS/Hindi/moraPiyaHindi.mp3", cover: "./IMAGES/Hindi/moraPiyaHindi.jpg", subHeading: "Aadesh Shrivastava", songId: "3" },
    { name: "Pasoori", audioPath: "./AUDIOS/Hindi/pasooriHindi.mp3", cover: "./IMAGES/Hindi/pasooriHindi.jpg", subHeading: " Ali Sethi, Shae Gill", songId: "4" },
    { name: "Raataan Lambiyan", audioPath: "./AUDIOS/Hindi/rataanHindi.mp3", cover: "./IMAGES/Hindi/rataanHindi.jpg", subHeading: "Jubin Nautiyal, Tanishk Bagchi, Asees Kaur", songId: "5"},
    { name: "Mere Rashke Qamar", audioPath: "./AUDIOS/Hindi/rashkeHindi.mp3", cover: "./IMAGES/Hindi/rashkeHindi.jpg", subHeading: "Nusrat Fateh Ali Khan", songId: "6" },
    { name: "Saiyara", audioPath: "./AUDIOS/Hindi/saiyaraHindi.mp3", cover: "./IMAGES/Hindi/saiyaraHindi.jpg", subHeading: "Mohit Chauhan, Tarannum Mallik", songId: "7" },
    { name: "Sawaar Loon", audioPath: "./AUDIOS/Hindi/sawaarHindi.mp3", cover: "./IMAGES/Hindi/sawaarHindi.jpg", subHeading: "Monali Thakur", songId: "8" },
    { name: "Tere Vaaste", audioPath: "./AUDIOS/Hindi/vaasteHindi.mp3", cover: "./IMAGES/Hindi/vaasteHindi.jpg", subHeading: "Sachin-Jigar, Amitabh Bhattacharya, Altamash Faridi, Shadab Faridi, Varun Jain", songId: "9" },
    

   
],

//3RD Phonks
[
    { name: "Avoid Me", audioPath: "./AUDIOS/Phonks/avoidMePhonk.mp3", cover: "./IMAGES/Phonks/avoidMePhonk.jpg", subHeading: "KUTE", songId: "0" },
    { name: "Rays Of Serenity", audioPath: "./AUDIOS/Phonks/serenityPhonk.mp3", cover: "./IMAGES/Phonks/serenityPhonk.jpg", subHeading: " DVRST, safetypleace, Nia.wave", songId: "1" },
    { name: "Fatality", audioPath: "./AUDIOS/Phonks/fatalityPhonk.mp3", cover: "./IMAGES/Phonks/fatalityPhonk.jpg", subHeading: "Kordhell", songId: "2" },
    { name: "Anubis", audioPath: "./AUDIOS/Phonks/anubisPhonk.mp3", cover: "./IMAGES/Phonks/anubisPhonk.jpg", subHeading: " KUTE, RAIZHELL", songId: "3" },
    { name: "Cursed", audioPath: "./AUDIOS/Phonks/cursedPhonk.mp3", cover: "./IMAGES/Phonks/cursedPhonk.jpg", subHeading: " KAZE", songId: "4" },
    { name: "Endline", audioPath: "./AUDIOS/Phonks/endLinePhonk.mp3", cover: "./IMAGES/Phonks/endLinePhonk.jpg", subHeading: " 4WHEEL", songId: "5" },
    { name: "Headlight", audioPath: "./AUDIOS/Phonks/headlightPhonk.mp3", cover: "./IMAGES/Phonks/headlightPhonk.jpg", subHeading: " 4WHEEL", songId: "6" },
    { name: "Metamorphosis", audioPath: "./AUDIOS/Phonks/interworldPhonk.mp3", cover: "./IMAGES/Phonks/interworldPhonk.jpg", subHeading: "INTERWORLD", songId: "7" },
    { name: "Land Of Fire", audioPath: "./AUDIOS/Phonks/landOfFirePhonk.mp3", cover: "./IMAGES/Phonks/landOfFirePhonk.jpg", subHeading: "Kordhell", songId: "8" },
    { name: "WTF", audioPath: "./AUDIOS/Phonks/wtfPhonk.mp3", cover: "./IMAGES/Phonks/wtfPhonk.jpg", subHeading: "Kordhell, Sadfriendd", songId: "9" },
    { name: "Montagem- Pr Funk", audioPath: "./AUDIOS/Phonks/prFunkPhonk.mp3", cover: "./IMAGES/Phonks/prFunkPhonk.jpg", subHeading: " S3BZS", songId: "10" },
    { name: "Purifying", audioPath: "./AUDIOS/Phonks/purifyingPhonk.mp3", cover: "./IMAGES/Phonks/purifyingPhonk.jpg", subHeading: " Pluxry SkUrt", songId: "11" },
    { name: "Scopin", audioPath: "./AUDIOS/Phonks/scopinPhonks.mp3", cover: "./IMAGES/Phonks/scopinPhonks.jpg", subHeading: "Kordhell", songId: "12" },
    
],

//4TH Lofi
[
    { name: "Baarish Slowed & Lo-fi Mix", audioPath: "./AUDIOS/baarishSlow.mp3", cover: "./IMAGES/baarishSlow.jpg", subHeading: "Yaariyan | Md.Irfaan, Mithoon", songId: "0" },
    { name: "At My Worst Lofi Remix", audioPath: "./AUDIOS/atMyWorstSlow.mp3", cover: "./IMAGES/atMyWorstSlow.jpg", subHeading: "Pink Sweat$", songId: "1" },
    { name: "Powfu- Dead Eyes", audioPath: "./AUDIOS/deadEyesSlow.mp3", cover: "./IMAGES/deadEyesSlow.jpeg", subHeading: " Ouse, Powfu, and Promoting Sounds", songId: "2" },

    { name: "Powfu- Dead Bed", audioPath: "./AUDIOS/deathBedSlow.mp3", cover: "./IMAGES/deathBedSlow.jpg", subHeading: " Powfu", songId: "3" },
    { name: "Dream Away", audioPath: "./AUDIOS/dreamAwaySlow.mp3", cover: "./IMAGES/dreamAwaySlow.jpg", subHeading: "Day 7", songId: "4" },
    { name: "fukashigi No Carte Lofi", audioPath: "./AUDIOS/fukashigiLofiSlow.mp3", cover: "./IMAGES/fukashigiLofiSlow.jpg", subHeading: "From Bunny Senpai||Fonzi M", songId: "5" },
    { name: "Say That Way", audioPath: "./AUDIOS/kailoSlow.mp3", cover: "./IMAGES/kailoSlow.jpg", subHeading: "Kailo", songId: "6" },
    { name: "Mood (Slowed Cute)", audioPath: "./AUDIOS/moodSlow.mp3", cover: "./IMAGES/moodSlow.jpg", subHeading: "24Kgoldn", songId: "7" },
    { name: "Past Lives", audioPath: "./AUDIOS/pastLivesSlow.mp3", cover: "./IMAGES/pastLivesSlow.jpg", subHeading: "Børns", songId: "8" },

    { name: "Somewhere Only We Know", audioPath: "./AUDIOS/somewhereOnlyWeSlow.mp3", cover: "./IMAGES/somewhereOnlyWeSlow.jpg", subHeading: "Keane", songId: "9" },
    
],

];
// console
//Triggering Right container by using the button
let currentPlayingSection = Array.from(document.getElementsByClassName("song_super_section")[0].getElementsByClassName("song_items"));
let masterContainer = document.getElementsByClassName("master-container1")[0];
let right = document.getElementsByClassName("right")[0];
right.display = "none";

// function to change focus
const focusChange = (value, className) => {
    if (value == 0) {
        //the element is passive and dont want to change background
        // console.log("color change");
        className.style.backgroundColor="#413f42cf"
        className.style.color="white"
        
    }
    else {
        // console.log("color change");
        className.style.backgroundColor="var(--purple-light)"
        className.style.color="black"
        //if the element is active
        
    }
}


// function to interchange classes
const classAddRemove = (value, subjectToBeChanged, classToAdd, classToRemove) => {
    if (value == 1)//class which existed is to be changed
    {
        subjectToBeChanged.classList.remove(classToRemove);
        subjectToBeChanged.classList.add(classToAdd);
    }
    else {
        subjectToBeChanged.classList.remove(classToAdd);
        subjectToBeChanged.classList.add(classToRemove);
    }
}
//DROP DOWN POPULAR LIST
let value = 0;
let recentDropDown = document.getElementById("recent-dropDown");
let recentList = document.getElementById("recent-list");
let recentListTagname=document.querySelector(".recent-list-tagname");
recentListTagname.addEventListener("click", () => {
    if (value == 0) {
        // console.log("not reverse iscalled");
        classAddRemove(1, recentDropDown, "recentDropAnimate", "recentDropAnimate2");
        recentList.style.display = "block";
        value = 1;
    }
    else if (value == 1) {
        // console.log("reverse iscalled");
        classAddRemove(0, recentDropDown, "recentDropAnimate", "recentDropAnimate2");
        recentList.style.display = "none";
        value = 0;
    }
});

//left container- popular playlist playing algorithm 
let popularSongs = [
    { name: "Boro Boro", audioPath: "./AUDIOS/Ncs/boroNcs.mp3", cover: "./IMAGES/Ncs/boroNcs.jpg", subHeading: "Arash - Boro Boro (Syvorovv Remix)", songId: "0" },
    { name: "MayDay", audioPath: "./AUDIOS/Ncs/maydayNcs.mp3", cover: "./IMAGES/Ncs/maydayNcs.jpg", subHeading: "The FATrat", songId: "1" },

    
    { name: "G-Eazy - Far Alone", audioPath: "./AUDIOS/Ncs/farAloneNcs.mp3", cover: "./IMAGES/Ncs/farAloneNcs.jpg", subHeading: "Ft. Jay Ant (alperen karaman remix)", songId: "2" },
    
    { name: "No Rival", audioPath: "./AUDIOS/Ncs/noRivalNcs.mp3", cover: "./IMAGES/Ncs/noRivalNcs.jpg", subHeading: "Alaina Cross, Egzod, and Maestro Chive", songId: "3" },
    { name: "Phenomenon", audioPath: "./AUDIOS/Ncs/phenomenonNcs.mp3", cover: "./IMAGES/Ncs/phenomenonNcs.jpg", subHeading: "Hoober and Unknown Brain", songId: "4" },
    { name: "Game Over", audioPath: "./AUDIOS/Ncs/gameOverNcs.mp3", cover: "./IMAGES/Ncs/gameOverNcs.jpg", subHeading: "Egzod & EMM", songId: "5" },
    { name: "Versace NCS", audioPath: "./AUDIOS/Ncs/versaceNcs.mp3", cover: "./IMAGES/Ncs/versaceNcs.jpg", subHeading: "The Same Persons", songId: "6" }
]



//POPULAR LIST
let recentListItem = Array.from(document.querySelectorAll(".recent-List-items"));
// let audioValue = 0;
let masterPlay = document.getElementById("masterPlay");

let currentSong = 0;
let audioToPlay = new Audio("./AUDIOS/Ncs/boroNcs.mp3");
audioToPlay.volume=0.8;
let play_list_index = 0;
const Allplay = () => {
    recentListItem.forEach((Element) => {
        Element.querySelectorAll("i")[0].classList.add('fa-circle-play');
        Element.querySelectorAll("i")[0].classList.remove('fa-circle-pause');
    })
}
recentListItem.forEach((ele, i) => {
    ele.querySelectorAll('img')[0].src = popularSongs[i].cover;
    ele.querySelectorAll('.recent-heading')[0].innerText = popularSongs[i].name;
    ele.querySelectorAll('.recent-subHeading')[0].innerText = popularSongs[i].subHeading;

    ele.querySelectorAll('i')[0].addEventListener("click", () => {
        play_list_index = -1;
        currentPlayingSection = recentListItem;
        // console.log("recent list selected\n");
        // console.log(currentPlayingSection);
        Allplay2();
        Allplay();
        if (currentSong == popularSongs[i].songId) {
            // console.log("this is called2");

            if (audioToPlay.paused || audioToPlay.currentTime <= 0) {
                // console.log(i);
                audioToPlay.play();
                ele.querySelectorAll('i')[0].classList.remove('fa-circle-play');
                ele.querySelectorAll('i')[0].classList.add('fa-circle-pause');
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                playing_disc(1, popularSongs[i]);
            }
            else {
                playing_disc(0, popularSongs[i]);

                ele.querySelectorAll('i')[0].classList.add('fa-circle-play');
                ele.querySelectorAll('i')[0].classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
                masterPlay.classList.remove('fa-circle-pause');
                audioToPlay.pause();
            }
            // console.log("same song is getting played again");
        }

        else if (audioToPlay.currentTime <= 0 || audioToPlay.paused || audioToPlay.played) {
            audioToPlay.src = popularSongs[i].audioPath;
            currentSong = parseInt(popularSongs[i].songId);
            // console.log("this is called\n");
            // allRecentlistPause();
            // if(currentSong==)
            ele.querySelectorAll('i')[0].classList.remove('fa-circle-play');
            ele.querySelectorAll('i')[0].classList.add('fa-circle-pause');
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            audioToPlay.play();
            playing_disc(1, popularSongs[i]);

            // audioValue = 1;
        }
        else {
            ele.querySelectorAll('i')[0].classList.add('fa-circle-play');
            ele.querySelectorAll('i')[0].classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            playing_disc(0, popularSongs[i]);

            audioToPlay.pause();
            // audioValue = 0;
        }
    })
});


//SONG RANGE
let playlist_item_songs2=[];

let progressBar = document.getElementById("progressBar");
audioToPlay.addEventListener("timeupdate", () => {
    // console.log("timeupdate");
    let progress = (audioToPlay.currentTime / audioToPlay.duration) * 100;
    progressBar.value = progress;
})
progressBar.addEventListener("change", () => {
    // console.log(progressBar.value);
    audioToPlay.currentTime = progressBar.value * audioToPlay.duration / 100;
})

//Volume Control
let volume_div= document.querySelector(".vol");
let volumeControl=document.querySelector("#volume-control");
let volumeValue=document.querySelector(".vol-value");
volumeControl.value=audioToPlay.volume*100;
volumeValue.innerHTML=volumeControl.value;
// console.log(volumeControl);
// console.log(volume_div);
// console.log(volumeValue);
volumeControl.addEventListener("input",()=>{
    volumeValue.innerHTML=volumeControl.value;
    audioToPlay.volume=volumeControl.value/100;
})
//SHUFFLE BUTTON
let shuffle = document.getElementById("shuffle");
let shuffleValue = 0;

shuffle.addEventListener("click", () => {
    if (shuffleValue == 0) {
        focusChange(1, shuffle);
        
        // console.log("shuffle is activated");
        shuffleValue = 1;
    }
    else {
       
        // console.log("shuffle is deactivated");
        focusChange(0, shuffle);
        shuffleValue = 0;
    }
})




//FORWARD AND BACKWARD
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
/*let recentListItem = Array.from(document.querySelectorAll(".recent-List-items"));*/


//MASTERPLAY DEFINATION
// masterValue=0;
const nowPlaying = (list_to_play) => {

    // console.log("masterplay currenttiome");
    // console.log(audioToPlay.currentTime);
    if (audioToPlay.currentTime <= 0 || audioToPlay.paused) {
        // console.log(list_to_play);
        // console.log(currentSong);
        audioToPlay.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        if(list_to_play==recentListItem){
            list_to_play[currentSong].querySelectorAll('i')[0].classList.remove('fa-circle-play');
            list_to_play[currentSong].querySelectorAll('i')[0].classList.add('fa-circle-pause');

        }
        else{
        list_to_play[currentSong].querySelectorAll('i')[2].classList.remove('fa-circle-play');
        list_to_play[currentSong].querySelectorAll('i')[2].classList.add('fa-circle-pause');
        }
        now_playingImg.style.animationDuration = "7s";

    }
    else {
        audioToPlay.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        list_to_play[currentSong].querySelectorAll('i')[0].classList.add('fa-circle-play');
        list_to_play[currentSong].querySelectorAll('i')[0].classList.remove('fa-circle-pause');
        now_playingImg.style.animationDuration = "0s";

    }

}

masterPlay.addEventListener("click", () => {
    nowPlaying(currentPlayingSection);
});

// console.log(currentPlayingSection);
forward.addEventListener("click", () => {
    forwardFunc(play_list_index);
})
// console.log("prev value: "+ (currentSong-1));

let shuffle_track = 0;
let shuffle_queue = new Queue();
let shuffle_queue2 = new Queue();
let randomeSong = 0;
let randomeSong2 = 0;
const find_next_shuffle = () => {

    if (shuffle_track == 0) {
        for (let i = 0; i < 6; i++) {
            randomeSong = Math.floor(Math.random() * (hotSpicy.length));
            randomeSong2 = Math.floor(Math.random() * (hotSpicy[randomeSong].length));
            
            if (randomeSong == shuffle_queue.items[shuffle_queue.backIndex - 1]) {
                randomeSong = Math.floor(Math.random() * (hotSpicy.length));
            }
            shuffle_queue.push_back(randomeSong);

            if (randomeSong2 == shuffle_queue2.items[shuffle_queue2.backIndex - 1]) {
                randomeSong2 = Math.floor(Math.random() * (hotSpicy[randomeSong].length));
            }
            shuffle_queue2.push_back(randomeSong2);
            // console.log("hotspicy length");
            // console.log(hotSpicy.length);
            // console.log("hotspicy song length");
            // console.log(hotSpicy[randomeSong].length);
            // console.log("random song section: ");
            // console.log(randomeSong);
            // console.log("random song : ");
            // console.log(randomeSong2);
            shuffle_track++;
        }
    }
    else {
        let last_shuffle_ele = Math.floor(Math.random() * (hotSpicy.length));
        let last_shuffle_ele2 = Math.floor(Math.random() * (hotSpicy[last_shuffle_ele].length));
        if (last_shuffle_ele == shuffle_queue.items[shuffle_queue.backIndex - 1]) {
            last_shuffle_ele = Math.floor(Math.random() * (hotSpicy.length));
        }
        shuffle_queue.push_back(last_shuffle_ele);

        if (last_shuffle_ele2 == shuffle_queue2.items[shuffle_queue2.backIndex - 1] || last_shuffle_ele2 == last_shuffle_ele) {
            last_shuffle_ele2 = Math.floor(Math.random() * (hotSpicy[last_shuffle_ele].length));
        }
        shuffle_queue2.push_back(last_shuffle_ele2);
        // console.log("hotspicy length");
        // console.log(hotSpicy.length);
        // console.log("hotspicy song length");
        // console.log(hotSpicy[randomeSong].length);

        // console.log("random song section: ");
        // console.log(last_shuffle_ele);
        // console.log("random song : ");
        // console.log(last_shuffle_ele2);
        shuffle_track++;

    }
    // console.log("\n");
}



//FORWARD BUTTONS
function forwardFunc(play_list_index1) {
    // console.log("forwards enters:");
    // console.log("currentsong: " + currentSong);
    // console.log("currentsong"+ currentSong);
    let next = currentSong + 1;
    if (play_list_index1 == -1) {
        list_to_play = popularSongs;
    }
    else {
        list_to_play = hotSpicy[play_list_index1];
    }
    // console.log(list_to_play);

    if (parseInt(shuffleValue) == 1) {
        let index1 = 0;
        find_next_shuffle(shuffle_track);
        index1 = shuffle_queue.pop();
        currentSong = shuffle_queue2.pop();
        shuffle_track--;
        // console.log("playinf hotspicy ka : " + index1 + " " + currentSong);
        audioToPlay.src = hotSpicy[index1][currentSong].audioPath;
        playing_disc(1, hotSpicy[index1][currentSong]);
        // console.log(audioToPlay.src);
        // Allplay3();
                Allplay();
                Allplay2();
                
        audioToPlay.play();
        find_next(hotSpicy);
        currentPlayingSection = song_sections[index1].getElementsByClassName("song_items");
        currentPlayingSection[currentSong].querySelectorAll('i')[2].classList.remove('fa-circle-play');
        currentPlayingSection[currentSong].querySelectorAll('i')[2].classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        return;
    }
    else if (next < currentPlayingSection.length) {
        currentSong = next;
    }
    else {
        currentSong = 0;
    }

    audioToPlay.src = list_to_play[currentSong].audioPath;
    playing_disc(1, list_to_play[currentSong]);
    // console.log(audioToPlay.src);
    // Allplay3();
                Allplay();
                Allplay2();
                
    audioToPlay.play();
    find_next(list_to_play);
        if(currentPlayingSection==recentListItem){
            currentPlayingSection[currentSong].querySelectorAll('i')[0].classList.remove('fa-circle-play');
            currentPlayingSection[currentSong].querySelectorAll('i')[0].classList.add('fa-circle-pause');
        }
    else{
    currentPlayingSection[currentSong].querySelectorAll('i')[2].classList.remove('fa-circle-play');
    currentPlayingSection[currentSong].querySelectorAll('i')[2].classList.add('fa-circle-pause');}
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
};

backward.addEventListener("click", () => {
    backwardFunc(play_list_index);
})

//BACKWARD BUTTON
// let list_to_play = null;
function backwardFunc(play_list_index1) {
    // let actual=currentSong-1;
    let prev = currentSong - 1;
    // console.log("shuffle"+ parseInt(shuffleValue));
    if (play_list_index1 == -1) {
        list_to_play = popularSongs;
    }
    else {
        list_to_play = hotSpicy[play_list_index1];
    }
    // console.log(recentListItem.length);
    if (parseInt(shuffleValue) == 1) {
        forwardFunc(play_list_index1);
        return;
    }
    else if (prev >= 0) {
        currentSong = prev;
    }
    else {
        currentSong = currentPlayingSection.length - 1;
    }
    // console.log(" next prev value: " + currentSong);
    audioToPlay.src = list_to_play[currentSong].audioPath;
    playing_disc(1, list_to_play[currentSong]);
    // Allplay3();
                Allplay();
                Allplay2();
                
    audioToPlay.play();
    find_next(list_to_play);
    currentPlayingSection[currentSong].querySelectorAll('i')[2].classList.remove('fa-circle-play');
    currentPlayingSection[currentSong].querySelectorAll('i')[2].classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
};


//REPEAT BUTTONS
let repeat = document.getElementById("repeat");
let repeatValue = 0;

repeat.addEventListener("click", () => {
    if (repeatValue == 0) {
        //active state from passive
        // console.log("repeat is active now");
        audioToPlay.loop = true;
        // audioToPlay.addEventListener("ended",()=>{
        //     console.log("audio has ended");
        //     audioToPlay.play();
        // });
        focusChange(1, repeat);
        repeatValue = 1;
        find_next(list_to_play);

    }
    else {
        // console.log("repeat is disabled now");
        audioToPlay.loop = false;

        focusChange(0, repeat);
        repeatValue = 0;
    }
});




//Middle container 



//MIDDLE SECTION SONG PLAYING ALGORITHM
let song_sections = Array.from(document.getElementsByClassName("song_sections"));
// let currentSong=0;
const Allplay2 = () => {
    song_sections.forEach(song_sections => {
        let allPlayItems = Array.from(song_sections.querySelectorAll(".song_items"));
        allPlayItems.forEach(allPlayItems => {
            // console.log("i have been called");
            // console.log(allPlayItems.querySelectorAll("i")[2]);
            allPlayItems.querySelectorAll("i")[2].classList.add('fa-circle-play');
            allPlayItems.querySelectorAll("i")[2].classList.remove('fa-circle-pause');
        });
    });
};

function Allplay4_part2(song_name){
    // console.log("Kuhsdfh dsf");
    // console.log(playlist_item_songs2);
    
    for(let i=0; i<playlist_item_songs2.length; i++){
    // playlist_item_songs2.forEach((playlist_item_songs,i)=>{
        // console.log(playlist_item_songs2[i].querySelector(".song_description span").innerText);
        // console.log(song_name);
        if(playlist_item_songs2[i].querySelector(".song_description span").innerText==song_name){
            // console.log("found it! ");
            // console.log(i);
            
            playlist_item_songs2[i].querySelector(".song_description i").classList.toggle("fa-circle-pause");
            return;
        }else{
            // console.log("its cladss");
        Allplay4();
        }
    }
}
function Allplay5_part2(song_name){
    // console.log("Allplay5: ");
    // console.log(playlist_item_songs2);
    
    for(let i=0; i<playlist_item_songs2.length; i++){
    // playlist_item_songs2.forEach((playlist_item_songs,i)=>{
        // console.log(playlist_item_songs2[i].querySelector(".song_description span").innerText);
        // console.log(song_name);
        if(playlist_item_songs2[i].querySelector(".song_description span").innerText==song_name){
            // console.log("found it! ");
            // console.log(i);
            
            playlist_item_songs2[i].querySelector(".song_description i").classList.toggle("fa-circle-pause");
            return;
        }else{
            // console.log("its cladss");
        Allplay4();
        }
    }
}
song_sections.forEach((ele, i) => {
right
    let hot_songs_array = hotSpicy[i];
    // console.log(hot_songs_array);
    let play_trigger = song_sections[i].querySelectorAll(".songs_list .song_items ");
    hot_songs_array.forEach((ele, j) => {
        let play_trigger_play=null;
        // if(window.innerWidth<=900){
        // play_trigger_play = play_trigger[j];
        // console.log("mobile is called");
        // }
        // else{
        // console.log("laptop is called");
            
        play_trigger_play = play_trigger[j].querySelector(".song_title");
        // }

        let song_items_img = play_trigger[j].querySelector(".song_img img");
        // console.log("THE results: ");
        // console.log(hot_songs_array[j].cover);
        song_items_img.src = hot_songs_array[j].cover;

        let song_items_title = play_trigger[j].querySelector(".song_title span");
        song_items_title.innerText = hot_songs_array[j].name;
        let song_items_sub_title = play_trigger[j].querySelector(".song_title .song_items_subheading");
        song_items_sub_title.innerText = hot_songs_array[j].subHeading;
        // console.log("this is called3\n");

        // currentSong = parseInt(hot_songs_array[j].songId);
        // console.log(currentSong);
        play_trigger_play.addEventListener("click", () => {
            play_list_index = i;
            let prev_currentplayingSection=currentPlayingSection;
            currentPlayingSection = song_sections[i].getElementsByClassName("song_items");
            // console.log("section : ");
            // console.log(currentPlayingSection);
            // Allplay3();
                Allplay();
                Allplay2();
                Allplay4();

                
            let currentTime2 = audioToPlay.currentTime;
            let currentStatePause = audioToPlay.paused;
            let currentStatePlay = audioToPlay.played;
            let song_item_playIcon = play_trigger[j].querySelector(".song_title i");
            // console.log(currentTime2);
            // console.log(currentStatePause);
            // console.log(currentStatePlay);
                
            if(!(window.innerWidth<=992)){
            // right.display = "block";

            right.classList.add("right_after");
            }
            // else{
            // right.display = "none";
            // }
            let title_to_compared=hot_songs_array[j].name;
            let current_song_title=null;
            if(prev_currentplayingSection==recentListItem){
                current_song_title=prev_currentplayingSection[currentSong].querySelector(".recent-heading").innerText;

            }
            else{
            current_song_title=prev_currentplayingSection[currentSong].querySelector(".song_title span").innerText;}
            // console.log("title to be compared: "+ title_to_compared);
            // console.log("current sng"+ current_song_title);
            if (title_to_compared == current_song_title) {
                // console.log("this is called4\n");

                if (currentStatePause || currentTime2 <= 0) {
                    // console.log("play is called");
                    audioToPlay.play();
                    classAddRemove(1, masterPlay, 'fa-circle-pause', "fa-circle-play");
                    classAddRemove(1, song_item_playIcon, 'fa-circle-pause', "fa-circle-play");
                    Allplay4_part2(hot_songs_array[j].name);
                    // Allplay5_part2(hot_songs_array[j].name);
                    // playlist_item_songs.forEachquerySelector(".song_description i").classList.toggle("fa-circle-pause");
                    // song_item_playIcon.classList.add("")
                    // console.log("if");
                    playing_disc(1, hot_songs_array[j]);
                    // console.log(hot_songs_array);
                    find_next(hot_songs_array);
                }
                else {
                    classAddRemove(0, masterPlay, 'fa-circle-pause', "fa-circle-play");
                    classAddRemove(0, song_item_playIcon, 'fa-circle-pause', "fa-circle-play");
                    // playlist_item_songs.querySelector(".song_description i").classList.toggle("fa-circle-pause");
                    Allplay4_part2(hot_songs_array[j].name);
                    // Allplay5_part2(hot_songs_array[j].name);

                    audioToPlay.pause();
                    // console.log("else");
                    playing_disc(0, hot_songs_array[j]);
                    now_playingImg.style.animationDuration = "0s";

                }
                // console.log("same song is getting played again");
            }
            else if (currentTime2 <= 0 || currentStatePause || currentStatePlay) {
                let newAudioPath = hot_songs_array[j].audioPath;
                audioToPlay.src = newAudioPath;
                // console.log("this is called5\n");

                currentSong = parseInt(hot_songs_array[j].songId);
                classAddRemove(1, masterPlay, 'fa-circle-pause', "fa-circle-play");
                classAddRemove(1, song_item_playIcon, 'fa-circle-pause', "fa-circle-play");
                audioToPlay.play();
                Allplay4_part2(hot_songs_array[j].name);
                // Allplay5_part2(hot_songs_array[j].name);
               
                playing_disc(1, hot_songs_array[j]);
                find_next(hot_songs_array);
                // console.log(hot_songs_array);

            }
            else {
                classAddRemove(0, masterPlay, 'fa-circle-pause', "fa-circle-play");
                classAddRemove(0, song_item_playIcon, 'fa-circle-pause', "fa-circle-play");
                audioToPlay.pause();
                Allplay4_part2(hot_songs_array[j].name);
                // Allplay5_part2(hot_songs_array[j].name);

                playing_disc(1, hot_songs_array[j]);

            }
        })

    });

});



//PLAYING_DISC
let now_playingImg = document.querySelector(".now_playing_img img");
// let now_playingImg=document.querySelector(".now_playing_img img");
let now_playingHeading = document.querySelector(".now_playing_description span:nth-child(1)");
let now_playing_subHeading = document.querySelector(".now_playing_subHeading");
let now_playing2Heading=document.querySelector(".now_playing2_heading");
let now_playing2_subHeading=document.querySelector(".now_playing2_subheading");

const playing_disc = (value, hot_songs_array) => {
    if (value == 1) {
        now_playingImg.style.animationDuration = "7s";
        let imgPath = hot_songs_array.cover;
        now_playingHeading.innerText = hot_songs_array.name;
        now_playing2Heading.innerText = hot_songs_array.name;
        now_playing_subHeading.innerText = hot_songs_array.subHeading;
        now_playing2_subHeading.innerText = hot_songs_array.subHeading;
        now_playingImg.src = imgPath;

    }
    else if (value == 0) {
        now_playingImg.style.animationDuration = "0s";
    }
}


//Middle COntainer scrolling algo
let scroll_arrow = Array.from(document.getElementsByClassName("next_scroll"));
let scroll_arrow_prev = Array.from(document.getElementsByClassName("prev_scroll"));
let songs_list = document.getElementsByClassName("songs_list");
scroll_arrow.forEach((scroll_arrow, i) => {
    scroll_arrow.addEventListener("click", () => {
        // console.log(i);
        // console.log(songs_list[i]);
        // console.log(songs_list[i].scrollLeft);
        songs_list[i].scrollLeft += 330;
    })
})
scroll_arrow_prev.forEach((scroll_arrow_prev, i) => {
    scroll_arrow_prev.addEventListener("click", () => {
        // console.log(i);
        // console.log(songs_list[i]);
        // console.log(songs_list[i].scrollLeft);
        songs_list[i].scrollLeft -= 330;
    })
})



//RIGHT CONTAINER
let footeractive = document.querySelectorAll(".play_options button")[5].querySelector("i");
const rightContainer = () => {
    // console.log("I got clicked");
    if (right.classList.contains("right_after")) {
        classAddRemove(0, masterContainer, "master-container1", "master-container2");
        focusChange(0, footeractive);
        right.classList.remove("right_after");
        let songs_list = Array.from(document.getElementsByClassName("songs_list"));
        songs_list.forEach((songs_list) => {
            songs_list.style.left = "0px";
        })
        scroll_arrow.forEach(scroll_arrow => {
            scroll_arrow.style.opacity = "1";
        })
    }
    else {
        classAddRemove(1, masterContainer, "master-container1", "master-container2");
        focusChange(1, footeractive);
        right.classList.add("right_after");
        let songs_list = Array.from(document.getElementsByClassName("songs_list"));
        songs_list.forEach((songs_list) => {
            songs_list.style.left = "0px";
        })
        scroll_arrow.forEach(scroll_arrow => {
            scroll_arrow.style.opacity = "1";
        })
    }
};
document.getElementById("clickMe").addEventListener('click', rightContainer);

let nextSongIndex = null;
//END OF THE SONG
audioToPlay.addEventListener("ended", () => {
    // console.log("song ended");
    classAddRemove(1, masterPlay, "fa-circle-play", "fa-circle-pause");
    now_playingImg.style.animationDuration = "0s";
    forwardFunc(play_list_index);

})
const find_next = (play_list) => {
    // console.log("this is called6\n");

    let upcoming_next = Array.from(document.getElementsByClassName("upComing_song"));
    // console.log("FInd next: " + currentSong);
    let copy_currentSong = currentSong;

    for (let i = 1; i <= 5; i++) {
        if (parseInt(shuffleValue) == 1) {
            // console.log("Currentsong"++" "+currentSong);
            nextSongIndex = shuffle_queue.items[shuffle_queue.frontIndex + (i - 1)];
            let nextSongIndex2 = shuffle_queue2.items[shuffle_queue2.frontIndex + (i - 1)];
            // console.log("here is the errow");
            // console.log(play_list[nextSongIndex][nextSongIndex2].cover);
            // console.log(nextSongIndex);
            // console.log(nextSongIndex2);
            upcoming_next[i - 1].querySelector("img").src = play_list[nextSongIndex][nextSongIndex2].cover;
            upcoming_next[i - 1].querySelector(".next_description span:nth-child(1)").innerText = play_list[nextSongIndex][nextSongIndex2].name;

            upcoming_next[i - 1].querySelector(".now_playing_subHeading").innerText = play_list[nextSongIndex][nextSongIndex2].subHeading;
            
        }
        else if (copy_currentSong + 1 < currentPlayingSection.length) {
            nextSongIndex = copy_currentSong + 1;
            copy_currentSong = nextSongIndex;
            upcoming_next[i - 1].querySelector("img").src = play_list[nextSongIndex].cover;
            upcoming_next[i - 1].querySelector(".next_description span:nth-child(1)").innerText = play_list[nextSongIndex].name;
            upcoming_next[i - 1].querySelector(".now_playing_subHeading").innerText = play_list[nextSongIndex].subHeading;
        }
        else {
            nextSongIndex = 0;
            // console.log(nextSongIndex);
            copy_currentSong = nextSongIndex;
            upcoming_next[i - 1].querySelector("img").src = play_list[nextSongIndex].cover;
            upcoming_next[i - 1].querySelector(".next_description span:nth-child(1)").innerText = play_list[nextSongIndex].name;
            upcoming_next[i - 1].querySelector(".now_playing_subHeading").innerText = play_list[nextSongIndex].subHeading;
        }
        
    }
}

//changing currenplayig section with mouse event
let currentPlayingSection2=null;
// console.log(song_sections);
song_sections.forEach((song_sections,i)=>{
    song_sections.addEventListener("mouseenter",()=>{
        // console.log(i);
        currentPlayingSection2=Array.from(song_sections.querySelectorAll(".song_items"));
        // console.log(currentPlayingSection2);
    })
})

//LIKING ALGORITHM
//ALGORITHM FOR ADDING LIKES
let like_queue_number = -1;
let notifs = Array.from(document.getElementsByClassName("notifs"));
    let createdChild = null;
song_sections.forEach((song_sections,i)=>{
    let addLike = Array.from(song_sections.querySelectorAll(".add_like"));
    // console.log(addLike);
    addLike.forEach(addLike => {
        let itemToBeAdded = addLike.parentElement.parentElement.parentElement;
        itemToBeAdded.classList.add("unliked");
    });
    
    addLike.forEach((addLike,j) => {
        // console.log(addLike);
        // console.log(addLike.querySelector("div"));
        addLike.addEventListener("click", (ele) => {
            if(addLike.classList.contains("red_heart")){
                addLike.classList.remove("red_heart");

            }
            else{
                addLike.classList.add("red_heart");

            }
            // console.log(j);
            let itemToBeAdded=null;
            let itemToBeAdded2 =ele.target.parentElement.parentElement.parentElement.querySelector(".song_title .song_main_heading").innerText;
            // console.log(itemToBeAdded2);
            let allPlayItems=document.getElementsByClassName("song_items");
            for(let i=0; i<allPlayItems.length; i++){
                if(itemToBeAdded2==allPlayItems[i].querySelector(".song_main_heading").innerText){
                itemToBeAdded=allPlayItems[i];
                // console.log(itemToBeAdded);
                // console.log("item is found2");
                break;
                }
            }
            const alertfunc = () => {
                // console.log(itemToBeAdded)
                notifs[0].style.opacity = "1";
                // console.log(itemToBeAdded);
                if (itemToBeAdded.classList.contains("unliked")) {
                    notifs[0].innerHTML = ' <i class="fa-solid fa-circle-info"></i>Song has been <strong>added</strong> to Liked Queue';
                    like_queue_number++;
                    // let unique_class=like_queue_number;
                    createdChild = addtoLikedPlaylist(itemToBeAdded);
                    itemToBeAdded.classList.add("liked");
                    itemToBeAdded.classList.remove("unliked");
                    // itemToBeAdded.classList.add(unique_class);
                    itemToBeAdded.setAttribute("queue_number", like_queue_number);
    
                    // console.log(createdChild);
                }
                else if (itemToBeAdded.classList.contains("liked")) {
                    notifs[0].innerHTML = ' <i class="fa-solid fa-circle-info"></i>Song has been <strong> removed</strong> to Liked Queue';
                    let list_to_deleted_id = itemToBeAdded.getAttribute("queue_number");
                    // console.log("the id of the song to be deleted is: " + itemToBeAdded.getAttribute("queue_number"));
                    itemToBeAdded.classList.add("unliked");
                    itemToBeAdded.classList.remove("liked");
    
                    removeFromLikedPlaylist(list_to_deleted_id);
                }
                setTimeout(clearMytimeout, 3000);
            }
    
            let st1 = setTimeout(alertfunc, 0); //Calling function
    
            const clearMytimeout = () => {
                notifs[0].style.opacity = "0";
                clearTimeout(st1);
            }
            // clearTimeout(st1);
    
        })
    })
})



//ADD SONGS TO LIKED PLAYLIST
let liked_playlist = document.getElementById("likedPlaylist");
let liked_sub_play_section = document.querySelector("#likedPlaylist .sub_playlist_section1");
let liked_playlist_addLike = null;
const addtoLikedPlaylist = (itemToBeAdded) => {
    let itemToBeAdded_copy = document.createElement("div");
    itemToBeAdded_copy.innerHTML = itemToBeAdded.innerHTML;
    itemToBeAdded_copy.classList.add("playlist_items_songs");
    itemToBeAdded_copy.classList.remove("song_items");
    itemToBeAdded_copy.querySelector(".song_img").classList.add("playlist_items_img");
    itemToBeAdded_copy.querySelector(".song_img").classList.remove("song_img");
    itemToBeAdded_copy.querySelector(".song_itemsOptions").classList.add("playlist_itemsOptions");
    itemToBeAdded_copy.querySelector(".song_itemsOptions .info_box_right").classList.add("info_box_left");
    // itemToBeAdded_copy.querySelector(".song_itemsOptions .info_box_left").classList.remove("info_box_right");
    itemToBeAdded_copy.querySelector(".song_itemsOptions .add_playlist").remove();
    itemToBeAdded_copy.querySelector(".song_itemsOptions").classList.remove("song_itemsOptions");
    itemToBeAdded_copy.querySelector(".song_title").classList.add("playlist_items_songTitle");
    itemToBeAdded_copy.querySelector(".song_title").classList.remove("song_title");
    // console.log(itemToBeAdded_copy);
    // itemToBeAdded_copy.classList.add(like_queue_number);
    itemToBeAdded_copy.setAttribute("queue_number", like_queue_number);
    liked_sub_play_section.append(itemToBeAdded_copy);
    liked_playlist_addLike = Array.from(document.querySelectorAll(".playlist_section .add_like"));
    playlist_item_songs2=Array.from(document.getElementsByClassName("playlist_items_songs"));
    // console.log(playlist_item_songs2);
    // console.log("list is updated");
    liked_playlist_addLikeFunc();
    liked_playlist_playSongsFunc();

    return itemToBeAdded_copy;

};


let allPlayItems = Array.from(document.querySelectorAll(".home_page .song_items"));
const liked_playlist_addLikeFunc = () => {
    liked_playlist_addLike[liked_playlist_addLike.length - 1].addEventListener("click", (e) => {
        let playlistSong_to_removed = e.target.parentElement.parentElement.parentElement;
        // console.log("\n\nthis element has been clicked");
        // console.log(playlistSong_to_removed);
        let song_item_to_be_removed = playlistSong_to_removed.getAttribute("queue_number");

        for (let i = 0; i < allPlayItems.length; i++) {
            if (allPlayItems[i].getAttribute("queue_number") == song_item_to_be_removed) {
                notifs[0].innerHTML = ' <i class="fa-solid fa-circle-info"></i>Song has been <strong> removed</strong> to Liked Queue';
                let list_to_deleted_id = allPlayItems[i].getAttribute("queue_number");
                // console.log("the id of the song to be deleted is: " + list_to_deleted_id);
                allPlayItems[i].classList.add("unliked");
                allPlayItems[i].classList.remove("liked");
                allPlayItems[i].querySelector(".add_like").classList.remove("red_heart");
                liked_sub_play_section.removeChild(playlistSong_to_removed);
                // console.log("function got returned");
                const alertfunc2 = () => {

                    notifs[1].style.opacity = "1";
                    notifs[1].innerHTML = ' <i class="fa-solid fa-circle-info"></i>Song has been <strong> removed</strong> to Liked Queue';
                    setTimeout(clearMytimeout2, 3000);
                }

                let st1 = setTimeout(alertfunc2, 0); //Calling function
                const clearMytimeout2 = () => {
                    notifs[1].style.opacity = "0";
                    clearTimeout(st1);
                }


                return;
            }
        }
    });
};

function Allplay4(){
    if(playlist_item_songs2.length!= 0){
        // playlist_item_songs2=Array.from( document.getElementsByClassName("playlist_items_songs"));
        // console.log("not null");
        // console.log(playlist_item_songs2);
        playlist_item_songs2.forEach(playlist_item_songs2=>{
            // playlist_item_songs.querySelector(".playlist_items_songTitle i").
        if( playlist_item_songs2.querySelector(".playlist_items_songTitle i").classList.contains("fa-circle-play")){
            playlist_item_songs2.querySelector(".playlist_items_songTitle i").classList.remove("fa-circle-pause");
            }
            else{
            playlist_item_songs2.querySelector(".playlist_items_songTitle i").classList.remove("fa-circle-pause");
            playlist_item_songs2.querySelector(".playlist_items_songTitle i").classList.add("fa-circle-play");
    
            }
        })

    }
    else{
        // console.log("yes");
    }
}
// function Allplay5(){
//     if(playlist_item_songs2.length!= 0){
//         // playlist_item_songs2=Array.from( document.getElementsByClassName("playlist_items_songs"));
//         // console.log("not null");
//         // console.log(playlist_item_songs2);
//         playlist_item_songs2.forEach(playlist_item_songs2=>{
//             // playlist_item_songs.querySelector(".playlist_items_songTitle i").
//         if( playlist_item_songs2.querySelector(".playlist_items_songTitle i").classList.contains("fa-circle-play")){
//             playlist_item_songs2.querySelector(".playlist_items_songTitle i").classList.remove("fa-circle-pause");
//             }
//             else{
//             playlist_item_songs2.querySelector(".playlist_items_songTitle i").classList.remove("fa-circle-pause");
//             playlist_item_songs2.querySelector(".playlist_items_songTitle i").classList.add("fa-circle-play");
    
//             }
//         })

//     }
//     else{
//         console.log("yes");
//     }
// }

let playlist_item_songs=null;

let likedPlaylist_trigger = null;
const liked_playlist_playSongsFunc = () => {
    likedPlaylist_trigger = document.getElementsByClassName("playlist_items_songTitle")[liked_playlist_addLike.length - 1]; likedPlaylist_trigger.addEventListener("click", (e) => {
        // console.log("Noe this is :");
        let playlistSong_to_removed = e.target.parentElement.parentElement.parentElement;
        // console.log(playlistSong_to_removed);
        let song_item_to_be_removed = playlistSong_to_removed.getAttribute("queue_number");
        
        //Playing songs algorithm  by clicking title
        // console.log(allPlayItems[0]);
        playlist_item_songs=Array.from( document.getElementsByClassName("playlist_items_songs"));
        for (let i = 0; i < allPlayItems.length; i++) {
            if (allPlayItems[i].getAttribute("queue_number") == song_item_to_be_removed) {
                // console.log("idk y");
                // console.log(playlistSong_to_removed)
                playlistSong_to_removed.querySelector(".song_description i").classList.toggle("fa-circle-pause");
                allPlayItems[i].querySelector(".song_title").click();
                return;
            }
        };
    })
};

const removeFromLikedPlaylist = (list_to_deleted_id) => {
    let liked_playlist_songs = document.getElementsByClassName("playlist_items_songs");
    // console.log(list_to_deleted_id);
    for (let i = 0; i < liked_playlist_songs.length; i++) {
        if (list_to_deleted_id == liked_playlist_songs[i].getAttribute("queue_number")) {
            liked_sub_play_section.removeChild(liked_playlist_songs[i]);
            // console.log("the song has been removed from liked list!");
            return;
        }
    }
}

//ALGORITHM FOR PLAYING SONGS FROM LIKED SONG






// Javscript for playlist page

//PLAYLIST DROP DOWN ARROW
let playlist_icon = Array.from(document.getElementsByClassName("add_playlist"));

let playlist_drop_down = Array.from(document.getElementsByClassName("playlist_drop_down"));
// console.log(playlist_drop_down);
const playlist_drop_downFunc = () => {
    const play_list_dropDownEvent = (e) => {
        let liked_playlist = e.target.parentElement.parentElement.querySelector(".sub_playlist_section1");
        // console.log(e.target);
        // console.log(liked_playlist);
        if(liked_playlist.classList!=null){
        if (liked_playlist.classList.contains("sub_playlist_section2")) {
            // console.log("section2 removed");
            liked_playlist.classList.remove("sub_playlist_section2");
        }
        else if (!(liked_playlist.classList.contains("sub_playlist_section2"))) {
            // console.log("section2 added");

            liked_playlist.classList.add("sub_playlist_section2");
        }
        // console.log("i m clicked");
    }}
    // console.log(playlist_drop_down);

    playlist_drop_down.forEach(play_list_dropDown => {
        // console.log("all the eventlisteners have been added");

        play_list_dropDown.parentElement.addEventListener("click", (e) => { play_list_dropDownEvent(e) })
    });
}

playlist_drop_downFunc();

let my_playlist_index = 0;
//function to create new list node and then append to the add playlist option div
function Create_new_li(playlist_index_name) {
    Array.from(document.getElementsByClassName("add_playlist_options")).forEach((ele) => {
        let new_list = document.createElement("li");
        new_list.setAttribute("playlist_index", playlist_index_name);
        new_list.innerText = playlist_name;
        
        ele.append(new_list);
    });
}

//function to apply drop down to all the added playlist
function playlist_drop_downFunc2() {
    playlist_drop_down = Array.from(document.getElementsByClassName("playlist_drop_down"));
    let liked_playlist = document.querySelectorAll(".sub_playlist_section1")[playlist_drop_down.length - 1];
    playlist_drop_down[playlist_drop_down.length - 1].parentElement.parentElement.addEventListener("click", () => {
        // console.log(playlist_drop_down.length);
        // console.log(liked_playlist);
        // console.log(liked_playlist.classList.contains("sub_playlist_section2"));
        if (liked_playlist.classList.contains("sub_playlist_section2")) {
            // console.log("section2 removed");
            liked_playlist.classList.remove("sub_playlist_section2");
        }
        else if (!(liked_playlist.classList.contains("sub_playlist_section2"))) {
            // console.log("section2 added");

            liked_playlist.classList.add("sub_playlist_section2");
        }

        // console.log("i m clicked");
    })
}
//Creating new playlist ALgo


let playlist_index_name = null;
//function to append new playlist to the playlist section
function append_new_playlist(playlist_name) {
    let new_playlist = document.createElement("div");
    new_playlist.classList.add("playlist_items");

    let new_playlist_heading = document.createElement("div");
    let child_i = document.createElement("i");
    child_i.classList.add("fa-solid");
    child_i.classList.add("fa-heart");

    let child_span = document.createElement("span");
    child_span.classList.add("font-size3");
    child_span.innerText = playlist_name;

    let child_i2 = document.createElement("i");
    child_i2.classList.add("fa-solid");
    child_i2.classList.add("fa-circle-arrow-down");
    child_i2.classList.add("playlist_drop_down");

    new_playlist_heading.classList.add("playlist_items_heading");
    new_playlist_heading.append(child_i);
    new_playlist_heading.append(child_span);
    new_playlist_heading.append(child_i2);

    new_playlist.append(new_playlist_heading);
    let new_sub_playlist = document.createElement("div");
    new_sub_playlist.classList.add("sub_playlist_section1");

    //Setting unique attribute
    playlist_index_name = "index" + my_playlist_index;
    my_playlist_index++;
    // console.log("the name os set")
    new_playlist.setAttribute("playlist_index", playlist_index_name);

    new_playlist.append(new_sub_playlist);
    document.getElementsByClassName("playlist_section")[0].append(new_playlist);
    playlist_drop_down = Array.from(document.getElementsByClassName("playlist_drop_down"));
        // console.log("no of playlist update");
    return playlist_index_name;
};

let add_playlist_options = Array.from(document.getElementsByClassName("add_playlist_options"));
//ALGORTIHMS FOR PLAYLISTS
const create_playlistFunc = (playlist_name) => {

    let playlist_index_name = append_new_playlist(playlist_name);
    Create_new_li(playlist_index_name);
    
    playlist_drop_down = Array.from(document.getElementsByClassName("playlist_drop_down"));
    // console.log("Here is the list of playlist");
    // console.log(playlist_drop_down);
    let liked_playlist = document.querySelectorAll(".sub_playlist_section1")[playlist_drop_down.length - 1];
    playlist_drop_down[playlist_drop_down.length - 1].parentElement.addEventListener("click", (e) => {
        if (liked_playlist.classList.contains("sub_playlist_section2")) {
            // console.log("section2 removed");
            // console.log(playlist_drop_down.length);
        // console.log(liked_playlist);
        // console.log(liked_playlist.classList.contains("sub_playlist_section232"));
            liked_playlist.classList.remove("sub_playlist_section2");
        }
        else if (!(liked_playlist.classList.contains("sub_playlist_section2"))) {
            // console.log("section2 added");

            liked_playlist.classList.add("sub_playlist_section2");
        }

        // console.log("i m clicked that is to hide and unhide");
    })

    //song_adding to playliist
   
    
    for (let i = 0; i < add_playlist_options.length; i++) {
// console.log(playlist_drop_down.length);
        // console.log( Array.from(add_playlist_options[i].querySelectorAll("li")));
        
        // console.log("now the length is: ");
        // console.log(playlist_drop_down.length-2);
        // console.log(add_playlist_options[i].querySelectorAll("li"));
        if(document.querySelectorAll(".add_playlist")[i].style.color=="purple"){
            continue;
        }
        let add_playlist_li = Array.from(add_playlist_options[i].querySelectorAll("li"))[playlist_drop_down.length - 2];
        //playlist_index is the unique index of each playlist
        // console.log(add_playlist_li);
        add_playlist_li.addEventListener("click", (e) => {
            playlist_icon[i].style.color="purple";
            notifs[0].style.opacity="1";
            notifs[0].innerHTML='<i class="fa-solid fa-circle-info"></i>The song has been <strong> added</strong> to playlist';
            function notifs_display_toogle(){
                notifs[0].style.opacity="0"
                clearTimeoutfunc();
            }
            let stidk=setTimeout(notifs_display_toogle,3000);
            function clearTimeoutfunc(){
                clearTimeout(stidk);
            }
            let song_to_added = e.target.parentElement.parentElement;
            // console.log("song_to_added");
            // console.log(song_to_added);
            let to_find_index_name = e.target.getAttribute("playlist_index");
            let playlist_items = document.getElementsByClassName("playlist_items");
            for (let i = 0; i < playlist_drop_down.length; i++) {
                if (playlist_items[i].getAttribute("playlist_index") == to_find_index_name) {
                    // console.log("the playlist to be added is founc");
                    //add playlist attribute
                    like_queue_number++;
                    
                    song_to_added.setAttribute("playlist_index", playlist_items[i].getAttribute("playlist_index"));
                    song_to_added.setAttribute("queue_number", like_queue_number);
                    let itemToBeAdded_copy = document.createElement("div");
                    itemToBeAdded_copy.setAttribute("queue_number", like_queue_number);
                    song_to_added.querySelector(".add_playlist_options").remove();
                    itemToBeAdded_copy.innerHTML = song_to_added.innerHTML;
                    itemToBeAdded_copy.classList.add("playlist_items_songs");
                    itemToBeAdded_copy.classList.remove("song_items");
                    itemToBeAdded_copy.querySelector(".song_img").classList.add("playlist_items_img");
                    itemToBeAdded_copy.querySelector(".song_img").classList.remove("song_img");
                    itemToBeAdded_copy.querySelector(".song_itemsOptions").remove();
                    // itemToBeAdded_copy.querySelector(".song_itemsOptions").classList.remove("song_itemsOptions");
                    // itemToBeAdded_copy.querySelector(".playlist_itemsOptions .add_playlist").remove();

                    itemToBeAdded_copy.querySelector(".song_title").classList.add("playlist_items_songTitle");
                    itemToBeAdded_copy.querySelector(".song_title").classList.remove("song_title");
                    // console.log("\nitem to be added");
                    // console.log(itemToBeAdded_copy);
                    // itemToBeAdded_copy.classList.add(like_queue_number);
                    itemToBeAdded_copy.setAttribute("queue_number", like_queue_number);
                    // playlist_drop_downFunc2()
                   
                    like_queue_number++;

    //                 playlist_item_songs=Array.from( document.getElementsByClassName("playlist_items_songs"));
    //     for (let i = 0; i < allPlayItems.length; i++) {
    //         if (allPlayItems[i].getAttribute("queue_number") == song_item_to_be_removed) {
                
    // playlist_item_songs.forEach(playlist_item_songs=>{
    //     if( playlist_item_songs.querySelector(".playlist_items_songTitle i").classList.contains("fa-circle-play")){
    //     playlist_item_songs.querySelector(".playlist_items_songTitle i").classList.remove("fa-circle-pause");
    //     }
    //     else{
    //     playlist_item_songs.querySelector(".playlist_items_songTitle i").classList.remove("fa-circle-pause");
    //     playlist_item_songs.querySelector(".playlist_items_songTitle i").classList.add("fa-circle-play");

    //     }
    // })
                    playlist_items[i].querySelector(".sub_playlist_section1").append(itemToBeAdded_copy);

                    playlist_item_songs2=Array.from(document.getElementsByClassName("playlist_items_songs"));
                    // console.log("new licreated: ");
                    // console.log(playlist_item_songs2);

                    itemToBeAdded_copy.querySelector(".playlist_items_songTitle").addEventListener("click",()=>{
                        // console.log("it is called on clicking itemp copy");
                        let to_compare=itemToBeAdded_copy.querySelector(".playlist_items_songTitle span").innerHTML;
                        let song_to_play=document.getElementsByClassName("song_items");
                        // console.log(to_compare);
                        for(let i=0; i<song_to_play.length; i++){
                            // console.log(song_to_play[i].getAttribute(""));
                            if(to_compare==song_to_play[i].querySelector(".song_description span").innerText){

                                console.log(song_to_play[i].querySelector(".song_description span").innerText);
                                song_to_play[i].querySelector(".song_title").click();
                                return;
                            }
                        }
                    })
                }
            }
        });
    }

    // // const liked_playlist_playSongsFunc = () => {
    //     likedPlaylist_trigger = document.getElementsByClassName("playlist_items_songTitle")[.getElementsByClassName("playlist_items_songs").length - 1]; 
    //     likedPlaylist_trigger.addEventListener("click", (e) => {
    //         console.log(e);
    //         let playlistSong_to_removed = e.target.parentElement.parentElement;
    //         console.log(playlistSong_to_removed);
    //         let song_item_to_be_removed = playlistSong_to_removed.getAttribute("queue_number");
    //         //Playing songs algorithm  by clicking title
    //         console.log(allPlayItems[0]);
    //         for (let i = 0; i < allPlayItems.length; i++) {
    //             if (allPlayItems[i].getAttribute("queue_number") == song_item_to_be_removed) {
    //                 console.log(allPlayItems[i]);
    //                 allPlayItems[i].querySelector(".song_title").click();
    //                 console.log("song is playing");
    //                 return;
    //             }
    //         };
    //     })
    // // };
};


let playlist_visibility = -1;
let playlist_index_visible_now=0;
function Allplaylist(){
    add_playlist_options.forEach((add_playlist_options,i)=>{
            add_playlist_options.style.display="none";
            add_playlist_options.setAttribute("playlist_visibility","0")
    })
}

playlist_icon.forEach(playlist_icon=>{
    playlist_icon.setAttribute("playlist_visibility","0");
})
//Playlist hovering
playlist_icon.forEach((play_list_icon, i) => {
    
    play_list_icon.addEventListener('click', () => {
        // console.log(playlist_visibility);
        // console.log(i);
        if(playlist_visibility==i){
            if(add_playlist_options[i].style.display=="none"){
                add_playlist_options[i].style.display = "block";

            }
            else{
                add_playlist_options[i].style.display = "none";

            }
            
        }
        else{
        Allplaylist();
            add_playlist_options[i].style.display = "block";
            playlist_visibility=i;
        }
            // add_playlist_options[i].setAttribute("playlist_visibility","1")
    //     }
        
    })
})

//Redirecting from one page to another
let searchBox= document.getElementById("search_box");
let home = document.getElementById("Home_page");
let my_playlist = document.getElementById("My_playlist");
let middle = document.getElementsByClassName("middle");
home.addEventListener("click", () => {
    middle[0].style.display = "flex";
    middle[1].style.display = "none";
    middle[2].style.display = "none";
    if(window.innerWidth<=640){
    left_section.style.display="none";
    menu_bar_value=0;
    }
});

searchBox.addEventListener("click",()=>{
    middle[0].style.display = "none";
    if(window.innerWidth<=640){
        left_section.style.display="none";
        menu_bar_value=0;
        }
    middle[1].style.display = "none";
    middle[2].style.display = "flex";
})

//Searching Algorithm
let search= document.getElementById("searchHere");
let search_result=document.getElementsByClassName("search_result")[0];
let all_song_title=document.querySelectorAll(".song_title span:nth-child(2)");
// console.log(all_song_title);
//Creating the clone of all the songs
        all_song_title.forEach((all_song_title,i)=>{
        let song_item=all_song_title.parentElement.parentElement.parentElement;

        let item_copy=song_item.cloneNode(true);
        item_copy.classList.add("item-copy");
        item_copy.querySelector(".add_playlist").remove();
        item_copy.classList.remove("song_items");
        item_copy.querySelector(".song_description i").remove();
        if(i==0){
        item_copy.querySelector(".guide_section").remove();
        item_copy.querySelector(".guide_section").remove();
        }
        item_copy.querySelectorAll(".spacing_class")[0].classList.add("spacing_class_clone");
        item_copy.querySelectorAll(".spacing_class")[0].classList.remove("spacing_class");
            // console.log(item_copy.querySelectorAll(".spacing_class")[1]);
        item_copy.querySelectorAll(".spacing_class")[0].classList.add("spacing_class_clone");
        item_copy.querySelectorAll(".spacing_class")[0].classList.remove("spacing_class");

        item_copy.classList.add("clone_song_items");
        search_result.append(item_copy);
    })
    console.log("\n\n SHOWING RESULTS\n");

//Searching ALgorithm on pressing each key
let item_copy_Array=Array.from(document.getElementsByClassName("item-copy"));
search.addEventListener("keyup",()=>{
 let search_value= search.value.toUpperCase();
   
    // console.log(item_copy_Array);
    all_song_title.forEach((all_song_title,i)=>{
        if(all_song_title.innerText.toUpperCase().indexOf(search_value)>-1){
        item_copy_Array[i].style.display="";
        // console.log(all_song_title.innerText);
        }
        else{
            // // console.log("else is entered");
        item_copy_Array[i].style.display="none";
        // search_result.remove(item_copy);
        }
    })
})
let idk;
//Play songs on clicking each songs
item_copy_Array.forEach(item_copy_Array=>{
    item_copy_Array.querySelector(".song_title").addEventListener("click",()=>{
        let song_title=item_copy_Array.querySelector(".song_title span");
        for(let i=0; i<all_song_title.length; i++){
            if(all_song_title[i].innerText==song_title.innerText){
                all_song_title[i].click();
                return;
            }
            else{
                // console.log("song is not found");
            }
        }
    })
})

//Add to like functionality
item_copy_Array.forEach(item_copy_Array=>{
    // console.log(item_copy_Array);
    item_copy_Array.querySelector(".song_itemsOptions .add_like").addEventListener("click",()=>{
        let song_title=item_copy_Array.querySelector(".song_title span");
        // console.log(song_title);
        let song_heart=item_copy_Array.querySelector(".add_like");
        // console.log("song_to_play: "+ song_title.innerText);
        for(let i=0; i<all_song_title.length; i++){
            // console.log(song_title.innerText);
            // console.log(all_song_title[i].innerText);
            if(all_song_title[i].innerText==song_title.innerText){
                let idk=all_song_title[i].parentElement.parentElement.parentElement.querySelector(".add_like");
                // console.log(idk);
                idk.click();
                if(song_heart.classList.contains("red_heart")){
                    song_heart.classList.remove("red_heart");
                }
                else {
                    song_heart.classList.add("red_heart");
                }
                return;
            }
            else{
                // console.log("song is not found");
            }
        }
    })
})

//SHow all songs
let show_all=Array.from(document.getElementsByClassName("see_all"));
show_all.forEach((show_all,i)=>{
    show_all.setAttribute("show_all_status","0");
});
show_all.forEach((show_all,i)=>{
show_all.addEventListener("click", (e)=>{
    let target_ele=e.target.parentElement.parentElement.querySelector(".song_sections");
    let target_ele2=e.target.parentElement.parentElement.querySelector(".song_sections .songs_list");
    let scroll_arrow=e.target.parentElement.querySelectorAll(".scroll_arrows");
if(show_all.getAttribute("show_all_status")==0){
    target_ele.classList.add("song_sections_see_all");
    target_ele2.classList.add("songs_list_see_all");
    scroll_arrow[0].style.display="none";
    scroll_arrow[1].style.display="none";
    // console.log(target_ele);
    show_all.setAttribute("show_all_status","1");
}
else if(show_all.getAttribute("show_all_status")==1){
    target_ele.classList.remove("song_sections_see_all");
    target_ele2.classList.remove("songs_list_see_all");
    scroll_arrow[0].style.display="";
    scroll_arrow[1].style.display="";

    show_all.setAttribute("show_all_status","0");
}
})
})

//line 1333 to 1456
let preloader=document.querySelector(".preloader");
// console.log(preloader)
let form=document.querySelector(".choice_form");
let form_onokay=document.querySelector(".form_okay");
let user_choice=null;
let welcome=document.querySelector(".welcome");
let user_name= document.querySelector("#user_name");

// console.log(form_onokay)
let user_name_input=document.querySelector("#user_name_value");
let user_name2=document.querySelector("#user_name2");
if(window.innerWidth<=300){
    let animation= document.getElementsByClassName("animation_section")[0];
    // console.log("yes it is");
    animation.style.display="none";
}

user_name_input.addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
        form_onokay.click();
    }
    user_name.innerText=user_name_input.value;
    user_name2.innerText=user_name_input.value+"'s";
})
form.addEventListener("submit",(e)=>{
    e.preventDefault()
});
form_onokay.addEventListener("click",()=>{
    

    user_choice= document.querySelector('input[name="choice_radio"]:checked');
    if(user_choice && user_name.innerText!=""){
    user_choice=user_choice.getAttribute("value");
    // console.log(user_choice);
    form.style.display="none";
    let category= ["ncs","hindisongs","phonks", "lofi"];
    let animation_div=document.querySelector(".animation_section");
    for(let i=0; i<category.length; i++){
        // console.log(user_name);
        if(category[i]==user_choice ){
            let j= parseInt(i);
            currentPlayingSection = song_sections[j].getElementsByClassName("song_items");
            currentSong=Math.floor(Math.random()*(currentPlayingSection.length));
            // audioToPlay.src=hotSpicy[j][currentSong].audioPath+ "#t=00:00:30";
            audioToPlay.src=hotSpicy[j][currentSong].audioPath;
            // console.log("aud duration");
            // console.log(audioToPlay.src);
            audioToPlay.volume=0.1;
            currentPlayingSection[currentSong].querySelector(".song_title").click();
            
            let st3=setTimeout(()=>{
                // console.log("vol increased");
                audioToPlay.volume=0.35;
                removerfunc3();
            },3000);
            function removerfunc3(){
                clearTimeout(st3);
            }

        }
    }
    let st1= setTimeout(()=>{
        preloader.style.opacity="0";
        removerfunc1();
    },6000);
    function removerfunc1(){
        clearTimeout(st1);
    }
     
    if(window.innerWidth<=300){
        let st10= setTimeout(()=>{
        preloader.style.display="none";
        form.style.display="none";

        create_playlist.addEventListener("click", () => {
            playlist_name = prompt("Enter the playlist name", "My_playlist1");
            if(playlist_name!=null){
            create_playlistFunc(playlist_name);
            }
            // console.log(playlist_name);
        })

        my_playlist.addEventListener("click", () => {
            middle[0].style.display = "none";
            if(window.innerWidth<=640){
                left_section.style.display="none";
                menu_bar_value=0;
                }
        
            middle[1].style.display = "flex";
            middle[2].style.display = "none";
        });
        menu_bar.addEventListener("click",()=>{
            if(menu_bar_value==0){
                menu_bar_value=1;
                // console.log(right);
                left_section.style.display="flex";
            }
            else if(menu_bar_value==1){
                left_section.style.display="none";
                // console.log(right);
            
                menu_bar_value=0;
            }
            })

            removerfunc1();
        },6500);
        function removerfunc1(){
            clearTimeout(st10);
        }
        
    }
    //cicle opacity
    if(window.innerWidth>300){
    let st4=setTimeout(()=>{
        animation_div.style.opacity="1";
        animation_div.style.transform="scale(0.8)";
        // welcome.style.background="linear-gradient(+50deg, #16003B,#16003B,purple,#16003B,#16003B);";

        removerfunc4();
    },6500);
    function removerfunc4(){
        clearTimeout(st4);
    }

    let st7=setTimeout(()=>{
        // console.log(window.innerWidth);
        if(window.innerWidth>=900){
        animation_div.style.transform="scale(1.5)";
        // console.log("idk");
        }
        else if(window.innerWidth<900 && window.innerWidth>640){
        animation_div.style.transform="scale(1.5)";
        // console.log("idk2");

        }
        else if(window.innerWidth<=640 && window.innerWidth>410){
        animation_div.style.transform="scale(1.5)";
        // console.log("greater thean 300 but less than 6");

        }
        else if(window.innerWidth<=410){
            console.log("less than 300");
        animation_div.style.transform="scale(2)";
        }
        // welcome.style.background="linear-gradient(+50deg, #16003B,#16003B,purple,#16003B,#16003B);";

        removerfunc7();
    },7000);
    function removerfunc7(){
        clearTimeout(st7);
    }
    // console
    let st6=setTimeout(()=>{
        // animation_div.style.filter="blur(10px)";
        // animation_div.style.transform="scale(0.5)";

        welcome.style.background="linear-gradient(144deg, #16003B,#16003B,purple,#16003B,#16003B);";
        removerfunc6();
    },7500);
    function removerfunc6(){
        clearTimeout(st6);
    }

    let st5=setTimeout(()=>{
        animation_div.style.filter="blur(10px)";

        animation_div.style.transform="scale(0.6)";

        animation_div.style.opacity="0";
        removerfunc5();
    },9500);
    function removerfunc5(){
        clearTimeout(st5);
    }

    let st2=setTimeout(()=>{
        preloader.style.display="none";
        animation_div.style.display="none";
        form.style.display="none";

        removerfunc2();

    },10500);
    function removerfunc2(){
        clearTimeout(st2);
    }}
    

    if(window.innerWidth>300){
        
        let void_screen= document.querySelector(".void_screen");

        let song_list_first=document.getElementsByClassName("songs_list")[0];
        let st9=setTimeout(()=>{
            let dsfjdij=document.getElementById("middleHeading");
            dsfjdij.scrollIntoView(true);
            song_list_first.scroll(0,0);
            removerfunc9();
    
        },10600);
        function removerfunc9(){
            clearTimeout(st9);
        }

    let guide_road=0;
    let guide_p= document.querySelectorAll(".guide_description");
    let guide_section=Array.from(document.getElementsByClassName("guide_section"));
    let st8=setTimeout(()=>{
        window.scroll(0,0);
        // console.log("Block is enterd");
        if(window.innerWidth<992){
        guide_p[0].innerHTML="<strong>Here's a quick intro to the website!</strong><br><br>Click on logo to hide/unhide left panel";
        }
        else{
            guide_p[0].innerHTML="<strong>Here's a quick intro to the website!</strong><br><br>Double Click on logo on first try to hide/unhide left panel, afterwards you can click once in order to so. (Sorry for inconvenience as this feature was added at the last moment of this site)";
        }
        let logo=document.getElementById("logo");
        void_screen.style.display="block";
        
            guide_section[0].style.left="110%";
            guide_section[0].style.display="flex";
            
            guide_road++;
        removerfunc8();

    },10700);
    function removerfunc8(){
        clearTimeout(st8);
    }

    let okay_pressed=Array.from(document.getElementsByClassName("okay_pressed"));
    okay_pressed.forEach((okay_pressed,i)=>{
        okay_pressed.addEventListener("click",()=>{
            // console.log("THi is pressed");
        if(guide_road==1){
            if(window.innerWidth<992){
                        left_section.style.display="flex";
                        menu_bar.addEventListener("click",()=>{
                            if(menu_bar_value==0){
                                menu_bar_value=1;
                                // console.log(right);
                                left_section.style.display="flex";
                            }
                            else if(menu_bar_value==1){
                                left_section.style.display="none";
                                // console.log(right);
                            
                                menu_bar_value=0;
                            }
                            })
            }
        guide2();

        }
        else if(guide_road==2){
            guide3();


        }
        else if(guide_road==3){
            if(window.innerWidth<992){

                logo.click();
            }
            guide4();
        }
        else if(guide_road==4){
            guide5();
        }
        else if(guide_road==5){
            guide6();
        // guide_section.style.display="none";
        }
        else if(guide_road==6){
        guide_section[5].style.display="none";
        void_screen.style.display="none";
 
           
            create_playlist.addEventListener("click", () => {
                playlist_name = prompt("Enter the playlist name", "My_playlist1");
                if(playlist_name!=null){
                create_playlistFunc(playlist_name);
                }
                // console.log(playlist_name);
            })

            my_playlist.addEventListener("click", () => {
                middle[0].style.display = "none";
                if(window.innerWidth<=640){
                    left_section.style.display="none";
                    menu_bar_value=0;
                    }
            
                middle[1].style.display = "flex";
                middle[2].style.display = "none";
            });

            if(window.innerWidth>=992){
            menu_bar.addEventListener("click",()=>{
                if(menu_bar_value==0){
                    menu_bar_value=1;
                    // console.log(right);
                    left_section.style.display="flex";
                }
                else if(menu_bar_value==1){
                    left_section.style.display="none";
                    // console.log(right);
                
                    menu_bar_value=0;
                }
                })
            }
        }
    })
    })
    function guide2(){
        
        guide_section[0].style.display="none";
        guide_p[1].innerText="Click 'create playlist' button to create your custom playlist";
        if(window.innerWidth<640){
        guide_section[1].style.left="83%";
        guide_section[1].style.top="-12%";
        }
        else{
            guide_section[1].style.left="83%";
        guide_section[1].style.top="-12%";
        }
        guide_section[1].style.display="flex";
        guide_road++;
    }
    function guide3(){
        guide_section[1].style.display="none";
        guide_p[2].innerText="Click 'My playlists' button to see all your playlists collections";
        if(window.innerWidth<640){
        guide_section[2].style.left="77%";
        guide_section[2].style.top="-21%";
        }
        else{
            guide_section[2].style.left="77%";
            guide_section[2].style.top="-21%";
        }
        guide_section[2].style.display="flex";
        guide_road++;
    }
    function guide4(){
        guide_section[2].style.display="none";
        guide_p[3].innerText="Click this 'heart icon' in order to save your song to your liked playlist";
        let song_img_first=document.querySelector(".song_img");
        let song_item_first=document.querySelector(".song_items");
        song_img_first.style.overflow="visible";
        song_item_first.style.overflow="visible";
        song_item_first.style.zIndex="4";
        if(window.innerWidth<640){
        guide_section[3].style.left="24%";
        guide_section[3].style.top="-76%";
        }
        else{
            guide_section[3].style.left="20%";
        guide_section[3].style.top="-50%";
        }
        guide_section[3].style.display="flex";
        guide_road++;
    }
    function guide5(){
        guide_section[3].style.display="none";
        guide_p[4].innerHTML="Click on this playlist button to save songs to your custom playlist.<br><br><strong>Note: This button is funcional only when you have already created a custom playlist.";
        let song_img_first=document.querySelector(".song_img");
        let song_item_first=document.querySelector(".song_items");
        song_img_first.style.overflow="visible";
        song_item_first.style.overflow="visible";
        song_item_first.style.zIndex="4";
        if(window.innerWidth<640){
        guide_section[4].style.left="0%";
        guide_section[4].style.top="110%";
        }
        else{
            guide_section[4].style.left="0%";
        guide_section[4].style.top="110%";
        }
        guide_section[4].style.display="flex";
        guide_road++;
    }
    function guide6(){
        guide_section[4].style.display="none";
        guide_p[5].innerText="All done!! Now you are ready to explore this website. There may be some bugs in this website, so if you find any, dm the creator on Linkedin. Also, dont forget to leave a comment on linkedin post. Thank you!";
        // console.log("it is set");
        guide_section[5].style.left="0";
        guide_section[5].style.top="0";
        guide_section[5].style.right="0";
        guide_section[5].style.bottom="0";
        guide_section[5].style.justifyContent="center";
        guide_section[5].style.alignItems="start";
        // console.log(window.getComputedStyle(guide_section[5].querySelector(".guide_sub_section"),"::after"));
        // let guide_after=window.getComputedStyle(guide_section[5].querySelector(".guide_sub_section"),"::after");
        // guide_after.style.display="none";
        guide_section[5].style.display="flex";
        guide_road++;

    }
}
}

    else{
    alert("please select an option and enter your name");
}
})



// preloader.addEventListener("load",()=>{
    const preloaderFunc=()=>{
    // console.log("i have been calld");
    const preloaderFunc2=()=>{
    form.style.opacity="1";

        removerFunc();
    }
    let s3=setTimeout(preloaderFunc2,2000);
    const removerFunc=()=>{
        clearTimeout(s3);
    }
}

let create_playlist = document.getElementById("create_playlist");
let playlist_name = "My_playlist1";
let see_all2=document.querySelector(".see_all2");
see_all2.addEventListener("click",()=>{
    let next_song=document.getElementsByClassName("upComing_css");
    for(let i=1;i <5; i++){
        next_song[i].classList.toggle("upComing_css_see_all");
    }
})

let left_section=document.getElementsByClassName("left")[0];
let menu_bar= document.getElementById("logo");
let menu_bar_value=0;
