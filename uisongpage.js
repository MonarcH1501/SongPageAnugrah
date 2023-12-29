function searchLyric() {
    var songTitle = document.getElementById("songInput").value;
    if (songTitle) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.lyrics.ovh/v1/" + songTitle.replace(" ", "+"), true);
        xhr.onload = function () {
            if (this.status == 200) {
                var lyrics = JSON.parse(this.responseText);
                document.getElementById("result").innerHTML = "<strong>" + lyrics.artist.name + "</strong><br><br>" + lyrics.lyrics;
            } else {
                document.getElementById("result").innerHTML = "Lyrics not found!";
            }
        };
        xhr.send();
    } else {
        alert("Please enter a song title.");
    }
}