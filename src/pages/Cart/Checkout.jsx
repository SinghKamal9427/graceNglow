import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Checkout({ store, close , setShowCheckout ,setStore}) {
  console.log("store", store.price);
  const [progressBar ,setProgressBar] = useState(0);
  const {register , handleSubmit , formState: {errors} } = useForm();
const [modalToggle , setModalToggle] = useState(true);

const onSubmitted = (data) => {
 console.log(data,"data1")
 setProgressBar(()=> progressBar+100 )
 setModalToggle(!modalToggle)
 setTimeout(()=> {
 setModalToggle(!modalToggle)
  setProgressBar(0)
 setShowCheckout(false)
 setStore([])
 }
 ,[3000])
 ;}

  let totalPrice = store.reduce((acc, value) => acc + value.price, 0);




  return (
    <>{modalToggle ?
      <div className="modalNew">
        <div
          className="modalDesc"
          style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <div className="modalHead">Product Order Form</div>
            <form className="form" onSubmit={handleSubmit(onSubmitted)}>
              <div className="inputWrapper">
                <div className="formLabel">Full Name</div>
                <input type="text" className="form-Input" {...register("firstName", {required:true, minLength:4 , maxLength:10})}></input>
                {errors.firstName && <span style={{color:"red"}}> * </span>}
              </div>
              <div className="inputWrapper">
                <div className="formLabel">Address</div>
                <input type="text" className="form-Input" {...register("address", {required:true , minLength:6 , maxLength:20})}></input>
              {errors.address && <span style={{color:"red"}}> * </span>}
              </div>{" "}
              <div className="inputWrapper">
                <div className="formLabel" >Postal Code</div>
                <input type="text" className="form-Input" {...register("pin", {required:true , minLength:6 , maxLength:20})}></input>
                {errors.pin && <span style={{color:"red"}}> * </span>}
              </div>{" "}
              <div className="inputWrapper">
                <div className="formLabel">Email Address</div>
                <input type="text" className="form-Input" {...register("email", {required:true, pattern: /^\S+@\S+$/i , minLength:6 , maxLength:20})}></input>
                {errors.email && <span style={{color:"red"}}> * </span>}
              </div>
              <div className="inputWrapper">
                <div className="formLabel">Payment Method</div>
                <select className="formSelect" {...register("select" , {required:true})}>
                  <option value="" hidden>Select a Payment method</option>
                  <option value="paytm">Paytm</option>
                  <option value="upi">UPI</option>
                  <option value="gpay">Gpay</option>
                </select>
                {errors.select && <span style={{color:"red"}}> * </span>}
              </div>
              <button type="submit" className="formBtn">Secure Pay</button>
            </form>
          </div>
          <div className="horizontalRow" />
          <div className="orderTotalWrapper">
            <button onClick={close} className="checkoutCloseBtn">
              x
            </button>
            <div className="orderHead">Your Order</div>
            <div className="orderTotal">
              {store.map((value, index) => {
                return (
                  <div className="orderDesc" key={index}>
                    <div className="orderTitle">* {value.title}</div>
                    <div className="orderPrice">{value.price}</div>
                  </div>
                );
              })}
            </div>
            <div className="orderTotalDesc">
              Total Price :{" "}
              <span className="orderTotalPrice">{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>:<div className="submittedModal">
        <div style={{textAlign:"center"}}>
                  <div className="modalHead">Thanks For Shopping</div>
                  <div className="laodingBar">
                    <div className="innerLoadingBar" style={{width : `${progressBar}%`}}></div>
                  </div>
                  </div>
        </div>}
    </>
  );
}
