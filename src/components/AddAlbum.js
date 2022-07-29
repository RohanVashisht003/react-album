import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import db from '../db.json';


function AddAlbum() {
  const[album,setAlbum] = useState({
    userId:'',
    id:'',
    title:''
  });

  const{userId,id,title} = album;

  const onInputChange = (e)=>{
    setAlbum({...album,[e.target.name]:e.target.value})
  }

  const onSubmit = async(e)=>{
    e.preventDefault();
    let id = e.target.id.value;
// checking if id already exist or not
    if(checkIfPresent(db,id)){
      alert('Id already exist');
      return;
    }
// sending data to api
    fetch('https://jsonplaceholder.typicode.com/albums',{
      method:'POST',
      body:JSON.stringify(album),
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    .then((res)=>res.json())
    .then((json)=>console.log(json));
    alert("Added successfully");
  }

  const checkIfPresent = (data, id) => {
    for (let x of data.albums) {
      if (x.id == id) {
        return true;
      }
    }
  };
  return (
    <Container className='main-container'>
      <h2>Add Album</h2>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group as={Row} className='mb-3 sm-2'>
          <Row className='m-2'>
          <Form.Label column>
            User Id
          </Form.Label>
           <Form.Control type='text' placeholder='Enter User Id' name='userId' value={userId} onChange={(e) => onInputChange(e)} required/>
          </Row>
          <Row className='m-2'>
          <Form.Label column>
            Id
          </Form.Label>
           <Form.Control type='text' placeholder='Enter Id' name='id' value={id} onChange={(e) => onInputChange(e)} required/>
          </Row>
          <Row className='m-2'>
          <Form.Label column>
            Title
          </Form.Label>
           <Form.Control type='text' placeholder='Enter Title' name='title' value={title} onChange={(e) => onInputChange(e)} required/>
          </Row>
        </Form.Group>
        <Button type="submit">Add Album</Button>
      </Form>
    </Container>
  )
}

export default AddAlbum;