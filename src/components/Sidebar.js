import {Link} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <>
            <div className="absolute top-0 mt-2 left-0 z-50 h-full p-4 overflow-y-auto bg-white w-80" tabIndex="-1">
                <button type="button" onClick={props.toggleSidebar}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 mt-10 overflow-y-auto">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                                <span className="ml-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                                <span className="ml-3">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                                <span className="ml-3">Register</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"/>
        </>
    )
}

export default Sidebar