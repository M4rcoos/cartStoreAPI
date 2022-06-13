import { Product } from "../../models/Product.js";

const createProduct = async (req, res) => {
  const {
    productName,
    productDescription,
    productPrice,
    productQuantity,
    productImage,
  } = req.body;
  const { user_id } = req.params;

  try {
    const produto = {
      productName,
      productDescription,
      productPrice,
      productQuantity,
      productImage,
      username: user_id,
    };
    // console.log(produto);
    const newProduct = await Product.create(produto);
    console.log(newProduct);

    //subistituindo o campo username pelos dados do usuario
    await newProduct.populate({ user: "username" }).execPopulate();

    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// const getUserProduct = async (req, res) => {
//   try {
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// };

export default { createProduct };
