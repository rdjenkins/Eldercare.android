// CHA2DS2-VASc Score Calculator
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

function uncheck(id) {
    document.getElementById(id).checked = false;
}

function Cha2ds2vasc()
{
    var c=getvaluefromcheckbox("tblable_calc_form_c");
    var h=getvaluefromcheckbox("tblable_calc_form_h");
    var a2=getvaluefromcheckbox("tblable_calc_form_a2");
    var d=getvaluefromcheckbox("tblable_calc_form_d");
    var s2=getvaluefromcheckbox("tblable_calc_form_s2");
    var v=getvaluefromcheckbox("tblable_calc_form_v");
    var a=getvaluefromcheckbox("tblable_calc_form_a");
    var sc=getvaluefromcheckbox("tblable_calc_form_sc");

    var score = parseFloat(c + h + a2 + d + s2 + v + a + sc);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score==1 && sc==1) {
        summaryhtml = "Low risk. No anticoagulant therapy. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score==0 && sc==0) {
        summaryhtml = "Low risk. No anticoagulant therapy. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score==1 && sc==0) {
        summaryhtml = "Moderate risk. Oral anticoagulant should be considered. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score>=2) {
        summaryhtml = "High risk. Oral anticoagulant recommended. ";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }
    
    riskstatement = "Annual stroke risk ";
    if (score==0) {
        riskstatement = "";
    }
    if (score==1) {
        riskstatement = riskstatement + "1.3%";
    }
    if (score==2) {
        riskstatement = riskstatement + "2.2%";
    }
    if (score==3) {
        riskstatement = riskstatement + "3.2%";
    }
    if (score==4) {
        riskstatement = riskstatement + "4%";
    }
    if (score==5) {
        riskstatement = riskstatement + "6.7%";
    }
    if (score==6) {
        riskstatement = riskstatement + "9.8%";
    }
    if (score==7) {
        riskstatement = riskstatement + "9.6%";
    }
    if (score==8) {
        riskstatement = riskstatement + "12.5%";
    }
    if (score==9) {
        riskstatement = riskstatement + "15.2%";
    }

    summaryhtml = summaryhtml + riskstatement;

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheck("tblable_calc_form_c");
    uncheck("tblable_calc_form_h");
    uncheck("tblable_calc_form_a2");
    uncheck("tblable_calc_form_d");
    uncheck("tblable_calc_form_s2");
    uncheck("tblable_calc_form_v");
    uncheck("tblable_calc_form_a");
    uncheck("tblable_calc_form_sc");
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

headerBlurb("CHA<sub>2</sub>DS<sub>2</sub>-VASc score","Risk of stroke in non-valvular AF","Tick all that apply to calculate the score") +


simplecheckbox("tblable_calc_form_c","1","Congestive heart failure (or Left ventricular systolic dysfunction) (1)","Cha2ds2vasc();") +
simplecheckbox("tblable_calc_form_h","1","Hypertension: blood pressure consistently above 140/90 mmHg (or treated hypertension on medication) (1)","Cha2ds2vasc();") +
simplecheckbox("tblable_calc_form_a2","2","Age ≥75 years (2)","unckeck('tblable_calc_form_a'); Cha2ds2vasc();") +
simplecheckbox("tblable_calc_form_d","1","Diabetes Mellitus (1)","Cha2ds2vasc();") +
simplecheckbox("tblable_calc_form_s2","2","Prior Stroke or TIA or thromboembolism (2)","Cha2ds2vasc();") +
simplecheckbox("tblable_calc_form_v","1","Vascular disease (e.g. peripheral artery disease, myocardial infarction, aortic plaque) (1)","Cha2ds2vasc();") +
simplecheckbox("tblable_calc_form_a","1","Age 65–74 years (1)","unckeck('tblable_calc_form_a2'); Cha2ds2vasc();") +
simplecheckbox("tblable_calc_form_sc","1","Female (1)","Cha2ds2vasc();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>CHA<sub>2</sub>DS<sub>2</sub>-VASc score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); Cha2ds2vasc(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://jamanetwork.com/journals/jama/article-abstract/2293300">Lip GYH, Lane DA (2015)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
Cha2ds2vasc();
