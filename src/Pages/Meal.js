import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";

export default function Meal() {

    const [data, setData] = useState([]);
    const { category } = useParams();
    const { meal } = useParams();

    useEffect(() => {
        const detailMeals = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
            const data = await response.data.meals[0];
            console.log(data);
    
            setData(data);
        };
        detailMeals();
    }, [meal])

    return (
        <>
            <div className="container text-start mt-4 fs-6">
                <div className="justify-content-start">
                    <a className="nav-link me-2" href="/" style={{ display: "inline-block", whiteSpace: "nowrap" }}><HiHome className="me-2"/>Home</a>
                    <IoChevronForward className="me-2" style={{ display: "inline-block", whiteSpace: "nowrap" }} />
                    <a className="nav-link me-2" href={`/${data.strCategory}`} style={{ display: "inline-block", whiteSpace: "nowrap" }}>{data.strCategory}</a>
                    <IoChevronForward  className="me-2" style={{ display: "inline-block", whiteSpace: "nowrap" }} />
                    <span className="nav-link text-black-50" style={{ display: "inline-block", whiteSpace: "nowrap" }}>{data.strMeal}</span>
                </div>
            </div>
            <h1 className="mt-5 fw-bolder" style={{ fontFamily: "Playfair Display" }}>{data.strMeal}</h1>
            <p className="text-primary mb-5">{data.strArea} Meal</p>
            <div className="container text-center mb-5">
                <div className="row row-cols-1 row-cols-sm-2">
                    <div className="col">
                        <img src={data.strMealThumb} className="rounded mb-5 img-fluid" style={{ width: '100%' }}/>
                    </div>
                    <div className="col">
                        <h3>Recipes</h3>
                        <div className="container text-start mt-4 mb-5">
                            <div className="row row-cols-2">
                                    <li className={`${data.strIngredient1}` ? "col" : "d-none"}>{data.strMeasure1} {data.strIngredient1}</li>
                                    <li className={`${data.strIngredient2}` ? "col" : "d-none"}>{data.strMeasure2} {data.strIngredient2}</li>
                                    <li className={`${data.strIngredient3}` ? "col" : "d-none"}>{data.strMeasure3} {data.strIngredient3}</li>
                                    <li className={`${data.strIngredient4}` ? "col" : "d-none"}>{data.strMeasure4} {data.strIngredient4}</li>
                                    <li className={`${data.strIngredient5}` ? "col" : "d-none"}>{data.strMeasure5} {data.strIngredient5}</li>
                                    <li className={`${data.strIngredient6}` ? "col" : "d-none"}>{data.strMeasure6} {data.strIngredient6}</li>
                                    <li className={`${data.strIngredient7}` ? "col" : "d-none"}>{data.strMeasure7} {data.strIngredient7}</li>
                                    <li className={`${data.strIngredient8}` ? "col" : "d-none"}>{data.strMeasure8} {data.strIngredient8}</li>
                                    <li className={`${data.strIngredient9}` ? "col" : "d-none"}>{data.strMeasure9} {data.strIngredient9}</li>
                                    <li className={`${data.strIngredient10}` ? "col" : "d-none"}>{data.strMeasure10} {data.strIngredient10}</li>
                                    <li className={`${data.strIngredient11}` ? "col" : "d-none"}>{data.strMeasure11} {data.strIngredient11}</li>
                                    <li className={`${data.strIngredient12}` ? "col" : "d-none"}>{data.strMeasure12} {data.strIngredient12}</li>
                                    <li className={`${data.strIngredient13}` ? "col" : "d-none"}>{data.strMeasure13} {data.strIngredient13}</li>
                                    <li className={`${data.strIngredient14}` ? "col" : "d-none"}>{data.strMeasure14} {data.strIngredient14}</li>
                                    <li className={`${data.strIngredient15}` ? "col" : "d-none"}>{data.strMeasure15} {data.strIngredient15}</li>
                                    <li className={`${data.strIngredient16}` ? "col" : "d-none"}>{data.strMeasure16} {data.strIngredient16}</li>
                                    <li className={`${data.strIngredient17}` ? "col" : "d-none"}>{data.strMeasure17} {data.strIngredient17}</li>
                                    <li className={`${data.strIngredient18}` ? "col" : "d-none"}>{data.strMeasure18} {data.strIngredient18}</li>
                                    <li className={`${data.strIngredient19}` ? "col" : "d-none"}>{data.strMeasure19} {data.strIngredient19}</li>
                                    <li className={`${data.strIngredient20}` ? "col" : "d-none"}>{data.strMeasure20} {data.strIngredient20}</li>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Instructions</h3>
                <div className="text-justify mt-4 mb-5" style={{ textAlign: "justify" }}>
                    {data.strInstructions}
                </div>
                {data.strYoutube ? (
                    <div>
                        <h3>Tutorial</h3>
                        <div className="mt-4 mb-5 mx-auto">
                            <ReactPlayer url={data.strYoutube} style={{ marginLeft: "auto", marginRight: "auto" }} controls={true} />
                        </div>
                    </div>
                ) : ''}
            </div>
        </>
    )
}