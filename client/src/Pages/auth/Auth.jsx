import { useState } from "react";
import "./auth.css"

function Auth() {
  const [signin, setsignin] = useState(true);

  return (
    <div className="auth-page">


      <div className="auth-card">

        <div className="auth-header">

          <h1>{signin ? "Sign in to your account" : "Create your account"}</h1>
          <p className="muted">Access courses and your dashboard</p>


        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {signin && (
            <div className="form-row">
              <div className="form-group" style={{flex: 1}}>
                <label>First name</label>
                <input className="form-input" type="text" placeholder="First name" required />
              </div>
              <div className="form-group" style={{flex: 1}}>
                <label>Last name</label>
                <input className="form-input" type="text" placeholder="Last name" required />
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input className="form-input" type="email" placeholder="Email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input className="form-input" type="password" placeholder="Password" required />
          </div>

          <div className="form-row" style={{marginTop: 8, marginBottom: 12}}>
            <label className="remember">
              <input type="checkbox" /> <span style={{marginLeft:8}}>Remember me</span>
            </label>
            <a className="forgot" href="#">Forgot?</a>
          </div>

          <div className="form-group">
            <button className="btn btn-ghost" type="button">Continue with Google</button>
            <button className="btn btn-primary" type="submit">{ signin ? "Signin" : "Signup" }</button>
          </div>

          
        </form>

        <div className="divider">or</div>

        <div className="auth-footer">
          <span>{signin ? "Don't have an account?" : "Already have an account?"}</span>
          <button className="btn" style={{marginLeft:8}} onClick={() => setsignin(!signin)}>
            {signin ? 'Create account' : 'Sign in'}
          </button>
        </div>


      </div>


    </div>
  );
}

export default Auth;
