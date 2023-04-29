import { useState, useEffect } from 'react'
import axios from 'axios'

const Contacts = () => {

    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
      
        const obtenerContacts = async () =>{

            const url = 'https://raintonic.com/careers/es5_dataset.json';
            const result = await axios.get(url)

            setContacts(result.data)
        }

      obtenerContacts();
    },[]);

    let results = [];
    if (!search) {
        results = contacts;
    } else {
        results = contacts.filter((dato) => dato.first_name.toLowerCase().includes(search.toLocaleLowerCase())|| dato.last_name.toLowerCase().includes(search.toLocaleLowerCase()) )
    }

    const searcher = (e) => {
        setSearch(e.target.value);
    }   

    // Add favoritos

    const [ favorites , setFavorites ] = useState ( () => { const guardado = localStorage.getItem ( "datos" ); const initialValue = JSON.parse( guardado ); return initialValue || [] ; }) ;
   // const [ favorites , setFavorites ] = useState ([]) ;

    const addFav = contacto =>{
    
        if (favorites.find (item => item.id === contacto.id)) {
            
            const contacts = favorites.map(item => item.id ===contacto.id ? { ...item, quantity: item.quantity + 1 }
                : item)

            return setFavorites([...contacts ])
        } 

        setFavorites([...favorites, contacto])
    }   

    useEffect(() => {
        localStorage.setItem('datos', JSON.stringify(favorites));
    }, [favorites]);  

    console.log(favorites);


  return (

    <div className="overflow-x-auto w-full pt-16">
        <div className="pb-10">
            <input value={search} onChange={searcher} type="text" placeholder="Search Contact" className="input input-bordered w-full max-w-xs" />
        </div>
        <table className="table w-full">
            <thead>
                <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>Phone number</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                { results.map((contactos, i) => {
                    
                        return (
                            <tr key={i}>
                            <td>
                                <div className="flex items-center space-x-3">
                                <div className="avatar">
                                </div>
                                <div>
                                    <div className="font-bold">{contactos.first_name}</div>
                                    <div className="text-sm opacity-50">{contactos.gender}</div>
                                </div>
                                </div>
                            </td>
                            <td>
                                {contactos.last_name}
                                <br/>
                                <span className="badge badge-ghost badge-sm">{contactos.email}</span>
                            </td>
                            <td>{contactos.phone_number}</td>
                            <th>
                                <button onClick={ () => addFav(contactos) } className="btn btn-ghost btn-xs">Añadir a Favoritos</button>
                            </th> 
                            </tr>
                        ) 
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}
export default Contacts