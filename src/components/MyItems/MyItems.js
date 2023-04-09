import React, { useState, useEffect } from 'react';
import './MyItems.css';
import Modal from '../Modal/Modal';

const MyItems = () => {
    const [items, setItems] = useState([
        {
            name: '',
            token: '',
            description: '',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [cohereAIResponse, setCohereAIResponse] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('bearerToken');

        fetch('http://127.0.0.1:8000/api/buttons', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleImproveClick = (item) => {
        const token = localStorage.getItem('bearerToken');
        setCurrentItem(item)
        fetch(`/api/buttons/improve`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ token: item.token }),
        })
            .then((response) => response.json())
            .then((data) => {
                setShowModal(true);
                setCohereAIResponse(data['generations']['text']);
            })
            .catch((error) => console.error(error));
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentItem(null);
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Token</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody className={showModal ? 'dark' : ''}>
                    {items.map((item, id) => (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.token}</td>
                            <td>
                                <div>{item.description}</div>
                            </td>

                            <td>
                                <button type='button' className="btn btn-primary me-2" onClick={() => handleImproveClick(item)}>
                                    Improve
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {currentItem && (
                <Modal showModal={showModal} closeModal={handleCloseModal} title={`${currentItem.name} improvement recommendations: `}>
                    <p>{cohereAIResponse}</p>
                </Modal>
            )}
        </div>
    )
}

export default MyItems;
