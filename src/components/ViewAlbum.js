import React, { useEffect, useState } from 'react';
import {useParams } from "react-router-dom";
import axios from "axios";
import { Badge, Container, Form, Row} from 'react-bootstrap';

function ViewAlbum() {
  // getting id from url
    const{id} = useParams();
    
    const[album,setAlbum] = useState({
        userId:'',
        title:'',
    });

    const{userId,title} = album;
    
    useEffect(()=>{
        loadAlbums();
    },[]);

    const loadAlbums = async()=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
        setAlbum(res.data); 
    }
    
  return (
    <Container className='main-container'>
      <h3>View Album</h3>

      <Form>
        <Form.Group as={Row} className='m-5'>
          <Row className='m-2 text-center'>
            <h3>
            <Badge bg="secondary" >User Id</Badge>
            </h3>
            <Form.Control type='text' value={id} readOnly/>
          </Row>

          <Row className='m-2 text-center'>
            <h3>
            <Badge bg="secondary" >Id</Badge>
            </h3>
            <Form.Control type='text' value={userId} readOnly/>
          </Row>

          <Row className='m-2 text-center'>
          <h3>
            <Badge bg="secondary" >Title</Badge>
            </h3>
            <Form.Control type='text' value={title} readOnly/>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default ViewAlbum;