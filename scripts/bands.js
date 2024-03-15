import { getBands } from "./database";

const bands = getBands()

export const Bands = () => {
    let html = "<ul>"

for (const band of bands) {
    html += `<li
            data-type="bands"
            data-band_id=${band.id}
            >${band.name}</li>`
}
    html += "</ul>"
    return html
}




/*
display band name in bulleted list

import information from DB

make a function that can pull band data 

for every band / like employees in BA



create click event, 
click on band, event should see if type is in fact a band
if it is a band, then we band id to the booking.bandId and relate it to the booking.venueId to find the venue.name

window alert: have it state venues where band is playing


*/