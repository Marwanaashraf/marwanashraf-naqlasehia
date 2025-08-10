import axios from "axios";
import toast from "react-hot-toast";
export async function getAllProducts() {
  let req = await axios.get("https://fakestoreapi.com/products").catch((err) => {
    console.log(err);
    toast.error(err.message);
  });
  return req.data;
}
