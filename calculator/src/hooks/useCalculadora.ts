import { useRef, useState } from "react"

enum Operadores {
    sumar, resta, multiplicar, dividir
}

export const useCalculadora = () => {


    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const clean = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const makeNumber = (numeroTexto: string) => {
        // dont accept double dot
        if (numeroTexto === '.' && numero.includes('.')) {
            return
        }

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
            }
        } else {
            setNumero(numero + numeroTexto)
        }
    }

    const btnDelete = () => {
        let negativo = ''
        let numeroTemp = numero

        if (numero.includes('-')) {
            negativo = '-'
            numeroTemp = numero.substring(1)
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1))
        } else {
            setNumero('0')
        }
    }

    const cambiarPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const positiveNegative = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    const btnDividir = () => {
        cambiarPorAnterior()
        ultimaOperacion.current = Operadores.dividir
    }

    const btnMultiplicar = () => {
        cambiarPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }

    const btnRestar = () => {
        cambiarPorAnterior()
        ultimaOperacion.current = Operadores.resta
    }

    const btnSumar = () => {
        cambiarPorAnterior()
        ultimaOperacion.current = Operadores.sumar
    }

    const calcular = () => {
        const num1 = Number(numeroAnterior)
        const num2 = Number(numero)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(String(num1 + num2))
                break;

            case Operadores.resta:
                setNumero(String(num1 - num2))
                break;

            case Operadores.multiplicar:
                setNumero(String(num1 * num2))
                break;

            case Operadores.dividir:
                if (num2 === 0) {
                    setNumero('Error')
                } else {
                    setNumero(String(num1 / num2))
                }
                break;

        }

        setNumeroAnterior('0')
    }


    return {
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
        calcular
    }

}
