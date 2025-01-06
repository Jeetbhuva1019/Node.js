import '../CSS/Category.css'
import { useEffect, useState } from 'react';
import { addToCart, decrement, fetchapi, increment } from '../Slice/Slice';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';

export default function Category() {
    const [activeCategory, setActiveCategory] = useState(0);
    const cart = useSelector((state) => state.cart.cart);
    const apiData = useSelector((data) => data.cart.data);

    const dispatch = useDispatch();

    const categoryNames = ["pav", "flakes", "butter", "milk", "cheese", "batter", "honey", "paneer", "peanut"];

    useEffect(() => {
        dispatch(fetchapi())
    }, [dispatch]);

    const handleAddToCart = (id) => {
        dispatch(addToCart(id));
    };

    const handleIncrement = (id) => {
        dispatch(increment(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrement(id));
    };

    const categories = [
        { name: 'Bread & Pav', img: 'https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png' },
        { name: 'Flakes & Kids Cereals', img: 'https://cdn.grofers.com/app/images/category/cms_images/icon/954_1680251634382.png' },
        { name: 'Butter & More', img: 'https://cdn.grofers.com/app/images/category/cms_images/icon/952_1657599773117.png' },
        { name: 'Milk', img: 'Milk1.avif' },
        { name: 'Cheese', img: 'https://cdn.grofers.com/app/images/category/cms_images/icon/2253_1694001802103.png' },
        { name: 'Batter', img: 'https://cdn.grofers.com/app/images/category/cms_images/icon/1425_1643613254262.png' },
        { name: 'Honey', img: 'https://cdn.grofers.com/app/images/category/cms_images/icon/609_1695366756108.png' },
        { name: 'Paneer & Tofu', img: 'https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png' },
        { name: 'Peanut Butter', img: 'https://cdn.grofers.com/app/images/category/cms_images/icon/644_1690196367179.png' },
    ];

    return (
        <>
            <div className="main-categorySection h-[50px] mt-24 flex justify-center">
                <div className="categoryName w-[85%] h-[inherit]">
                    <ul className='flex justify-center h-[inherit]'>
                        <li className='hover:bg-[#a3a3a334] px-3 h-[inherit] flex items-center cursor-pointer'>Vegetables & Fruits</li>
                        <li className='hover:bg-[#a3a3a334] px-3 h-[inherit] flex items-center cursor-pointer'>Dairy & Breakfast</li>
                        <li className='hover:bg-[#a3a3a334] px-3 h-[inherit] flex items-center cursor-pointer'>Munchies</li>
                        <li className='hover:bg-[#a3a3a334] px-3 h-[inherit] flex items-center cursor-pointer'>Cold Drinks & Juices</li>
                        <li className='hover:bg-[#a3a3a334] px-3 h-[inherit] flex items-center cursor-pointer'>Instant & Frozen Food</li>
                        <li className='hover:bg-[#a3a3a334] px-3 h-[inherit] flex items-center cursor-pointer'>Tea, Coffee & Health Drinks</li>
                        <li className='hover:bg-[#a3a3a334] px-3 h-[inherit] flex items-center cursor-pointer'>Bakery & Biscuits</li>
                        <li className='hover:bg-[#a3a3a334] px-3 h-[inherit] flex items-center cursor-pointer'>More <i className="ri-arrow-down-s-line"></i></li>
                    </ul>
                </div>
            </div>

            <div className="main-scroll-category mt-5 h-[500px] w-full flex justify-center">
                <div className="inner-scroll-category w-[85%] h-[inherit] flex">
                    <div className="scroll_Bar border overflow-y-scroll border-l-1 border-r-1 border-y-1 w-[20%] h-[inherit]">
                        {categories.map((category, index) => (
                            <div key={index} className={`categoryType w-full h-[80px] flex border ${activeCategory === index ? 'border-l-4 border-[#24953c] bg-[#eaffee] border-t-0 border-r-0 border-b-0' : 'border-x-0 border-t-0'}`} onClick={() => setActiveCategory(index)}>
                                <div className="img flex justify-center items-center w-[30%] h-[inherit]">
                                    <img src={category.img} alt={category.name} />
                                </div>
                                <div className="name w-[70%] h-[inherit] flex items-center pl-1">
                                    <span>{category.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="categoryContent overflow-y-scroll bg-[#f4f5fb] px-5 w-[80%] h-[inherit]">
                        {apiData.filter(e => e.category === categoryNames[activeCategory]).map((e, i) => (
                            <div key={i} className="card bg-white w-[full] pb-3 rounded-md flex flex-col h-[fit-content]">
                                <div className="image w-full flex justify-center">
                                    <img src={e.image} className='h-[150px]' alt={e.title} />
                                </div>
                                <div className="product_detail pl-2">
                                    <div className="product_title h-[50px]">
                                        <span className='text-[13px] category_name'>{e.name}</span>
                                    </div>
                                    <div className="weight">
                                        <span className='text-[13px] text-[#868686]'>{e.weight}</span>
                                    </div>
                                </div>
                                <div className="price_cart flex justify-between pr-2 pl-2 w-full h-[fit-content] mt-3">
                                    <div className="price">
                                        <span>₹{e.price}</span>
                                    </div>
                                    <div className="cart">
                                        {cart[e.id] ? (
                                            <div className='cart-add border items-center border-[#318616] flex bg-[#368512] rounded-md h-[30px] w-[55px] justify-around text-[14px] text-[#318616]'>
                                                <div onClick={() => handleDecrement(e.id)} className="cursor-pointer text-[16px] decrement text-white bg-pink-00">-</div>
                                                <div className="text-[14px] count text-white bg-slate-70">{cart[e.id]}</div>
                                                <div onClick={() => handleIncrement(e.id)} className="cursor-pointer text-[16px] increment text-white bg-orane-800">+</div>
                                            </div>
                                        ) : (
                                            <button onClick={() => handleAddToCart(e.id)} className='normal-add border border-[#318616] rounded-md h-[30px] w-[55px] text-[14px] text-[#318616]'>ADD</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
