import SignupForm from "./components/form/form.component";
import "./signup.page.scss";

export function Signup() {
  return (
    <div className="signup-page">
      <header>
        <h1 className="label">
          Social
          <span className="in">in</span>
        </h1>
      </header>

      <main className="main-form">
        <h2>Make the most of your professional life </h2>

        <SignupForm></SignupForm>
      </main>
    </div>
  );
}
