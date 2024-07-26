import React from "react";
import "./ProductCard.css";
import RatingComponent from "../Rating/ratingstar";
import { Product } from "../../app/features/productSlice";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return product ? (
    <div className="card-container" id="card" onClick={onClick}>
      <div className="image-wrapper">
        <div className="product-pic">
          <img className="product-img" src={product.imageUrl} alt="" />
        </div>
      </div>
      <div className="desc-product">
        <div className="product-name">{product.name}</div>
        <div className="price">฿ {product.price}</div>
      </div>
      <div>
        <RatingComponent rating={product.rating} />
      </div>
      <div className="quantity-transport">
        <p className="quantity-product">{product.quantity}</p>
        <div className="location">
          <Icon icon="mingcute:location-line" />
          {product.store.location}
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductCard;
