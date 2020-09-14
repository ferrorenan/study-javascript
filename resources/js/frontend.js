function getThemeVariables() {

  return {
    breakpoints: {
      xs: 0,
      sm: 425, // Read 'from 425px' (min-width)
      md: 1024, // Read 'from 1024px' (min-width)
      lg: 1366, // Read 'from 1366px' (min-width)
      xl: 1680, // Read 'from 1680px' (min-width)
    },
    collapseTransitionTime: 350, // In milliseconds
    colors: {
      primary: '#',
      secondary: '#',
      success: '#',
      info: '#',
      warning: '#',
      danger: '#',
      light: '#',
      dark: '#',
    },
  };
}

function setupServiceWorker() {

  if (!('serviceWorker' in navigator)) {

    return;
  }

  window.addEventListener('load', function () {

    if (navigator.onLine) {

      return;
    }

    $('<style type=\'text/css\'>' +
        ' .is-online { display: none } ' +
        ' .is-offline { display: block } ' +
        '</style>')
        .appendTo('head');
  });

  if (navigator.serviceWorker.controller) {

    console.log(
        '[PWA Builder] active service worker found, no need to register');
    return;
  }

  // Register the ServiceWorker
  navigator.serviceWorker
      .register('/sw.js')
      .then(function (reg) {
        console.log('Service worker has been registered for scope: ' + reg.scope);
      })
      .catch(function (err) {
        console.log('ServiceWorker registration failed: ', err);
      });
}

function preventInvalidFormSubmit() {

  var forms = document.getElementsByClassName('needs-validation');
  var validation = Array.prototype.filter.call(forms, function (form) {

    form.addEventListener('submit', function (event) {

      if (form.checkValidity() === false) {

        event.preventDefault();
        event.stopPropagation();

        guideUserToTheFirstError();
        form.classList.add('was-validated');
        return;
      }

      // Execute the function only when form was submitted and is valid
      disableButtonOnSubmit();
    }, false);
  });

  $('.is-invalid')
      .each(function () {
        $(this)[0].setCustomValidity('needs validate');
      })
      .on('focusout', function () {
        $(this)
            .removeClass('is-invalid');
        $(this)[0].setCustomValidity('');
      });
}

function disableButtonOnSubmit() {

  const buttons = document.querySelectorAll('form button');

  buttons.forEach((button) => {

    button.setAttribute('disabled', 'disabled');

    const buttonText = button.innerText;
    button.innerHTML = `<span class="spinner-container">
                            <span class="spinner-border spinner-border-sm text-light"
                                  role="status"></span>
                            ${ buttonText }
                        </span>`;

    const spinner = button.querySelector('.spinner-container');
    spinner.classList.add('d-inline-block');
  });
}

function verifyUserAgent() {

  var OSNome = '';
  if (window.navigator.userAgent.indexOf('Windows NT 10.0') !== -1) {
    OSNome = 'Windows 10';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) {
    OSNome = 'Windows 8';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) {
    OSNome = 'Windows 7';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 6.0') !== -1) {
    OSNome = 'Windows Vista';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 5.1') !== -1) {
    OSNome = 'Windows XP';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 5.0') !== -1) {
    OSNome = 'Windows 2000';
  }
  if (window.navigator.userAgent.indexOf('Mac') !== -1) {
    OSNome = 'Mac/iOS';
  }
  if (window.navigator.userAgent.indexOf('X11') !== -1) {
    OSNome = 'UNIX';
  }
  if (window.navigator.userAgent.indexOf('Linux') !== -1) {
    OSNome = 'Linux';
  }

  if (OSNome !== 'Mac/iOS') {
    let body = document.querySelector('body');
    body.classList.add('style-scroll');
  }
}

function setupSmoothScroll() {

  // Smooth page scroll
  $('a.js-scroll-top')
      .on('click', function (event) {

        // e.g. <a href="#text">
        // 'this' is the element -> a
        // 'hash' is the text (element) after # symbol from href -> #text

        // Prevent default anchor click behavior
        event.preventDefault();

        var additionalOffset = this.getAttribute('data-scroll-offset') || 0;

        $('html, body')
            .animate({
              scrollTop: $(this.hash)
                  .offset().top + Number(additionalOffset),
            }, 1000);
      });
}

function onChangeSelectLink() {

  // Switch page action when links are in a select
  // e.g. to do in html
  // <select class="form-control js-onchange">
  //   <option value=""
  //     selected>Link
  //   </option>
  //   <option class="" value="/html/index">Home</option>
  //   <option class="" value="/html/faq">FAQ</option>
  //</select>

  $('.js-onchange')
      .change(function () {

        window.location = $(this)
            .val();
      });
}

function setupSelect2() {

  $('select.js-select2')
      .select2({
        theme: 'bootstrap',
        language: 'pt-BR',
      });
}

function setupInputMasks() {

  function inputHandler(masks, max, event) {
    var c = event.target;
    var v = c.value.replace(/\D/g, '');
    var m = c.value.length > max
        ? 1
        : 0;
    VMasker(c)
        .unMask();
    VMasker(c)
        .maskPattern(masks[m]);
    c.value = VMasker.toPattern(v, masks[m]);
  }

  if (document.querySelectorAll('.mask-phone').length > 0) {
    var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
    var tels = document.querySelectorAll('.mask-phone');
    tels.forEach((tel) => {
      VMasker(tel)
          .maskPattern(telMask[0]);
      if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf(
          'Chrome') === -1) {
        /* me julgue safari desgraçado */
      } else {
        tel.addEventListener(
            'input',
            inputHandler.bind(undefined, telMask, 14),
            false,
        );
      }
    });
  }

  if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf(
      'Chrome') === -1) {
    /* me julgue safari desgraçado */
    /* o safari não deixa trocar a mascara do campo */
  } else {
    if (document.querySelectorAll('.mask-cpfcnpj').length > 0) {
      var docMask = ['999.999.999-999', '99.999.999/9999-99'];
      var docs = document.querySelectorAll('.mask-cpfcnpj');
      docs.forEach((doc) => {
        VMasker(doc)
            .maskPattern(docMask[0]);

        doc.addEventListener(
            'input',
            inputHandler.bind(undefined, docMask, 14),
            false,
        );
      });
    }
  }
  if (document.querySelectorAll('.mask-date').length > 0) {
    VMasker(document.querySelectorAll('.mask-date'))
        .maskPattern('99/99/9999');
  }

  if (document.querySelectorAll('.mask-zipcode').length > 0) {
    VMasker(document.querySelectorAll('.mask-zipcode'))
        .maskPattern('99999-999');
  }

  if (document.querySelectorAll('.mask-cpf').length > 0) {
    VMasker(document.querySelectorAll('.mask-cpf'))
        .maskPattern('999.999.999-99');
  }

  if (document.querySelectorAll('.mask-cnpj').length > 0) {
    VMasker(document.querySelectorAll('.mask-cnpj'))
        .maskPattern('99.999.999/9999-99');
  }

  if (document.querySelectorAll('.mask-hour').length > 0) {
    VMasker(document.querySelectorAll('.mask-hour'))
        .maskPattern('99:99');
  }

  if (document.querySelectorAll('.mask-number').length > 0) {
    VMasker(document.querySelectorAll('.mask-number'))
        .maskNumber();
  }

  if (document.querySelectorAll('.mask-money').length > 0) {
    VMasker(document.querySelectorAll('.mask-money'))
        .maskMoney({
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
        });
  }

  const cpfCnpjValidators = new CpfCnpjValidators();
  const cpfInput = document.querySelector(cpfCnpjValidators.selectors.cpf);
  const cnpjInput = document.querySelector(cpfCnpjValidators.selectors.cnpj);

  if (cpfInput) {

    cpfInput.addEventListener('blur', function (event) {

      cpfCnpjValidators.checkCPF(event.target);
    });
  }

  if (cnpjInput) {

    cnpjInput.addEventListener('blur', function (event) {

      cpfCnpjValidators.checkCNPJ(event.target);
    });
  }
}

function setupCepSearch() {

  $('#zipcode')
      .on('blur', function () {

        var $this = $(this);
        var cep = $this.val()
            .replace('-', '');

        if (cep.length === 8) {
          $.getJSON('https://api.mixd.com.br/cep/' + cep, {},
              function (result) {

                if (!result) {

                  console.log(result.message || 'Houve um erro desconhecido');
                  return;
                }

                var stateInput = $('#state');
                var cityInput = $('#city');

                $('#neighborhood')
                    .val(result.bairro);
                $('#address')
                    .val(result.logradouro);

                // se for input
                if (stateInput.is('input')) {

                  stateInput.val(result.uf_nome);
                }

                if (cityInput.is('input')) {

                  cityInput.val(result.cidade);
                }
              },
          );
        }
      });
}

function setupPopover() {

  $('[data-toggle="popover"]')
      .popover();
}

function setupTooltip() {

  $('[data-toggle="tooltip"]')
      .tooltip();
}

function setupAnchorReloadPrevention() {

  $('a[href="#"]')
      .click(function (e) {

        e.preventDefault();
      });
}

function setupInfiniteScroll() {

  $(window)
      .cleverInfiniteScroll({
        contentsWrapperSelector: '.infinite-scroll',
        contentSelector: '.infinite-scroll-content',
        nextSelector: 'a[rel~="next"]',
        loadImage: '/images/loading.gif',
      });
}

function setupShareWindow() {

  $('.share')
      .click(function (e) {
        e.preventDefault();
        window.open(
            $(this)
                .attr('href'),
            'shareWindow', 'height=450, width=550, top=' + ($(window)
            .height() / 2 - 275) + ', left=' + ($(window)
            .width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0',
        );
        return false;
      });
}

function insertCopyrightYear() {

  const copyrightContainerSelector = '.js-copyright-container';

  const hasCopyrightSelector = $('footer')
      .find(copyrightContainerSelector).length;

  if (!hasCopyrightSelector) {

    console.error(`${ copyrightContainerSelector } class is required to insert copyright text`);
    return;
  }

  const $yearContainer = $(copyrightContainerSelector);

  $yearContainer.text(`Todos os direitos reservados © ${ new Date().getFullYear() }`);
}

$(function () {

  setupServiceWorker();

  preventInvalidFormSubmit();

  verifyUserAgent();

  // setupSmoothScroll();

  // onChangeSelectLink();

  // setupSelect2();

  // setupInputMasks();

  // setupCepSearch();

  // setupPopover();

  // setupTooltip();

  // setupAnchorReloadPrevention();

  // setupShareWindow();

  // insertCopyrightYear();

  initializeFormHelpers();
});

window.addEventListener('load', function () {

  /**
   * We need the starting function here because vh/vw are calculated after all
   * resources loaded, which is different from DOM ready event
   * */
  // setupStickyHeader();

  // setupInfiniteScroll();
});
