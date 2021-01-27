const searchForm = document.getElementById('searchForm')
const searchString = document.getElementById('searchString')
const resultsEl = document.getElementById('results')

searchForm.addEventListener('submit', function(e) {
    const q = searchString.value.trim()
    console.log(q)
    search(q)
})

searchString.addEventListener('input', function(e) {
    const q = searchString.value.trim()
    console.log(q)
    search(q)
})

// Search function //

function search(q) {
    const apikey = 'ftUwVbVYCio80g6YwUCyTUIyy0vs6QKP'
    const path = 'https://api.giphy.com/v1/gifs/search?api_key=' + apikey + '&q=' + q + '&limit=50'

    const p = fetch(path)
    p.then(function(res) {
        return res.json()
    }).then(function(json) {
        console.log(json.data)

        let resultsHTML = ''

        json.data.forEach(function(obj) {
            console.log(obj.images.fixed_width_downsampled)

            const url = obj.images.fixed_width_downsampled.url
            const width = obj.images.fixed_width_downsampled.width
            const alt = obj.title
            resultsHTML += `<div class="content">
            <a href="` + url + `" target="_blank">
              <div class="content-overlay"></div>
              <img class="content-image" src="` + url + `">
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">` + alt + `</h3>
              </div>
            </a>
          </div>`
        })

        resultsEl.innerHTML = resultsHTML
    }).catch(function(err) {
        console.log(err.message)
    })
}

function trending() {
    const apikey = 'ftUwVbVYCio80g6YwUCyTUIyy0vs6QKP'
    const path = 'https://api.giphy.com/v1/gifs/trending?api_key=' + apikey

    const p = fetch(path)
    p.then(function(res) {
        return res.json()
    }).then(function(json) {
        console.log(json.data)

        let resultsHTML = ''

        json.data.forEach(function(obj) {
            console.log(obj.images.fixed_width_downsampled)

            const url = obj.images.fixed_width_downsampled.url
            const width = obj.images.fixed_width_downsampled.width
            const height = obj.images.fixed_width_downsampled.height
            const usedHeight = (0.5 * height)
            const alt = obj.title
            resultsHTML += `<div class="content">
            <a href="` + url + `" target="_blank">
              <div class="content-overlay" style="height=` + usedHeight + `px;"></div>
              <img class="content-image" src="` + url + `">   
              
              <div class="content-details fadeIn">
                <h3 class="content-title">` + alt + `</h3>
              </div>
            </a>
          </div>`
        })

        resultsEl.innerHTML = resultsHTML
    }).catch(function(err) {
        console.log(err.message)
    })
}

// Random GIFs //
trending()
