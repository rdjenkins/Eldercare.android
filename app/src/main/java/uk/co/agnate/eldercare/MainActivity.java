package uk.co.agnate.eldercare;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    public String starturl = "file:///android_asset/index.html"; // the initial page to load, located in app/src/main/assets folder
    public String loadingmessage = "Eldercare loaded";
    private WebView webview; // so the webview object is available throughout the class
    public boolean isonstarturl = true; // a flag to say if we are at the starting page
    private boolean firstpageloaded = false; // a flag for the first loading of the starturl

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // make this activity full screen
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        // add a webview
        webview = new WebView(this);
        // enable javascript (ignore the security warning)
        webview.getSettings().setJavaScriptEnabled(true);
        // set a webclient so we can listen for when pages are fully loaded
        webview.setWebViewClient(new WebViewClient() {
            // listen to the loading of each page
            public void onPageFinished(WebView view, String url) {
                // when each page loaded
                if (!firstpageloaded) {
                    setContentView(webview); // show the webview (overwriting the 'splash screen')
                    firstpageloaded = true; // set to true as setting content to the webview each time a page loads is silly
                }
                // flag true this page is the starturl
                isonstarturl = url.equals(starturl);
            }
        });
        // load the starting page starturl and hand over all
        // navigation to the HTML5 app within the app/src/main/assets folder
        webview.loadUrl(starturl);

        Toast bread = Toast.makeText(getApplicationContext(), loadingmessage, Toast.LENGTH_LONG);
        bread.show();
    } // end of onCreate()


    // enable navigating backwards in the webview
    @Override
    public void onBackPressed() {
        // Pop the browser back stack (if NOT on the starturl) or exit the activity
        if (webview.canGoBack() && !isonstarturl) {
            webview.goBack();
        }
        else {
            super.onBackPressed();
        }
    }

}
