import React from 'react';

import { useLoaderData, useParams } from 'react-router';

const BookAppointment = () => {

    const appointmentData = useLoaderData()
    // console.log(appointmentData)
    const id = useParams();
    // console.log("service id",id)
    // console.log(appointmentData.items)


    const fillterAppointment = appointmentData.filter(data => data.id == id.id)
    console.log(fillterAppointment)


    const handleFormInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const newUser = { name, email, number };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));

    }
        return (
            <div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        fillterAppointment.map((data) => <div className="w-full max-w-sm bg-white shadow-md rounded-2xl p-6 text-center">
                            <h2 className="text-xl font-semibold text-teal-500">{data.title}</h2>
                            <p className="text-gray-600 mt-1">8:00 AM - 9:00 AM</p>


                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="mt-4 bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-xl font-medium transition-all">
                                BOOK APPOINTMENT
                            </button>



                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <form className='text-black' onSubmit={handleFormInfo}>
                                        <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6 space-y-4">
                                            <input
                                                type="text"
                                                value="April 30, 2020"
                                                disabled
                                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg"
                                            />


                                            <input
                                                type="text"
                                                value="10:05 am - 11:30 am"
                                                disabled
                                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-lg"
                                            />


                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                name="name"
                                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            />


                                            <input
                                                type="text"
                                                placeholder="Phone Number"
                                                name='number'
                                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            />


                                            <input
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            />


                                            <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-all">
                                                SUBMIT
                                            </button>
                                        </div>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                        </div>)
                    }
                </div>




            </div>
        );
    };

    export default BookAppointment;