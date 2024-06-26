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
            <div className="w-full md:sticky z-50 border-b-2 border-red-400">
                <nav className="bg-secondary flex items-center justify-between px-20 h-16 ct-nav">
                    <ul className="basis-1/12 flex items-center justify-start">
                        <Link to="/">
                            <h1 className="text-primary text-xl font-bold">
                                KITSZONE
                            </h1>
                        </Link>
                    </ul>
                    <ul className="basis-8/12 flex items-center justify-start gap-10 px-10 h-full">
                        <li className="ct-nav-item">
                            <NavLink to="/Collection" className="block">
                                COLLECTION
                            </NavLink>
                        </li>
                        <li className="ct-nav-item">
                            <NavLink to="/Showcase" className="block">
                                SHOWCASE
                            </NavLink>
                        </li>
                        <li className="ct-nav-item">
                            <NavLink to="/Tutorial" className="block">
                                TUTORIALS
                            </NavLink>
                        </li>
                        <li className="ct-nav-item">
                            <NavLink to="/Tool" className="block">
                                TOOLS
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="basis-3/12 flex items-center justify-end gap-10">
                        <li className="text-lg cursor-pointer text-primary">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </li>
                        <li className="relative text-lg cursor-pointer">
                            <i
                                onClick={handleSearch}
                                className="fa-solid fa-magnifying-glass text-primary"
                            ></i>
                            {searchStatus && (
                                <form
                                    action=""
                                    className="absolute w-80 top-[35px] right-0 bg-secondary px-4 py-4 -z-40"
                                >
                                    <input
                                        type="search"
                                        id="seach"
                                        className="text-primary bg-transparent border-primary border-[1px] w-full px-4"
                                        placeholder="Search..."
                                    />
                                </form>
                            )}
                        </li>

                        <li className="ct-nav-item">
                            <NavLink to="/Account/SignIn">
                                <i className="fa-solid fa-circle-user mr-2"></i>
                                SIGN IN
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
