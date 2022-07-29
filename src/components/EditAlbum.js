import { useState} from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import {useParams } from "react-router-dom";

function EditAlbum() {
    const {id} = useParams();

    const[album,setAlbum] = useState({
        userId:'',
        title:'',
    });
    const{userId,title} = album;

    // handling value change
    const onInputChange = (e) =>{
        setAlbum({ ...album, [e.target.name]: e.target.value });
    }

    // handling form submission
    const onSubmit = async (e) => {
        e.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
        method:'PUT',
        body:JSON.stringify(album),
        headers:{
        'Content-type': 'application/json; charset=UTF-8'
      },
      })
      .then((res)=>res.json())
      .then((json)=>console.log(json));
        alert("Data updated successfully");
      };
    

  return (
    <Container className="main-container">
        <h3>Update Album</h3>
         <Form onSubmit={(e)=> onSubmit(e)}>
        <Form.Group as={Row} className='mb-3 sm-2'>
          <Row>
          <Form.Label column>
            User Id
          </Form.Label>
           <Form.Control type='text' placeholder='Enter User Id' name='userId' value={userId}  onChange={(e) => onInputChange(e)} required/>
          </Row>
          <Row>
          <Form.Label column>
            Id
          </Form.Label>
           <Form.Control type='text' placeholder='Enter Id' name='id' value={id} readOnly  required/>
          </Row>
          <Row>
          <Form.Label column>
            Title
          </Form.Label>
           <Form.Control type='text' placeholder='Enter Title' name='title' value={title}  onChange={(e) => onInputChange(e)} required/>
          </Row>
        </Form.Group>
        <Button type="submit">Update Album</Button>
      </Form>
    </Container>
  )
}

export default EditAlbum;