import { Component } from "react";
class Comic extends Component {
    render() {
        return (<div>
            <h4 style={{ color: "blue" }}>{this.props.comic.titulo}</h4>
            <p>{this.props.comic.descripcion}</p>
            <button onClick={ () => {
                //LLAMAMOS AL METODO DEL PADRE COMICS
                this.props.seleccionarFavorito(this.props.comic)
            }}>Seleccionar favorito</button>
            <button style={{backgroundColor:"red", color:"white"}}
            onClick={ ()=>{
                var index = parseInt(this.props.index);
                this.props.deleteComic(index);
            }}>Eliminar Comic</button>
            <img src={this.props.comic.imagen} alt={this.props.comic.descripcion} style={{width:"150px", height:"200px"}}/>
        </div>)
    }
}
export default Comic;