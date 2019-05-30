// Clinical Global Impressions Scale Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 24/Oct/2017 Dean Jenkins

// Since I don't like the way some websites covet these trivial algorithms
// and try to monetize them by licensing them or pushing adverts this
// code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/


function CGIS()
{

    var CGIS=getvaluefromradio("tblable_calc_form_CGIS");

    var score = parseFloat(CGIS);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";
    var source=". from Busner & Targum (2007, table 1).";

    if (score==1) {
        summaryhtml = summaryhtml + "Normal" + source;
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score>1 && score <5) {
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score>4) {
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    if (score==2) {
        summaryhtml = summaryhtml + "Borderline mentally ill" + source;
    }

    if (score==3) {
        summaryhtml = summaryhtml + "Mildly ill" + source;
    }

    if (score==4) {
        summaryhtml = summaryhtml + "Moderately ill" + source;
    }

    if (score==5) {
        summaryhtml = summaryhtml + "Markedly ill" + source;
    }

    if (score==6) {
        summaryhtml = summaryhtml + " Severely ill" + source;
    }

    if (score==7) {
        summaryhtml = summaryhtml + " Among the most extremely ill patients" + source;
    }


    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_CGIS");
    checkradio("tblable_calc_form_CGIS1"); // CGIS normal is 1
}


var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("CGI-Severity","Clinical Global Impressions Scale for mental illness","Select the most appropriate") +


simpleradio("tblable_calc_form_CGIS1","tblable_calc_form_CGIS","1","<b>Normal</b> (1). not at all ill, symptoms of disorder not present past seven days","CGIS();") +
simpleradio("tblable_calc_form_CGIS2","tblable_calc_form_CGIS","2","<b>Borderline mentally ill</b> (2). subtle or suspected pathology","CGIS();") +
simpleradio("tblable_calc_form_CGIS3","tblable_calc_form_CGIS","3","<b>Mildly ill</b> (3). clearly established symptoms with minimal, if any, distress or difficulty in social and occupational function","CGIS();") +
simpleradio("tblable_calc_form_CGIS4","tblable_calc_form_CGIS","4","<b>Moderately ill</b> (4). overt symptoms causing noticeable, but modest, functional impairment or distress; symptom level may warrant medication","CGIS();") +
simpleradio("tblable_calc_form_CGIS5","tblable_calc_form_CGIS","5","<b>Markedly ill</b> (5). intrusive symptoms that distinctly impair social/occupational function or cause intrusive levels of distress","CGIS();") +
simpleradio("tblable_calc_form_CGIS6","tblable_calc_form_CGIS","6","<b>Severely ill</b> (6). disruptive pathology, behavior and function are frequently influenced by symptoms, may require assistance from others","CGIS();") +
simpleradio("tblable_calc_form_CGIS7","tblable_calc_form_CGIS","7","<b>Among the most extremely ill patients</b> (7). pathology drastically interferes in many life functions; may be hospitalized","CGIS();") +


'    <div id="result" class="alert alert-success">' +
'        <div><b>CGI-S Scale = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); CGIS(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2880930/">Busner & Targum (2007)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
CGIS();
