// меню має 5 менюшек:
// 1- lvls
// 2-загальні тести:
//      1-спід тест(треба як умого швидше пройти кількіть завдань)
//      2- це неначе бескінечний lvl, у якому треба пройти як умого дальніше
// 3- це пошук правил
// 4- мій акканут(лвл в перщій вкладці, класс, спід тест, бескінечний лвл, таблиця найкрашчих результатів)
// 5- про додаток
import { Text, View, Animated, Image , Button, ScrollView } from 'react-native';
import {navigation} from './../app.json'


const tabBarData = [{
    "name":"levels"
},{ 
    "name":"testes"
},{
    "name":"tipp"
}, {
    "name":"konto"
}, {
    "name":"infoApp"
}
]



export function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>123</Text>
        </View>
    )
}