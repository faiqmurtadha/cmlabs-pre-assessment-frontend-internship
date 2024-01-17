import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";

export default function Category() {

    const [data, setData] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const dataMeals = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const meals = await response.data.meals;
            console.log(meals);
    
            setData(meals);
        };
        dataMeals();
    }, [])

    return (
        <>
            <div className="container text-start mt-4 fs-6">
                <div className="justify-content-start">
                    <a className="nav-link me-2" href="/" style={{ display: "inline-block", whiteSpace: "nowrap" }}><HiHome className="me-2" /> Home</a>
                    <IoChevronForward className="me-2" style={{ display: "inline-block", whiteSpace: "nowrap" }} />
                    <span className="nav-link text-black-50" style={{ display: "inline-block", whiteSpace: "nowrap" }}>{category}</span>
                </div>
            </div>
            <h1 className="my-5 fw-bolder" style={{ fontFamily: "Playfair Display" }}>{category} Meals</h1>
            <div className="container text-center mb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
                    {data.map(meal => (
                        <div className="col">
                            <Link className="card border-0 zoom" to={`/${category}/${meal.idMeal}`}>
                                <img src={meal.strMealThumb} className="card-img opacity-75" style={{ filter: "blur(3px)", WebkitFilter: "blur(3px)" }}/>
                                <div className="card-img-overlay d-flex position-absolute align-items-center justify-content-center" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                                    <h4 className="card-title text-light fw-bolder" style={{ fontFamily: "Playfair Display" }}>{meal.strMeal}</h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}