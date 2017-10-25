# eldercare

Built with Bootstrap 4, HTML5, Font Awesome, Python, org-mode, Orgnode, Android Studio, Apple Xcode. Where possible all original scientific works have been cited with a journal reference and all registered trademarks and copyright acknowledged.

This compilation of educational material and its source code is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>

A live web demo is available here <a href="https://agnate.co.uk/ec/">https://agnate.co.uk/ec/</a>

# apps

The HTML5 app is also available built into mobile apps with the source code of the apps available as Open Source on github.

The <a href="https://play.google.com/store/apps/details?id=uk.co.agnate.eldercare">Android app</a> and its source code <a href="https://github.com/rdjenkins/eldercare.android">eldercare.android</a>.

The <a href="https://itunes.apple.com/us/app/eldercare/id1299533427">iOS App</a> and its source code <a href="https://github.com/rdjenkins/eldercare.ios">eldercare.ios</a>.

Contributors:
<a href="https://about.me/deanjenkins">Dean Jenkins</a>

# scale and guideline build script - go-scales.py

go-scales.py is a build script written in Python which runs from the command line to create or update the scales and guidelines HTML and Javascript files within the App before being released to a browser or an App. It is a developer tool.

The Javascript scales and guidelines are designed to be standalone and not require internet access. They could be used on a mobile device for example that doesn't have network access - such as a 'bring your own device' to clinical settings or clinic-based pre-programmed tablets or small screens. The scales and guidelines are stored in js/scales and js/guidelines and the static HTML pages that call them are all built on templates to make it easier to maintain. The scales are handcrafted but the guideline javascript is built with a tool based on org-mode encoding.

The python script go-scales.py is a tool that builds the static HTML pages for the scales and guidelines from a list of names. It first checks that a Javascript file exists for that scale name in js/scales/ and then creates or overwrites the HTML file scale_scalename.html. It creates the Javascipt for the guidelines similarly in js/guidelines building them from the org-node encoded file in that folder of the same name. Then it offers to copy the entire HTML5 app for eldercare into the Android Studio Project's asset folder (modify this target folder in go-scales.py for your Android app folder if building eldercare into an Android App).
