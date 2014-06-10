'use strict';

var client = new ZeroClipboard($('.copy'));
client.on( 'aftercopy', function( event ) {
    $('body').append('<div class="alert alert-success fade in">Hodor copied to clipboard</div>');
    $('.alert').show();
    window.setTimeout(function () {
        $('.alert').alert('close');
    }, 1500);
});

function sample(hodorArray) {
    var hodorIndex = Math.floor(Math.random() * hodorArray.length);
    return hodorArray.splice(hodorIndex, 1)[0];
}

function hodorWord () {
    return 'hodor';
}

function hodorSentence (numHodor) {
    var hodors = [];
    for (var i = 0; i < numHodor; i++) {
        hodors.push(hodorWord());
    }
    hodors[0] = hodors[0][0].toUpperCase() + hodors[0].slice(1);
    return hodors.join('  ') + '.';
}

function hodorParagraph (numHodor) {
    var hodors = [];
    for (var i = 0; i < numHodor; i++) {
        var indexes = [10, 15, 20];
        var randomNumber = sample(indexes);
        hodors.push(hodorSentence(randomNumber));
    }
    return hodors.join(' ');
}

$('select').on('change', function () {
    var hodors = [];
    var numHodor = this.value || 3;
    var randomNumber = sample([5, 8, 10]);

    for (var i = 0; i < numHodor; i++) {
        hodors.push(hodorParagraph(randomNumber));
    }
    hodors = hodors.join('\n\n');
    $('textarea').val(hodors);
});

$('textarea').val(hodorParagraph($('select').val()));
