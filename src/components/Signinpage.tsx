import { SyntheticEvent } from "react";

const Signinpage = ({ CRA, error, loginHandler }: { CRA: (page: string) => void, error: boolean, loginHandler: (email: string, password: string) => void }) => {

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value.trim();
        const password = target.password.value.trim();

        loginHandler(email, password);
    }

    return (
        <section className="login-page">
            <h2>SignIn to your PopX account</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, neque!</p>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className="login-inputs">
                    <div className="input-cont">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" placeholder="Enter email address" />
                    </div>

                    <div className="input-cont">
                        <label htmlFor="password">Password</label>
                        <input id='password' name='passoword' type="password" placeholder="Enter password" />
                    </div>
                </div>

                <p style={{color: 'red'}}>{error && 'Invalid creadentials'}</p>

                <button className="login-btn">Login</button>
                <button onClick={() => CRA('homepage')} className="back">back</button>
            </form>
        </section>
    )
}

export default Signinpage
