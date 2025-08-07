import { motion } from "framer-motion";
import "./ProductCard.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger each card by 0.2s
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ProductCard({ product, index }) {
  const formatPrice = (price) => {
    if (!price || isNaN(price)) return "₹0";
    return `₹${parseFloat(price).toLocaleString()}/${product.unit}`;
  };

  return (
    <motion.div
      className="product-card train-card"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      {/* Product Image */}
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-img" />
        ) : (
          <i className={product.icon || "fas fa-cube"}></i>
        )}
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-category">{product.category}</div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "var(--stone-blue)",
            marginTop: "4px",
            textAlign:'center',
            mariginBottom:'5px',
          }}
        >
          {formatPrice(product.pricePerUnit)}
        </div>
      </div>
    </motion.div>
  );
}
