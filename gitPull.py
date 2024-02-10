import subprocess
import datetime
# onCls = input("cls?\ny/n\n")
# if onCls == "y":
#     subprocess.call(['cls'])
print("Выгрузка начата!")
subprocess.call(['git', 'pull', 'origin', 'main'])
subprocess.call(['git', 'add', '.'])
comment = input("Комментарий:")
subprocess.call(['git', 'commit', '-m', f'2math 0.0.1 alpha, data: {datetime.datetime.now().strftime("%Y-%m-%d_%H:%M:%S")} #{comment}'])
subprocess.call(['git', 'push', 'origin'])
# if onCls == "y":
#     subprocess.call(['cls'])
print("Конец!")