
 new fullpage('#myContainer', {
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'contact'],
        // menu: '#menu',
        slidesNavigation: true,
        navigation: true,
        animateAnchor: false,
        // loopBottom: true,
        // loopTop: true,
        // bigSectionsDestination: 'top',
        lazyLoading: true,
        // responsiveWidth: 1000,
        responsiveHeight: 500,
 onSlideLeave: function (anchorLink, index, slideIndex, direction) {
  console.log(slideIndex, direction, anchorLink, index)
            if (slideIndex === 1) {
               alert('test')
            }
        }

    });

   $(document).ready(function () {
  $("#form").bootstrapValidator({
    container: "popover",
    message: "Pole wymagane!",
    fields: {
      firstname: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          }
        }
      },
      zgoda: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          }
        }
      },

      telefon: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          },
          digits: {
            // message: "Nieprawidłowy nr telefonu"
          },
          stringLength: {
            min: 9,
            max: 9
            // message: "Wprowadź 9 cyfrowy nr telefonu"
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          },
          emailAddress: {
            message: "Nieprawidłowy adres e-mail"
          }
        }
      }
    }
  });
});


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        alert("you're at the bottom of the page");
    }
};