import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackRoutes } from './stackRoutes';

export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}