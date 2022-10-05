
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

    });

   $(document).ready(function () {
  $("#form").bootstrapValidator({
    container: "popover",
    message: "Pole wymagane!",
    //live: 'submitted',
    // feedbackIcons: {
    //   valid: "glyphicon glyphicon-ok",
    //   invalid: "glyphicon glyphicon-remove",
    //   validating: "glyphicon glyphicon-refresh"
    // },
    // err: {
    //   container: "tooltip"
    // },
    fields: {
      firstname: {
        message: "Pole wymagane!",
        validators: {
          notEmpty: {
            message: "Pole wymagane!"
          }
        }
      },
      usluga: {
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
