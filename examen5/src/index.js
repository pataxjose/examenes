
let objeto =[{
name :'short'
},
{name:'medias'}]

const eliminar = (producto) => {
    const productoEliminar = producto;

    const index = objeto.findIndex( x => x.name === productoEliminar );
    
    personas.splice( index, 1 );
    console.log( objeto );

  };

  const add= (producto) => {

const existe = objeto.find( x => x.name === producto );
    if (!existe){
   objeto.push(producto)

    }
    else{
        console.log('el producto ya existe')
    }
   
    console.log( objeto );

  };
  const listar= (producto) => {

    const existe = objeto.find( x => x.name === producto );
        if (existe){
       console.log('el producto', existe)
    
        }
        else{
            console.log('el producto no existe')
        }
       
        console.log( objeto );
    
      };
      