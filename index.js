class DoubleLinkedNode {
    constructor(song) {
        this.song = song;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }
    
    addSong(song) {
        const newNode = new DoubleLinkedNode(song);
        if(this.head == null){
            this.head = this.tail = this.current = newNode;
        }else{
            this.tail.next = newNode;
            newNode.previous = this.tail; 
            this.tail = newNode;
        }
    }
}

const playlist = new DoubleLinkedList();
playlist.addSong("GOOSEBUMPS - Travis Scott");
playlist.addSong("Brainrot Funk - TUNG TUNG");
playlist.addSong("Wishing Well - Juice WRLD");
playlist.addSong("God's Plan - Drake");
playlist.addSong("Blinding Lights - The Weeknd");

let isPlaying = false;

function togglePlay() {
    if (!playlist.current) return;
    const btn = document.getElementById("play-pause-btn");
    isPlaying = !isPlaying;
    btn.textContent = isPlaying ? "Pause" : "Play";
}

function updateDisplay() {
    document.getElementById("current-song").textContent = playlist.current ? playlist.current.song : "No Song";
    document.getElementById("current-artist").textContent = playlist.current ? "Now Playing" : "Select a song";
}

function playNext() {
    if (!playlist.current) return;
    playlist.current = playlist.current.next || playlist.head;
    updateDisplay();
}

function playPrevious() {
    if (!playlist.current) return;
    playlist.current = playlist.current.previous || playlist.tail;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("play-pause-btn").addEventListener('click', togglePlay);
    document.getElementById("next-btn").addEventListener('click', playNext);
    document.getElementById("prev-btn").addEventListener('click', playPrevious);
    updateDisplay();
});


