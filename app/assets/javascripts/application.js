// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

    $('#main_data').tablesorter();

    //Click Columns to Sort

    $('th').click(function() {
        //$('th').removeClass();
        var header = $(this);

        if(header.hasClass('headerSortDown')) {
            //$(this).removeClass('headerSortDown');
            $('th').removeClass();
            $('i').remove();
            $(this).addClass('headerSortUp');
            $('<i class="icon-arrow-up"></i>').appendTo(header.find('div:first'));

        } else {
            //$(this).removeClass('headerSortUp');
            $('th').removeClass();
            $('i').remove();
            $(this).addClass('headerSortDown');
            $('<i class="icon-arrow-down"></i>').appendTo(header.find('div:first'));
        }

    });

    var $rows = $('#main_data tbody .cell1');
    //Filter rows based on search input fields
    $('#search1').keyup(function() {
        var searchText = $(this).val().replace(/ +/g, ' ');
        //console.log(searchText);
        //alert($(this).val());
        //$('td:contains(searchText)').parent().toggle();
        //console.log(searchText);
        $('tr').show();
        $rows.filter(function() {
            //see if i can delete the .show() above now that the $('tr').show() is above
            
            var text = $(this).text().replace(/\s+/g, ' ');
            //alert(text);
            return !~text.indexOf(searchText);

        }).parent().hide();

    });

});
