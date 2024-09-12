import { useState } from "react";
import styled from "styled-components";

const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  align-items: center;
`;

const ProductListItem = styled.div`
  padding: 12px;
  flex-grow: 1;
`;

const initialState = {
  id: 1,
  title: "",
  decription: "",
  units: 0,
  gst: 0,
  gstAmount: 0,
  subTotal: 0,
};

const DynamicForm = () => {
  const [items, setItems] = useState([initialState]);
  const [gstOptions, setGSTOptions] = useState([
    { label: "5%", value: 0.05 },
    { label: "12%", value: 0.12 },
    { label: "18%", value: 0.18 },
    { label: "28%", value: 0.28 },
  ]);

  const onItemDetailsChange = (e) => {};
  const onAddNewRow = () => {
    setItems((prev) => [...prev, initialState]);
  };

  return (
    <>
      <h1>My Bill Items</h1>
      <div>
        {items.map((item) => {
          return (
            <ProductsListContainer key={item.id}>
              <ProductListItem className="form-element">
                <p>Title</p>
                <input
                  type="text"
                  name="title"
                  value={item.title}
                  onChange={onItemDetailsChange}
                />
              </ProductListItem>
              <ProductListItem className="form-element">
                <p>Decription</p>
                <input
                  type="text"
                  name="decription"
                  value={item.decription}
                  onChange={onItemDetailsChange}
                />
              </ProductListItem>
              <ProductListItem className="form-element">
                <p>Quantity</p>
                <input
                  type="number"
                  name="units"
                  value={item.units}
                  onChange={onItemDetailsChange}
                />
              </ProductListItem>
              <ProductListItem className="form-element">
                <p>GST</p>
                <select
                  value={item.gst}
                  name="gst"
                  onChange={onItemDetailsChange}
                >
                  <option value="">Select GST</option>
                  {gstOptions.map((gst) => {
                    return (
                      <option key={gst.label} value={gst.value}>
                        3%
                      </option>
                    );
                  })}
                </select>
              </ProductListItem>
              <ProductListItem className="form-element">
                <p>GST Amount</p>
                <input
                  type="number"
                  name="gstAmount"
                  value={item.gstAmount}
                  onChange={onItemDetailsChange}
                />
              </ProductListItem>
              <ProductListItem className="form-element">
                <p>Total Amount</p>
                <input
                  type="number"
                  name="subTotal"
                  value={item.subTotal}
                  onChange={onItemDetailsChange}
                />
              </ProductListItem>
              <ProductListItem>
                <button onClick={onAddNewRow}>Add new</button>
              </ProductListItem>
            </ProductsListContainer>
          );
        })}
      </div>
    </>
  );
};

export default DynamicForm;
