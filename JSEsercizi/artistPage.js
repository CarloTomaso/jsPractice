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
        let songArtist = document.getElementById('songArtist');
        datas.slice(0, 10).forEach(element => {
            songArtist.innerHTML += `
   
    <li class='songlist'>${element.title}</li>
    `
        })

    });
    let footerImg = document.getElementById('footer-img');
    footerImg.innerHTML += `
    <img class='img-footer'src=${datas[2].artist.picture_medium} alt='imgArtist'>
    <div class='description'>
    <p class='song-footer'>${datas[2].title}<p>
    <h5 class=title-img-footer>${datas[1].artist.name}</h5>
    </div>
    <div class='icon-img-footer'>
    <i class="far fa-heart"></i>
    <i class="fas fa-window-maximize"></i>
    </div>
    `

    console.log(res.data)
}
fetchArtist(pageId)
