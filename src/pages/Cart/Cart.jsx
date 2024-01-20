import { useState } from "react";
import { items } from "./Items";
import "./style.css";
import CarouselS from "./CarouselS";
import Checkout from "./Checkout";
import Layout from "../../components/Layout";

export default function Cart() {
  const [store, setStore] = useState([]);
  const [changeDisplay, setChangeDisplay] = useState(false);
  const [carouselShow, setCarouselShow] = useState(false);
  const [carouselStore, setCarouselStore] = useState([
    {
      title: "",
    },
  ]);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleSubmit = (value, index) => {
    setStore([...store, value]);
    console.log(store, "store");
  };

  const handleChange = () => {
    setChangeDisplay(!changeDisplay);
    setCarouselShow(true);
  };

  const handleDelete = (key) => {
    console.log(key, "key");
    let newArr = [...store];
    const updatedStore = newArr.filter((value, index) => index !== key);
    setStore(updatedStore);
  };
  console.log(store);

  const handleShow = (value) => {
    setCarouselShow(!carouselShow);
    setCarouselStore(value);
  };
  console.log(carouselStore, "carouselstore  ");

  const handleCheckout = () => {
    setShowCheckout(!showCheckout)
  };
  return (
    <Layout>
    <div className="wrapper" style={{padding:"120px 0px"}}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "space-evenly",
          }}>
          <h1 style={{ fontSize: "20px", fontWeight: "600" }}>Cart</h1>
          {showCheckout ? <Checkout store={store} close={handleCheckout} setShowCheckout={setShowCheckout} setStore={setStore}/> : null }
          {store.length !== 0 && <p onClick={handleCheckout} className="checkout-btn">Checkout</p>}
          
        </div>
        {store.length !== 0 ? ( //Need changes
          <div style={{ height:"100vh" , overflowY:"scroll"}} >
            {store.map((value, key) => {
              return (
                <div className="wrapperCart" key={key}>
                  <img
                    src={value.image}
                    alt="cart"
                    style={{ height: "30px", width: "30px" }}
                  />
                  <div className="cartContent">
                    <div style={{ width: "170px" }}>
                      <p>{value.title}</p>
                      <p>{value.price}</p>
                    </div>
                    <button
                      style={{ borderRadius: "24px", border: "none" }}
                      onClick={() => handleDelete(key)}>
                      x
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <i>No items in the cart</i>
        )}
      </div>

      <div>
        <button onClick={handleChange} className="changeView">
          Change View
        </button>
        <div className={!changeDisplay ? "wrapperCard" : "wrapperCard-S"}>
          {items.map((value, index) => {
            return (
              <div
                className={changeDisplay ? "wrapperContent" : "wrapperContentS"}
                key={index}>
                {carouselStore.title === value.title && !changeDisplay ? (
                  <CarouselS
                    value={carouselStore}
                    setValue={setCarouselStore}
                    changeDisplay={changeDisplay}
                    index={index}
                    style={{ zIndex: "10" }}
                  />
                ) : (
                  <>
                    <div>
                      {changeDisplay ? (
                        <CarouselS
                          value={value}
                          changeDisplay={changeDisplay}
                        />
                      ) : (
                        <img
                          src={value.image}
                          alt="shop"
                          width={320}
                          style={{ height: "330px" }}
                        />
                      )}
                      <button
                        className="addCart"
                        onClick={() => handleSubmit(value, index)}>
                        Add To Cart
                      </button>
                      <button
                        className="gallery-btn"
                        onClick={() => handleShow(value)}>
                        View Gallery
                      </button>
                    </div>
                    <div
                      className={
                        changeDisplay ? "wrapperChange" : "wrapperChangeS"
                      }>
                      <div className="wrapperTitle">
                        <p className="title">{value.title}</p>
                        <p className="price">{value.price}</p>
                      </div>

                      <p className="desc">{value.desc}</p>
                      <div className="wrapperQnty">
                        Quantity{" "}
                        {value.quantity.map((items, key) => {
                          return <span key={key}>{items.gram} </span>;
                        })}
                      </div>
                      {changeDisplay ? (
                        <button
                          className="addCart-S"
                          onClick={() => handleSubmit(value, index)}>
                          Add To Cart
                        </button>
                      ) : null}
                    </div>
                  </>
                )}
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
