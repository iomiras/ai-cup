import React, { useState } from 'react';
import './MyItems.css';

const MyItems = () => {
    const [items, setItems] = useState([
        {
            name: 'Item 1',
            token: 'abcdefgabcdefgabcdefgabcdefgabcdefg',
            description: 'This is the description for Item 1',
            editing: false,
        },
        {
            name: 'Item 2',
            token: 'hijklmn',
            description: 'This is the description for Item 2',
            editing: false,
        },
        {
            name: 'Item 3',
            token: 'opqrstu',
            description: 'This is the description for Item 3',
            editing: false,
        },
    ]);

    const handleDescriptionChange = (event, index) => {
        const newItems = [...items];
        newItems[index].description = event.target.value;
        newItems[index].editing = true;
        setItems(newItems);
    };

    const handleSaveClick = (index) => {
        const newItems = [...items];
        newItems[index].editing = false;
        setItems(newItems);
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Token</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td style={{ maxWidth: '150px' }}>{item.token}</td>
                        <td>
                            <textarea
                                type="text"
                                className="form-control"
                                value={item.description}
                                onChange={(event) => handleDescriptionChange(event, index)}
                                rows={item.editing ? 4 : 1}
                                onFocus={(event) => {
                                    event.target.rows = 4;
                                    handleDescriptionChange({ target: { value: item.description } }, index);
                                }}
                                onBlur={(event) => (event.target.rows = 1)}
                            />
                        </td>

                        <td>
                            {item.editing ? (
                                <button className="btn btn-outline-success me-2" onClick={() => handleSaveClick(index)}>
                                    Save
                                </button>
                            ) : (
                                <button className="btn btn-primary me-2">Improve</button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MyItems;
