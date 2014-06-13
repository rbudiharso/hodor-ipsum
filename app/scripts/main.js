'use strict';

(function (self) {
    var client = new self.ZeroClipboard($('.copy'));
    client.on( 'aftercopy', function () {
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
            var randomNumber = sample([5, 7, 9]);
            hodors.push(hodorSentence(randomNumber));
        }
        return hodors.join(' ');
    }

    function hodorIpsum (numHodor) {
        var hodors = [];
        for (var i = 0; i < numHodor; i++) {
            var randomNumber = sample([4, 5, 6]);
            hodors.push(hodorParagraph(randomNumber));
        }
        return hodors.join('\n\n');
    }

    $('select').on('change', function () {
        var _hodorIpsum = hodorIpsum(this.value || 3);
        $('textarea').val(_hodorIpsum);
    });

    $('textarea').val(hodorParagraph($('select').val()));
})(window);
