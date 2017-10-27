// AMT Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 8/Oct/2017 Dean Jenkins

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

function AMT()
{
    var q1=getvaluefromcheckbox("tblable_calc_form_q1");
    var q2=getvaluefromcheckbox("tblable_calc_form_q2");
    var q3=getvaluefromcheckbox("tblable_calc_form_q3");
    var q4=getvaluefromcheckbox("tblable_calc_form_q4");
    var q5=getvaluefromcheckbox("tblable_calc_form_q5");
    var q6=getvaluefromcheckbox("tblable_calc_form_q6");
    var q7=getvaluefromcheckbox("tblable_calc_form_q7");
    var q8=getvaluefromcheckbox("tblable_calc_form_q8");
    var q9=getvaluefromcheckbox("tblable_calc_form_q9");
    var q10=getvaluefromcheckbox("tblable_calc_form_q10");

    var score = parseFloat(q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score>8) {
        summaryhtml = "Normal.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score<=8) {
        summaryhtml = "Possible confusional state or dementia.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    document.getElementById("tblable_calc_form_q1").checked = false;
    document.getElementById("tblable_calc_form_q2").checked = false;
    document.getElementById("tblable_calc_form_q3").checked = false;
    document.getElementById("tblable_calc_form_q4").checked = false;
    document.getElementById("tblable_calc_form_q5").checked = false;
    document.getElementById("tblable_calc_form_q6").checked = false;
    document.getElementById("tblable_calc_form_q7").checked = false;
    document.getElementById("tblable_calc_form_q8").checked = false;
    document.getElementById("tblable_calc_form_q9").checked = false;
    document.getElementById("tblable_calc_form_q10").checked = false;
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

var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("Abbreviated Mental Test score","For detecting delirium or dementia","Tick those answered correctly","AMT();") +


simplecheckbox("tblable_calc_form_q1","1","Age","AMT();") +
simplecheckbox("tblable_calc_form_q2","1","Time (to nearest hour)","AMT();") +
simplecheckbox("tblable_calc_form_q3","1","Address for recall at the end of the test - this should be repeated by the patient to ensure it has been heard correctly: 42 West Street","AMT();") +
simplecheckbox("tblable_calc_form_q4","1","Year","AMT();") +
simplecheckbox("tblable_calc_form_q5","1","Name of hospital","AMT();") +
simplecheckbox("tblable_calc_form_q6","1","Recognition of two persons (doctor, nurse, etc.)","AMT();") +
simplecheckbox("tblable_calc_form_q7","1","Date of birth (day and month sufficient)","AMT();") +
simplecheckbox("tblable_calc_form_q8","1","Year of First World War","AMT();") +
simplecheckbox("tblable_calc_form_q9","1","Name of present Monarch","AMT();") +
simplecheckbox("tblable_calc_form_q10","1","Count backwards 20-1","AMT();") +


'    <div id="result" class="alert alert-success">' +
'        <div>AMT score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); AMT(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://doi.org/10.1093%2Fageing%2F1.4.233">Hodkinson, HM (1972)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
AMT();
