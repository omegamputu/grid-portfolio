$(document).ready(function () {
    var $active = false;

    $('.work').click(function (e) {
        e.preventDefault();

        var $work = $(this);
        var $detail = $work.parent().parent().nextAll('.row-detail:first');
        var $work_detail = $('.work_detail', $work).clone();
        //$work.find('.work_detail');

        if($active) {
            var $el = $active;

            $el.slideUp(500, function () {
                $el.remove();
            })
        }

        $detail.append($work_detail);
        $work_detail.slideDown();
        $active = $work_detail.removeClass("d-none");
    });
}); 
