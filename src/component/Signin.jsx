import React from 'react'
import { Link } from "react-router-dom";

const Signin = () => {
  return (
     <section class=" bg-gray-100">
         <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
             <div class="max-w-xl lg:max-w-3xl">
                    <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                        <div class="col-span-6 ">
                            <label for="FirstName" class="block text-sm font-medium text-gray-700"> First Name</label>
                            <input
                                type="text"
                                id="FirstName"
                                name="first_name"
                                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div class="col-span-6">
                            <label for="LastName" class="block text-sm font-medium text-gray-700"> Last Name</label>
                            <input
                                type="text"
                                id="LastName"
                                name="last_name"
                                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                        </div>
                        <div class="col-span-6">
                            <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>
                            <input
                                type="email"
                                id="Email"
                                name="email"
                                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div class="col-span-6 ">
                            <label for="Password" class="block text-sm font-medium text-gray-700"> Password </label>
                            <input
                                type="password"
                                id="Password"
                                name="password"
                                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <Link to={"/Home"}>
                            <button class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"> LOGIN</button></Link>
                            <p class="mt-4 text-sm text-gray-500 sm:mt-0">if dont have accont?
                            <Link to={"/Signup"}>
                                <a class="text-gray-700 underline">Create an account</a>.
                            </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    )
}

export default Signin