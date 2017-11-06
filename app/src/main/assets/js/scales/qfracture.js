// Qfracture Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 10/Oct/2017 Dean Jenkins



var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

headerBlurb("QFracture<sup>&reg;</sup>-2016 score","Risk of osteoporotic fracture","This scale is currently only available online") +

'<p>It is feasible to include this score in the app as the algorithm is Open Source but it will take some work. In the meantime you can complete the <a href="http://www.qfracture.org/">QFracture<sup>&reg;</sup>-2016 score online</a></p>' +

'</div><!-- end calculator -->' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
