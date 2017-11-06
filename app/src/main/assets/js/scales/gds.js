// Geriatric Depression Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 27/Oct/2017 Dean Jenkins

// The original scale is in the public domain due to it being partly the result of Federal support.
// See https://web.stanford.edu/~yesavage/GDS.html for more information.

// This code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/



function getvaluefromyndkradio(name,positive) {
    value = getvaluefromradio(name);
    if (value == positive) {
        return 1;
    }
    if (value == 0) {
        return null;
    } else {
        return 0;
    }
}


function GDS()
{
    var totalquestions = 15;
    var skipped = 0;
    var gds1=getvaluefromyndkradio("tblable_calc_form_GDS1","-1");
    if (gds1==null) { skipped = skipped + 1; }
    var gds2=getvaluefromyndkradio("tblable_calc_form_GDS2","1");
    if (gds2==null) { skipped = skipped + 1; }
    var gds3=getvaluefromyndkradio("tblable_calc_form_GDS3","1");
    if (gds3==null) { skipped = skipped + 1; }
    var gds4=getvaluefromyndkradio("tblable_calc_form_GDS4","1");
    if (gds4==null) { skipped = skipped + 1; }
    var gds5=getvaluefromyndkradio("tblable_calc_form_GDS5","-1");
    if (gds5==null) { skipped = skipped + 1; }
    var gds6=getvaluefromyndkradio("tblable_calc_form_GDS6","1");
    if (gds6==null) { skipped = skipped + 1; }
    var gds7=getvaluefromyndkradio("tblable_calc_form_GDS7","-1");
    if (gds7==null) { skipped = skipped + 1; }
    var gds8=getvaluefromyndkradio("tblable_calc_form_GDS8","1");
    if (gds8==null) { skipped = skipped + 1; }
    var gds9=getvaluefromyndkradio("tblable_calc_form_GDS9","1");
    if (gds9==null) { skipped = skipped + 1; }
    var gds10=getvaluefromyndkradio("tblable_calc_form_GDS10","1");
    if (gds10==null) { skipped = skipped + 1; }
    var gds11=getvaluefromyndkradio("tblable_calc_form_GDS11","-1");
    if (gds11==null) { skipped = skipped + 1; }
    var gds12=getvaluefromyndkradio("tblable_calc_form_GDS12","1");
    if (gds12==null) { skipped = skipped + 1; }
    var gds13=getvaluefromyndkradio("tblable_calc_form_GDS13","-1");
    if (gds13==null) { skipped = skipped + 1; }
    var gds14=getvaluefromyndkradio("tblable_calc_form_GDS14","1");
    if (gds14==null) { skipped = skipped + 1; }
    var gds15=getvaluefromyndkradio("tblable_calc_form_GDS15","1");
    if (gds15==null) { skipped = skipped + 1; }

    if (skipped == totalquestions) {
        var score = 0;    
    } else {
        var score = parseFloat(gds1 + gds2 + gds3 + gds4 + gds5 + gds6 + gds7 + gds8 + gds9 + gds10 + gds11 + gds12 + gds13 + gds14 + gds15);
    }
    if (skipped < 8 && skipped > 0) { // correct score as 'few' questions missed
        // see https://web.stanford.edu/~yesavage/GDS.html for the logic
        var rawscore = score;
        console.log("raw score = " + rawscore);
        console.log("skipped = " + skipped);
        var totalanswered = totalquestions - skipped;
        console.log("total answered = " + totalanswered); 
        console.log("score = " + rawscore + " + " + skipped + " *(" + rawscore + "/" + totalanswered + ")"); 
        score = rawscore + skipped * (rawscore / (totalquestions - skipped));
        score = Math.round(score + 0.5);
        if (score>15) { score=15; } // don't give a score of 16 by rounding up
        console.log("score  = " + score);
    }
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score<5) {
        summaryhtml = summaryhtml + "Normal, depending on age, education, complaints";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score>4 && score<9) {
        summaryhtml = summaryhtml + "Mild depression";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score>8 && score<12) {
        summaryhtml = summaryhtml + "Moderate depression";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }
    if (score>11) {
        summaryhtml = summaryhtml + "Severe depression";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    if (skipped < 8 && skipped > 0 && score != rawscore) {
        if (skipped==1) {
            summaryhtml = summaryhtml + ". (Score of " + rawscore + " corrected assuming the 1 missed question would indicate depression.)";
        } else {
            summaryhtml = summaryhtml + ". (Score of " + rawscore + " corrected assuming " + parseFloat(score - rawscore) + " of the " + skipped + " missed questions would indicate depression.)";
        }
    }
    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_GDS1");
    checkradio("tblable_calc_form_GDS1dk");

    uncheckradio("tblable_calc_form_GDS2");
    checkradio("tblable_calc_form_GDS2dk");

    uncheckradio("tblable_calc_form_GDS3");
    checkradio("tblable_calc_form_GDS3dk");

    uncheckradio("tblable_calc_form_GDS4");
    checkradio("tblable_calc_form_GDS4dk");

    uncheckradio("tblable_calc_form_GDS5");
    checkradio("tblable_calc_form_GDS5dk");

    uncheckradio("tblable_calc_form_GDS6");
    checkradio("tblable_calc_form_GDS6dk");

    uncheckradio("tblable_calc_form_GDS7");
    checkradio("tblable_calc_form_GDS7dk");

    uncheckradio("tblable_calc_form_GDS8");
    checkradio("tblable_calc_form_GDS8dk");

    uncheckradio("tblable_calc_form_GDS9");
    checkradio("tblable_calc_form_GDS9dk");

    uncheckradio("tblable_calc_form_GDS10");
    checkradio("tblable_calc_form_GDS10dk");

    uncheckradio("tblable_calc_form_GDS11");
    checkradio("tblable_calc_form_GDS11dk");

    uncheckradio("tblable_calc_form_GDS12");
    checkradio("tblable_calc_form_GDS12dk");

    uncheckradio("tblable_calc_form_GDS13");
    checkradio("tblable_calc_form_GDS13dk");

    uncheckradio("tblable_calc_form_GDS14");
    checkradio("tblable_calc_form_GDS14dk");

    uncheckradio("tblable_calc_form_GDS15");
    checkradio("tblable_calc_form_GDS15dk");
}


var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("Geriatric Depression Scale","Screening tool for depression (short version)","Select all that apply. Score may be corrected for skipped questions.") +

yndkradio("tblable_calc_form_GDS1y","tblable_calc_form_GDS1n","tblable_calc_form_GDS1dk","tblable_calc_form_GDS1","Are you basically satisfied with your life?","GDS();") +
yndkradio("tblable_calc_form_GDS2y","tblable_calc_form_GDS2n","tblable_calc_form_GDS2dk","tblable_calc_form_GDS2","Have you dropped many of your activities and interests?","GDS();") +
yndkradio("tblable_calc_form_GDS3y","tblable_calc_form_GDS3n","tblable_calc_form_GDS3dk","tblable_calc_form_GDS3","Do you feel that your life is empty?","GDS();") +
yndkradio("tblable_calc_form_GDS4y","tblable_calc_form_GDS4n","tblable_calc_form_GDS4dk","tblable_calc_form_GDS4","Do you often get bored?","GDS();") +
yndkradio("tblable_calc_form_GDS5y","tblable_calc_form_GDS5n","tblable_calc_form_GDS5dk","tblable_calc_form_GDS5","Are you in good spirits most of the time?","GDS();") +
yndkradio("tblable_calc_form_GDS6y","tblable_calc_form_GDS6n","tblable_calc_form_GDS6dk","tblable_calc_form_GDS6","Are you afraid that something bad is going to happen to you?","GDS();") +
yndkradio("tblable_calc_form_GDS7y","tblable_calc_form_GDS7n","tblable_calc_form_GDS7dk","tblable_calc_form_GDS7","Do you feel happy most of the time?","GDS();") +
yndkradio("tblable_calc_form_GDS8y","tblable_calc_form_GDS8n","tblable_calc_form_GDS8dk","tblable_calc_form_GDS8","Do you often feel helpless?","GDS();") +
yndkradio("tblable_calc_form_GDS9y","tblable_calc_form_GDS9n","tblable_calc_form_GDS9dk","tblable_calc_form_GDS9","Do you prefer to stay at home, rather than going out and doing new things?","GDS();") +
yndkradio("tblable_calc_form_GDS10y","tblable_calc_form_GDS10n","tblable_calc_form_GDS10dk","tblable_calc_form_GDS10","Do you feel you have more problems with memory than most?","GDS();") +
yndkradio("tblable_calc_form_GD11y","tblable_calc_form_GDS11n","tblable_calc_form_GDS11dk","tblable_calc_form_GDS11","Do you think it is wonderful to be alive now?","GDS();") +
yndkradio("tblable_calc_form_GDS12y","tblable_calc_form_GDS12n","tblable_calc_form_GDS12dk","tblable_calc_form_GDS12","Do you feel pretty worthless the way you are now?","GDS();") +
yndkradio("tblable_calc_form_GDS13y","tblable_calc_form_GDS13n","tblable_calc_form_GDS13dk","tblable_calc_form_GDS13","Do you feel full of energy?","GDS();") +
yndkradio("tblable_calc_form_GDS14y","tblable_calc_form_GDS14n","tblable_calc_form_GDS14dk","tblable_calc_form_GDS14","Do you feel that your situation is hopeless?","GDS();") +
yndkradio("tblable_calc_form_GDS15y","tblable_calc_form_GDS15n","tblable_calc_form_GDS15dk","tblable_calc_form_GDS15","Do you think that most people are better off than you are?","GDS();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>GDS score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); GDS(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://web.stanford.edu/~yesavage/GDS.html">Sheik et al. (1986)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
GDS();
