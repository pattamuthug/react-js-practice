import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';


function Signup(props) {
    let loginto = useNavigate();
    const [isvalid, setIsvalid] = useState("false");
    const [password, setPassword] = useState();
    const [signUp, setSignUp] = useState({
        name: "",
        email: "",
        mobile: "",
        confirmPassword: "",

    });
    const userHandler = (event) => {
        setSignUp((preState) => {
            return { ...preState, name: event.target.value }
        });
    }
    const mailHandler = (event) => {
        setSignUp((preState) => {
            return { ...preState, email: event.target.value }
        });
    }
    const numHandler = (event) => {
        setSignUp((preState) => {
            return { ...preState, mobile: event.target.value }
        });
    }
    const passHandler = (event) => {
        setPassword(event.target.value)
        // setSignUp((preState)=>{
        //     return{...preState, name:event.target.value}    
        // });
        console.log(setPassword);
    }
    const confirmHandler = (event) => {
        setSignUp((preState) => {
            return { ...preState, confirmPassword: event.target.value }
        });
    }
    useEffect(() => {
        if (signUp.email.includes("@") && signUp.email.includes(".") && signUp.confirmPassword > 4 && (password==signUp.confirmPassword)) {
            setIsvalid("true")
        } else {
            setIsvalid("false")
        }
    }, [signUp])
    // const signHandlers = (event) => {
    //     event.preventDefault();
        // fetch('https://6315a5215b85ba9b11e3c470.mockapi.io/muthu/users', {
        //     method : 'POST',
        //     headers : {
        //         'Content-Type': 'application/json'
        //     },
        //     body : JSON.stringify(signUp)
        // })
        
    // }
  

    const SingupHandler = (event) => {
        console.log(signUp);
        event.preventDefault();
        loginto('/')
        fetch('https://6315a5215b85ba9b11e3c470.mockapi.io/muthu/users', {
                method : 'POST',
                headers : {
                    // `Accept`: `application/json, text/plain,*/*`,
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(signUp)
            })
    }
    return (<>
        <div className='signupContainer'>
            <div className='signTotal'>
                <img src={props.image}></img>
                <form className="signForm">

                    <h1>Sign Up</h1>
                    <label htmlFor='signText'>Username</label><input id='signText' value={signUp.name} type='text' onChange={userHandler}></input>
                    <label htmlFor='signText1'>Email</label><input id='signText1' value={signUp.email} type='text' onChange={mailHandler}></input>
                    <label htmlFor='signNum'>Mobile Number</label><input id='signNum' value={signUp.mobile} type='number' onChange={numHandler}></input>
                    <label htmlFor='signPass'>Password</label><input id='signPass' type='password' value={password} onChange={passHandler}></input>
                    <label htmlFor='signCon'>Confirm Password</label><input id='signCon' value={signUp.confirmPassword} type='password' onChange={confirmHandler}></input>
                    <input id='signCheck' type='checkbox'></input><label htmlFor='signCheck' className='checkLabel'>I agree to the <b>Terms of User</b></label>
                    <div>
                        {
                            isvalid == "true" ? <button onClick={SingupHandler}>Signup</button> : <button onClick={SingupHandler} disabled>Signup</button>
                        }
                        <p>Have already an account ?</p><button onClick={SingupHandler}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>);
};
export default Signup;