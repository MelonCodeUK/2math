import subprocess
typeBuild = input("Выберите тип сборки\n1 - apk файл\n2 - aab файл(для google play)")
eas = subprocess.call(["where", "eas.cmd"])
if (typeBuild=="1"):
    print("сборка apk началась")
    subprocess.call([eas, "build", "-p", "android", "--profile preview", "."])
    print("Конец!")
    input()
elif (typeBuild=="2"):
    print("сборка aab началась")
    subprocess.call([eas, "build", "-p", "android", "."])
    print("Конец!")
    input()
else:
    print("выберети из того что представленно выше!")
