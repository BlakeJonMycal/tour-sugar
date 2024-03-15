import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked  = clickEvent.target  
        if(itemClicked.dataset.type === "venues"){ 
        const venueID  = itemClicked.dataset.venue_id
        const venueName = itemClicked.dataset.name
        let   bandId  = []
        let bandNames = []
            for (const booking of bookings) {
                if(booking.venueId === parseInt(venueID)){
                    bandId.push(booking.bandId)
                }
            }
            for (const band of bands) {
                if(bandId[0] === band.id){
                    bandNames.push(band.name)
                }
                if(bandId[1] === band.id){
                    bandNames.push(band.name)
                }
            }
            window.alert(`booked: ${bandNames.join(", ")}`)
    }
}
)
export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li
            data-type="venues"
            data-venue_id=${venue.id}
            data-name=${venue.name}
            >${venue.name}</li>`
    }
    html += "</ul>"
    return html
}









/*
display venue name in bulleted list

import information from DB

make a function that can pull venue data 

for every venue / like employees in BA



create click event, 
click on venue, event should see if type is in fact a venue
if it is a venue, then we venue id to the booking.venueId and relate it to the booking.bandID to find the band.name

window alert: have it state what bands are playing


*/