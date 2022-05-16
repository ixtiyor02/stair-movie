let urlForMovieGallery = "https://api.themoviedb.org/3/movie/upcoming?api_key=207d979516737bcf206c3d64017e1dae&language=en-US&page=1"
    fetch(urlForMovieGallery)
        .then((item) => item.json())
        .then((response) => {
            let galleryCont = document.querySelector(".gallery-cont")
            let arrMovies = response.results
            arrMovies.map((item) => {
                let galleryItem = document.createElement("div")
                galleryItem.className = "gallery-item"
                let galleryItemCont = document.createElement("div")
                galleryItemCont.className = "gallery-item-cont"
                let galleryImage = document.createElement("div")
                galleryImage.className = "gallery-image"
                let img = document.createElement("img")
                img.src =  `https://image.tmdb.org/t/p/original/${item.poster_path}`
                let galleryText = document.createElement("div")
                galleryText.className = "gallery-text"
                let galleryRating = document.createElement("div")
                galleryRating.className = "gallery-rating"
                let i = document.createElement("i")
                i.className = "fa-solid fa-star"
                let p = document.createElement("p")
                p.textContent = item.vote_average
                let galleryName = document.createElement("div")
                galleryName.className = "gallery-name"
                let h2 = document.createElement("h2")
                h2.textContent = item.title

                galleryName.appendChild(h2)
                galleryRating.appendChild(i)
                galleryRating.appendChild(p)
                galleryText.appendChild(galleryRating)
                galleryText.appendChild(galleryName)
                galleryImage.appendChild(img)
                galleryItemCont.appendChild(galleryImage)
                galleryItemCont.appendChild(galleryText)
                galleryItem.appendChild(galleryItemCont)
                galleryCont.appendChild(galleryItem)
            })
        })