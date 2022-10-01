import jQuery from 'jquery';
window.$ = jQuery;

// Main index
$('#cover_index', function(){
    var html = $('#cover_index')
    html.fadeIn('slow')
});

// Constrast button
$('body').on('click', '#contrast', function(){
    var list = $('#contrast_list')
    list.toggleClass('hidden')
})

// Process button
$('body').on('click', '#process', function(){
    $('#pre_loading').removeClass('hidden');
    var timeout = setTimeout(() => {
        $('#pre_loading').addClass('hidden');
        // Show detail
        var detail = $('#detail');

        detail.removeClass('hidden')
    },1500);

});

// Dscovr info
$('body').on('click', '#dscovr_info', function(){
    var textBox = $('#dscovr_info_text');
    textBox.toggleClass('hidden');
});

// Wind info
$('body').on('click', '#wind_info', function(){
    var textBox = $('#wind_info_text');
    textBox.toggleClass('hidden');
});

// Close btn class
$('body').on('click', '.close_btn', function(){
    var parent = $(this).parent();
    parent.addClass('hidden');
})
