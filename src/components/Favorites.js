import { useEffect, useState } from "react";

const Favorites = () => {

    const [items, setItems] = useState([]);

        useEffect(() => {
        const items = JSON.parse(localStorage.getItem('datos'));
        if (items) {
        setItems(items);
        }
    }, []);

  return (
    <div className="overflow-x-auto w-full pt-16">
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
                { items.map((contactos, i) => {
                        return(
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
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}
export default Favorites