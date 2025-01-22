import React from "react";
import Media from "../../assets/Frame 719.png";
import Medias from "../../assets/media.png";

const Footer = () => {
  return (
    <>
      <div className=" bg-black">
        <div className="container mx-auto pt-24 pb-24 flex items-center gap-24">
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl">Products</h2>
            <div className="text-white text-xl">Subscribe</div>
            <div className="text-white text-base">
              Get 10% off your first order
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your email "
                className="py-3 px-6 rounded"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl text-white">Account</p>
            <p className="text-base text-white">My Account</p>
            <p className="text-base text-white">Login / Register</p>
            <p className="text-base text-white">Cart</p>
            <p className="text-base text-white">Wishlist</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl text-white">Quick Link</p>
            <p className="text-base text-white">Privacy Policy</p>
            <p className="text-base text-white">Terms Of Use</p>
            <p className="text-base text-white">Contact</p>
            <p className="text-base text-white">FAQ</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl text-white">Support</p>
            <p className="text-base text-white">111 Bijoy sarani, Dhaka,</p>
            <p className="text-base text-white"> DH 1515, Bangladesh.</p>
            <p className="text-base text-white">exclusive@gmail.com</p>
            <p className="text-base text-white">+88015-88888-9999</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-white">Download App</div>
            <p className="text-white">Save $3 with App New User Only</p>
            <img src={Media} alt="" />
            <img src={Medias} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
