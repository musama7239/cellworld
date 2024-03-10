import React from 'react'
import './login.css'
import { useForm } from "react-hook-form"
export default function Signup() {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()


    async function signupFormValuidation(data) {
        console.log(data);
        try {

            //  let request=await  fetch("",{
            //         method: "POST", // *GET, POST, PUT, DELETE, etc.
            //         mode: "cors", // no-cors, *cors, same-origin
            //         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //         credentials: "same-origin", // include, *same-origin, omit
            //         headers: {
            //           "Content-Type": "application/json",
            //           // 'Content-Type': 'application/x-www-form-urlencoded',
            //         },
            //         redirect: "follow", // manual, *follow, error
            //         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //         body: JSON.stringify(data), // body data type must match "Content-Type" header
            //       });


        } catch (error) {
            alert(error.message)
        }

    }
    return (
        <>
            <div className='container mt-4'>
                <div className='card' >
                    <div className='card-body'>
                        <h1 className='text-center'>Sign up</h1>
                        <div className='row justify-content-center'>
                            <div className='col-8 '>
                                <div className='row '>
                                    <form onSubmit={handleSubmit(signupFormValuidation)}>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className='form-group'>
                                                    <label htmlFor="fristName">First Name <span className='text-danger'>*</span></label>
                                                    <input className="form-control" placeholder='name' type="text" {...register("firstName",
                                                        {
                                                            required: { value: true, message: "First Name can't be empty" },
                                                            minLength: { value: 3, message: "Name should be at least 3 char" },
                                                            maxLength: { value: 8, message: "oopsss ! name can't be more than 8 char" }
                                                        }
                                                    )} />
                                                    {
                                                        errors.firstName && <span className='text-danger'>{errors.firstName.message}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='form-group'>
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input className="form-control" type="text" {...register("lastName")} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 my-1'>
                                            <div className='form-group'>
                                                <label htmlFor="=userEmail">Email <span className='text-danger'>*</span></label>
                                                <input className="form-control" placeholder='email' type="email" {...register("userEmail", {
                                                    required: {
                                                        value: true,
                                                        message: "Email is required"
                                                    }
                                                })} />
                                                {
                                                    errors.userEmail && <span className='text-danger'>{errors.userEmail.message}</span>
                                                }
                                            </div>
                                        </div>
                                        <div className='col-12 my-1'>
                                            <div className='form-group'>
                                                <label htmlFor="=userPassword">Password <span className='text-danger'>*</span></label>
                                                <input className="form-control" placeholder='password' type="password" {...register("userPassword", {
                                                    required: {
                                                        value: true,
                                                        message: "Are you kidding me?"
                                                    }, minLength: {
                                                        value: 8,
                                                        message: "Password can't be less than 8 charachter"
                                                    }
                                                })} />

                                                {
                                                    errors.userPassword && <span className='text-danger'>{errors.userPassword.message}</span>
                                                }
                                            </div>
                                        </div>
                                        <div className='col-12 my-2'>

                                            <button className='btn btn-danger'>Signup</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
