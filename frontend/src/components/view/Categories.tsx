import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { New } from ".";

const Categories = () => {
    const { data: categories } = useQuery({
        queryKey: ["CATEGORY_LIST"],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/api/v1/categories');
            return data;
        },
        staleTime: 60000,
    })
    console.log(categories)
    return (
        <section className="news">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading__title">Categories</h2>
                </div>
                <div>
                    {categories?.map((category: { _id?: number; name: string }) => (
                        <div key={category._id}>
                            <hr />
                            <h3>
                                <Link style={{textDecoration: 'none', color: 'black'}} to={`/detailcategory/${category._id}`}>{category.name}</Link>
                            </h3>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <New/>
        </section >
       
    )
}

export default Categories