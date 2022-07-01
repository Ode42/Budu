import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Home";

export default function BuduRouter () {
    return (
        <div className="router">
            <Router>
                <Routes>
                <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}