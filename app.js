import sanger from "./sanger.json" with { type: "json" }

const sangliste = document.querySelector("#sangliste")
sanger.forEach(sang => {
    sangliste.innerHTML += `
        <div class="sang">
            <h1>${sang.tittel}</h1>
            <p>Av ${sang.artist}</p>
            <p>Album: ${sang.album}</p>
            <p>${sang.review}</p>
            <p>${sang.averageRating} i gjennomsnittlig score av ${sang.ratingKilder}</p>
            <p><a href="${sang.url}" target="_blank">Hør sangen her<a/></p>
        </div>

    `



})

console.log(sanger);
