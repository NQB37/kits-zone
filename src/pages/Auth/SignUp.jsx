import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div>
            <Header />
            <div className="w-dvw h-dvh flex justify-center items-center -mt-8 bg-[url('../../../public/img/shurima.jpg')]">
                <div className="w-[1400px] h-[800px] grid grid-cols-2">
                    <div className="relative">
                        <img
                            src="../../../public/img/cod.jpg"
                            alt="cod"
                            className="w-full h-full object-cover"
                        />
                        <p className="absolute bottom-[1%] left-[50%] text-yellow-50 -translate-x-[50%]">
                            Welcome to KITSZONE
                        </p>
                    </div>
                    <div className="bg-background/90 flex justify-center items-center text-center">
                        <div className="text-yellow-50 w-[400px] flex flex-col justify-around space-y-8">
                            <p className="text-4xl">KITSZONE</p>
                            <a href="" className="">
                                SIGN UP
                            </a>
                            <form action="" className="flex flex-col space-y-8">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="focus:border-primary focus:border-[1px] bg-gray-50 border border-yellow-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="example@example.com"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="appearance-none focus:border-primary focus:border-[1px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="••••••••"
                                />
                                <input
                                    type="confirm_password"
                                    name="confirm_password"
                                    id="confirm_password"
                                    className="appearance-none focus:border-primary focus:border-[1px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="••••••••"
                                />
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="remember"
                                        className="appearance-none w-3 h-3 rotate-45 bg-white checked:bg-primary"
                                    />
                                    <label htmlFor="remember">
                                        I accept the
                                        <span>
                                            <a href="" className="text-primary">
                                                {' '}
                                                Terms and Conditions
                                            </a>
                                        </span>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="hover:opacity-80 bg-primary rounded-lg font-md py-2"
                                >
                                    CREATE ACCOUNT
                                </button>
                                <div className="border-primary border-[1px] "></div>
                                <div>
                                    <p>
                                        Already have account?
                                        <span>
                                            <Link
                                                to="/Account/SignIn"
                                                className="text-primary"
                                            >
                                                {' '}
                                                Sign In here
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;
