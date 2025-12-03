import './Pokeapi.css';
import listaPokemon from './Lista Pokemon.png';
import listaLigas from './Lista Ligas.png';
import listaTipos from './Lista Tipos.png';
import datosPokemon from './Datos Pokemon.png';
import datosTipo from './Datos Tipo.png';

function Pokeapi () {
    return (
        <div className="CuerpoPokeapi">
            <h1 className="Titulo">
                Pokeapi
            </h1>
            <h2 className="Descripcion">
                Se trata de una API de Pokémon que contiene todo tipo de datos para que el usuario pueda armar su propia Pokédex.
                No solo cuenta con una lista de pokémons, sino también de tipos, de habilidades, y hasta de ligas, y el usuario puede
                consultar por id con el objetivo de recopilar los datos de un pokémon, un tipo, una habilidad, y hasta una liga.
                Asimismo, en caso de desearlo, también puede optar por traer la lista de pokémons de una sola liga o un tipo, y así
                agilizar su aplicación para evitar tiempos de carga exageradamente largos.
            </h2>
            <div className="Muestra">
                <img src={listaPokemon} alt="listaPokemon" className="Cartel" />
                <img src={listaLigas} alt="listaLigas" className="Cartel" />
                <img src={listaTipos} alt="listaTipos" className="Cartel" />
                <img src={datosPokemon} alt="datosPokemon" className="Cartel" />
                <img src={datosTipo} alt="datosTipo" className="Cartel" />
            </div>
        </div>
    )
}

export default Pokeapi;