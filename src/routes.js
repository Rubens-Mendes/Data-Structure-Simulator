import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Info from './pages/Info/Information';
import Tuto from './pages/Info/Tuto';
import SimuLDDE from './pages/Simulacoes/SimuLDDE'
import SimuFila from './pages/Simulacoes/SimuFila'
import globalStyles from '../globalStyles';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Routes() {
    const ref = React.useRef(null);
    return(
        <NavigationContainer ref={ref}>
            <AppStack.Navigator
                screenOptions={{
                    headerStyle: {
                      backgroundColor: '#0d111e',
                    },
                    headerTitleStyle: {
                        color: '#BCCCC2',
                        fontFamily: 'OpenSans-SemiBold',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#BCCCC2',
                  }}
            >
                <AppStack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
                <AppStack.Screen name = "Tutorial" component={Tuto} options={{ 
                        title: 'Tutorial',
                        headerRight:()=>(
                            <TouchableOpacity onPress={()=> ref.current?.navigate('Home')}>
                                <Feather style={globalStyles.homeIcon} name="home" size={30}/>
                            </TouchableOpacity>
                            )
                    }}/>
                <AppStack.Screen name = "Info" component={Info} options={{ 
                        title: 'Info',
                        headerRight:()=>(
                            <TouchableOpacity onPress={()=> ref.current?.navigate('Home')}>
                                <Feather style={globalStyles.homeIcon} name="home" size={30}/>
                            </TouchableOpacity>
                            )
                    }}/>
                <AppStack.Screen name = "SimuLDDE" component={SimuLDDE} options={{ 
                        title: 'Simulação LDDE',
                        headerRight:()=>(
                            <TouchableOpacity onPress={()=> ref.current?.navigate('Home')}>
                                <Feather style={globalStyles.homeIcon} name="home" size={30}/>
                            </TouchableOpacity>
                            )
                    }}/>
                <AppStack.Screen name = "SimuFila" component={SimuFila} options={{ 
                        title: 'Simulação Fila',
                        headerRight:()=>(
                            <TouchableOpacity onPress={()=> ref.current?.navigate('Home')}>
                                <Feather style={globalStyles.homeIcon} name="home" size={30}/>
                            </TouchableOpacity>
                            )
                    }}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}