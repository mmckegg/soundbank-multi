soundbank-multi
===

Repeat template slot descriptor for every item in input array, replacing placeholder with current item.

Use as a value provider in [soundbank](https://github.com/mmckegg/soundbank).

## Install

```bash
$ npm install soundbank-multi
```

## Example

Create a chord slot:

```js
var Soundbank = require('soundbank')
var audioContext = new webkitAudioContext()

audioContext.providers = {
  multi: require('soundbank-multi')
}

audioContext.sources = {
  oscillator: require('soundbank-oscillator')
}

var soundbank = Soundbank(audioContext)
soundbank.connect(audioContext.destination)

soundbank.update({
  id: 'note0',
  offset: 0,
  sources: {
    values: [60, 65, 68],
    template: {
      { node: 'oscillator',
        shape: 'square',
        note: {$value: true} // value is injected here
      }
    }
  }
})
```