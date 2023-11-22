import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(resp => resp.json())
        .then(resp => setData(resp));
    }, [refresh]);

    const handleSubmit = (e) => {
        e.preventDefault();

        //Duomenų persiuntimas naudojant fetch funkciją

        // const form = new FormData(e.target);
        // const data = {};
        // for(const value of form.entries()) {
        //     data[value[0]] = value[1];
        // }

        // fetch('http://localhost:3000/posts', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: new URLSearchParams(data)
        // })
        // .then(res => console.log(res));

        //Duomenų persiuntimas naudojant axios
        const form = new FormData(e.target);
        const data = {};

        for(const value of form.entries()) {
            data[value[0]] = value[1];
        }

        axios.post('http://localhost:3000/posts', data)
        .then(resp => console.log(resp))
        .finally(() => setRefresh(!refresh));
    }

    return (
        <>
            <form 
                className="mb-5"
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Įveskite pavadinimą" 
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        name="author" 
                        placeholder="Įveskite autorių" 
                        className="form-control"
                    />
                </div>
                <button 
                    className="btn btn-success"
                >Išsaugoti</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pavadinimas</th>
                        <th>Autorius</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(value => 
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.author}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}