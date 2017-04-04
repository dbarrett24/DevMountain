angular.module('movies').service('mainService', function(){
    this.test1 = "Service is working";

    this.movies = [
        {
            title: 'Hook',
            price: '300',
            movieId: 1
        },
        {
            title: 'Babys Day Out',
            price: '21',
            movieId: 2
        },
        {
            title: 'LOTR',
            price: '5000',
            movieId: 3
        },
        {
            title: 'Monty Python',
            price: '25',
            movieId: 4
        }
    ]
});
