import videojs from 'video.js';
const Component = videojs.getComponent('Component');
const Button = videojs.getComponent('Button');

class AirplayToggle extends Button {

  constructor(player, options) {
    super(player, options);
  }

  buildCSSClass() {
    return `vjs-airplay-control ${super.buildCSSClass()}`;
  }

  handleClick() {
    this.player().el().getElementsByTagName('video')[0].webkitShowPlaybackTargetPicker();
    this.player().trigger('airplayStart');
  }

}

AirplayToggle.prototype.controlText_ = 'Airplay';
videojs.registerComponent('AirplayToggle', AirplayToggle);

const AirplayButton = function(options) {
  let player = this;

  if (window.WebKitPlaybackTargetAvailabilityEvent) {
    let videoEl = player.el().getElementsByTagName('video')[0];

    videoEl.addEventListener('webkitplaybacktargetavailabilitychanged', function(event) {
      switch (event.availability) {
        case "available":

        player.on('loadeddata', function() {
          if (!player.controlBar.childNameIndex_.hasOwnProperty('AirplayToggle')) {
            var AirplayToggle = this.controlBar.addChild('AirplayToggle', options);
            player.controlBar.el().insertBefore(AirplayToggle.el(), player.controlBar.fullscreenToggle.el());
          }
        });
        break;

        case "not-available":
        break;
      }
    });

  };
};

videojs.plugin('airplayButton', AirplayButton);
