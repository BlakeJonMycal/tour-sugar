import { getBands, getVenues, getBookings  } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "bands") {
            const bandID = itemClicked.dataset.band_id
        let venueName = ""
        let venueId = ""
                for (const booking of bookings) {
                    if(booking.bandId === parseInt(bandID)){
                        venueId += booking.venueId
                    }
                }
                for (const venue of venues) {
                    if(parseInt(venueId) === venue.id){
                        venueName += venue.name
                    }
                }
                window.alert(`Playing: ${venueName}`)
            } 
        }
) 

export const Bands = () => {
    let html = "<ul>"

for (const band of bands) {
    html += `<li
            data-type="bands"
            data-band_id=${band.id}
            data-band_name=${band.name}
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