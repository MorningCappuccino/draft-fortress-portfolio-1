function autogrow(textarea) {
  if (!textarea) {
    return;
  }

  var _this = {
    init: function () {
      textarea.addEventListener('input', _this.recalc);
      textarea.addEventListener('recalc', _this.recalc);
      _this.recalc();
    },

    recalc: function () {
      textarea.style.height = '0px';

      var computed = window.getComputedStyle(textarea);

      // Calculate the height
      var height =
        parseInt(computed.getPropertyValue('border-top-width'), 10) +
        parseInt(computed.getPropertyValue('padding-top'), 10) +
        textarea.scrollHeight +
        parseInt(computed.getPropertyValue('padding-bottom'), 10) +
        parseInt(computed.getPropertyValue('border-bottom-width'), 10);

      textarea.style.height = height + 'px';
    },
  };

  _this.init();

  return {
    recalc: _this.recalc,
  };
}

const textarea = document.documentElement.querySelector('.form__textarea');
autogrow(textarea);
