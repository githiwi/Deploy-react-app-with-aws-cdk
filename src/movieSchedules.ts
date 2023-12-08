interface MovieData {
    movies : Movie[]
}
interface Movie {
    title : string
    poster : string
    cinemas : Cinema[]
}
interface Cinema {
    name : string
    location : string
    showtimes : string[]

}
const MovieSchedules : MovieData = {

    "movies": [
    {
        "title": "The Shawshank Redemption",
        "poster": "https://example.com/posters/shawshank_redemption.jpg",
        "cinemas": [
            {
                "name": "City Cinemas",
                "location": "123 Main St, Cityville",
                "showtimes": ["2023-12-10 15:00", "2023-12-10 18:00", "2023-12-10 21:00"]
            },
            {
                "name": "Mega Movies",
                "location": "456 Oak St, Townsville",
                "showtimes": ["2023-12-10 14:30", "2023-12-10 17:30", "2023-12-10 20:30"]
            },
            {
                "name": "Starplex Cinemas",
                "location": "789 Pine St, Villagetown",
                "showtimes": ["2023-12-10 13:45", "2023-12-10 16:45", "2023-12-10 19:45"]
            }
        ]
    },
    {
        "title": "The Godfather",
        "poster": "https://example.com/posters/the_godfather.jpg",
        "cinemas": [
            {
                "name": "City Cinemas",
                "location": "123 Main St, Cityville",
                "showtimes": ["2023-12-10 14:00", "2023-12-10 17:00", "2023-12-10 20:00"]
            },
            {
                "name": "Mega Movies",
                "location": "456 Oak St, Townsville",
                "showtimes": ["2023-12-10 15:30", "2023-12-10 18:30", "2023-12-10 21:30"]
            }
        ]
    },
    {
        "title": "Pulp Fiction",
        "poster": "https://example.com/posters/pulp_fiction.jpg",
        "cinemas": [
            {
                "name": "Starplex Cinemas",
                "location": "789 Pine St, Villagetown",
                "showtimes": ["2023-12-10 12:30", "2023-12-10 15:30", "2023-12-10 18:30"]
            },
            {
                "name": "Mega Movies",
                "location": "456 Oak St, Townsville",
                "showtimes": ["2023-12-10 13:15", "2023-12-10 16:15", "2023-12-10 19:15"]
            }
        ]
    },
    {
        "title": "The Dark Knight",
        "poster": "https://example.com/posters/the_dark_knight.jpg",
        "cinemas": [
            {
                "name": "City Cinemas",
                "location": "123 Main St, Cityville",
                "showtimes": ["2023-12-10 13:45", "2023-12-10 16:45", "2023-12-10 19:45"]
            },
            {
                "name": "Starplex Cinemas",
                "location": "789 Pine St, Villagetown",
                "showtimes": ["2023-12-10 14:30", "2023-12-10 17:30", "2023-12-10 20:30"]
            }
        ]
    },
    {
        "title": "Inception",
        "poster": "https://example.com/posters/inception.jpg",
        "cinemas": [
            {
                "name": "Mega Movies",
                "location": "456 Oak St, Townsville",
                "showtimes": ["2023-12-10 12:30", "2023-12-10 15:30", "2023-12-10 18:30"]
            },
            {
                "name": "Starplex Cinemas",
                "location": "789 Pine St, Villagetown",
                "showtimes": ["2023-12-10 13:15", "2023-12-10 16:15", "2023-12-10 19:15"]
            }
        ]
    }
]
}

export default MovieSchedules;