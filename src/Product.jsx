import React ,{useState}from "react";
import ReactDOM from "react-dom";
import './styles.css'; 



function Product() {
   
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      category: '',
      quantity: 0,
      price: 0,
    });
  
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle form submission (you can add your logic here)
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can access the form data in formData object
      console.log(formData);
    };
  
    return (
      <div className="product-form">
  <h1>Product Form</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <label className="form-label" htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
    <div>
      <label className="form-label" htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
    <div>
      <label className="form-label" htmlFor="category">Category:</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
    <div>
      <label className="form-label" htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
    <div>
      <label className="form-label" htmlFor="price">Price:</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
    <button type="submit" className="form-button">Submit</button>
  </form>
</div>
    );
  }
  
  export default Product;
  