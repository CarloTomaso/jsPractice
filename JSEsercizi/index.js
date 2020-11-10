
const searchBar = document.getElementById('search')
let searchWord = searchBar.value

const fetchData = async (searchWord) => {


    let res = await fetch(`https://rapidapi.p.rapidapi.com/search?q=${searchWord}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a75196a40emshe978c8380b56257p1bfd65jsn59fe8b34e624",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }).then(res => {
        return res.json()
    })
    let datas = res.data
    let ul = document.getElementById('songs')
    ul.innerHTML = ''
    datas.forEach(element => {
        ul.innerHTML += `
      
        <div class="col-sm-12 col-xl-4 mb-5">
        <div class="card card-bg" style="width: 18rem;">
  <img class="card-img-top" src=${element.album.cover_medium} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">Album Title :${element.album.title}</p>
    <a href="artist_page.html?id=${element.artist.name}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

`
    })

    console.log(res.data)
}




const searchData = async (e) => {
    e.preventDefault()
    fetchData(searchBar.value)
    console.log(searchBar.value)
}
//tasto cerca crea lo switch nella proprietà display
let divSearch = document.getElementById('div-search');
function searchDisplay() {

    if (divSearch.style.display === 'none') {
        divSearch.style.display = 'block';
    } else {
        divSearch.style.display = 'none';
    }


}




