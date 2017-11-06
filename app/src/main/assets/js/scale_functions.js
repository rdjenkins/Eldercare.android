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

function simpleheader(text) {
    var html = '    <div class="row1">' +
'        <div class="col0">' +
'            <p class="simpleheader">' + text + '</p>' +
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

// get value from Yes / No / Don't know selector
// 'positive' defines which value to consider positive from a scoring perspective
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

// Yes / No / Don't know type selector
function yndkradio(varidy,varidn,variddk,varname,question,onclick) {
    var html = '    <div>' +
'        <div>' +
'            <p>' + question + '</p>' +
'        </div>' +
'        <div class="col1 yndk">' +
'            <input id="' + varidy + '" name="' + varname + '" value="1" onclick="'+ onclick +'" type="radio">' +
'            <label for="' + varidy + '">Yes</label>' +
'            <input id="' + varidn + '" name="' + varname + '" value="-1" onclick="'+ onclick +'" type="radio">' +
'            <label for="' + varidn + '">No</label>' +
'            <input id="' + variddk + '" name="' + varname + '" value="0" onclick="'+ onclick +'" type="radio">' +
'            <label for="' + variddk + '">skip</label>' +
'        </div>' +
'    </div>'
    return html;
}

// Better UX (I think) than a drop down selector. Just click the text that applies.
// selectorarray is array of [id,value,text],[id,value,text]
function selectradio(selectorarray,varname,question,onclick) {
    var selectorhtml = "";
    for (var i = 0; i < selectorarray.length; i++) {
        if (selectorarray[i].length == 3) { // skip if not exactly 3 i.e. [id,value,text]
            selectorhtml = selectorhtml +
    '            <input id="' + selectorarray[i][0] + '" name="' + varname + '" value="' + selectorarray[i][1] + '" onclick="'+ onclick +'" type="radio">' +
    '            <label for="' + selectorarray[i][0] + '">' + selectorarray[i][2] + '</label>';
        }
    }

    var html = '    <div>' +
'        <div>' +
'            <p>' + question + '</p>' +
'        </div>' +
'        <div class="col1 yndk">' +
        selectorhtml +
'        </div>' +
'    </div>'
    return html;
}

