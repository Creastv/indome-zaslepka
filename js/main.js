
 new fullpage('#myContainer', {
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'contact'],
        // menu: '#menu',
        slidesNavigation: true,
        navigation: true,
        animateAnchor: false,
        loopBottom: true,
        // loopTop: true,
        // bigSectionsDestination: 'top',
        lazyLoading: true,
        // responsiveWidth: 1000,
        responsiveHeight: 500,
        afterResponsive: function(isResponsive){
            //   animateAnchor: false,

        }
        // licenseKey: 'YOUR_KEY_HERE',
        // // Custom Selector
        // sectionSelector: '.section',
        // slideSelector: '.slide',
    });
