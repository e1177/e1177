$(document).ready(function(){ 


$(".checked").prop("checked", true);


$(".r1disabled").prop("disabled", true);
$(".r2disabled").prop("disabled", true);

$( ".input-cellno" ).keyup(function(e) {
  	if (validatePhone(this,e)) {

			$(".r1disabled").prop("disabled", false);
			$(".r1disabled").prop("checked", true);
			$(".buttonhide").css("display","inline-block");

	}
	else
	{

			$(".r1disabled").prop("checked", false);
			$(".r1disabled").prop("disabled", true);


	}

});


function validatePhone(phone,e) {
        var phoneno = phone.value;

		var phoneNum = phoneno.replace(/\D/g, "");

		phoneValue = phoneNum;
		
		if (phoneValue > 4) {

			phoneValue = [phoneValue.slice(0, 3), '-', phoneValue.slice(3)].join('');

		}

		if (e.keyCode != 46 && e.keyCode != 8) {
			$( ".input-cellno" ).val(phoneValue);
		}
		
	
		if(phoneNum.length > 9 && phoneNum.length < 11) {  return true;  }



 };




$(".remindercheckbox").attr('name', function (index) {
    return 'rcheck' + index;
});

$(".remindercheckbox").attr('id', function (index) {
    return 'rcheck' + index;
});


$(".reminderlabel").attr('for', function (index) {
    return 'rcheck' + index;
});


$(".buttonhide").attr('id', function (index) {
    return 'bhide' + (index + 1);
});


$(".buttonhide").css("display","none");


$( ".buttonhide" ).click(function() {

	

	 parentSection = $(this).closest(".reminderoptions");

	 $(".buttonhide").css("display","none");	
     parentSection.after(htmlSaver);


	phoneno = $(".input-cellno").val();
	newtext = 'Mobiltelefon (' + phoneno + ')';




	if (phoneno.length) {
		
		
	
		if (phoneno.length > 0) {

			text2change = parentSection.find(".reminderlabelphone");
			text2change.html(newtext);
				$(".input-cellno").css("display","none");

		}
	}




	 parentSection.css("display","none");


		setTimeout(function()
		{
			$(".loadergif").remove();

		}, 1500);


		setTimeout(function()
		{
			parentSection.css("display","block");

		}, 1500);



   
});


$(".remindercheckbox").on('change',function(){

	parentSection = $(this).closest(".reminderoptions");
	section2expand = parentSection.find( ".buttonhide" );

	var id = section2expand.attr('id').replace(/bhide/, '');

    $("#bhide" + id).css("display","inline-block");

});



// count characters in text field

$("#btn-reason").prop('disabled', true);
$("#btn-reason").addClass('btndisabled');
	
	
$("#btn-reason2").prop('disabled', true);
$("#btn-reason2").addClass('btndisabled');

$('.btndisabled').css("cursor","default");


$( ".btndisabled" ).click(function( event ) {
	event.preventDefault();
    event.stopPropagation();
});


function countChar(val) {
        var len = val.value.length;
        if (len > 255) {
          val.value = val.value.substring(0, 255);
        } else {
          $('#charNum').text((255 - len) + " tecken kvar");
        }
		
		if (len > 0) {

			$("#btn-reason").prop('disabled', false);
			$("#btn-reason").removeClass('btndisabled');
		        $("#btn-reason").addClass('box-nextopen');
			
			$("#btn-reason2").prop('disabled', false);
			$("#btn-reason2").removeClass('btndisabled');
			$("#btn-reason2").removeClass('box-nextopen');
			$("#btn-reason2").addClass('button');
			

		}

		else {


			$("#btn-reason").prop('disabled', true);
			$("#btn-reason").addClass('btndisabled');
			$("#btn-reason2").prop('disabled', true);
			$("#btn-reason2").removeClass('button');
			$("#btn-reason2").addClass('box-nextopen');
			$("#btn-reason2").addClass('btndisabled');

			
			$('#charNum').text("obligatoriskt");

		}


      };

$( ".textreason" ).keyup(function() {
  countChar(this);

	var id = $(this).closest(".boxtimebook").attr('id').replace(/tbox/, '');
	hideFollowing("#tbox" + id);

});






// generate dates for the datepicker

moment.locale('sv');

moment.locale('sv', {
    months : [
        "januari", "februari", "mars", "april", "maj", "juni", "juli",
        "augusti", "september", "oktober", "november", "december"
    ]
});

moment.locale('sv', {
    monthsShort : [
        "jan", "feb", "mar", "apr", "maj", "jun",
        "jul", "aug", "sep", "okt", "nov", "dec"
    ]
});

moment.locale('sv', {
    weekdays : [
        "söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"
    ]
});

moment.locale('sv', {
    weekdaysShort : ["sön", "mån", "tis", "ons", "tor", "fre", "lör"]
});

moment.locale('sv', {
    weekdaysMin : ["sö;", "må;", "ti", "on", "to", "fr", "lö;"]
});


var dateMenu;
var dateMenu2;
var dateFirst = moment();
var dateInit = moment(dateFirst);
dateFirst.add(3,"day");
	if (dateFirst.day() == 6) { dateFirst.add(2,"day"); }
	if (dateFirst.day() == 0) { dateFirst.add(1,"day"); }
var dateAhead = dateFirst.diff(dateInit,'days');

dateSelected = dateFirst.format("MM/DD/YY");
dateText = dateFirst.format('dddd D MMMM');
	$(".dayselected").text(dateText);

var dateCounter;

/** Days to be disabled as an array */

var firstDay = moment().format("M-D-YYYY");
var secondDay = moment(dateInit).add(1,"days");
day2 = secondDay.format("M-D-YYYY");

var thirdDay = moment(dateInit).add(2,"days");
day3 = thirdDay.format("M-D-YYYY");

var disabledSpecificDays = [firstDay, day2, day3];
var daystoStart = dateFirst.diff(dateInit,'days');




if ($("#nodays").length) { var noDays = true; dateAhead = dateAhead+330; } else { var noDays = false; }

if (noDays) {

	$(".dayselected").text(" ");

}


for (i = daystoStart+1; i < 360; i++) { 

		if (dateFirst.day() == 6) { dateFirst.add(2,"day"); }
		if (dateFirst.day() == 0) { dateFirst.add(1,"day"); }



		if (noDays) {
			addDate = dateFirst.format("M-D-YYYY");
			disabledSpecificDays.push(addDate);
		}

		else if ( (Math.floor((Math.random() * 10)) + 1) < 6 ) {
			if ( i != (daystoStart + 1))	{
				addDate = dateFirst.format("M-D-YYYY");
				disabledSpecificDays.push(addDate);
			}
			else {
				dateMenu += '<option value="' +  dateFirst.format('YYYY-MM-DD') + '">' + dateFirst.format('dddd D MMMM YYYY') + '</option>'
			}

		}
		else {

			dateMenu += '<option value="' +  dateFirst.format('YYYY-MM-DD') + '">' + dateFirst.format('dddd D MMMM YYYY') + '</option>';

		}

	dateFirst.add(1,"day");
	dateCounter = i;

}






dateMenu2 = dateMenu;

for (i = dateCounter; i < 800; i++) { 

		if ( (Math.floor((Math.random() * 10)) + 1) < 7 ) {
	
				addDate = dateFirst.format("M-D-YYYY");
				disabledSpecificDays.push(addDate);

		}
		else {

			dateMenu2 += '<option value="' +  dateFirst.format('YYYY-MM-DD') + '">' + dateFirst.format('dddd D MMMM YYYY') + '</option>';

		}

	dateFirst.add(1,"day");
	dateCounter = i;

}

if (noDays) {
	dateMenu += '<option value="zero">Det finns inga lediga tider utlagda under perioden.</option>';
}

dateMenu += '<option value="one">Sök längre fram i tiden</option>';
$(".datemenu").html(dateMenu);
dateMenu2 += '<option value="one">Sök längre fram i tiden</option>';





// CALENDAR
// 
// handle visual elements of the calendar and how it affects the days


/** Days to be disabled as an array */

 
function disableSpecificDaysAndWeekends(date) {
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
 
    for (var i = 0; i < disabledSpecificDays.length; i++) {
        if ($.inArray((m + 1) + '-' + d + '-' + y, disabledSpecificDays) != -1 || new Date() > date) {
            return [false];
        }
    }
 
    var noWeekend = $.datepicker.noWeekends(date);
    return !noWeekend[0] ? noWeekend : [true];

}
 


$(".datepicker").datepicker({
		dateFormat: "yy-mm-dd",
		beforeShowDay: disableSpecificDaysAndWeekends,
		showWeek: true,
        firstDay: 1,
		buttonImage: 'http://uxa.se/img/e1177/calendar-24.png',
	    buttonImageOnly: true,
        changeMonth: false,
        changeYear: false,
        showOn: 'both',
		minDate: 0,
		monthNames: [ "januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december" ],
		monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
		dayNamesShort: ['S&ouml;', 'M&aring;', 'Ti', 'On', 'To', 'Fr', '&ouml;'],
	    dayNamesMin: ['S&ouml;', 'M&aring;', 'Ti', 'On', 'To', 'Fr', 'L&ouml;'],
		nextText: "N&auml;sta",
		prevText: "Tidigare",
		showButtonPanel:false,
		currentText:"idag",
		closeText:"st&auml;ng",
		weekHeader: "V.",
		defaultDate: dateAhead,
		onSelect: function(selected,evnt) {
         	
			reloadTimesFromCal();
   		},

  });












// read query string

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}


// go to url based on query string

gotourl = getQueryVariable('url');
gototitle = getQueryVariable('t');

if (gotourl != '') {
	$('.buttonext').attr("href",gotourl);
}

if (gototitle != '') {
	$('.gototitle').text(gototitle);
}



// javascript go back one page

$( ".backlink" ).click(function() {

	history.go(-1);

});


// Function to scroll down [pix] px


    function AutoScroll(pix) {
        var iScroll = $(window).scrollTop();
        iScroll = iScroll + pix;
        $('html, body').animate({
            scrollTop: iScroll
        }, 1000);
    }
    


// loadergif

var htmlSaver = '<div class="loadergif" style="display:block;text-align:center;"><h3 style="padding:20px;padding-top:40px;">Sparar</h3><img style="display:block; margin: 0 auto;" src="http://uxa.se/img/e1177/preloader.gif" alt=""></div>';

var htmlLoader = '<div class="loadergif" style="display:block;text-align:center;"><h3 style="padding:20px;padding-top:40px;">Laddar</h3><img style="display:block; margin: 0 auto;" src="http://uxa.se/img/e1177/preloader.gif" alt=""></div>';


// hide the extra calendar views

$(".calcontent1").css("display","none");
$(".calcontent2").css("display","none");

$( ".calprev" ).css("visibility","hidden");




// section toggle

$(".section-expand").hide();
$(".img-section-toggle").attr("src", 'http://mvk.nu/img/toggle-open.png');
$('.img-section-toggle').css("cursor","pointer");
$('.section-toggle').css("cursor","pointer");

$(".img-section-toggle").on('click',function(){

	img2toggle = $(this);
	parentSection = $(this).closest(".section");
	section2expand = parentSection.find( ".section-expand" );

	if (section2expand.is(":hidden")) {
 		 section2expand.show();
		 img2toggle.attr("src", 'http://mvk.nu/img/toggle-close.png');
		 AutoScroll(300);
	} else {
		section2expand.hide();
		img2toggle.attr("src", 'http://mvk.nu/img/toggle-open.png');
	}

});


$(".expanded .section-expand").show();
$(".expanded .img-section-toggle").attr("src", 'http://mvk.nu/img/toggle-open.png');




$(".section-toggle").on('click',function(){


	parentSection = $(this).closest(".section");
	section2expand = parentSection.find( ".section-expand" );

	if (section2expand.is(":hidden")) {
 		 section2expand.show();

	} else {
		section2expand.hide();

	}

});



// multistep simple

$(".multistep").attr('id', function (index) {
    return 'multi' + index;
});

$(".multistep").css("display","none");
$("#multi0").css("display","block");

$( ".multi-next" ).change(function() {
	parentBox = $(this).closest(".multistep");

	var id = parentBox.attr('id').replace(/multi/, '');

    multiUpdate("#multi" + id);

});

function multiUpdate(selector) {	
	$(selector).nextAll(".multistep").css("display","none");

	$(selector).after(htmlLoader);
	AutoScroll(300);

		setTimeout(function()
		{
			$(".loadergif").remove();

		}, 1500);


		setTimeout(function()
		{
			$(selector).next(".multistep").css("display","block");

		}, 1500);

}



// load the timebooking form in steps based on different clicks on box-nextopen


$(".boxtimebook").attr('id', function (index) {
    return 'tbox' + index;
});

$(".boxtimebook").css("display","none");
$("#tbox0").css("display","block");



$( ".box-nextopen" ).change(function() {
	parentBox = $(this).closest(".boxtimebook");

	var id = parentBox.attr('id').replace(/tbox/, '');

    hideAndShow("#tbox" + id);

});

$( "a.box-nextopen" ).click(function() {

	var id = $(this).closest(".boxtimebook").attr('id').replace(/tbox/, '');


	hideAndShow("#tbox" + id);
});



$( ".boxtimebook-sub input" ).change(function() {

	parentBox = $(this).closest(".boxtimebook");


	var id = $(this).closest(".boxtimebook").attr('id').replace(/tbox/, '');
	newBox = $("#tbox" + id).find(".boxtimebook-subsub");


	newBox.css("display","none");

	newBox.after(htmlLoader);

  	hideFollowing("#tbox" + id);

	AutoScroll(200);
	
		setTimeout(function()
		{
			$(".loadergif").remove();

		}, 1500);


		setTimeout(function()
		{
			newBox.css("display","block");

		}, 1500);

});



$( ".datemenu" ).change(function() {



	newBox = $(".block-daytimes");

	newBox.css("display","none");

	newBox.after(htmlLoader);


	var id = $(".datemenu").closest(".boxtimebook").attr('id').replace(/tbox/, '');
	hideFollowing("#tbox" + id);

	AutoScroll(200);
	
		setTimeout(function()
		{
			$(".loadergif").remove();

		}, 1500);


		setTimeout(function()
		{
			newBox.css("display","block");

		}, 1500);


	var dateinCal = $(".datepicker").datepicker('getDate');
	dateinCalC = moment(dateinCal);

	var dateClicked = $(".datemenu").val();
	dateClickedC = moment(dateClicked);

	dateAhead = dateClickedC.diff(dateInit,'days');
	dateAhead++;

	dateText = dateClickedC.format('dddd D MMMM YYYY');

	$('.datepicker').datepicker("setDate", dateAhead );

	$(".dayselected").text(dateText);


});



function reloadTimesFromCal() {

	newBox = $(".block-daytimes");

	newBox.css("display","none");

	newBox.after(htmlLoader);


	var id = $(".datepicker").closest(".boxtimebook").attr('id').replace(/tbox/, '');
	hideFollowing("#tbox" + id);

	AutoScroll(200);
	
		setTimeout(function()
		{
			$(".loadergif").remove();

		}, 1500);


		setTimeout(function()
		{
			newBox.css("display","block");

		}, 1500);

	var dateClicked = $(".datepicker").datepicker('getDate');
	dateClickedC = moment(dateClicked);
	dateText = dateClickedC.format('dddd D MMMM YYYY');
	dateOption = dateClickedC.format('YYYY-MM-DD');


	var exists = false;
	$('.datemenu').each(function(){
    		if (this.value == dateOption) {
        		exists = true;
        		return false;
    		}
	});

	if (exists) {
			$(".datemenu").val(dateOption);
	}
	else {

		$(".datemenu").html(dateMenu2);
		$(".datemenu").val(dateOption);

	}



	$(".dayselected").text(dateText);

}



function hideAndShow(selector) {
	$(selector).nextAll(".boxtimebook").find(".boxtimebook-subsub").css("display","none");	
	$(selector).nextAll(".boxtimebook").css("display","none");

	$(selector).after(htmlLoader);
	AutoScroll(300);

		setTimeout(function()
		{
			$(".loadergif").remove();

		}, 1500);


		setTimeout(function()
		{
			$(selector).next(".boxtimebook").css("display","block");

		}, 1500);

}

function hideFollowing(selector) {
	$(selector).nextAll(".boxtimebook").find(".boxtimebook-subsub").css("display","none");	
	$(selector).nextAll(".boxtimebook").css("display","none");
}



// preload images

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

$(['http://uxa.se/img/e1177/preloader.gif']).preload();



// handle the large clickable tabs


$('.wblock-li').css("cursor","pointer").click(function(){var link=$(this).find('a:first');var linkhref=link.attr('href');if(link.attr('target')){var newWindow=window.open(linkhref,link.attr('target'));newWindow.focus()}else{window.location=linkhref}return false});


$('.linktab-single').css("cursor","pointer").click(function(){var link=$(this).find('a:first');var linkhref=link.attr('href');if(link.attr('target')){var newWindow=window.open(linkhref,link.attr('target'));newWindow.focus()}else{window.location=linkhref}return false});


$('.tablink').css("cursor","pointer").click(function(){var link=$(this).find('a:first');var linkhref=link.attr('href');if(link.attr('target')){var newWindow=window.open(linkhref,link.attr('target'));newWindow.focus()}else{window.location=linkhref}return false});

$('.tool-print').css("cursor","pointer").click(function(){var link=$(this).find('a:first');var linkhref=link.attr('href');if(link.attr('target')){var newWindow=window.open(linkhref,link.attr('target'));newWindow.focus()}else{window.location=linkhref}return false});



// Help text

$('.wblock-hblock').click(function(){$(this).find('.helptext').toggle() });
$('.helpcontainer').click(function(){$(this).find('.helptext').toggle() });




// handle mouseover of icons

 $(function ()
            {
                $(".tool-print")
                    .mouseover(function ()
                    {
                        $(this).find('.icon-print').attr("src",'http://uxa.se/img/e1177/skrivut-02.png');
					   $(this).css("cursor","pointer");
                    })
                    .mouseout(function ()
                    {
                        $(this).find('.icon-print').attr("src",'http://uxa.se/img/e1177/skrivut-01.png');
	$(this).css("cursor","default");
                    });
            });


 $(function ()
            {
                $(".tool-archive")
                    .mouseover(function ()
                    {
                        $(this).find('.icon-print').attr("src",'http://uxa.se/img/e1177/archive-02.png');
					   $(this).css("cursor","pointer");
                    })
                    .mouseout(function ()
                    {
                        $(this).find('.icon-print').attr("src",'http://uxa.se/img/e1177/archive-01.png');
	$(this).css("cursor","default");
                    });
            });

 $(function ()
            {
                $(".tool-delete")
                    .mouseover(function ()
                    {
                        $(this).find('.icon-print').attr("src",'http://uxa.se/img/e1177/delete-02.png');
					   $(this).css("cursor","pointer");
                    })
                    .mouseout(function ()
                    {
                        $(this).find('.icon-print').attr("src",'http://uxa.se/img/e1177/delete-01.png');
	$(this).css("cursor","default");
                    });
            });


$(".tool-print").click(function () { window.print(); });



 $(function ()
            {
                $(".wblock-hblock")
                    .mouseover(function ()
                    {
                        $(this).find('.img-infoicon').attr("src",'http://uxa.se/img/e1177/icon-info-2.png');
					   $(this).css("cursor","pointer");
                    })
                    .mouseout(function ()
                    {
                        $(this).find('.img-infoicon').attr("src",'http://uxa.se/img/e1177/icon-info-1.png');
	$(this).css("cursor","default");
                    });
            });



// handle mouseover of clickable tabs of different sizes

$(".wblock-li").fadeTo(0, 0.8); // initial opacity

$(".wblock-li").hover(function() {

		$(this).stop().fadeTo(0,1);

	}, function() {

		$(this).stop().fadeTo(0,0.8);

	});

$(".linktab-single").fadeTo(0, 0.8); // initial opacity

$(".linktab-single").hover(function() {

		$(this).stop().fadeTo(0,1);

	}, function() {

		$(this).stop().fadeTo(0,0.8);

	});

$(".tabs-li").fadeTo(0, 0.8); // initial opacity

$(".tabs-li").hover(function() {

		$(this).stop().fadeTo(0,1);

	}, function() {

		$(this).stop().fadeTo(0,0.8);

	});


$(".widget-sublink").fadeTo(0, 0.8); // initial opacity

$(".widget-sublink").hover(function() {

		$(this).stop().fadeTo(0,1);

	}, function() {

		$(this).stop().fadeTo(0,0.8);

	});





$(".toggle-caregiver").change(function() {

		$("#villkor-loader").show();
		$("#villkorstext").hide();



		if ($(".toggle-caregiver").val() != 'none' )

		{


			setTimeout(function()
			{
				$("#villkor-loader").fadeOut();

			}, 1500);


			setTimeout(function()
			{

				$("#villkorstext").show();

			}, 1500);

		}


		if ($(".toggle-caregiver").val() == 'none' ) {

				$("#villkorstext").hide();		

		}
		


	});



$('.trigger-caregiver')
    .val('hepp').delay( 1200 )
    .trigger('change');







// add icon to external links

if (!($('.extlink').length)) {
    $(".link1177").append("<img src='http://uxa.se/img/e1177/icon-newwindow.png' class='extlink' style='margin-left:4px; padding-bottom:3px;' alt='Länken öppnas i nytt fönster.'>");

}


$(".link1177i").append("<img src='http://uxa.se/img/e1177/icon-newwindow-inv.png' class='extlink' style='margin-left:4px; padding-bottom:3px;' alt='Länken öppnas i nytt fönster.'>");



// activate popup links

$('.ajax-popup-link').magnificPopup({
  type: 'ajax',
  modal: 'false',
  showCloseBtn: 'true',
  enableEscapeKey: 'true',
  ajax: {
  	settings: null,
  	cursor: 'mfp-ajax-cur',
  	tError: '<a href="%url%">The content</a> could not be loaded.'
  }
	
});

$('.ajax-new-popup').magnificPopup({
  type: 'ajax'
  	
});

$('.inline-popup-link').magnificPopup({
  type: 'inline',
  showCloseBtn: 'true',
  enableEscapeKey: 'true',	
});


$('.mfp-closedown').click(function(){
    $.magnificPopup.close();
});



// show less and more text

    var showChar = 70;
    var ellipsestext = "...";
    var moretext = "[visa mer]";
    var lesstext = "[d&ouml;lj text]";
    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });


// handle content that is cut off to save space - more-links
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });



// deprecated


$(".icon-calendar").mouseover(function () { $(this).css("cursor","pointer"); });
$(".calnav01").mouseover(function () { $(this).css("cursor","pointer"); });











});
