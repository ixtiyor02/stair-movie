let popularMain = document.querySelector('.popular-main')
let topratedURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d54f1a6164bfe4d1e9a8e04d6e9d345c&language=en-US&page=1'
fetch(topratedURL)
    .then((value) => value.json())
    .then((another) => {
        console.log(another)
        let topRatedArray = another.results.slice(0, 3)
        let popularCont = document.createElement('div')
        popularCont.className = 'popular-cont';
        topRatedArray.map((item) => {
            console.log(item)

            let popularItem = document.createElement('div')
            popularItem.className = 'popular-item'
            let popularItemImage = document.createElement('div')
            popularItemImage.className = 'popular-item-image'
            let itemImage = document.createElement('img')
            itemImage.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`
            let popularItemBody = document.createElement('div')
            popularItemBody.className = 'popular-item-body'
            let h2Body = document.createElement('h2')
            h2Body.textContent = item.title;
            let pBody = document.createElement('p')
            pBody.textContent = item.release_date
            let spanBody = document.createElement('span')
            spanBody.textContent = `Rating : ${item.vote_average}`
            popularItemBody.appendChild(h2Body)
            popularItemBody.appendChild(pBody)
            popularItemBody.appendChild(spanBody)
            popularItemImage.appendChild(itemImage)
            popularItem.appendChild(popularItemImage)
            popularItem.appendChild(popularItemBody)
            popularCont.appendChild(popularItem)
            popularMain.appendChild(popularCont)
        })
    }
    )