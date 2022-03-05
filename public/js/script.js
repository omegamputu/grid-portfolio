$(document).ready(function () {

    const filter_btns = document.querySelectorAll(".filter-btn");

    filter_btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filter_btns.forEach((button) => button.classList.remove("active"));
            btn.classList.add("active");
        });
    });
    
    var $active = false;

    window.onhashchange = function () {
        var $work = $(window.location.hash);

        if($work.length < 1 || $work.hasClass('active')) {
            return true
        }

        var $detail = $work.parent().nextAll('.row-detail:first');
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

        // Traitement
        $('.work').removeClass('active');
        $work.addClass('active');

        if($active) {
            hideActive();
        }

        showElement(); 

    }

    $('.work').click(function (e) {
        e.preventDefault();

        window.location.hash = $(this).attr('id');
    });

    if (window.location.hash) {
        var $target = $(window.location.hash);

        if ($target.length > 0) {
            $target.trigger('click');
            scrollTo($target);
        }
    }
}); 

var scrollTo = function(cible){
    $('html, body').animate({scrollTop: cible.offset().top}, 750);
}

