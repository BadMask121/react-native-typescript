#! /bin/bash
case "$1" in
android)
    cd android && ./gradlew clean
    ;;
ios)
    cd ios && pod install
    ;;
*)
    cd android && ./gradlew clean
    ;;
esac

cd ..

npx react-native "run-$1"
