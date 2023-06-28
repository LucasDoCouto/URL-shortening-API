const urlInput = document.querySelector(".url-input")

let  urlAddress
let shortUrlFull
let shortUrl

function menuOnClick() {
    document.getElementById("hamburguer-btn").classList.toggle("clicked")
    document.getElementById("dropdown-mobile").classList.toggle("dropdown-closed")
}

// async function shortLink (){
//   const url = "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html"

//   let resultado = await fetch(url).then(async (resultado) => {
//     let dados = await resultado.json
//     return dados
//     shortUrl = dados.result.short_link
//       // if(resultado.ok){
//       //   ok = true
//       //   return dados
//       // }
//   })
// }

async function getShortLink (){
  urlAddress = urlInput.value
  const url = "https://api.shrtco.de/v2/shorten?url=" + urlAddress

  const response = await fetch(url)
  const result = await response.json()
  return result
  // console.log (result)
}

function createShortLink(){
    // alert("teste")
    getShortLink().then(async result =>{
      shortUrl = result.result.short_link
      shortUrlFull = result.result.full_short_link

      // alert(shortUrl)

      const divPai = document.getElementById('div-pai');
      const novaDiv = document.createElement('div');
      novaDiv.innerHTML = 
      `<div class="short-url">
        <p>${urlAddress}</p>
        <a href="${shortUrlFull}" target="_blank">${shortUrl}</a>
        <button class="square-btn-short">Copy</button>
      </div>`;
      novaDiv.className = 'minha-classe';
      divPai.appendChild(novaDiv);

    })
}