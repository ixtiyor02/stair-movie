let inputTag = document.querySelector('.txt')
let moviePageMain = document.querySelector(".searchbar")
let moviePageCont = document.querySelector(".movie-page-cont")

function myFunction(){
    let addressOfLink = "https://api.themoviedb.org/3/movie/popular?api_key=207d979516737bcf206c3d64017e1dae&language=en-US&page=1"
        fetch(addressOfLink)
            .then((item) => item.json())
            .then((response) => {
                let resultOfRest = response.results;

                let newResultOf = resultOfRest.filter((item) => item.original_title === inputTag.value)
                console.log(newResultOf)

                newResultOf.map((elem) => {
                    let moviePageItem = document.createElement("div")
                    moviePageItem.className = "movie-page-item"
                    let moviePageImage = document.createElement("div")
                    moviePageImage.className = "movie-page-image"
                    let imgOfMoviePage = document.createElement("img")
                    imgOfMoviePage.src = `https://image.tmdb.org/t/p/original/${elem.backdrop_path}`
                    let moviePageText = document.createElement("div")
                    moviePageText.className = "movie-page-text"
                    let moviePageH2 = document.createElement("h2")
                    moviePageH2.textContent = elem.original_title
                    let moviePageP = document.createElement("p")
                    moviePageP.textContent = elem.overview
                    moviePageText.appendChild(moviePageH2)
                    moviePageText.appendChild(moviePageP)
                    moviePageImage.appendChild(imgOfMoviePage)
                    moviePageItem.appendChild(moviePageImage)
                    moviePageItem.appendChild(moviePageText)
                    moviePageCont.appendChild(moviePageItem)
                    moviePageMain.appendChild(moviePageCont)
                })
                let movies = document.querySelector(".movies").style.display = "none"
                let moviesTopRated = document.querySelector(".movies-top-rated").style.display = "none"
                let moviesGallery = document.querySelector(".movies-gallery").style.display = "none"
            })

}