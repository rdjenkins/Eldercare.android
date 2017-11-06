// 6-CIT Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 5/Nov/2017 Dean Jenkins

// This code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/



function CIT6()
{
    var year=getvaluefromradio("tblable_calc_form_year");
    var month=getvaluefromradio("tblable_calc_form_month");
    var hour=getvaluefromradio("tblable_calc_form_hour");
    var revcount=getvaluefromradio("tblable_calc_form_revcount");
    var revmonth=getvaluefromradio("tblable_calc_form_revmonth");
    var phrase=getvaluefromradio("tblable_calc_form_phrase");

    var score = parseFloat(year + month + hour + revcount + revmonth + phrase);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score<7) {
        summaryhtml = summaryhtml + "Normal.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score==8 || score==9) {
        summaryhtml = summaryhtml + "Mild impairment probably refer.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score>9) {
        summaryhtml = summaryhtml + "Significant cognitive impairment. Refer.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_year");
    checkradio("tblable_calc_form_year0");
    uncheckradio("tblable_calc_form_month");
    checkradio("tblable_calc_form_month0");
    uncheckradio("tblable_calc_form_hour");
    checkradio("tblable_calc_form_hour0");
    uncheckradio("tblable_calc_form_revcount");
    checkradio("tblable_calc_form_revcount0");
    uncheckradio("tblable_calc_form_revmonth");
    checkradio("tblable_calc_form_revmonth0");
    uncheckradio("tblable_calc_form_phrase");
    checkradio("tblable_calc_form_phrase0");
}


var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("6-CIT test","Case-finding tool for mild dementia","Record errors to calculate score") +

selectradio([["tblable_calc_form_year0","0","Correct"],["tblable_calc_form_year1","4","Not correct"]],"tblable_calc_form_year","What year is it now?","CIT6();") +

selectradio([["tblable_calc_form_month0","0","Correct"],["tblable_calc_form_month1","3","Not correct"]],"tblable_calc_form_month","What month is it now?","CIT6();") +

selectradio([["tblable_calc_form_phrase0","0","No errors"],["tblable_calc_form_phrase1","2","1 error"],["tblable_calc_form_phrase2","4","2 errors"],["tblable_calc_form_phrase3","6","3 errors"],["tblable_calc_form_phrase4","8","4 errors"],["tblable_calc_form_phrase5","10","5 errors"]],"tblable_calc_form_phrase","Memory phrase - repeat after me. John, Brown, 42, West Street, Bedford. (recall and score <b>at end of test</b>)","CIT6();") +

selectradio([["tblable_calc_form_hour0","0","Correct"],["tblable_calc_form_hour1","3","Not correct"]],"tblable_calc_form_hour","What time is it now (to within 1 hour)?","CIT6();") +

selectradio([["tblable_calc_form_revcount0","0","No errors"],["tblable_calc_form_revcount1","2","1 error"],["tblable_calc_form_revcount2","4","2+ errors"]],"tblable_calc_form_revcount","Count backwards from 20 to 1","CIT6();") +

selectradio([["tblable_calc_form_revmonth0","0","No errors"],["tblable_calc_form_revmonth1","2","1 error"],["tblable_calc_form_revmonth2","4","2+ errors"]],"tblable_calc_form_revmonth","Say months in reverse order","CIT6();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>6-CIT test score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); CIT6(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://dx.doi.org/10.1002/(SICI)1099-1166(199911)14:11<936::AID-GPS39>3.0.CO;2-1">Brooke & Bullock (1999)</a>, <a href="http://6cit.co.uk/test/">Bullock & Bullock (2017)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
CIT6();
