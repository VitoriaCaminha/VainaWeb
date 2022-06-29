let comedy = [
  {
    title:
      'Borat: Cultural Learnings of America For Make Benefit Glorious Nation of Kazakhstan',
    director: 'Larry Charles',
    year: 2006,
  },
  {
    title: 'Dumb & Dumber',
    director: 'Peter Farrelly and Bobby Farrelly',
    year: 1994,
  },
  {
    title: 'Austin Powers: International Man of Mystery',
    director: 'Jay Roach',
    year: 1997,
  },
]

let action = [
  {
    title: 'Terminator 2: Judgement Day',
    director: 'James Cameron',
    year: 1991,
  },
  {
    title: 'The Matrix',
    director: 'Lana Wachowski and Lilly Wachowski',
    year: 1999,
  },
  {
    title: 'RoboCop',
    director: 'Paul Verhoeven',
    year: 1987,
  },
]

let fantasy = [
  {
    title: 'King Kong',
    director: 'Merian C. Cooper and Ernest B. Schoedsack',
    year: 1933,
  },
  {
    title: 'My Neighbour Totoro',
    director: 'Hayao Miyazaki',
    year: 1988,
  },
  {
    title: 'The Wizard of Oz',
    director: 'Victor Fleming',
    year: 1939,
  },
]

if (comedy.find((element) => element.title == 'White Chicks')) {
  console.log('MY FAVORITE MOVIE IS THIS')
} else {
  console.log('NOT EVEN 5 STARS')
}
