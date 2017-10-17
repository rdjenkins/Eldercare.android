// CURB-65 Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 11/Oct/2017 Dean Jenkins

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

function uncheck(id) {
    document.getElementById(id).checked = false;
}

function CURB65()
{
    var c=getvaluefromcheckbox("tblable_calc_form_c");
    var u=getvaluefromcheckbox("tblable_calc_form_u");
    var r=getvaluefromcheckbox("tblable_calc_form_r");
    var b=getvaluefromcheckbox("tblable_calc_form_b");
    var a=getvaluefromcheckbox("tblable_calc_form_a");

    var score = parseFloat(c + u + r + b + a);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score==0 || score==1) {
        summaryhtml = "Mortality low (1.5% at 30 days). Likely suitable for home treatment. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score==2) {
        summaryhtml = "Mortality intermediate (9.2% at 30 days). Consider hospital supervised treatment. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score>=3) {
        summaryhtml = "Mortality high (22% at 30 days). Manage in hospital as severe pneumonia. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheck("tblable_calc_form_c");
    uncheck("tblable_calc_form_u");
    uncheck("tblable_calc_form_r");
    uncheck("tblable_calc_form_b");
    uncheck("tblable_calc_form_a");
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

var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("CURB-65 score","Risk of death in community-acquired pneumonia","Tick all that apply to calculate the score") +


simplecheckbox("tblable_calc_form_c","1","Confusion - i.e. AMT score of 8 or less (1)","CURB65();") +
simplecheckbox("tblable_calc_form_u","1","Urea &gt;7 mmol/l (1)","CURB65();") +
simplecheckbox("tblable_calc_form_r","1","Respiratory rate &gt;30/min (1)","CURB65();") +
simplecheckbox("tblable_calc_form_b","1","Blood pression (SBP &lt;90mmHg or DBP ≤60mmHg (1)","CURB65();") +
simplecheckbox("tblable_calc_form_a","1","Age ≥65 (1)","CURB65();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>CURB-65 score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); CURB65(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="http://thorax.bmj.com/content/58/5/377.long">Lim WS et al (2003)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
CURB65();
