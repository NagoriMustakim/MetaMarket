import React, { useState } from 'react'

export const Alert = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false)
    };
    return (

        <>
            {isOpen && (
                
                <div className="fixed z-10 inset-0 overflow-y-auto">

                    <div className="flex items-center justify-center min-h-screen p-4">
                        <div className="bg-white rounded-lg p-8">
                            <div className="mb-6 text-xl font-extrabold">This feature is in development</div>
                            <div className="flex justify-center">
                                <button
                                    className="bg-blue-300 hover:bg-blue-700  font-bold py-2 px-5 mt-5 rounded focus:outline-none focus:shadow-outline"
                                    onClick={closeModal} >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    )
}
