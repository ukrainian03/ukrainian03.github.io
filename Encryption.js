var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var myVideo = document.getElementById("video1");

function encrypt(id, shiftId)
{
  var t = document.getElementById(id), out = '';
  var shift = parseInt(document.getElementById(shiftId).value);
  var txt = t.value, ranges = [[65,90],[97,122]];
   
    for(var i = 0; i < txt.length; i++) // Creates a loop instead of having multiple lines of code
    {
      var code = txt.charCodeAt(i);   
      for(var j = 0; j < ranges.length; j++) 
      {
        if (code >= ranges[j][0] && code <= ranges[j][1]) // Conditions the statement to only be included the set of characters 
        {
          code = ((code - ranges[j][0] + shift) %
            (ranges[j][1] - ranges[j][0] + 1)) + ranges[j][0];
             break;
        }
      }
    out += String.fromCharCode(code);
    }
    t.value = out;
}
 