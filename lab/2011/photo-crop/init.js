define(function(require) {

  var $ = require('jquery:1.6.1');
  require('./imgareaselect')($);
  require('./css/imgareaselect-default.css');

  var bigimg = $('#bigimg');
  var preimg = $('#preimg');
  var freeimg = $('#freeimg');
  var imgpos = $('#imgpos');
  var imgw, imgh;

  $(window).load(initAreaSelect);
  bigimg.load(initAreaSelect);

  $('#chooseFile').bind('change', function() {
    var files = this['files'];

    if (files && files[0] &&
        typeof FileReader !== 'undefined') {

      var reader = new FileReader();

      reader.onload = function(ev) {
        bigimg.attr('src', ev.target.result);
        preimg.attr('src', ev.target.result);
        freeimg.attr('src', ev.target.result);
      };

      reader.readAsDataURL(files[0]);
    }
    else {
      bigimg.attr('src', this.value);
      preimg.attr('src', this.value);
      freeimg.attr('src', this.value);
    }

  });


  function preview(img, selection) {
    var scaleX = 48 / selection.width;
    var scaleY = 48 / selection.height;

    preimg.css({
          width: Math.round(scaleX * imgw) + 'px',
          height: Math.round(scaleY * imgh) + 'px',
          marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
          marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
        });

    imgpos.val(
        (imgw / freeimg.width()) + '_' +
        selection.x1 + '_' + selection.y1 + '_' +
        selection.x2 + '_' + selection.y2
    );
  }


  function initAreaSelect() {
    imgw = bigimg.width();
    imgh = bigimg.height();

    var vals = imgpos.val().split('_');

    var pos = (vals[3] != '0') ? {
      x1: parseInt(vals[1]),
      y1: parseInt(vals[2]),
      x2: parseInt(vals[3]),
      y2: parseInt(vals[4])
    } : {
      x1: imgw > imgh ? (imgw - imgh) / 2 + 3 : 3,
      x2: imgw > imgh ? (imgw + imgh) / 2 - 3 : imgw - 3,
      y1: imgw > imgh ? 3 : (imgh - imgw) / 2 + 3,
      y2: imgw > imgh ? imgh - 3 : (imgh + imgw) / 2 - 3
    };

    preview(null, $.extend(pos, {
          width: pos.x2 - pos.x1,
          height: pos.y2 - pos.y1
        }));

    bigimg.imgAreaSelect($.extend(pos, {
          aspectRatio : '1:1' ,
          onSelectChange : preview
        }));
  }

});
