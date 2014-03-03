var multi = require('./index')
var test = require('tape')

test(function(t){
  var audioContext = null // this provider doesn't use the context

  var descriptor = {
    values: [1,'2',{item: 3}],
    template: {
      test: 1,
      stuff: {$value: true}
    }
  }

  var expected = [
    { test: 1, stuff: 1},
    { test: 1, stuff: '2'},
    { test: 1, stuff: {item: 3}},
  ]

  t.deepEqual(multi(audioContext, descriptor), expected)
  t.end()
  
})