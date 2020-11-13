var pageId = new URLSearchParams(document.location.search).get("id");
console.log(pageId)
const fetchArtist = async (pageId) => {


    let res = await fetch(`https://rapidapi.p.rapidapi.com/search?q=${pageId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a75196a40emshe978c8380b56257p1bfd65jsn59fe8b34e624",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }).then(res => {
        return res.json()

    })
    let datas = res.data
    let divArtist = document.getElementById('divArtist')
    console.log(datas[1].artist.picture_medium)
    divArtist.innerHTML += `
<div class=' row navArtista'>
<h1 class='artistTitle'>${datas[1].artist.name}</h1>
  <img src="${datas[1].artist.picture_medium}" class=" imageArtist card-img-top" alt="card image">
 </div>
`
    let albumArtist = document.getElementById('albumArtist')
    datas.forEach(element => {
        albumArtist.innerHTML += `
    <div class='album'>
    <div class="col-sm-12 col-xl-3 mb-5">
    <div class="card card-bg" style="width: 18rem;">
<img class="card-img-top" src=${element.album.cover_medium} alt="Card image cap">
<div class="card-body">
<h5 class="card-title">${element.album.title}</h5>

</div>
`
    })
    let dati = datas.slice(0, 20);
    console.log(dati)
    let songArtist = document.getElementById('songArtist');
    dati.forEach(element => {
        songArtist.innerHTML += `
   <div class='song-details'>
   <img class='img-list' src="${element.album.cover_medium}" alt='img-cover'>
    <li class='songlist'>${element.title}</li>
    </div>
    `
    })




    console.log(res.data)
}
let heart = document.querySelector('.fa-heart');
console.log(heart)
heart.onclick = function () {
    heart.classList.toggle('red')
};

fetchArtist(pageId)
