import Libros from "../Libros/Libros"
import {useState, useEffect}from 'react'


const ListaDeLibros = ()=>{


    const [libros, setLibros] = useState([])

    useEffect(() =>{
    
    
    fetch('https://api.itbook.store/1.0/new')
    .then( (respuesta)=>{
       return respuesta.json()
    })
    .then( (data)=>{
     setLibros(data.books)
    })
    },[]);
    
    return(
       <>    
           <div className="encabezado">
            <img src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/9903f41b-4ecd-40ab-acc0-44da84f4f632"/>
            <h1>Tienda de libros</h1>
            </div>
        <div className="contenedor">
            
         {libros.map( (libros,i) => <Libros key={i} data={libros} />)}
        </div>
        </>
    )
}

export default ListaDeLibros