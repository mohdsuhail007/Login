
import { FormEvent } from 'react';
const Signuppage = ({ CRA, onChange }: { CRA: (page: string) => void, onChange: (e: FormEvent<HTMLInputElement>) => void }) => {

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        CRA('login');
    }

    return (
        <section className="signup-page">
            <h2>Create your PopX account</h2>
            <form onSubmit={onSubmit}>
                <div className="login-inputs">
                    <div className="input-cont">
                        <label htmlFor="name">Full Name*</label>
                        <input onChange={onChange} required id="name" name="name" type="text" placeholder="Enter Full Name" />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="phone">Phone Number*</label>
                        <input onChange={onChange} required id="phone" name="phone" type="number" placeholder="Enter Phone Number" />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="email">Email Address*</label>
                        <input onChange={onChange} required id="email" name="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div className="input-cont">
                        <label htmlFor="company">Company name*</label>
                        <input onChange={onChange} required id="company" name="company" type="text" placeholder="Enter Company name" />
                    </div>

                    <div className="input-cont">
                        <label htmlFor="password">Password*</label>
                        <input onChange={onChange} required id='password' name='password' type="password" placeholder="Enter password" />
                    </div>
                    <div>
                        <p >Are you an Agency?*</p>
                        <input onChange={onChange} required id='yes' value={1} name='isAgency' type="radio" />
                        <label htmlFor="yes">Yes</label>
                        <input onChange={onChange} required id='no' value={0} name='isAgency' type="radio" />
                        <label htmlFor="no">No</label>
                    </div>
                </div>


                <button className="login-btn">Sign Up</button>
                <button onClick={() => CRA('homepage')} className="back">back</button>
            </form>
        </section>
    )
}

export default Signuppage
