import React, { Component } from "react";
import "./AuthenticationForm.css";

class AuthenticationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let Name;
    return (
      // <!--container for side by side forms-->
      <div class="container">
        {/*main heading */}
        <h1 class="ez-heading">AUTHENTICATION</h1>
        <hr class="lighter auth_line" />

        {/*<!--first form 'CREATE AN ACCOUNT'-->*/}
        <div class="box">
          <h3 class="ez-heading">CREATE AN ACCOUNT</h3>
          <hr class="lighter auth_line_bottom" />
          <label class="lighter auth_email_label" for="fname">
            Please enter your email address to create an account
          </label>
          <br />
          <label class="subheading auth_email_subhead">Email address</label>
          <br />
          <div className="email_input_wrap">
            <input type="text" id="fname" name="e_mail" />
          </div>
          <br />
          <label class="auth_space_creater"></label>
          <input class="lighter" type="submit" value="Create an account" />
          <br />
        </div>

        {/*<!--second form 'ALREADY REGISTERED?'-->*/}
        <div class="box" style={{ marginLeft: "25px" }}>
          <h3 class="ez-heading">ALREADY REGISTERED?</h3>
          <hr class="lighter auth_line_bottom" />
          <br />
          <label class="subheading">Email address</label>
          <br />
          <input type="text" id="ename" name="email" />
          <label class="auth_space_creator_s"></label>
          <br />
          <label class="subheading">Password</label>
          <br />
          <input class="subheading" type="password" id="pname" name="pass" />
          <br />
          <label class="auth_space_50"></label>
          <label>
            <a href="" class="lighter auth_forgot_pass">
              Forgot your password?
            </a>
          </label>
          <br />

          <label style={{ lineHeight: "35px" }}></label>
          <input class="lighter" type="submit" value="Sign in" />
        </div>
      </div>
    );
  }
}

export default AuthenticationForm;
