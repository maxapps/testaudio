tabris.create('Page', {
        title: 'App',
        topLevel: true
}).append(
        tabris.create('TextView', {
                text: 'cordova-plugin-nativeaudio'
        })
).open();

window.plugins.NativeAudio.preloadComplex('mysound',
        tabris.app.getResourceLocation('demo.mp3'),
        1, // volume
        1, // voices
        0, // delay
// window.plugins.NativeAudio.preloadSimple('mysound',
        tabris.app.getResourceLocation('demo.mp3'),
        function() {
                console.info('Preload success: ', arguments);
                window.plugins.NativeAudio.play('mysound', function(msg) {
                        console.info('Play success: ', arguments)
                },
                function(msg) {
                        console.warn('Play error: ', arguments);
                },
                function(msg) {
                        console.info('Play complete: ', arguments);
                });
        },
        function(msg) {
                console.warn('Preload error: ', arguments);
        }
);


/*
The old format of this exec call has been removed (depreciated since 2.1).
Change to: cordova.exec(null, null, "http://192.168.1.3:8080/demo", "mp3",[null,"NativeAudio","preloadComplex",["mysound","http://192.168.1.3:8080/demo.mp3",1,1,0]]);
*/