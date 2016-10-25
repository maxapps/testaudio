tabris.create('Page', {
        title: 'App',
        topLevel: true
}).append(
        tabris.create('TextView', {
                text: 'cordova-plugin-nativeaudio'
        })
).open();

window.plugins.NativeAudio.preloadComplex('mysound',
        'demo.mp3',
        1, // volume
        1, // voices
        0, // delay
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