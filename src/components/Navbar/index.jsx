import React from "react";

function Navbar(e) {
  function toggleTheme() {
    var themeMode = document.documentElement.getAttribute("data-mode");
    if (themeMode === "light") {
      document.documentElement.setAttribute("data-mode", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-mode", "light");
      localStorage.setItem("theme", "light");
    }
  }
  return (
    <div className="navbar-custom " id="navbar">
      <nav>
        <div className="lg:container flex flex-wrap items-center ">
          {/* Main Logo */}
          <a href="index.html" className="flex lg:ml-0 ml-8">
            <span className="self-center text-xl font-poppins font-bold tracking-widest whitespace-nowrap uppercase text-white me-20">
              Dorsin
            </span>
          </a>
          <div className="flex items-center lg:order-2 rtl:mr-auto ltr:ml-auto lg:mr-0 mr-8">
            {/* Navbar Button */}
            <a
              href="signup.html"
              className="btn bg-red-500 text-white rounded-full translate-y-0"
            >
              Try it Free
            </a>
            {/* Navbar Collapse Manu Button */}
            <button
              data-collapse="menu-collapse"
              type="button"
              className="inline-flex items-center ml-3 text-sm text-white lg:hidden"
              aria-controls="menu-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <i className="mdi mdi-menu text-2xl" />
            </button>
          </div>
          <div className="lg:order-2 rtl:mr-auto ltr:ml-auto lg:mr-0 mr-8 flex items-center ml-60">
            <div className="ml-auto">
              <div className="flex flex-col gap-3  ">
                <a
                  onClick={toggleTheme}
                  href="javascript: void(0);"
                  id="mode"
                  className="px-3 py-3 z-40 text-14 font-normal transition-all duration-300 ease-linear text-white bg-zinc-800 dark:bg-white rounded-3xl"
                >
                  <i className="mdi mdi-white-balance-sunny text-xl dark:text-zinc-800 hidden dark:block" />
                  <i className="mdi mdi-moon-waning-crescent text-xl dark:text-zinc-800 block dark:hidden" />
                </a>
              </div>
            </div>
          </div>

          {/* Navbar Manu */}
          <div
            className="justify-between items-center w-full lg:w-auto lg:flex hidden lg:order-1 ltr:lg:ml-14 rtl:lg:mr-14 rtl:mr-0 ltr:ml-0"
            id="menu-collapse"
          >
            <ul
              className="navbar-nav lg:h-auto h-[290px] lg:overflow-visible overflow-y-scroll lg:ml-0 ml-8"
              id="navbar-navlist"
            >
              <li>
                <a data-scroll href="#home" className="nav-item">
                  Home{" "}
                </a>
              </li>
              <li>
                <a data-scroll href="#services" className="nav-item">
                  Services{" "}
                </a>
              </li>
              <li>
                <a data-scroll href="#pricing" className="nav-item">
                  {" "}
                  Pricing
                </a>
              </li>
              <li>
                <a data-scroll href="#team" className="nav-item">
                  {" "}
                  Team
                </a>
              </li>
              <li>
                <a data-scroll href="#blog" className="nav-item">
                  Blog
                </a>
              </li>

              <li>
                <div className="dropdown">
                  <a
                    href="#Authpage"
                    className="nav-item dropdown-toggle"
                    id="navbarDropdownTwoButton"
                    data-dropdown-toggle="navbarDropdownTwo"
                    aria-current="page"
                  >
                    Auth Pages <i className="mdi mdi-chevron-down" />
                  </a>
                  <div id="navbarDropdownTwo" className="dropdown-menu">
                    <a href="login.html" className="dropdown-item">
                      Login
                    </a>
                    <a href="signup.html" className="dropdown-item">
                      Sign up
                    </a>
                    <a href="password_forget.html" className="dropdown-item">
                      Forget Password
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
