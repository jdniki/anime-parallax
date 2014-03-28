/**
 * Created by jadhaon on 1/21/14.
 */

var  numberofDiv = 10;

$(document).ready(function(){


    for( i = 1 ; i <= numberofDiv ; i++)
    {
        $( "#sky" ).append( "  <li><div class='sky cloud_"+i+"'><span class='shadow'></span></div></li>" );
    }


    for( i = 1 ; i <= numberofDiv * 4 ; i++)
    {
        $( ".under-sea" ).append( "<div class='bubble_"+i+"'></div>" );
    }


});

