import React from "react";
const AccountSettings = (props: any)=>{
    const {AuthStatus} =  props;
    const {isAuthenticated, username} =  AuthStatus;
    return (isAuthenticated ? <><p>Welcome, {username &&username}</p></> : 
    <> <button type="button" >
    Log in
  </button>
  <button type="button">
    Sign Up
  </button></>)
}
export default AccountSettings;