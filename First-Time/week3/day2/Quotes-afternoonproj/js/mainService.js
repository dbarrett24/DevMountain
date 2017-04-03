angular.module("quotesApp").service("mainService", function(){
    var data = [
        {
            quote: "Quotes aren't fun",
            author: "No One Ever"
        },
        {
            quote: "Life isn't about getting and having, it's about giving and being.",
            author: "Kevin Kruse"
        },
        {
            quote: "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
            author: "Robert Frost"
        },
        {
            quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
            author: "Amelia Earhart"
        },
        {
            quote: "Life is what happens to you while you're busy making other plans.",
            author: "John Lennon"
        },
        {
            quote: "What even is a jQuery?",
            author: "Tyler S. McGinnis"
        },
        {
            quote: "This is my new quote",
            author: "Brack Carmony"
        }
    ];
//END of var data
    this.getQuotes = function(){
        return data;
    };

    this.addQuote = function(newQuote){
        if(newQuote.quote && newQuote.author){
            data.push(newQuote);
            return true;
        }
        return false;
    };

    this.removeQuote = function(quoteText){
        for(var i = 0; i < data.length; i++){
            if(data[i].quote.toLowerCase() === quoteText.toLowerCase()){
                data.splice(i--, 1);
            }
        }
    };

});