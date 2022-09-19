import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get")
        console.log(response)
        setData(response?.data)
    }

    useEffect(() => {
        return () => {
            loadData()
        };
    }, [])

  return (
    <div style={{marginTop:"150px"}}>
        <Link to='/addcontact'>
        <button type="" className='btn btn-contact'> Add Contact </button>
        </Link>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Contact</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index) => {
                    console.log(item,"data")
                    return(
                    <tr key={item.id}>
                        <th scope='row'>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                            <Link to={`/update/${item.id}`}>
                                <button className='btn btn-edit'>Edit</button>
                            </Link>
                            <button className='btn btn-delete'> Delete </button>
                            <Link to={`/view/${item.id}`}>
                                <button className='btn btn-view'>View</button>
                            </Link>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home