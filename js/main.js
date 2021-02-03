async function getData (value) {

    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "3b6a74bb3dmsh4ca3d4936247f9fp16d483jsn700664ec8a4a",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })

    let data = await response.json()
    let realData = data.data
    let totalResult = data.total

    realData.map( (element) => {
        let songTitle = element.title
        let songLink = element.link
        let songSingerImage = element.artist.picture_big
        let song = element.preview

        let li = document.createElement('li')
        let h3 = document.createElement('h3')
        let a = document.createElement('a')
        let div = document.createElement('div')
        let img = document.createElement('img')
        let audio = document.createElement('audio')
        let source = document.createElement('source')

        h3.textContent = songTitle
        a.textContent = 'Full song'
        a.setAttribute('href', songLink)

        img.setAttribute('src', songSingerImage)
        img.setAttribute('alt', 'songSingerImage')

        audio.controls = true

        source.setAttribute('src', song)
        source.setAttribute('alt', 'audio/mp3')

        audio.appendChild(source)

        div.appendChild(img)
        div.appendChild(audio)

        li.appendChild(h3)
        li.appendChild(a)
        li.appendChild(div)

        songList.appendChild(li)
    } )
}


finder.onclick = () => {
    if(input.value != "") {
        getData(input.value)
    }
}

// input.keyup = () => {
//     if(input.value === '13'){
//         getData(input.value)
//     }
// }










