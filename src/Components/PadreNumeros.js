import { Component } from 'react'
import HijoNumero from './HijoNumero'

export class PadreNumeros extends Component {
    state = {
        numeros: [5, 11], //esto pueden ser aleatorios desde el inicio
        suma:0
    }
    generarNumero = () => {
        let aleatorio = parseInt((Math.random() * 500) + 1);
        this.state.numeros.push(aleatorio)
        this.setState({
            numeros: this.state.numeros
        })
    }
    sumarNumeros = (numero) => {
        console.log("numero selec "+numero)
        this.setState({
            suma: this.state.suma+numero
        })
    }
    render() {
        return (<div>
            <h1>Padre Números</h1>
            <h3 style={{ backgroundColor: "yellow" }}>La suma es: {this.state.suma}</h3>
            <button onClick={this.generarNumero}>Generar número</button>
            {
                this.state.numeros.map((numero, index)=>{
                    return(<HijoNumero numero={numero} key={index} sumarNumeros={this.sumarNumeros}/>)
                })
            }
        </div>)
    }
}

export default PadreNumeros