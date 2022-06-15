import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from '../theme/appTheme';

interface Props {
    text: string
    color?: string
    textColor?: string
    ancho?: boolean
    action: (numeroTexto: string) => void
}

export const ButtonCalc = ({ 
                                text, 
                                color='#2d2d2d', 
                                textColor='white', 
                                ancho=false,
                                action 
                            }: Props) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={ () => action(text) }>
            <View style={{
                ...style.button,
                backgroundColor: color,
                width: ancho ? 180 : 80,
            }}>
                <Text style={{
                    ...style.buttonText,
                    color: textColor
                }}>
                    {text}</Text>
            </View>    
        </TouchableOpacity>
        
    )
}


