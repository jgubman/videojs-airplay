# videojs-airplay
Videojs Plugin that adds an airplay button to the control bar if the browser supports the WebKitPlaybackTargetAvailabilityEvent (currently Safari 9.0)

## NOTES
Built for video.js 5.0 and above.

If you need a plugin that supports video.js 6.x, see
[@silvermine/videojs-airplay](https://www.npmjs.com/package/@silvermine/videojs-airplay).

## Usage

Include:
* `videojs-airplayButton.css`
* `videojs-airplayButton.js`

```js
  videojs('example-video', plugins: { airplayButton: {} });
```

## License

Licesned Apache 2. See LICENSE file.
