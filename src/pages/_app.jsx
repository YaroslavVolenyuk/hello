import "@/styles/globals.css";

import React from "react";

export default function App() {

    return <div
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">
        <div
            className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl max-w-lg w-full transition-transform duration-300 transform hover:translate-y-[-5px]">
            <div className="flex gap-2 mb-4">
                <div className="bg-red-500 w-4 h-4 rounded-full"></div>
                <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
                <div className="bg-green-500 w-4 h-4 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-4">
                <p>
                    Hi, I'm Yaroslav Volenyuk, a frontend developer with a passion for building clean, efficient, and
                    user-friendly web applications.
                </p>
                <p>
                    My experience includes working with React, TypeScript, and modern testing tools like Vitest and
                    Playwright, ensuring both quality and scalability.
                </p>
                <p>
                    I'm excited about the opportunity to bring my expertise to Goodbag, combining technical skills with
                    a shared commitment to meaningful change.
                </p>
            </div>
        </div>
    </div>
}