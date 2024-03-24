import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-green-100">
      <div
        className="flex justify-between max-w-6xl m-auto
      items-center p-3"
      >
        <h1
          className=" font-bold text-sm sm:text-xl
    flex flex-wrap"
        >
          <span className="text-[green]">Mujjacon</span>
          <span className="text-red-500"> Estate</span>
        </h1>
        <form
          className="bg-green-200 rounded-full 
         relative p-3"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent 
            cursor-pointer focus:outline-none
            w-24 sm:w-64"
          />
          <button
            className="p-5 
          bg-green-700 absolute 
          cursor-pointer rounded-full right-1 top-1"
          ></button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li
              className=" hidden sm:inline
           cursor-pointer hover:text-green-800 text-slate-700"
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className=" hidden sm:inline
            cursor-pointer hover:text-green-800 text-slate-700"
            >
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li
              className="  sm:inline
            cursor-pointer hover:text-green-800 text-slate-700"
            >
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header