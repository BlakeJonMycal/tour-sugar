const database = {
    bands: [{
        id: 1,
        name: "The Electric Shredders",
        members: 4,
        genre: "Rock",
        yearStarted: 2010
    },
    {
        id: 2,
        name: "Funky Fusion Collective",
        members: 6,
        genre: "Funk",
        yearStarted: 2008
    },
    {
        id: 3,
        name: "Jazz Journeymen",
        members: 5,
        genre: "Jazz",
        yearStarted: 2012
    },
    {
        id: 4,
        name: "Metal Mavericks",
        members: 3,
        genre: "Metal",
        yearStarted: 2015
    },
    {
        id: 5,
        name: "Acoustic Serenity",
        members: 2,
        genre: "Acoustic",
        yearStarted: 2005
    },
    {
        id: 6,
        name: "Hip Hop Heralds",
        members: 7,
        genre: "Hip Hop",
        yearStarted: 2018
    },
    {
        id: 7,
        name: "Indie Innovators",
        members: 4,
        genre: "Indie",
        yearStarted: 2007
    },
    {
        id: 8,
        name: "Reggae Rebels",
        members: 3,
        genre: "Reggae",
        yearStarted: 2014
    },
    {
        id: 9,
        name: "Country Cavaliers",
        members: 5,
        genre: "Country",
        yearStarted: 2009
    }],
    venues: [{

        id: 1,
        name: "The Grand Hall",
        address: "123 Main Street, Cityville",
        squareFootage: 5000,
        maxCapacity: 500
    },
    {
        id: 2,
        name: "The Starlight Pavilion",
        address: "456 Elm Avenue, Townsville",
        squareFootage: 7000,
        maxCapacity: 800
    },
    {
        id: 3,
        name: "The Crystal Ballroom",
        address: "789 Oak Street, Villagetown",
        squareFootage: 4000,
        maxCapacity: 400
    },
    {
        id: 4,
        name: "The Garden Terrace",
        address: "101 Pine Road, Countryside",
        squareFootage: 6000,
        maxCapacity: 600
    },
    {
        id: 5,
        name: "The Riverfront Lounge",
        address: "222 Maple Lane, Riverside",
        squareFootage: 3000,
        maxCapacity: 300
    }],
    bookings: [{
        id: 1,
        bandId: 1,
        venueId: 1,
        date: "10/15/2023"
    },
    {
        id: 2,
        bandId: 2,
        venueId: 2,
        date: "11/20/2023"
    },
    {
        id: 3,
        bandId: 3,
        venueId: 3,
        date: "12/25/2023"
    },
    {
        id: 4,
        bandId: 4,
        venueId: 4,
        date: "1/5/2024"
    },
    {
        id: 5,
        bandId: 5,
        venueId: 5,
        date: "2/10/2024"
    },
    {
        id: 6,
        bandId: 6,
        venueId: 1,
        date: "3/15/2024"
    },
    {
        id: 7,
        bandId: 7,
        venueId: 2,
        date: "4/20/2024"
    },
    {
        id: 8,
        bandId: 8,
        venueId: 3,
        date: "5/25/2024"
    },
    {
        id: 9,
        bandId: 9,
        venueId: 4,
        date: "6/30/2024"
    }]
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}




