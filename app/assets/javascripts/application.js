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


    //Filter rows based on search input fields
    $('#search1').keyup(function() {

        var $rows1 = $('#main_data tbody .cell1');
        var searchText = $(this).val().replace(/ +/g, ' ');
        $('tr').show();

        $rows1.filter(function() {

            var text = $(this).text().replace(/\s+/g, ' ');
            return !~text.indexOf(searchText);

        }).parent().hide();

    });


    //Filter rows based on search input fields
    $('#search2').keyup(function() {

        var $rows2 = $('#main_data tbody .cell2');
        var searchText = $(this).val().replace(/ +/g, ' ');
        $('tr').show();

        $rows2.filter(function() {

            var text = $(this).text().replace(/\s+/g, ' ');
            return !~text.indexOf(searchText);

        }).parent().hide();

    });


    //Filter rows based on search input fields
    $('#search3').keyup(function() {

        var $rows3 = $('#main_data tbody .cell3');
        var searchText = $(this).val().replace(/ +/g, ' ');
        $('tr').show();

        $rows3.filter(function() {

            var text = $(this).text().replace(/\s+/g, ' ');
            return !~text.indexOf(searchText);

        }).parent().hide();

    });

});
