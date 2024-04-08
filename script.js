const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"]

function seeDinos(a, ...b){
    console.log(a)
    console.log(b)
}

seeDinos(...jPDinos)

const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
}

const seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler)
}

seeCharacters(jPCharacters)

const jurassicParkMovies = [
    {
    one: "Jurassic Park",
    two: "The Lost World: Jurassic Park",
    three: "Jurassic Park III"
    },
    {
    four: "Jurassic World",
    five: "Jurassic World: Fallen Kingdom",
    six: "Jurassic World: Dominion"
    }
]

function seeJPMovies({one,two,three},{four,five,six}){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}

seeJPMovies(...jurassicParkMovies)