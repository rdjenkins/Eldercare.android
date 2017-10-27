// PRISMA-7 Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 25/Oct/2017 Dean Jenkins

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


function PRISMA7()
{
    var age=getvaluefromcheckbox("tblable_calc_form_age");
    var male=getvaluefromcheckbox("tblable_calc_form_male");
    var health=getvaluefromcheckbox("tblable_calc_form_health");
    var help=getvaluefromcheckbox("tblable_calc_form_help");
    var stay=getvaluefromcheckbox("tblable_calc_form_stay");
    var need=getvaluefromcheckbox("tblable_calc_form_need");
    var aid=getvaluefromcheckbox("tblable_calc_form_aid");

    var score = parseFloat(age + male + health + help + stay + need + aid);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score<3) {
        summaryhtml = summaryhtml + "Probably not frail.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score>=3) {
        summaryhtml = summaryhtml + "Likely to be frail.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    if (score==3) {
        summaryhtml = summaryhtml + " Sensitivity 78.3%, specificity 74.7%.";
    }

    if (score>=4) {
        summaryhtml = summaryhtml + " Sensitivity 60.9%, specificity 91%.";
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheck("tblable_calc_form_age");
    uncheck("tblable_calc_form_male");
    uncheck("tblable_calc_form_health");
    uncheck("tblable_calc_form_help");
    uncheck("tblable_calc_form_stay");
    uncheck("tblable_calc_form_need");
    uncheck("tblable_calc_form_help");
    uncheck("tblable_calc_form_aid");
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

headerBlurb("PRISMA-7 score","Case-finding tool for moderate to severe disabilities","Tick all that apply") +


simplecheckbox("tblable_calc_form_age","1","Are you more than 85 years old?","PRISMA7();") +
simplecheckbox("tblable_calc_form_male","1","Male?","PRISMA7();") +
simplecheckbox("tblable_calc_form_health","1","In general, do you have any health problems that require you to limit your activities?","PRISMA7();") +
simplecheckbox("tblable_calc_form_help","1","Do you need someone to help you on a regular basis?","PRISMA7();") +
simplecheckbox("tblable_calc_form_stay","1","In general, do you have any health problems that require you to stay at home?","PRISMA7();") +
simplecheckbox("tblable_calc_form_need","1","In case of need, can you count on someone close to you?","PRISMA7();") +
simplecheckbox("tblable_calc_form_aid","1","Do you regularly use a cane, a walker of a wheelchair to move about?","PRISMA7();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>PRISMA-7 score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); PRISMA7(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://doi.org/10.1016/j.archger.2007.06.004">Raîche et al. (2006)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
PRISMA7();
