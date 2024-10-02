import { useState } from "react";

const Photofilter = () => {
  // state for adding image
  const [getPhoto, setPhoto] = useState("");

  // image fatching logic
  const addPhoto = (e) => {
    // console.log(e.target.files);
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  // filters logic
  const [filter, setFilter] = useState("");

  const applyFilter = (filterType) => {
    setFilter(filterType);
  };

  const filterStyle = {
    filter: filter,
  };

  // UI part
  return (
    <>
      <div>
        {/* choose image */}
        <div>
          <div>
            <input type="file" onChange={addPhoto} accept="image/*" />
            <img
              src={getPhoto}
              style={{
                ...filterStyle,
                width: "500px", // Set the width of the image
                height: "auto", // Set the height of the image; 'auto' keeps the aspect ratio
              }}
            />
          </div>

          {/* Filters */}

          <div>
            <button onClick={() => applyFilter("blur(5px)")}>Blur</button>
            <button onClick={() => applyFilter("brightness(150%)")}>
              Brightness
            </button>
            <button onClick={() => applyFilter("contrast(150%)")}>
              Contrast
            </button>
            <button onClick={() => applyFilter("grayscale(100%)")}>
              Grayscale
            </button>
            <button onClick={() => applyFilter("invert(100%)")}>Invert</button>
            <button onClick={() => applyFilter("saturate(200%)")}>
              Saturate
            </button>
            <button onClick={() => applyFilter("sepia(100%)")}>Sepia</button>
            <button onClick={() => applyFilter("")}>Remove Filter</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photofilter;
