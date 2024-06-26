import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';


const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"", email:"", pssword:"",cpssword:""});
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const{name ,email,password}=credentials;
        console.log(name,email,password);
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
            
        });
        const json = await response.json();
        console.log(json);
         if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token',json.authtoken);
            history.push("/");
            props.showAlert("Account created successfully","success")
        }
        else{
            props.showAlert("Invalid Details","danger")
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="container mt-2">
             <h2 className='my-3'>Create Your Account </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onchange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onchange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password"onChange={onchange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword"onChange={onchange}minLength={5} required />
                </div>
              
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default Signup;
