$(document).ready(function () {
    var $active = false;

    $('.work').click(function (e) {
        e.preventDefault();

        var $work = $(this);
        var $detail = $work.parent().parent().nextAll('.row-detail:first');
        var $work_detail = $('.work_detail', $work).clone();
        //$work.find('.work_detail');

        // Affichage de la réalisation avec un effet de slideDown

        var showElement = function () {
            $detail.append($work_detail.slideDown());
            $active = $work_detail.removeClass("d-none");
        }

        // Cette fonction cache l'élément active

        var hideActive = function () {
            var $el = $active;

            $el.slideUp(500, function () {
                $el.remove();
            })
        }

        if($active) {
            hideActive();
        }

        showElement();
    });
}); 
