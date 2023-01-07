import {useLocation} from "react-router-dom";
import Sidebar from "./Sidebar";
import {useEffect, useState} from "react";

const Navbar = () => {
    const [isSidebarShown, setSidebarShown] = useState(false)
    const toggleSidebar = () => {
        setSidebarShown(!isSidebarShown)
    }
    let location = useLocation();
    useEffect(() => {
        setSidebarShown(false)
    }, [location]);

    return (
        <>
            <nav className="p-3 border-gray-200 rounded bg-gray-50 sticky z-40">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <button type="button" onClick={() => toggleSidebar()}
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </nav>

            { isSidebarShown && <Sidebar toggleSidebar={toggleSidebar} /> }
        </>
    )
}

export default Navbar