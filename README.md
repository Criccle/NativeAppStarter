# Native App Starter

The Native App Starter (or NAS :-) ) can start an already installed application on your mobile / tablet device from within your Mendix installation
Think Skype, games, the store itself.

## Contributing

For more information on contributing to this repository visit [Contributing to a GitHub repository](https://world.mendix.com/display/howto50/Contributing+to+a+GitHub+repository)!

## Typical usage scenario

Add the widget to a dataview / templategrid and select the attribute which holds the (Android) packagename of the app you want to start.

Build for phonegap and be sure to include the lampa startapp plugin to your phonegap build config.xml:

        <gap:plugin name="com.lampa.startapp" source="npm" version="0.1.4" />

If you need any help regarding to building your app using Phonegap, and customizing the buildpackage, I suggest visiting [Customizing PhoneGap Build packages](https://world.mendix.com/display/refguide5/Customizing+PhoneGap+Build+packages)!

 
## Description

This widget uses the lampa startapp phonegap plugin to allow you to start already installed apps from within your Mendix Application


