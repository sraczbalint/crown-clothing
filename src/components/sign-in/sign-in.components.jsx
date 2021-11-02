import { getDefaultNormalizer } from "@testing-library/dom";
import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss'
import CustomButton from "../custom-button/custom-button.component"; 
import { SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super();

        this.state= {
            email:'',
            password:''
        }
        }

        handleSubmit = event => {
            event.preventDefault();

            this.setState({email: '', password:''})
        }

        handleChange = event => {
            const { value, name} = event.target;

            this.setState( { [name]:value })
        }
    
        render() {
            return (
                <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>

                        <form onSubmit={this.handleSubmit}>
                            <FormInput 
                                name="email" 
                                type='email' 
                                value={this.state.email}
                                handleChange={this.handleChange}
                                label="email"  
                                required 
                            />
                            <FormInput 
                                name="password" 
                                type='password' 
                                value={this.state.password} 
                                handleChange={this.handleChange}
                                label='password' 
                                required 
                            />
                            <div className='buttons'>
                            <CustomButton type="submit">Sign in</CustomButton>
                            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn >
                                Sign in with Google
                            </CustomButton>
                            </div>
                        </form>
                </div>
            )
        }
};

export default SignIn;
