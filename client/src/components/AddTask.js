import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleInput = (e) => {
        switch (e.target.id) {
            case "title":
                setTitle(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;

            default:
                break;
        }
    }
    return (
        <Form className="create-task">
            <h2>Create Task</h2>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control value={title} onChange={handleInput} id="title" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control as="input" id="description" value={description} onChange={handleInput} placeholder="Description" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}

export default AddTask;