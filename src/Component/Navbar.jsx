import '../CSS/Navbar.css'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Slice/Slice';

export default function Navbar() {
  const cartRef = useRef();
  const cart = useSelector((state) => state.cart.cart);
  const apiData = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  useEffect(() => {
    gsap.set(cartRef.current, { x: '2500px' });
  }, []);

  const openCart = () => {
    gsap.to(cartRef.current, { x: '1140px' });
  };

  const closeCart = () => {
    gsap.to(cartRef.current, { x: '2500px', duration: 0.5 });
  };

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const itemsTotal = Object.keys(cart).reduce((total, id) => {
    const item = apiData.find((product) => product.id === id);
    return total + item.price * cart[id];
  }, 0);

  return (
    <>
      <div className="main-nav z-50 fixed top-0 bg-white flex h-[100px] w-full border">
        <div className="logo w-[fit-content] border p-7 h-[inherit] flex justify-center items-center">
          <h1 className="text-4xl font-bold"><span className="text-[#f4cb45]">blink</span><span className="text-[#4fb620]">it</span></h1>
        </div>

        <div className="location-nav w-[fit-content] flex justify-center px-8 flex-col">
          <h1 className="text-[20px] font-bold">Delivery in 10 minutes</h1>
          <span className="text-[14px]">Mavdi Chowkdi, Rajkot, Gujarat... <i className="ri-arrow-down-s-fill"></i></span>
        </div>

        <div className="search-nav flex w-[50%] justify-center items-center">
          <div className="search-icon bg-[#f8f8f8] p-3 h-[50px] rounded-l-xl"><i className="ri-search-line text-[18px]"></i></div>
          <div className="input-filed bg-[#f8f8f8] h-[50px] py-3 w-[90%] rounded-r-xl"><input type="text" className="bg-transparent w-full outline-0" placeholder="search 'Milk'" /></div>
        </div>

        <div className="login w-[10%] flex justify-center items-center">
          <h1 className="text-2xl font-thin">Login</h1>
        </div>

        <div className="login w-[10%] flex justify-center items-center">
          <button onClick={openCart} className="bg-[#07861e] py-3 px-4 text-white rounded-lg font-bold">
            <i className="ri-shopping-cart-line text-2xl"></i> <span>My Cart</span> <span>₹{itemsTotal}</span>
          </button>
        </div>
      </div>

      <div ref={cartRef} className="cart_bar overflow-y-scroll bg-[#f6f7fc] fixed top-0 z-50 w-[25%] h-[100vh]" style={{ transform: 'translateX(100%)' }}>
        <div className="close_cart flex px-3 items-center justify-between w-full h-[50px]">
          <h1>My Cart</h1>
          <button onClick={closeCart}><i className="ri-close-large-line"></i></button>
        </div>

        <div className="cart_items bg-white rounded-md h-[fit-content]">
          {Object.keys(cart).map((id) => {
            const item = apiData.find((product) => product.id === id);
            return (
              <div key={id} className="cart flex w-full h-[100px]">
                <div className="img w-[25%] h-[inherit] flex justify-center items-center">
                  <img src={item.image} className='h-[80px] border rounded-md' alt={item.name} />
                </div>
                <div className="cart_detail flex w-[75%]">
                  <div className="detail flex flex-col pt-2 w-[70%]">
                    <span className='block text-[#318616] text-[14px]'>{item.name}</span>
                    <span className='block text-[#318616] text-[14px]'>{item.weight}</span>
                    <span className='block text-[15px] font-bold'>₹{item.price}</span>
                  </div>
                  <div className="action w-[30%] flex items-center justify-center">
                    <div className='border w-[55px] items-center border-[#318616] flex bg-[#368512] rounded-md h-[30px] justify-around text-[14px] text-[#318616]'>
                      <div onClick={() => handleDecrement(id)} className="cursor-pointer text-[16px] decrement text-white bg-pink-00">-</div>
                      <div className="text-[14px] count text-white bg-slate-70">{cart[id]}</div>
                      <div onClick={() => handleIncrement(id)} className="cursor-pointer text-[16px] increment text-white bg-orane-800">+</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {Object.keys(cart).length > 0 && (
          <div className="buy-detail px-3 bg-white rounded-md mt-3">
            <h1 className='font-bold'>Bill detail</h1>
            <div className="total flex justify-between">
              <div className="items_total"><span className='text-[14px]'>Items total</span></div>
              <div className="number_total"><span className='text-[14px]'>₹{itemsTotal}</span></div>
            </div>
            <div className="delivery flex justify-between">
              <div className="delivery_total"><span className='text-[14px]'>Delivery Charge</span></div>
              <div className="number_total"><span className='text-[14px]'>₹25</span></div>
            </div>
            <div className="handling flex justify-between">
              <div className="handling_total"><span className='text-[14px]'>Handling Charge</span></div>
              <div className="number_total"><span className='text-[14px]'>₹4</span></div>
            </div>
            <div className="grand_total flex justify-between">
              <div className="grand_total"><span className='font-bold text-[16px]'>Grand total</span></div>
              <div className="number_total"><span className='font-bold text-[16px]'>₹{itemsTotal + 29}</span></div>
            </div>
          </div>
        )}
        <button className='by'>Place Order</button>
      </div>
    </>
  );
}
