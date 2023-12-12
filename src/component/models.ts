export interface Card {
    id: number
    poster: string
    title : string
}


export interface MovieData {
    movies : Movie[]
}
export interface Movie {
    id:number
    title : string
    poster : string
    cinemas : Cinema[]
}
export interface Cinema {
    name : string
    location : string
    showtimes : string[]

}