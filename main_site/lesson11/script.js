var coll = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

document.getElementById("last-updated").textContent =
    "Last Updated: " + document.lastModified;

function calculate_wind_chill() {

    var t = parseInt(document.getElementById('high').innerHTML)
    var s = parseInt(document.getElementById('wind-speed').innerHTML)
    console.log(t)

    var wind_chill = null

    if (t <= 50 && s > 3){
        wind_chill = Math.round(35.74+0.6215*t - 35.75 * Math.pow(s, 0.16)+0.4275*t*Math.pow(s, 0.16))}

    else {
        wind_chill = 'N/A'
    }
    document.getElementById('wind-chill').innerHTML = wind_chill
}

calculate_wind_chill()