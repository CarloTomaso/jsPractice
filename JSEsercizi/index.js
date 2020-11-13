const arrayArtsisti = ['korn', 'slipknot', 'lacunacoil', 'subsonica', 'salmo', 'daftpunk', 'eminem', ' limbbizkit'];
const randomItem = arrayArtsisti[Math.floor(Math.random() * arrayArtsisti.length)];
const menuHome = document.querySelector('.menu-home');
const fetchData2 = async () => {
    let res = await fetch(`https://rapidapi.p.rapidapi.com/search?q=${randomItem}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a75196a40emshe978c8380b56257p1bfd65jsn59fe8b34e624",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }).then(res => {
        return res.json()
    })
    let datas = res.data

    let sceltaRapida = document.getElementById('scelta-rapida');
    datas.forEach(element => {
        sceltaRapida.innerHTML += `
          
            <div class="card-container col-sm-12 col-xl-4 mb-5">
            <div class="card card-bg" style="width: 18rem;">
      <img class="card-img-top" src=${element.album.cover_medium} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">Album Title :${element.album.title}</p>
        <a href="artist_page.html?id=${element.artist.name}" ' class=" btn"><i class="fas fa-arrow-alt-circle-right"></i></a>
      </div>
    </div>
    </div>

    `

    })

}
fetchData2()
const randomItem3 = arrayArtsisti[Math.floor(Math.random() * arrayArtsisti.length)];
const fetchData3 = async () => {
    let res = await fetch(`https://rapidapi.p.rapidapi.com/search?q=${randomItem3}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a75196a40emshe978c8380b56257p1bfd65jsn59fe8b34e624",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }).then(res => {
        return res.json()
    })
    let datas = res.data

    let ascoltirecenti = document.getElementById('ascolti-recenti')
    datas.forEach(element => {
        ascoltirecenti.innerHTML += `
        <div class="card-container col-sm-12 col-xl-4 mb-5">
                <div class="card card-bg" style="width: 18rem;">
          <img class="card-img-top" src=${element.album.cover_medium} alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">Album Title :${element.album.title}</p>
            <a href="artist_page.html?id=${element.artist.name}" ' class=" btn"><i class="fas fa-arrow-alt-circle-right"></i></a>
          </div>
        </div>
        </div>
        `

    })
}
fetchData3()
const randomItem4 = arrayArtsisti[Math.floor(Math.random() * arrayArtsisti.length)];
const fetchData4 = async () => {
    let res = await fetch(`https://rapidapi.p.rapidapi.com/search?q=${randomItem4}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a75196a40emshe978c8380b56257p1bfd65jsn59fe8b34e624",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }).then(res => {
        return res.json()
    })
    let datas = res.data



    let creatoPerTe = document.getElementById('creato-per-te')
    datas.forEach(element => {
        creatoPerTe.innerHTML += `
    <div class="card-container col-sm-12 col-xl-4 mb-5">
            <div class="card card-bg" style="width: 18rem;">
      <img class="card-img-top" src=${element.album.cover_medium} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">Album Title :${element.album.title}</p>
        <a href="artist_page.html?id=${element.artist.name}" ' class=" btn"><i class="fas fa-arrow-alt-circle-right"></i></a>
      </div>
    </div>
    </div>
    `
    })
}
fetchData4()

const fetchData = async () => {

    const searchBar = document.getElementById('search')
    let searchWord = searchBar.value

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
      
        <div class="card-container col-sm-12 col-xl-4 mb-5">
        <div class="card card-bg" style="width: 18rem;">
  <img class="card-img-top" src=${element.album.cover_medium} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">Album Title :${element.album.title}</p>
    <a href="artist_page.html?id=${element.artist.name}" ' class=" btn"><i class="fas fa-arrow-alt-circle-right"></i></a>
  </div>
</div>
</div>

`
    })




    console.log(res.data)
}




const searchData = async (e) => {
    e.preventDefault()
    const searchBar = document.getElementById('search')
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

let heart = document.querySelector('.fa-heart');
console.log(heart)
heart.onclick = function () {
    heart.classList.toggle('red')
};


let lente = document.querySelector('.fa-search')
lente.addEventListener("click", function (e) {
    menuHome.classList.toggle('none')
}, false);


/* 



}) */