import img1 from '../img/remera_boca.jpg'
import img2 from '../img/remera_river.jpg'
import img3 from '../img/remera_cai.jpeg'
 const prod = [
    {   id: 1,
        name: "Remera Boca Juniors Home Kit",
        descripcion: "Camiseta homenaje a la histórica temporada de 1981, donde una de las leyendas del futbol hace su debut en el club Atlético Boca Juniors. Diseñada para jugadores y para hinchas que destilan la pasión por el Xeneize.",
        tipo_camiseta: "Local",
        corte: "Clásico",
        material: "Poliéster reciclado",
        escudo: "Termotransferido",
        articulo_color: "Power Blue",
        precio: "$17000",
        marca: "Adidas",
        img: img1,
        stock: 26
    },
    {   id: 2,
        name: "Remera River Plate Home Kit",
        descripcion:"La auténtica camiseta que usan los jugadores en el monumental. La banda roja de River Plate que se convirtió en todo un ícono.",
        tipo_camiseta:"Local",
        corte:"Clásico",
        material:"51 % poliéster reciclado, 49 % poliéster",
        escudo:"Termotransferido",
        articulo_color:"White / Active Red",
        precio: "$17000",
        marca: "Adidas",
        img: img2,
        stock: 6
     },
     {  id: 3,
        name: "Remera Independiente Home Kit",
        descripcion:"Ponetela, cerrá los ojos e imaginate que estás frente a una multitud enfervorecida en el estadio Libertadores de América.",
        tipo_camiseta:"Local",
        corte:"Clásico",
        material:"Poléster",
        escudo:"Termotransferido",
        articulo_color:"Rojo",
        precio: "$17000",
        marca: "Puma",
        img: img3,
        stock: 11
     },
]
export const getProducts=()=> {
    const data = new Promise((resolve)=> {
        resolve(prod);
    });
    return data;
}
export const getDetail=(detalle)=> {
    const data = new Promise((resolve)=> {
        const filtroDetalle = prod.filter(producto => producto.id === parseInt(detalle))
        setTimeout(() => {
            resolve(filtroDetalle[0])
        }, 2000);
    });
    return data;
}