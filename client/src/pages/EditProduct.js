// import { useState } from "react";
// // import { UserContext } from "../components/User";
// import { useHistory } from "react-router";
// import styled from "styled-components";
// import { Button, Error, FormField, Input, Label } from "../styles";

// function EditProduct({ productObj, handleUpdate }) {
//     const [products, setProducts] = useState([]);
//     const [name, setName] = useState("");
//     const [price, setPrice] = useState("");
//     const [errors, setErrors] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const history = useHistory();
//     // const photo = useRef(null);
//     // const { setUser } = useContext(UserContext);
//     // const [productID] = useState(products?.id);
    
// 	// const [ product, setProduct ] = useState({
// 	// 	name: productObj.name,
// 	// 	price: productObj.price
// 	// })
//     // const updatedProduct = {
// 	// 	name: product.name,
// 	// 	price: product.price
// 	// }

//     const handleChange = (e) => {
//         setProducts({
//             ...products, [e.target.name]: e.target.value,
//         })
//     }
//     // console.log("these are the products" + products.name)

//     function handleSubmit(e) {
//         e.preventDefault();
//         if (
//             [products.name, products.price, products.user.name].some((val) => val.trim() === '')
//         ) { alert('All information must be filled out!') }
//         setIsLoading(true);
//         // const formData = new FormData(e.target)
//         // formData.append("name", name)
//         // formData.append("price", price)
//         // console.log("FORM DATA")
//         // for (let el of formData.values()) {
//         //     console.log(el)
//         // }

//         fetch(`/api/products${productObj.id}`, {
//             method: "PATCH",
//             headers: {
//                 'Content-Type': "application/json",
//             },
//             body: JSON.stringify(name, price)
//         }).then((r) => {
//             setIsLoading(false);
//             if (r.ok) {
//                 r.json().then(data => handleUpdate(data))
//                 // r.json().then((product) => setUser(currentUser => (
//                 //     { ...currentUser, products: [...currentUser.products, product] }
//                 // )));
//                 history.push("/products");
//             } else {
//                 r.json().then((err) => setErrors(err.errors));
//             }
//         })
//             .catch((err) => alert(err.errors))
//     }

//     // fetch(`/api/products/${productID}`, {
//     //     method: 'delete'
//     // }).then((r) => {
//     //     if (r.ok) {
//     //         setProducts(products)
//     //     }
//     //     else {
//     //         r.json().then((err) => setErrors(err.erros));
//     //     }
//     // });

//     return (
//         <Wrapper>
//             <WrapperChild>
//                 <h2>Edit Product</h2>
//                 <form onSubmit={handleSubmit}>
//                     <FormField>
//                         <Label htmlFor="name">Name: </Label>
//                         <Input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={handleChange}
//                         />
//                     </FormField>
//                     <FormField>
//                         <Label htmlFor="price">Price: </Label>
//                         <Input
//                             type="number"
//                             id="price"
//                             value={price}
//                             onChange={handleChange}
//                         />
//                     </FormField>
//                     {/* <FormField>
//                         <Label htmlFor="mediaUrl">Product: </Label>
//                         <Input
//                             type="file"
//                             name="photo"
//                             ref={photo}
//                             onChange={(e) => photo.current = (e.target.value)}
//                         />
//                     </FormField> */}
//                     <FormField>
//                         <Button color="primary" type="submit">
//                             {isLoading ? "Loading..." : "Update"}
//                         </Button>
//                     </FormField>
//                     <FormField>
//                         {errors?.map((err) => (
//                             <Error key={err}>{err}</Error>
//                         ))}
//                     </FormField>
//                 </form>
//             </WrapperChild>
//         </Wrapper>
//     );
// }

// const Wrapper = styled.section`
//   max-width: 1000px;
//   margin: 40px auto;
//   padding: 16px;
//   display: flex;
//   gap: 24px;
// `;

// const WrapperChild = styled.div`
//   flex: 1;
// `;

// export default EditProduct;