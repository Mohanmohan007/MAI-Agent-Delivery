import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import sahara from "../../../assets/1718779495380-Sahara201.webp";
import calacatta from "../../../assets/1726579630048-Et20Gold20Silestone.webp";
import atlante from "../../../assets/1728743450432-Atlantic20Quartz.webp";
import adanagrey from "../../../assets/1730729543566-Adana20Polished%20Quartz.webp";
import aspro from "../../../assets/1730733255140-Aspro20Quartz.webp";
import atlantewhite from "../../../assets/1730733970290-Attico20Quartz.webp";
import greytiles from "../../../assets/greytiles.webp";
import agora from "../../../assets/1732547187526-AGORA20POLISHED%20MARBLE.webp";
import { useCart } from "../../../lib/cartlocal";
import EdgeAndCornerSelector from "./EdgeAndCornerSelector";
import "./WorktopsPage.css";

// Dummy data
const WORKTOPS = [
  {
    id: "sahara-negro",
    name: "SAHARA NEGRO POLISHED QUARTZ",
    price: "£317.34",
    image: sahara,
    shipping: true,
    subtitle: "Black background with contrasting veins",
    code: "PROD#SN123",
  },
  {
    id: "et-calacatta",
    name: "ET CALACATTA GOLD POLISHED SILESTONE",
    price: "£756.96",
    image: calacatta,
    shipping: true,
    subtitle: "White marble look with gold veins",
    code: "PROD#ECG456",
  },
  {
    id: "acquamarina",
    name: "ACQUAMARINA POLISHED MARBLE",
    price: "£384",
    image: greytiles,
    shipping: true,
    subtitle: "Soft blue-grey polished surface",
    code: "PROD#AM789",
  },
  {
    id: "adana-grey",
    name: "ADANA GREY POLISHED QUARTZ",
    price: "£294.30",
     image: atlantewhite,
    shipping: true,
    subtitle: "Grey background with black grains",
    code: "PROD#AG012",
  },
  {
    id: "agora-beige",
    name: "AGORA BEIGE POLISHED MARBLE",
    price: "£401.5",
      image: sahara,
    shipping: true,
    subtitle: "Warm beige polished stone",
    code: "PROD#AB345",
  },
  {
    id: "aspro-quartz",
    name: "ASPRO POLISHED QUARTZ",
    price: "£272.77",
    image: aspro,
    shipping: true,
    subtitle: "Light speckled quartz finish",
    code: "PROD#AQ678",
  },
  {
    id: "atlante-grey",
    name: "ATLANTE GREY POLISHED QUARTZ",
    price: "£288.05",
    image: atlante,
    shipping: true,
    subtitle: "Mid grey tone with texture",
    code: "PROD#AG901",
  },
  {
    id: "atlante-white",
    name: "ATLANTE WHITE POLISHED QUARTZ",
    price: "£288.05",
    image: atlantewhite,
    shipping: true,
    subtitle: "Clean white polished surface",
    code: "PROD#AW234",
  },
];

export default function WorktopsPage() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [search, setSearch] = useState("");
  const [sortKey] = useState("recent");
  const [selected, setSelected] = useState(null);
  const detailRef = useRef(null);
  const [edgeAndCorner, setEdgeAndCorner] = useState({
    edge: null,
    corner: null,
  });

  const [activeImage, setActiveImage] = useState(null);
const [activeIndex, setActiveIndex] = useState(0);

const handleThumbClick = (img, index) => {
  setActiveImage(img);
  setActiveIndex(index);
};

// Reset active image when a new product is selected
React.useEffect(() => {
  if (selected) {
    setActiveImage(selected.image);
    setActiveIndex(0);
  }
}, [selected]);




  const handleEdgeCornerChange = React.useCallback(
    (selection) => setEdgeAndCorner(selection),
    []
  );
  const filtered = useMemo(() => {
    let list = WORKTOPS.filter((w) =>
      w.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sortKey === "price-asc") {
      list = [...list].sort(
        (a, b) =>
          parseFloat(a.price.replace(/[^0-9.]/g, "")) -
          parseFloat(b.price.replace(/[^0-9.]/g, ""))
      );
    } else if (sortKey === "price-desc") {
      list = [...list].sort(
        (a, b) =>
          parseFloat(b.price.replace(/[^0-9.]/g, "")) -
          parseFloat(a.price.replace(/[^0-9.]/g, ""))
      );
    }
    return list;
  }, [search, sortKey]);

  const onView = (worktop) => {
    setSelected(worktop);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const onBack = () => {
    setSelected(null);
    setEdgeAndCorner({ edge: null, corner: null });
  };

  // useEffect(() => {
  //   if (selected) {
  //     window.history.replaceState(null, "", `#worktop-${selected.id}`);
  //   }
  // }, [selected]);

  const handleAdd = () => {
    if (!selected) return;

    // Compose the item to add
    const customization = [];
    if (edgeAndCorner.edge) customization.push(edgeAndCorner.edge.label);
    if (edgeAndCorner.corner) customization.push(edgeAndCorner.corner.label);

    const description = [
      selected.subtitle,
      "1000 * 1000 * 30",
      customization.join(" / ") || "No customizations",
    ].join(" / ");

    const itemToAdd = {
      id: selected.id,
      name: selected.name,
      price: selected.price,
      image: selected.image,
      subtitle: description,
      shipping: selected.shipping,
      code: selected.code,
      quantity: 1,
    };

    console.log("Adding to cart:", itemToAdd);

    addItem(itemToAdd);
    navigate("/cart");
  };

  return (
    <div className="wp-container">
    <header className="wp-header-card">
      <div className="wp-header-card-content">
        {/* Top Header Row */}
        <div className="wpheader-top-row">
          <div className="wpheader-title-section">
          
            <h1 className="wpheader-title">DIY Worktops</h1>
          </div>
          
          <div className="wptrack-order">
            <svg viewBox="0 0 24 24">
              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
            </svg>
            Track Order
          </div>
        </div>

        {/* Search and Filter Row */}
        <div className="search-filter-row">
          <div className="dshjj7ujs1">
          <div className="wpfilter-icon">
            <svg viewBox="0 0 24 24">
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
          
          <div className="wpsearch-input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="wpsearch-input"
            />

            <div className="wpsearch-icon">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
          </div>

</div>

<div>
          <select className="wpdropdown-select">
            <option>Recent Ad..</option>
          </select>
          </div>
        </div>

        {/* Description Text */}
        <div className="wpdescription-text">
          Looking for a quick and affordable way to update your kitchen? Give your countertops a new lease of life that can make a lot of difference. You can DIY many things to freshen up your countertops and give your kitchen a new look. If you want to upgrade your kitchen on a budget, you need these super simple and cost-effective DIY countertop ideas. From revarnishing to laminating, painting to overlaying, keep reading to discover these things listed down, you can revamp your kitchen worktops without breaking the bank.{" "}
          <a href="#">Learn More</a>
        </div>
      </div>
    </header>

      {!selected && (
        <div className="cards-grid">
          {filtered.map((w) => (
            <div className="worktop-card" key={w.id}>
              <div className="image-wrapper">
                <img src={w.image} alt={w.name} />
                <div className="availability-bar">
                  {w.shipping && (
                    <span className="ship-label">Shipping Available</span>
                  )}
                </div>
              </div>
              <div className="info">
                <div className="name123">{w.name}</div>
                <div className="price">
                  Starting Price: <span className="price-value">{w.price}</span>
                </div>
                <button className="view-btn" onClick={() => onView(w)}>
                  VIEW WORKTOP
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="no-results">No worktops match your search.</div>
          )}
        </div>
      )}

 {selected && (
  <div className="detail-section" ref={detailRef}>
    <button className="back-btn" onClick={onBack}>
      ← Back to list
    </button>

    <h2 className="detail-title">DESIGN YOUR DIY WORKTOP</h2>
    <div className="detail-grid">
      {/* LEFT: Large Image + Thumbnails */}
      <div className="detail-image-column">
        <div className="large-image">
          <img
            src={activeImage || selected.image}
            alt={selected.name}
          />
        </div>
        <div className="thumbs">
          {(selected.images && selected.images.length > 0
            ? selected.images
            : [selected.image] // fallback if no multiple images
          ).map((img, index) => (
            <div
              key={index}
              className={`thumb2w ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleThumbClick(img, index)}
            >
              <img src={img} alt={`${selected.name}-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Form Fields */}
      <div className="detail-form-column">
        <div className="material-header">
          <div className="title">{selected.name}</div>
          <div className="code">{selected.code}</div>
        </div>
        <div className="subtext">{selected.subtitle}</div>
        <div className="shipping-label">
          {selected.shipping && "Shipping Available"}
        </div>

        <div className="form-row">
          <label>
            SELECT ANOTHER MATERIAL
            <select defaultValue={selected.name}>
              <option>{selected.name}</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            CHOOSE YOUR THICKNESS
            <select>
              <option>Thickness 30 mm - {selected.name}</option>
            </select>
          </label>
        </div>

        <div className="form-grid efwefsed">
          <div className="form-field efsefeds34">
            <label>
              LENGTH
            
            </label>
              <input defaultValue="1000" />
          </div>
          <div className="form-field efsefeds34">
            <label>
              WIDTH
         
            </label>
                 <input defaultValue="1000" />
          </div>
        </div>

        <div className="form-row">
          <div className="field-label">EDGE &amp; CORNER</div>
          <EdgeAndCornerSelector onChange={handleEdgeCornerChange} />
        </div>

        <button className="add-to-cart-btn" onClick={handleAdd}>
          Add to Cart
        </button>
        <div className="grand-total">
          Grand Total:{" "}
          <span className="total-value">{selected.price}</span>
        </div>
      </div>
    </div>

    {/* Tabs Section */}
    <div className="tabs">
      <div className="tab-headers">
        <div className="tab active">Description</div>
        <div className="tab">Disclaimer</div>
      </div>
      <div className="tab-content">
        <p>{selected.name}</p>
      </div>
    </div>
  </div>
)}


      
    </div>
  );
}
