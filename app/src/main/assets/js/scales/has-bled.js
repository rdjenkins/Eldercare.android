// Has-bled Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 7/Oct/2017 Dean Jenkins

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

function Hasbled()
{
    var h=getvaluefromcheckbox("tblable_calc_form_h");
    var ar=getvaluefromcheckbox("tblable_calc_form_ar");
    var al=getvaluefromcheckbox("tblable_calc_form_al");
    var s=getvaluefromcheckbox("tblable_calc_form_s");
    var b=getvaluefromcheckbox("tblable_calc_form_b");
    var l=getvaluefromcheckbox("tblable_calc_form_l");
    var e=getvaluefromcheckbox("tblable_calc_form_e");
    var d1=getvaluefromcheckbox("tblable_calc_form_d1");
    var d2=getvaluefromcheckbox("tblable_calc_form_d2");

    var score = parseFloat(h + ar + al + s + b + l + e + d1 + d2);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score<3) {
        summaryhtml = "Lower risk. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score>=3) {
        summaryhtml = "High risk. Caution and regular review needed. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }
    
    riskstatement = "Bleed per 100 patient years ";
    if (score==0) {
        riskstatement = riskstatement + "1.13";
    }
    if (score==1) {
        riskstatement = riskstatement + "1.02";
    }
    if (score==2) {
        riskstatement = riskstatement + "1.88";
    }
    if (score==3) {
        riskstatement = riskstatement + "3.74";
    }
    if (score==4) {
        riskstatement = riskstatement + "8.70";
    }
    if (score==5) {
        riskstatement = riskstatement + "12.50";
    }
    if (score>5) {
        riskstatement = ""; // no data in original paper
    }

    summaryhtml = summaryhtml + riskstatement;

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    document.getElementById("tblable_calc_form_h").checked = false;
    document.getElementById("tblable_calc_form_ar").checked = false;
    document.getElementById("tblable_calc_form_al").checked = false;
    document.getElementById("tblable_calc_form_s").checked = false;
    document.getElementById("tblable_calc_form_b").checked = false;
    document.getElementById("tblable_calc_form_l").checked = false;
    document.getElementById("tblable_calc_form_e").checked = false;
    document.getElementById("tblable_calc_form_d1").checked = false;
    document.getElementById("tblable_calc_form_d2").checked = false;
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

headerBlurb("HAS-BLED score","Risk of major bleeding in AF","Tick all that apply to calculate the score") +

simplecheckbox("tblable_calc_form_h","1","Hypertension: (uncontrolled, &gt;160 mmHg systolic) (1)","Hasbled();") +
simplecheckbox("tblable_calc_form_ar","1","Abnormal renal function: Dialysis, transplant, Cr &gt;200 µmol/L (1)","Hasbled();") +
simplecheckbox("tblable_calc_form_al","1","Abnormal liver function: Cirrhosis or Bilirubin &gt;2x Normal or AST/ALT/AP &gt;3x Normal (1)","Hasbled();") +
simplecheckbox("tblable_calc_form_s","1","Stroke: Prior history of stroke (1)","Hasbled();") +
simplecheckbox("tblable_calc_form_b","1","Bleeding: Prior Major Bleeding or Predisposition to Bleeding (1)","Hasbled();") +
simplecheckbox("tblable_calc_form_l","1","Labile INR: (Unstable/high INR), Time in Therapeutic Range &lt; 60% (1)","Hasbled();") +
simplecheckbox("tblable_calc_form_e","1","Elderly: Age &gt; 65 years (1)","Hasbled();") +
simplecheckbox("tblable_calc_form_d1","1","Prior Alcohol or Drug Usage History (≥ 8 drinks/week) (1)","Hasbled();") +

simplecheckbox("tblable_calc_form_d2","1","Medication Usage Predisposing to Bleeding: (Antiplatelet agents, NSAIDs) (1)","Hasbled();") +


'    <div id="result" class="alert alert-success">' +
'        <div><b>HAS-BLED score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); Hasbled(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="http://journal.chestnet.org/article/S0012-3692(10)60585-5/fulltext">Pisters R, Lane DA, Nieuwlaat R, de Vos CB, Crijns HJGM, Lip GYH (2010)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
Hasbled();
