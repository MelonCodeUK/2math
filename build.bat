@echo off
chcp 65001 > nul
set /p typeBuild="Выберите тип сборки`n1 - apk файл`n2 - aab файл(для google play): "

if "%typeBuild%"=="1" (
    echo сборка apk началась
    eas build -p android --profile preview .
    echo Конец!
    pause
) if "%typeBuild%"=="2" (
    echo сборка aab началась
    eas build -p android .
    echo Конец!
    pause
) else (
    echo выберети из того что представленно выше!
    pause
)
