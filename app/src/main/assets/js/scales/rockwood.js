// Rockwood Frailty Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 24/Oct/2017 Dean Jenkins

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


function frailty()
{

    var frailty=getvaluefromradio("tblable_calc_form_frailty");

    var score = parseFloat(frailty);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";
    var source=". Figures from Rockwood (2005, fig. 3).";

    if (score<4) {
        summaryhtml = summaryhtml + "Not frail. 70 month survival 70 - 80%, avoiding institutional care 90%" + source;
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score==4) {
        summaryhtml = summaryhtml + "Vulnerable. 70 month survival 50 - 60%, avoiding institutional care 70 - 80%" + source;
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score>4) {
        summaryhtml = summaryhtml + "Frail.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    if (score==5) {
        summaryhtml = summaryhtml + " 70 month survival 40 - 50%, avoiding institutional care 60%" + source;
    }

    if (score==6 || score==7) {
        summaryhtml = summaryhtml + " 70 month survival 40%, avoiding institutional care 50%" + source;
    }

    if (score==8 || score==9) {
        summaryhtml = summaryhtml + " Life expectancy &lt; 6 months.";
    }


    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_frailty");
    checkradio("tblable_calc_form_frailty1"); // frailty score starts at 1
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
'            <label for="' + varname + '">' + labeltext + '' +
'        </div>' +
'    </div>'
    return html;
}

function simpleradio(varid,varname,value,labeltext,onclick) {
    var html = '    <div class="row1">' +
'        <div class="col1">' +
'            <input id="' + varid + '" name="' + varname + '" value="'+ value +'" onclick="'+ onclick +'" type="radio">' +
'            <label for="' + varid + '">' + labeltext + '' +
'        </div>' +
'    </div>'
    return html;
}


var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("Rockwood frailty score","CSHA clinical frailty scale","Select the most appropriate") +


simpleradio("tblable_calc_form_frailty1","tblable_calc_form_frailty","1","<b>Very fit</b> (1). People who are robust, active, energetic and motivated. These people commonly exercise regularly. They are among the fittest for their age.","frailty();") +
simpleradio("tblable_calc_form_frailty2","tblable_calc_form_frailty","2","<b>Well</b> (2). People who have <b>no active disease symptoms</b> but are less fit than category 1. Often, they exercise or are very <b>active occasionally</b>, e.g. seasonally.","frailty();") +
simpleradio("tblable_calc_form_frailty3","tblable_calc_form_frailty","3","<b>Managing well</b> (3). People whose <b>medical problems are well controlled</b>, but are <b>not regularly active</b> beyond routine walking.","frailty();") +
simpleradio("tblable_calc_form_frailty4","tblable_calc_form_frailty","4","<b>Vulnerable</b> (4). While <b>not dependent</b> on others for daily help, often <b>symptoms limit activities</b>. A common complaint is being 'slowed up', and/or being tired during the day","frailty();") +
simpleradio("tblable_calc_form_frailty5","tblable_calc_form_frailty","5","<b>Mildly frail</b> (5). These people often have <b>more evident slowing</b>, and need help in <b>high order IADLs</b> (finances, transportation, heavy housework, medications).  Typically, mild frailty progressively impairs shopping and walking outside alone, meal preparation and housework. ","frailty();") +
simpleradio("tblable_calc_form_frailty6","tblable_calc_form_frailty","6","<b>Moderately frail</b> (6). People need help with <b>all outside activities</b> and with <b>keeping house</b>. Inside, they often have problems with stairs and need <b>help with bathing</b> and might need minimal assistance (cuing, standby) with dressing.","frailty();") +
simpleradio("tblable_calc_form_frailty7","tblable_calc_form_frailty","7","<b>Severely frail</b> (7). <b>Completely dependent for personal care</b>, from whatever cause (physical or cognitive). Even so, they seem stable and not at high risk of dying (within ~ 6 months).","frailty();") +
simpleradio("tblable_calc_form_frailty8","tblable_calc_form_frailty","8","<b>Very severely frail</b> (8). Completely dependent, approaching the end of life. Typically, they could not recover even from a minor illness.","frailty();") +
simpleradio("tblable_calc_form_frailty9","tblable_calc_form_frailty","9","<b>Terminally ill</b> (9). Approaching the end of life. This category applies to people with <b>a life expectancy &lt;6 months</b>, who are <b>not otherwise evidently frail</b>.","frailty();") +


'    <div id="result" class="alert alert-success">' +
'        <div><b>Frailty score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); frailty(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="http://www.cmaj.ca/content/173/5/489.full">Rockwood et al (2005)</a> and <a href="http://geriatricresearch.medicine.dal.ca/clinical_frailty_scale.htm">Dalhousie University Faculty of Medicine (2009)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
frailty();
