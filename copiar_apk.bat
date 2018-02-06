del congresso_2018.apk
copy /y app\platforms\android\build\outputs\apk\android-release-unsigned.apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore congresso_2018.keystore android-release-unsigned.apk alias_name
%ANDROID_HOME%\build-tools\25.0.2\zipalign -v 4 android-release-unsigned.apk congresso_2018.apk
