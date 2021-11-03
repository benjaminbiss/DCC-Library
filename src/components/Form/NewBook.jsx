import React, { useState } from 'react';
import "./NewBook.css";


const NewBook = (props) => {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 2000)
    }

    return ( <div className="wrapper">
        <h4>Create New Book</h4>
        {submitting && <div>Submitting Form...</div>}
        <form onSubmit={handleSubmit}>
            <fieldset>
                <p>Name</p>
                <input type="Book Name" />
                <p>Author</p>
                <input type="Author" />
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </div>
     );
}
 
export default NewBook;