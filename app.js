tabris.create('Page', {
  title: 'App',
  topLevel: true
}).append(
  tabris.create('TextView', {
    text: 'cordova-plugin-media'
  })
).open();


if (Media) {
  var media = new Media(tabris.app.getResourceLocation('demo.mp3'), 
    function() {
      console.log("playAudio():Audio Success");
    },
    function(err) {
      console.log("playAudio():Audio Error: " + err);
    }
  );

  media.play();
} else {
  console.log('Media plugin not included in build');
}
