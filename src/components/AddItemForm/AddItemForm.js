import React from 'react';

function AddItemForm() {
    return (
        <div className="col-md-6 mx-auto mt-5">
            <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Description" id="description" style={{ height: '100px' }}></textarea>
                    <label htmlFor="description">Description</label>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddItemForm;
