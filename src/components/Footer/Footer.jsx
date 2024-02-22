const Footer = () => {
    return (
        <div className="w-full h-[250px] bg-secondary box-border flex flex-col items-center justify-center my-4">
            <div className="footer--contact flex justify-between items-center w-3/12 text-2xl text-yellow-50">
                <h1>Contact Us</h1>

                <div className="footer--contact--logo flex justify-around items-center gap-4">
                    <a href="" className="hover:text-primary">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="" className="hover:text-primary">
                        <i className="fa-brands fa-tiktok" />
                    </a>
                    <a href="" className="hover:text-primary">
                        <i className="fa-brands fa-behance"></i>
                    </a>
                    <a href="" className="hover:text-primary">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="" className="hover:text-primary">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>

            <div className="footer--subscribe flex flex-col w-3/12 text-yellow-50 my-4">
                <div className="footer--subscribe--content my-2">
                    <h5 className="text-center">Subscribe</h5>
                    <p className="text-center text-sm">
                        Keep in touch to receive news about new realeases and
                        discounts.
                    </p>
                </div>
                <div className="footer--subscribe--form my-2">
                    <form
                        action=""
                        className=" flex items-center justify-between gap-4"
                    >
                        <input
                            type="email"
                            className="basis-9/12 px-4 bg-transparent border-[1px] h-10"
                            placeholder="CUSTOMER@EMAIL.COM"
                        />
                        <button
                            type="submit"
                            className="basis-3/12 bg-primary h-10"
                        >
                            JOIN!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
