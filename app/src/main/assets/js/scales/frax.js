// FRAX Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 10/Oct/2017 Dean Jenkins


function headerBlurb(title,oneliner,instruction) {
    var html='<h2>' + title + '</h2>' +
'<p>' + oneliner + '</p>' +
'<p class="font-italic">' + instruction + '</p>'
    return html;
}

var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

headerBlurb("FRAX<sup>&reg;</sup> score","Risk of osteoporotic fracture","This scale is only available from Sheffield University") +

'<p>Complete the <a href="https://www.sheffield.ac.uk/FRAX/tool.aspx?country=1">FRAX<sup>&reg;</sup> score online</a></p>' +

'</div><!-- end calculator -->' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
