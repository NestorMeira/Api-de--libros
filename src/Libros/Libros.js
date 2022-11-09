
const Libros= ({data})=>{

    const {image,title,price}=data
    return(
        <div className="contenedor-libros">
        <div className="libros">
         <img src={image} alt=""/>
         <p>{title}</p>
         <span>{price}</span>
         </div>
        </div>
    )
}

export default Libros