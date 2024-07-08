import { useState } from "react";
import { assets } from "../../assets/assets";
import "./add.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }: { url: string }) => {
  const [image, setImage] = useState<File | null>();
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const onChangeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    if (image) {
      formData.append("image", image);
    }
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(null);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload image"
            />
          </label>
          <input
            onChange={(e) => {
              if (e.target.files) setImage(e.target.files[0]);
            }}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Add Product Name"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            rows={6}
            name="description"
            placeholder="Add Product Description"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="E.g. - $20"
              onChange={onChangeHandler}
              value={data.price}
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
