import '../CSS/Footer.css'


export default function Footer() {
  return (
    <>
      <div className="main-footer mt-14 w-full h-[500px] flex flex-col items-center">
        <div className="inner-footer justify-center w-[85%] flex h-[fit-content]"> 
          <div className="footer_details w-[fit-content] h-[300px] ">
            <h1 className='text-[21px] font-medium'>Useful Links</h1>

            <ul className="mt-5 text-[#868686]">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Lead</li>
              <li>Value</li>
            </ul>
          </div>
          <div className="footer_details w-[fit-content] h-[300px] ">
            <h1 className='text-[21px] font-medium invisible'>Useful Links</h1>

            <ul className="mt-5 text-[#868686]">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Lead</li>
              <li>Value</li>
            </ul>
          </div>
          <div className="footer_details w-[fit-content] h-[300px] ">
            <h1 className='text-[21px] font-medium invisible'>Useful Links</h1>

            <ul className="mt-5 text-[#868686]">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Lead</li>
              <li>Value</li>
            </ul>
          </div>
          <div className="footer_details w-[fit-content] h-[300px] ">
            <h1 className='text-[21px] font-medium'>Categories</h1>

            <ul className="mt-5 text-[#868686]">
              <li>Vegetables & Fruits</li>
              <li>Cold Drinks & Juices</li>
              <li>Bakery & Biscuits</li>
              <li>Dry Fruits, Masala & Oil</li>
              <li>Paan Corner</li>
              <li>Pharma & Wellness</li>
              <li>Ice Creams & Frozen Desserts</li>
              <li>Beauty & Cosmetics</li>
              <li>Stationery Needs</li>
              <li>Print Store</li>
            </ul>

          </div>
          <div className="footer_details ml-20 w-[fit-content] h-[300px] ">
            <h1 className='text-[21px] font-medium invisible'>Categories</h1>

            <ul className="mt-5 text-[#868686]">
              <li>Dairy & Breakfast</li>
              <li>Instant & Frozen Food</li>
              <li>Sweet Tooth</li>
              <li>Sauces & Spreads</li>
              <li>Organic & Premium</li>
              <li>Cleaning Essentials</li>
              <li>Personal Care</li>
              <li>Fashion & Accessories</li>
              <li>Books</li>
              <li>Navratri Specials</li>

            </ul>
          </div>
          <div className="footer_details ml-20 w-[fit-content] h-[300px] ">
            <h1 className='text-[21px] font-medium invisible'>Categories</h1>

            <ul className="mt-5 text-[#868686]">
              <li>Munchies</li>

              <li>Tea, Coffee & Health Drinks</li>
              <li>Atta, Rice & Dal</li>
              <li>Baby Care</li>
              <li>Home & Office</li>
              <li>Pet Care</li>
              <li>Electronics & Electricals</li>
              <li>Toys & Games</li>
              <li>Chicken, Meat & Fish</li>

            </ul>
          </div>
        </div>

        <div className="footer-down mt-10 flex w-[85%] h-[70px]">
          <div className="frist_footer w-[33.33%] h-[inherit] flex justify-center items-center">
            <p className='text-[#868686]'>© Blink Commerce Private Limited, 2016-2025</p>
          </div>
          <div className="second_footer flex justify-evenly items-center w-[33.33%] h-[inherit]">
            <h1 className='text-[#868686]'>Download App</h1>
            <img src="https://blinkit.com/d61019073b700ca49d22.png" className='h-[30px]' alt="" />
            <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" className='h-[30px]' alt="" />
          </div>
          <div className="thrid_footer w-[33.33%] h-[inherit] flex justify-evenly items-center">
            <div className="cricle w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center text-white text-[21px]"><i className="ri-facebook-line"></i></div>
            <div className="cricle w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center text-white text-[21px]"><i className="ri-twitter-x-line"></i></div>
            <div className="cricle w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center text-white text-[21px]"><i className="ri-instagram-line"></i></div>
            <div className="cricle w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center text-white text-[21px]"><i className="ri-linkedin-line"></i></div>
            <div className="cricle w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center text-white text-[21px]"><i className="ri-threads-line"></i></div>
          </div>
        </div>

        <div className="notice w-[85%] text-[#868686]">
          <p>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
        </div>
        
      </div>
    </>
  )
}
