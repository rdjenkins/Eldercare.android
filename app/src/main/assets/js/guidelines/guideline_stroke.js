// A standalone guideline with a mobile-first design ethos.
// Can be added in to any webpage or HTML5 app as a drop-in piece of Javascript code.
// e.g. <script src="stroke.js"></src>
// Assumes the presence of Bootstrap 4 and JQuery but will work fine without.

// NOTE - THIS FILE IS GENERATED AUTOMATICALLY BY go-scales.py
// USING THE org-mode ENCODED SOURCE FILE IN THIS FOLDER

document.write("<div id='eldercare-guideline-wrapper'>");

document.write('<h1 data-target="#glb_0" data-toggle="collapse" style="cursor: pointer;">Stroke / TIA</h1>');
document.write('<div id="glb_0" class="collapse"><p>summary adapted from the Royal College of Physicians National Stroke Guidelines 2016</p>');
document.write('</div><h2 data-target="#glb_1" data-toggle="collapse" style="cursor: pointer;">TIA</h2>');
document.write('<div id="glb_1" class="collapse"><p>aspirin 300mg immediately and assessment within 24 hours by specialist clinic</p>');
document.write('</div><h2 data-target="#glb_2" data-toggle="collapse" style="cursor: pointer;">Acute stroke</h2>');
document.write('<div id="glb_2" class="collapse"><p>urgent brain imaging at most within 1 hour of arrival at hospital</p>');
document.write('</div><h2 data-target="#glb_3" data-toggle="collapse" style="cursor: pointer;">Acute ischaemic stroke</h2>');
document.write('<div id="glb_3" class="collapse"><p>within 3 hours consider alteplase</p>');
document.write('<p>consider for combination intravenous thrombolysis amd intra-arterial clot extraction IF proximal intracranial large vessel occlusion causing a disabling neurological deficit (NIHSS score 6 or more) and the procedure can begin within 5 hours of known onset</p>');
document.write('</div><h2 data-target="#glb_4" data-toggle="collapse" style="cursor: pointer;">Acute haemorrhagic stroke</h2>');
document.write('<div id="glb_4" class="collapse"><p>in primary intracerebral haemorrhage presenting within 6 hours with systolic BP &gt; 150 mmHg treat with locally agreed protocol for BP management aiming to reduce to systolic BP &lt; 140 mmHg for 7 days unless: GCS &lt; 5, large haematoma and death expected, structural cause for haematoma, immediate surgey planned.</p>');
document.write('</div><h2 data-target="#glb_5" data-toggle="collapse" style="cursor: pointer;">Swallow assessment</h2>');
document.write('<div id="glb_5" class="collapse"><p>screen within 4 hours or arrival at hospital using validated tool by a trained healthcare professional</p>');
document.write('</div><h2 data-target="#glb_6" data-toggle="collapse" style="cursor: pointer;">Early mobilisation</h2>');
document.write('<div id="glb_6" class="collapse"><p>If medically stable within 24 hours if requires little or no assistance, or short daily mobilisations (sitting out of bed, standing or walking) starting between 24 - 48 hours if they have difficulty moving</p>');
document.write('</div><h2 data-target="#glb_7" data-toggle="collapse" style="cursor: pointer;">DVT / PE prevention</h2>');
document.write('<div id="glb_7" class="collapse"><p>intermittent pneumatic compression within 3 days of admission if immobile and continue for 30 days or until mobile / discharged</p>');
document.write('</div><h2 data-target="#glb_8" data-toggle="collapse" style="cursor: pointer;">Hydration and nutrition</h2>');
document.write('<div id="glb_8" class="collapse"><p>If unable to maintain adequate nutrition and fluids orally: refer dietition, consider for NG feeding within 24 hours of admission, assess for nasal bridle if NG tube needs frequent replacement, assessed for gastrostomy if unable to tolerate NG tube</p>');
document.write('</div><h2 data-target="#glb_9" data-toggle="collapse" style="cursor: pointer;">Blood pressure in stroke / TIA</h2>');
document.write('<div id="glb_9" class="collapse"><p>Target of below 130/80 mmHg, but if severe bilateral carotid disease then target of 140-150 mmHg systolic BP is appropriate.</p>');
document.write('</div><h2 data-target="#glb_10" data-toggle="collapse" style="cursor: pointer;">Rehabilitation intensity</h2>');
document.write('<div id="glb_10" class="collapse"><p>at least 45 minutes per day</p>');
document.write('</div><h3 data-target="#glb_11" data-toggle="collapse" style="cursor: pointer;">Source</h3>');
document.write('<div id="glb_11" class="collapse"><p><a href="https://www.strokeaudit.org/Guideline/Full-Guideline.aspx">Royal College of Physicians National Clinical Guideline for Stroke 2016</a></p>');
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
