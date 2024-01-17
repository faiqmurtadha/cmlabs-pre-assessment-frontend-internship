import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import background from '../background.jpg';
import "../Home.css";


export default function Home() {

    const [data, setData] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        const dataCategories = async () => {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            const categories = await response.data.categories;
            console.log(categories);

            setData(categories);
        };
        dataCategories();
    }, []);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundPosition: "bottom", opacity: "0.7", height: "100vh", width: "100%" }}>
                <div style={{ position: "relative", top: "15%" }}>
                    <h1 className="display-2 fw-bold text-black mx-auto opacity-100" style={{ fontFamily: "Playfair Display", width: "55%" }}>Fun and Easy to Become Master Cook</h1>
                    <button className="btn btn-outline-dark mt-4" onClick={handleClick}>Explore Recipe</button>
                </div>
            </div>
            <h1 ref={ref} className="my-5 fw-bolder" style={{ fontFamily: "Playfair Display" }}>Categories</h1>
            <div className="container text-center mb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
                    {data.map(category => (
                        <div className="col">
                            <Link key={category.idCategory} className="card border-0 zoom" to={`/${category.strCategory}`}>
                                <img src={category.strCategoryThumb} className="card-img opacity-75" style={{ filter: "blur(3px)", WebkitFilter: "blur(3px)", backgroundColor: "rgba(94,154,174,0.4)" }}/>
                                <div className="card-img-overlay d-flex position-absolute align-items-center justify-content-center">
                                    <h3 className="card-title text-dark fw-bolder" style={{ fontFamily: "Playfair Display" }}>{category.strCategory}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}