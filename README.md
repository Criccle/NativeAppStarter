# Native App Starter

The Native App Starter (or NAS :-) ) can start an already installed application on your mobile / tablet device from within your Mendix installation
Think Skype, games, the store itself.

## Contributing

For more information on contributing to this repository visit [Contributing to a GitHub repository](https://world.mendix.com/display/howto50/Contributing+to+a+GitHub+repository)!

## Notes before installation

This plugin relies on the "lampa startapp" PhoneGap Plugin. Using this widget requires you to edit your PhoneGap config.xml file to make use of the lampa plugin, by adding the following line of code.

        <gap:plugin name="com.lampa.startapp" source="npm" version="0.1.4" />

If you need any help regarding customizing the PhoneGap package, please visit [Customizing PhoneGap Build packages](https://world.mendix.com/display/refguide5/Customizing+PhoneGap+Build+packages)!

## Typical usage scenario

Add the widget to a dataview / templategrid

### Android
Select the attribute which holds the (Android) packagename of the app you want to start. The Android Package Name can be easily found by browsing to the Play Store on your desktop and searching for the required app. The Address bar shows something like 
    
    https://play.google.com/store/apps/details?id=com.mendix.MendixDeveloperApp

where com.mendix.MendixDevelopeApp is the package name.

If you only want to open a browser window with a URL, you can use the properties 'Browser Only' and 'Browser URL'. This will open the system browser with the speficied URL instead of the built-in Cordova browser, which isn't all too user-friendly.

### iOS

iOS uses a different way to handle external app requests. They use URI schemes for example: 

    twitter://

Besides this, Apple requires you to whitelist each individual URI in the -Info.plist under the LSApplicationQueriesSchemes key file like so:

    <key>LSApplicationQueriesSchemes</key>
        <array>
            <string>instagram</string>
        </array>

Note that I haven't been able to test any of this, so iOS is currently not actively supported. If you do have the ability to test this and fix any bugs in the iOS code, feel free to do so and issue a pull request!

## Properties

The widget has three tabs:

* General
    - Caption of the generated button
    - Boolean whether to check for installation
* Android
    - Complete Android Package Name
    - Browser only toggle if you only want to open a URL
    - Browser URL 
* iOS
    - Complete URI scheme

By default the generated button has the following classes:

     btn btn-default startButton

with those you can style away! :-)

## Description

This widget uses the lampa startapp phonegap plugin to allow you to start already installed apps from within your Mendix Application


