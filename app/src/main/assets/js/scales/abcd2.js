// ABCD2 Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 10/Oct/2017 Dean Jenkins

// Since I don't like the way some websites covet these trivial algorithms
// and try to monetize them by licensing them or pushing adverts this
// code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/

function getvaluefromcheckbox(id) {
    if (document.getElementById(id).checked) {
        return parseFloat(document.getElementById(id).value);
    } else {
        return 0;
    }
}

// getvaluefromradio() for getting radio values
function getvaluefromradio(name) { // radio buttons work if they have the same name!
    var radios = document.getElementsByName(name);

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return parseFloat(radios[i].value);
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    return null; // we may get here if no radio is checked
}

function uncheck(id) {
    document.getElementById(id).checked = false;
}

//uncheckradio() for unchecking radio buttons
function uncheckradio(name) { // radio buttons work if they have the same name!
    var radios = document.getElementsByName(name);

    for (var i = 0, length = radios.length; i < length; i++) {
        radios[i].checked = false;
    }
}

//checkradio() for checking radio buttons
function checkradio(id) { // specific radio button options have different id's
    document.getElementById(id).checked = true;
}


function ABCD2()
{
    var age=getvaluefromcheckbox("tblable_calc_form_age");
    var bp=getvaluefromcheckbox("tblable_calc_form_bp");
    var clinical=getvaluefromradio("tblable_calc_form_clinical");
    var duration=getvaluefromradio("tblable_calc_form_duration");
    var diabetes=getvaluefromcheckbox("tblable_calc_form_diabetes");

    var score = parseFloat(age + bp + clinical + duration + diabetes);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score<4) {
        summaryhtml = summaryhtml + "Low risk. 2 day risk 1.0%, 7 day risk 1.2%.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score==4 || score==5) {
        summaryhtml = summaryhtml + "Moderate risk. 2 day risk 4.1%, 7 day risk 5.9%.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score==6 || score==7) {
        summaryhtml = summaryhtml + "High risk. 2 day risk 8.1%, 7 day risk 11.7%.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheck("tblable_calc_form_age");
    uncheck("tblable_calc_form_bp");
    uncheckradio("tblable_calc_form_clinical");
    checkradio("tblable_calc_form_clinical0");
    uncheckradio("tblable_calc_form_duration");
    checkradio("tblable_calc_form_duration0");
    uncheck("tblable_calc_form_diabetes");
}

function unckeck(varname) {
    document.getElementById(varname).checked = false;
}

function headerBlurb(title,oneliner,instruction) {
    var html='<h2>' + title + '</h2>' +
'<p>' + oneliner + '</p>' +
'<p class="font-italic">' + instruction + '</p>'
    return html;
}

function simplecheckbox(varname,value,labeltext,onclick) {
    var html = '    <div class="row1">' +
'        <div class="col1">' +
'            <input id="' + varname + '" value="'+ value +'" onclick="'+ onclick +'" type="checkbox">' +
'            <label for="' + varname + '">' + labeltext + '</label>' +
'        </div>' +
'    </div>'
    return html;
}

function simpleradio(varid,varname,value,labeltext,onclick) {
    var html = '    <div class="row1">' +
'        <div class="col1">' +
'            <input id="' + varid + '" name="' + varname + '" value="'+ value +'" onclick="'+ onclick +'" type="radio">' +
'            <label for="' + varid + '">' + labeltext + '</label>' +
'        </div>' +
'    </div>'
    return html;
}


var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("ABCD<sub>2</sub> score","Risk of stroke following TIA","Tick or select all that apply") +


simplecheckbox("tblable_calc_form_age","1","Age ≥60 years (1)","ABCD2();") +
simplecheckbox("tblable_calc_form_bp","1","Raised BP (≥140/90 mmHg) (1)","ABCD2();") +
simpleradio("tblable_calc_form_clinical0","tblable_calc_form_clinical","0","Other clinical features (0)","ABCD2();") +
simpleradio("tblable_calc_form_clinical1","tblable_calc_form_clinical","1","Speech impairment without focal weakness (1)","ABCD2();") +
simpleradio("tblable_calc_form_clinical2","tblable_calc_form_clinical","2","Focal weakness (2)","ABCD2();") +
simpleradio("tblable_calc_form_duration0","tblable_calc_form_duration","0","Duration &lt;10 minutes (0)","ABCD2();") +
simpleradio("tblable_calc_form_duration1","tblable_calc_form_duration","1","Duration 10 - 59 minutes (1)","ABCD2();") +
simpleradio("tblable_calc_form_duration2","tblable_calc_form_duration","2","Duration ≥60 minutes (1)","ABCD2();") +
simplecheckbox("tblable_calc_form_diabetes","1","Diabetes (1)","ABCD2();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>ABCD<sub>2</sub>-VASc score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); ABCD2(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="http://dx.doi.org/10.1016/S0140-6736(07)60150-0">Johnstone SC, Rothwell PM et al. (2007)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
ABCD2();
