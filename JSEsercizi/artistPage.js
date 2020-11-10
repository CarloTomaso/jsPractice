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

    datas.forEach(element => {
        divArtist.innerHTML += `
<div class='profiloArtista'>
<div class="card" style="width: 18rem;">
  <img src="${element.album.cover_medium}" class="card-img-top" alt="card image">
  <div class="card-body">
    <h5 class="card-title">${element.artist.name}</h5>
    <p class="card-text">${element.artist.tracklist}</p>

  </div>
</div>
</div>
`
    })
    console.log(res.data)
}
fetchArtist()
