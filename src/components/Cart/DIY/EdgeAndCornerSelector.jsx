import React, { useState } from "react";
import "./EdgeAndCornerSelector.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import ogee from "../../../assets/ogee.webp";
import ogee1 from "../../../assets/ogee1.webp";
import demi from "../../../assets/demi.webp";
import fullbull from "../../../assets/fullbull.webp";
import sharknose from "../../../assets/sharknose.webp";
import singlesidelength from "../../../assets/singlesidelength.webp";
import singlesidewidth from "../../../assets/singlesidewidth.webp";
import SingleSideLengthWidth from "../../../assets/SingleSideLengthWidth.webp";
import DoubleSideLengthSingleSideWidth from "../../../assets/DoubleSideLengthSingleSideWidth.webp";
import SingleSideLengthDoubleSideWidth from "../../../assets/SingleSideLengthDoubleSideWidth.webp";
// import singlesidewidth from "../../../assets/singlesidewidth.webp";
// import singlesidewidth from "../../../assets/singlesidewidth.webp";
// import singlesidewidth from "../../../assets/singlesidewidth.webp";

function ImageSelect({ options, placeholder, selected, onSelect, disabled }) {
  const [open, setOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".image-select-wrapper")) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const choose = (opt) => {
    onSelect(opt);
    setOpen(false);
  };

  return (
    <div
      className={`image-select-wrapper ${disabled ? "disabled" : ""}`}
      aria-disabled={disabled}
    >
      <div
        className={`image-select ${open ? "open" : ""}`}
        onClick={() => !disabled && setOpen((o) => !o)}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        tabIndex={0}
      >
        <div className="selection-content">
          {selected ? (
            <>
              {selected.imgSrc && (
                <img
                  src={selected.imgSrc}
                  alt={selected.label}
                  className="inline-thumb"
                />
              )}
              <div className="text">{selected.label}</div>
            </>
          ) : (
            <div className="placeholder">{placeholder}</div>
          )}
        </div>
        <div className="icon">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
      {open && (
        <ul className="options-list" role="listbox">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`option ${
                selected?.value === opt.value ? "active" : ""
              }`}
              onClick={() => choose(opt)}
              role="option"
              aria-selected={selected?.value === opt.value}
            >
              {opt.imgSrc && (
                <img
                  src={opt.imgSrc}
                  alt={opt.label}
                  className="option-thumb"
                />
              )}
              <span className="option-label">{opt.label}</span>
            </li>
          ))}
        </ul>
      )}
      {selected && selected.imgSrc && (
        <div className="preview-below">
          <div className="preview-title">{selected.label}</div>
          <img
            src={selected.imgSrc}
            alt={selected.label}
            className="preview-image"
          />
        </div>
      )}
    </div>
  );
}

export default function EdgeAndCornerSelector({ onChange }) {
  // Example data; replace with real image paths.
  const edgeOptions = [
    {
      label: "Ogee Bullnose",
      value: "ogee-bullnose",
      imgSrc: ogee,
    },
    {
      label: "Demi Bullnose",
      value: "demi-bullnose",
      imgSrc: demi,
    },
    {
      label: "Full Bullnose",
      value: "full-bullnose",
      imgSrc: fullbull,
    },
    {
      label: "Sharknose Standard",
      value: "sharknose-standard",
      imgSrc: sharknose,
    },
    { label: "Ogee", value: "ogee", imgSrc: ogee1 },
    // ...etc
  ];

  const cornerOptions = [
    {
      label: "Single Side Length",
      value: "single-side-length",
      imgSrc: singlesidelength,
    },
    {
      label: "Single Side Width",
      value: "single-side-width",
      imgSrc: singlesidewidth,
    },
    {
      label: "Single Side Length & Double Side Width",
      value: "combo-1",
      imgSrc: SingleSideLengthWidth,
    },
    {
      label: "Single Side Length & Width",
      value: "combo-2",
      imgSrc: SingleSideLengthDoubleSideWidth,
    },
    {
      label: "Double Side Length & Single Side Width",
      value: "combo-3",
      imgSrc: DoubleSideLengthSingleSideWidth,
    },
    // ... other corner types
  ];

  const [selectedEdge, setSelectedEdge] = useState(null);
  const [selectedCorner, setSelectedCorner] = useState(null);

  // Example: you could filter cornerOptions based on selectedEdge if needed.

  // Propagate upward
  React.useEffect(() => {
    if (onChange) {
      onChange({ edge: selectedEdge, corner: selectedCorner });
    }
  }, [selectedEdge, selectedCorner, onChange]);

  return (
    <div className="selector-wrapper">
      <div className="field-group">
        <label className="field-label">
          EDGE TYPE <span className="required">*</span>
        </label>
        <ImageSelect
          options={edgeOptions}
          placeholder="Select..."
          selected={selectedEdge}
          onSelect={(e) => {
            setSelectedEdge(e);
            setSelectedCorner(null); // reset corner when edge changes
          }}
        />
      </div>

      <div className="field-group rfsde34dr">
        <label className="field-label ewr4fsefs">
          CHOOSE YOUR EDGE SIDE <span className="required">*</span>
        </label>
        <ImageSelect
          options={cornerOptions}
          placeholder="Select..."
          selected={selectedCorner}
          onSelect={(c) => setSelectedCorner(c)}
          disabled={!selectedEdge}
        />
      </div>
    </div>
  );
}
