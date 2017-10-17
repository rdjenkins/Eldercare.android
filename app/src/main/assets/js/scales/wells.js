// Well's Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 23/May/2017 Dean Jenkins

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

function Wells()
{

    var dvt=getvaluefromcheckbox("tblable_calc_form_dvt");
    var alt=getvaluefromcheckbox("tblable_calc_form_alt");
    var tach=getvaluefromcheckbox("tblable_calc_form_tach");
    var immob=getvaluefromcheckbox("tblable_calc_form_immob");
    var hist=getvaluefromcheckbox("tblable_calc_form_hist");
    var haem=getvaluefromcheckbox("tblable_calc_form_haem");
    var malig=getvaluefromcheckbox("tblable_calc_form_malig");

    var score = parseFloat(dvt + alt + tach + immob + hist + haem + malig);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score<2) {
        summaryhtml = "Low risk. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score>=2 && score<6) {
        summaryhtml = "Moderate risk. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score>6) {
        summaryhtml = "High risk. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }
    

    if (score>4) {
        summaryhtml = summaryhtml + "PE likely. Consider diagnostic imaging.";
    } else {
        summaryhtml = summaryhtml + "PE unlikely. Consider D-dimer to rule out PE.";
    }    

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheck("tblable_calc_form_dvt");
    uncheck("tblable_calc_form_alt");
    uncheck("tblable_calc_form_tach");
    uncheck("tblable_calc_form_immob");
    uncheck("tblable_calc_form_hist");
    uncheck("tblable_calc_form_haem");
    uncheck("tblable_calc_form_malig");
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

headerBlurb("Wells score","Likelihood of acute PE","Tick all that apply to calculate the score") +

simplecheckbox("tblable_calc_form_dvt","3","Clinically suspected DVT (3.0)","Wells()") +
simplecheckbox("tblable_calc_form_alt","3","Alternate diagnosis less likely than PE (3.0)","Wells()") +
simplecheckbox("tblable_calc_form_tach","1.5","Tachycardia (1.5)","Wells()") +
simplecheckbox("tblable_calc_form_immob","1.5","Immobilisation or surgery in the previous four weeks (1.5)","Wells()") +
simplecheckbox("tblable_calc_form_hist","1.5","History of DVT or PE (1.5)","Wells()") +
simplecheckbox("tblable_calc_form_haem","1","Haemotypsis (1.0)","Wells()") +
simplecheckbox("tblable_calc_form_malig","1","Malignancy (treatment for within six months, palliative) (1.0)","Wells()") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>Wells score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); Wells(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="http://dx.doi.org/10.7326/0003-4819-129-12-199812150-00002">Wells PS et al. (1998)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
Wells();
