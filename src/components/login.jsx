import React from "react";
import Input from "./input";

function Login(props) {
    return <form className="form">
                <Input typ="text" phold="User Name"></Input>
                <Input typ="password" phold="Password"></Input>
                {!props.isR && <Input typ="password" phold="Confirm Password"></Input>}
                <button type="submit">{props.isR? "Login": "Register"}</button>
            </form>
}

export default Login;