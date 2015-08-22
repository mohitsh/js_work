

var quotes = ['We accept the love we think we deserve.',
              'It is better to be hated for what you are than to be loved for what you are not.',
            'Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.',
              'All that is gold does not glitter; Not all those who wander are lost, The old that is strong does not wither, Deep roots are not reached by the frost.',
              'Don\'t cry because it\'s over, smile because it happened.',
              'Be yourself; everyone else is already taken.',
              'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
            'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe',
              'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams',
              'You only live once, but if you do it right, once is enough'];

$(document).ready(function(){
  $('#button').click(function(){
    var num = Math.floor(Math.random()*(9-0+1))+1;
    $('#area').text(quotes[num])
  })
})
