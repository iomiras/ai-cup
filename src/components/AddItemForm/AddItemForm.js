import React, { useState } from 'react';

function AddItemForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('bearerToken');
        const data = { name, description };
        fetch('http://127.0.0.1:8000/api/buttons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="col-md-6 mx-auto mt-5">
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Description"
                        id="description"
                        style={{ height: '100px' }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <label htmlFor="description">Description</label>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddItemForm;
