import React, { useState } from 'react';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

  
    const [error, guardarError] = useState(false);

    //extraer ciudad y País
    const { ciudad, pais } = busqueda;

    //funcion que coloca los elementos en el state
    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
        //cuando el usuario da submit al form 
        const handleSubmit = e => {
            e.preventDefault();

            //validar

            if(ciudad.trim() === '' || pais.trim() === '') {
                guardarError(true);
                return;
            }
                guardarError(false);

            //pasarlo al componente principal
                guardarConsultar(true);
        }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red accent-4 error">Todos los campos son obligatorios</p> : null}
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad" >Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais" >País: </label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block teal darken-2"
                />
            </div>
        </form>
     );
}
 
export default Formulario;