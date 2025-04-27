import React, { useState } from 'react';
import { uploadCyclone } from '../api/api';

const UploadPage = ({ token }) => {
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("No file selected!");
            return;
        }
        try {
            await uploadCyclone(file, token);
            alert("Upload successful!");
        } catch (err) {
            alert("Upload failed");
        }
    };

    return (
        <div>
            <h2>Upload New Cyclone</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadPage;
