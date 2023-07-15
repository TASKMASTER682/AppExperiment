import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                width={200}
                height={200}
                className=" w-56 h-16"
                src="/logo.png"
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className="text-white hover:bg-teal-500 px-3 py-2 rounded-md text-sm font-medium" href="/">Home</Link>

                <Link className="text-white hover:bg-teal-500 px-3 py-2 rounded-md text-sm font-medium" href="/customer/allCustomers">Customers</Link>

                <Link className="text-white hover:bg-teal-500 px-3 py-2 rounded-md text-sm font-medium" href="/dashboard">Dashboard</Link>

                <Link className="text-white hover:bg-teal-500 px-3 py-2 rounded-md text-sm font-medium" href="/deliveryBoy">Delivery Boy</Link>

                 <Link className="text-white hover:bg-teal-500 px-3 py-2 rounded-md text-sm font-medium" href="/customer">Create Customers</Link>

                <Link className="text-white hover:bg-teal-500 px-3 py-2 rounded-md text-sm font-medium" href="/dashboard/dinner">Dinners</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-teal-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6 text-emerald-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href='/deliveryBoy' className="text-white hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium">
            Deliver Boys
            </Link>
            <Link href='/dashboard' className="text-white hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium">
             Dashboard
            </Link>
            <Link href='/customer' className="text-white hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium">
            Customers
            </Link>
            <Link href='/' className="text-white hover:bg-teal-700 block px-3 py-2 rounded-md text-base font-medium">
             Home
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
