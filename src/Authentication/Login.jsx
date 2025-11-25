
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";


const Login = () => {
    const navigate = useNavigate();
    const { signIn, googleLogin } = useContext(AuthContext);




    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                toast.success("Login Successfull")
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                toast.error("Login error")
            });


    }

    const handleGoogleLogIn = () => {
        googleLogin()
            .then((result) => {

                const user = result.user;
                console.log(user)
                Navigate('/home')
               
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)  
            });
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text" name="email"

                            className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="text" name="password"

                            className="input input-bordered w-full max-w-xs" />
                       
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />

                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/registration">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleLogIn}>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;