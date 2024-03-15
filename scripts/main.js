import { Bands } from "./bands.js"
import { Venues } from "./venues.js" 

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Sugar</h1>
<article class="bookings">
    <h2>Bookings</h2>
    
</article>
<article class="details">
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
</article>


`

mainContainer.innerHTML = applicationHTML