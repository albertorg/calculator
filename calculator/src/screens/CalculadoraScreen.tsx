import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc';
import { style } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const { 
        numeroAnterior,
        numero,
        clean,
        positiveNegative,
        btnDelete,
        btnDividir,
        makeNumber,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora();

    return (
        <View style={ style.calContainer }>
            {
                (numeroAnterior !== '0') && (
                    <Text style={style.smallResult}>{numeroAnterior}</Text>
                )
            }
            
            <Text 
                style={ style.result }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            > { numero } </Text>

            <View style={ style.fila }>
                <ButtonCalc text='C' color='#9b9b9b' textColor='black' action={clean}/>
                <ButtonCalc text='+/-' color='#9b9b9b' textColor='black' action={positiveNegative} />
                <ButtonCalc text='del' color='#9b9b9b' textColor='black' action={btnDelete} />
                <ButtonCalc text='/' color='#ff9427' action={ btnDividir} />
            </View>

            <View style={ style.fila }>
                <ButtonCalc text='7' action={ makeNumber }/>
                <ButtonCalc text='8' action={makeNumber} />
                <ButtonCalc text='9' action={makeNumber} />
                <ButtonCalc text='X' color='#ff9427' action={btnMultiplicar} />
            </View>

            <View style={ style.fila }>
                <ButtonCalc text='4' action={makeNumber} />
                <ButtonCalc text='5' action={makeNumber} />
                <ButtonCalc text='6' action={makeNumber} />
                <ButtonCalc text='-' color='#ff9427' action={btnRestar} />
            </View>

            <View style={ style.fila }>
                <ButtonCalc text='1' action={makeNumber} />
                <ButtonCalc text='2' action={makeNumber} />
                <ButtonCalc text='3' action={makeNumber} />
                <ButtonCalc text='+' color='#ff9427' action={btnSumar} />
            </View>

            <View style={ style.fila }>
                <ButtonCalc text='0' ancho action={makeNumber} />
                <ButtonCalc text='.' action={makeNumber} />
                <ButtonCalc text='=' color='#ff9427' action={calcular} />
            </View>

        </View>
    )
}

{/* #2d2d2d gris oscuro */ }
{/* #ff9427 naranja */ }
{/* #9b9b9b fris claro */ }