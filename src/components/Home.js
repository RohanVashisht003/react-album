import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import { Button} from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';


function Home() {
  let navigate = useNavigate();
  // using hooks for states
    const [albums,setAlbum] = useState([]);
   
    // loading album data from api
    useEffect(()=>{
        loadAlbums();
    },[]);

    const loadAlbums = async ()=>{
      const result = await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res)=>res.json());
      // updating state
      setAlbum(result);
      console.log(result);
    }

    // handling deletion
    const handleDeleteItem = async (id)=>{
      fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
        method:'DELETE'
      })
      .then((res)=>res.json())
      .then((json)=>console.log(json));
        alert("Deleted successfully");
    }

  return (
    <Container className='main-container'>
      <h2>Albums</h2>
        <Table striped bordered hover  className='m-5'>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                albums.map((album,index)=>(
                  <tr key={index}>
                    <th>{index+1}</th>
                    <td>{album.id}</td>
                    <td>{album.userId}</td>
                    <td>{album.title}</td>
                    <td>
                    <Button onClick={()=>{navigate(`/view/${album.id}`)}} variant='primary'
                    className='m-2'>View</Button>

                     <Button onClick={()=>{navigate(`/edit/${album.id}`)}} variant='warning'
                     className='m-2'>Update</Button>

                      <Button  onClick={() => handleDeleteItem(album.id)} variant='danger'
                      className='m-2'>Delete</Button>
                    </td>
                  </tr>
                ))
                }
            </tbody>
        </Table>
    </Container>
  )
}

export default Home;