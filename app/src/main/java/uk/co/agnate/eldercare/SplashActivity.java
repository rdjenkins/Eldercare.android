package uk.co.agnate.eldercare;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

/**
 * Created by dean on 03/10/17.
 *
 * Source: https://www.bignerdranch.com/blog/splash-screens-the-right-way/
 */

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        // finish(); // No need for this as AndroidManifest contains a noHistory flag
    }
}
