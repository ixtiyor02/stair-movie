let favoriteMain = document.querySelector('.favorite-main')
let favoriteUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ffd716e442cea750f989f65854a0cb89&language=en-US&page=1'
fetch(favoriteUrl)
    .then((value) => value.json())
    .then((another) => {
        console.log(another)
        let favoriteArray = another.results.slice(0, 3)
        let favoriteCont = document.createElement('div')
        favoriteCont.className = 'favorite-cont';
        favoriteArray.map((item) => {
            console.log(item)

            let favoriteItem = document.createElement('div')
            favoriteItem.className = 'favorite-item'
            let favoriteItemImage = document.createElement('div')
            favoriteItemImage.className = 'favorite-item-image'
            let itemImage = document.createElement('img')
            itemImage.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`
            let favoriteItemBody = document.createElement('div')
            favoriteItemBody.className = 'favorite-item-body'
            let h2Body = document.createElement('h2')
            h2Body.textContent = item.title;
            let pBody = document.createElement('p')
            pBody.textContent = item.release_date
            let spanBody = document.createElement('span')
            spanBody.textContent = `Rating : ${item.vote_average}`
            favoriteItemBody.appendChild(h2Body)
            favoriteItemBody.appendChild(pBody)
            favoriteItemBody.appendChild(spanBody)
            favoriteItemImage.appendChild(itemImage)
            favoriteItem.appendChild(favoriteItemImage)
            favoriteItem.appendChild(favoriteItemBody)
            favoriteCont.appendChild(favoriteItem)
            favoriteMain.appendChild(favoriteCont)
        })
    }
    )