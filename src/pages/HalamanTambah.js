import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import HalamanTambahMasuk from "../components/HalamanTambahBaruMasuk";

function HalamanTambahBaru() {
    const navigate = useNavigate();
    const onTambahCatatanHandler = (note) => {
        addNote(note);
        navigate('/');
    };

    return (
        <div className="add-new-page">
            <HalamanTambahMasuk addNote={onTambahCatatanHandler} />
        </div>
    );
}

export default HalamanTambahBaru;