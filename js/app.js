; (function(){

    function addComment () {
        let textComment = $('#form-input').val();
        let comments = $('.test-comments-wrapper');
        let comment = $('<div class="test-comment"' +
                        '<div class="test-comment-wrapper">' +
                        '<span class="test-comment__title">Лилия Семёнова</span>' +
                        '<span class="test-comment__date">14 октября 2011</span>' +
                        '</div>' + 
                        '<div class="test-comment__text-wrapper">' +
                        '<p class="test-comment__text">' + textComment + '</p>' +
                        '</div>' + 
                        '</div>');
        if (textComment.length > 0) {
            comments.append(comment);
        }
    }

    $('.test-form__button').on('click', function(e) {
        e.preventDefault();
        addComment ();
    });


    $('#form-input').on('keydown', function(e) {
        if(e.ctrlKey && (e.which == 13)) {
            e.preventDefault();
            addComment ();
            
        }
    } )
})()