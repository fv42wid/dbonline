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
    //TODO figure out how to NOT sort when I click in the search field
    //http://tablesorter.com/docs/
    //look into http://tablesorter.com/docs/example-options-headers.html
    // and http://tablesorter.com/docs/example-meta-headers.html
    // for pagination http://tablesorter.com/docs/example-pager.html

    $('th').click(function() {
        //$('th').removeClass();
        var header = $(this);

        if(header.hasClass('headerSortDown')) {
            $('th').removeClass();
            $('i').remove();
            $(this).addClass('headerSortUp');
            $('<i class="icon-arrow-up"></i>').appendTo(header.find('div:first'));

        } else {
            $('th').removeClass();
            $('i').remove();
            $(this).addClass('headerSortDown');
            $('<i class="icon-arrow-down"></i>').appendTo(header.find('div:first'));
        }

    });

    //refactored search

    //global object to hold all filters
    var allFilters = new Object();

    $('.colSearch').keyup(function() {

        //attain search field and column to be searched
        var fieldNumber = $(this).attr('id').substr(6);
        var element = $(this);
        var columnID = '.cell' + fieldNumber;

        //save search params
        allFilters[columnID] = element;

        //reshows all trs that have been hidden
        //when search params have been removed
        $('tr').show();

        //loop through each search attribute
        //saved in allFilters
        $.each(allFilters, function(key, value) {

            var rowSelect = "#main_data tbody " + key;
            var $rows = $(rowSelect);
            //var $rows = $(rowSelect).filter(':visible');

            var searchText = $(value).val().replace(/ +/g, ' ');

            $rows.filter(function() {

                var text = $(this).text().replace(/\s+/g, ' ');
                return !~text.indexOf(searchText);
            }).parent().hide();

        });

    });

});
