import { useEffect, useState } from "react";
import axios from "axios";

export const Products = () => {
    let [products, setProducts] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);

    let itemsPerPage = 10;

    // Pagination logic
    let lastIndex = currentPage * itemsPerPage;
    let firstIndex = lastIndex - itemsPerPage;
    let currentProducts = products.slice(firstIndex, lastIndex);

    let totalPages = Math.ceil(products.length / itemsPerPage);

    useEffect(() => {
        async function apiData() {
            let { data } = await axios.get("https://dummyjson.com/products");
            setProducts(data.products);
        }
        apiData();
    }, []);

    return (
        <>
            <center>
                <h1 className="mb-3 mt-3">Products Data</h1>
            </center>

            {/* Products */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    currentProducts.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                width: "180px",
                                border: "2px solid",
                                borderRadius: "5px",
                                margin: "5px",
                                padding: "5px"
                            }}
                        >
                            <img src={item.thumbnail} alt="" height={150} />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <mark>{item.price}</mark>
                        </div>
                    ))
                }
            </div>

            {/* Pagination Buttons */}
            <div style={{ textAlign: "center", margin: "20px" }}>
                {
                    [...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            style={{
                                margin: "5px",
                                padding: "5px 10px",
                                backgroundColor: currentPage === index + 1 ? "black" : "gray",
                                color: "white",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </>
    );
};








// import { useEffect, useState } from "react"
// import axios from "axios"
// export const Products=(()=>{
//     let [products,setProducts]=useState([])
//     let [currentPage, setCurrentPage] = useState(1);
//     let itemsPerPage = 10;
//     let lastIndex = currentPage * itemsPerPage;
//     let firstIndex = lastIndex - itemsPerPage;
//     let currentProducts = products.slice(firstIndex, lastIndex);
//     useEffect(()=>{
//         async function apiData() {
//             // let a=fetch("https://dummyjson.com/products")
//             let {data}= await axios.get("https://dummyjson.com/products")
            
//             // console.log(data)
//             setProducts(data.products)
//             // let b= await a;
//             // let c=await b.json();
//             // console.log(a)
//             // let {products}=await b.json();
//             // console.log(products)
//             // setProducts(products)
//         }
//         apiData()

//     },[])
//     return(
//         <>
//         <center>
//             <h1 className="mb-3 mt-3">Products Data</h1>
//         </center>
//         <div style={{display:"flex" ,flexWrap:"wrap" ,justifyContent:"center"}}>
//             {
//                 products.map((item)=>(
//                     <div style={{width:"180px",border:"2px solid",borderRadius:"5px",margin:"5px",padding:"5px"}}>
//                         <img src={item.thumbnail} alt="" height={150} />
//                         <h4>{item.title}</h4>
//                         <p>{item.description}</p>
//                         <mark>{item.price}</mark>
//                     </div>
//                 ))
//             }

//         </div>
        
//         </>
//     )

// })

// // import { useEffect, useState } from "react";

// // export const Products = () => {
// //     const [products, setProducts] = useState([]);

// //     useEffect(() => {
// //         async function apiData() {
// //             let response = await fetch("https://dummyjson.com/products");
// //             let { products: apiProducts } = await response.json();
// //             setProducts(apiProducts);
// //         }
// //         apiData();
// //     }, []);

// //     return (
// //         <>
// //             <center>
// //                 <h1 className="mb-3 mt-3">Products Data</h1>
// //             </center>

// //             <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
// //                 {
// //                     products.map((item) => (
// //                         <div
// //                             key={item.id}
// //                             style={{
// //                                 width: "180px",
// //                                 border: "2px solid",
// //                                 borderRadius: "5px",
// //                                 margin: "5px",
// //                                 padding: "5px"
// //                             }}
// //                         >
// //                             <img src={item.thumbnail} alt="" height={150} />
// //                             <h4>{item.title}</h4>
// //                             <p>{item.description}</p>
// //                             <mark>₹ {item.price}</mark>
// //                         </div>
// //                     ))
// //                 }
// //             </div>
// //         </>
// //     );
// // };