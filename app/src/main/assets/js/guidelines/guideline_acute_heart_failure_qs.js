// A standalone guideline with a mobile-first design ethos.
// Can be added in to any webpage or HTML5 app as a drop-in piece of Javascript code.
// e.g. <script src="stroke.js"></src>
// Assumes the presence of Bootstrap 4 and JQuery but will work fine without.

// NOTE - THIS FILE IS GENERATED AUTOMATICALLY BY go-scales.py
// USING THE org-mode ENCODED SOURCE FILE IN THIS FOLDER

document.write("<div id='eldercare-guideline-wrapper'>");

document.write('<h1 data-target="#glb_0" data-toggle="collapse" style="cursor: pointer;">Acute Heart Failure</h1>');
document.write('<div id="glb_0" class="collapse"><p>Quality standards adapted from NICE QS103 2015 and CG187 2014</p>');
document.write('</div><h2 data-target="#glb_1" data-toggle="collapse" style="cursor: pointer;">1 Natriuretic peptide</h2>');
document.write('<div id="glb_1" class="collapse"><p>Adults presenting to hospital with new suspected acute heart failure have a single measurement of natriuretic peptide.</p>');
document.write('<p>Use the following thresholds to rule out the diagnosis of heart failure:</p>');
document.write('<p> BNP less than 100 ng/litre</p>');
document.write('<p> NT‑proBNP less than 300 ng/litre</p>');
document.write('</div><h2 data-target="#glb_2" data-toggle="collapse" style="cursor: pointer;">2 ECHO</h2>');
document.write('<div id="glb_2" class="collapse"><p>Adults admitted to hospital with new suspected acute heart failure and raised natriuretic peptide levels have a transthoracic doppler 2D echocardiogram within 48 hours of admission.</p>');
document.write('</div><h2 data-target="#glb_3" data-toggle="collapse" style="cursor: pointer;">3 Heart failure team</h2>');
document.write('<div id="glb_3" class="collapse"><p>Adults admitted to hospital with acute heart failure have input within 24 hours of admission from a dedicated specialist heart failure team.</p>');
document.write('</div><h2 data-target="#glb_4" data-toggle="collapse" style="cursor: pointer;">4 Beta-blocker</h2>');
document.write('<div id="glb_4" class="collapse"><p>Adults with acute heart failure due to left ventricular systolic dysfunction are started on, or continue with, beta‑blocker treatment during their hospital admission. (Unless they have a heart rate less than 50 beats per minute, second or third degree atrioventricular block, or shock.)</p>');
document.write('<p>Ensure that the person\'s condition is stable for typically 48 hours after starting or restarting beta‑blockers and before discharging from hospital.</p>');
document.write('</div><h2 data-target="#glb_5" data-toggle="collapse" style="cursor: pointer;">5 ACE inhibitors and aldosterone antagonist</h2>');
document.write('<div id="glb_5" class="collapse"><p>Adults admitted to hospital with acute heart failure and reduced left ventricular ejection fraction are offered an angiotensin‑converting enzyme (ACE) inhibitor and an aldosterone antagonist.</p>');
document.write('<p>Offer an angiotensin‑converting enzyme inhibitor (or angiotensin receptor blocker if there are intolerable side effects) and an aldosterone antagonist during hospital admission to people with acute heart failure and reduced left ventricular ejection fraction. If the angiotensin‑converting enzyme inhibitor (or angiotensin receptor blocker) is not tolerated an aldosterone antagonist should still be offered.</p>');
document.write('</div><h2 data-target="#glb_6" data-toggle="collapse" style="cursor: pointer;">6 Follow-up</h2>');
document.write('<div id="glb_6" class="collapse"><p>Adults with acute heart failure have a follow‑up clinical assessment by a member of the community- or hospital‑based specialist heart failure team within 2 weeks of hospital discharge.</p>');
document.write('</div><h3 data-target="#glb_7" data-toggle="collapse" style="cursor: pointer;">Source</h3>');
document.write('<div id="glb_7" class="collapse"><p><a href="https://www.nice.org.uk/guidance/qs103/chapter/List-of-quality-statements">NICE Quality standard QS103 December 2015</a></p>');
document.write('<p><a href="https://www.nice.org.uk/guidance/cg187">NICE Acute heart failure: diagnosis and management. Clinical guideline CG187 October 2014</a></p>');
document.write('</div>');


document.write("</div>");//  end of 'eldercare-guideline-wrapper'

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("Great! jQuery present");
        $('#glb_0').collapse('show');
    } else {
        // jQuery is not loaded
        console.log("No jQuery");
    }
}
