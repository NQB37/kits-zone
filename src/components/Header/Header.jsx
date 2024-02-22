import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
function Header() {
    const [searchStatus, setSearchStatus] = useState(false);

    const handleSearch = () => {
        let checkStatus = searchStatus == true ? false : true;
        setSearchStatus(checkStatus);
        console.log(searchStatus);
    };

    return (
        <>
            <div className="max-w-screen-2xl mx-auto md:sticky top-4 z-50">
                <nav className="bg-secondary flex items-center justify-between px-4 h-12 ct-nav">
                    <ul className="basis-1/12 flex items-center justify-start">
                        <Link to="/">
                            <h1 className="text-primary text-xl ">KITS ZONE</h1>
                        </Link>
                    </ul>
                    <ul className="basis-8/12 flex items-center justify-start gap-10 px-10 h-full">
                        {/* <li className="ct-nav-item">
                            <a href="" className="">
                                HOME
                            </a>
                        </li> */}
                        <li className="ct-nav-item">
                            <NavLink to="/Collection" className="">
                                COLLECTION
                            </NavLink>
                        </li>
                        <li className="ct-nav-item">
                            <NavLink to="/Showcase">SHOWCASE</NavLink>
                        </li>
                        <li className="ct-nav-item">
                            <NavLink to="/Tutorial">TUTORIALS</NavLink>
                        </li>
                        <li className="ct-nav-item">
                            <NavLink to="/Tool">TOOLS</NavLink>
                        </li>
                    </ul>
                    <ul className="basis-3/12 flex items-center justify-end gap-4">
                        <li onClick={handleSearch} className="relative">
                            <i className="fa-solid fa-magnifying-glass text-primary"></i>
                            {searchStatus && (
                                <form
                                    action=""
                                    className="absolute w-80 top-[35px] right-0 bg-secondary px-4 py-4 -z-40 duration-100"
                                >
                                    <input
                                        type="search"
                                        id="seach"
                                        className="text-primary bg-transparent border-primary border-[1px] w-full duration-100"
                                        placeholder="Search..."
                                    />
                                </form>
                            )}
                        </li>
                        <li className="ct-nav-item">
                            <a href="">SIGN IN</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
