import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const LeftsideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/news-categories")
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>All categories:{categories.length}</h2>
            {categories.map((category) => (<p key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>
            ))}
        </div>
    );
};

export default LeftsideNav;