import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../store/slices/productSlice";

export default function UploadImage() {
  const [image, setImage] = useState<File | null>(null); 
  const [url, setUrl] = useState<string | null>(null);
  const [product, setProduct] = useState({
    name: "",
    image: "",
  });
  const result = useSelector((state: any) => state.products.products);
  
  const dispatch:any = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProduct()); 
  }, [dispatch]);

  
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name") {
      
      setProduct({ ...product, name: value });
    } else if (name === "image" && e.target.files) {
      
      const selectedImage = e.target.files[0];
      setImage(selectedImage);

      const uploadedImage = await saveImage(selectedImage); 
      if (uploadedImage) {
        setUrl(uploadedImage.secure_url);
        setProduct({ ...product, image: uploadedImage.secure_url }); 
      }
    }
  };

  const saveImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_PROJECT_NAME);
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmvcyvtui/image/upload",
        formData
      );
      return response.data;
    } catch (error) {
      
      return null;
    }
  };

  // Hàm thêm sản phẩm
  const addProduct = () => {
    if (product.name && product.image) {
      
    } else {
      console.log("Vui lòng nhập tên sản phẩm và ảnh.");
    }
  };

  return (
    <div>
      <h1>Upload ảnh lên Cloudinary!</h1>

      <input
        name="name"
        type="text"
        placeholder="Nhập tên sản phẩm"
        value={product.name}
        onChange={handleChange} 
      />

      
      <input
        name="image"
        type="file"
        onChange={handleChange}
      />

      <h1>Ảnh sau khi đã lưu:</h1>
      {url && <img src={url} alt="Ảnh sản phẩm" width={200} />} <br />

     
      <button onClick={addProduct}>Thêm sản phẩm</button>

      <h1>Danh sách sản phẩm:</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Ảnh</th>
          </tr>
        </thead>
        <tbody>
          {result && result.length > 0 ? (
            result.map((item: any, index: number) => (
              <tr key={item._id || index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={100}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Chưa có sản phẩm nào</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
