

const homepage = ({ CRA }: { CRA: (page: string) => void }) => {
    return (
        <section className="homepage">
            <h1>Welcome to PopX</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit doloremque explicabo eius, perferendis veniam!</p>

            <div className="account">
                <button onClick={() => CRA('createAcc')} className='create-account'>Create Account</button>
                <button onClick={() => CRA('login')} className="login">Already Registered? Login</button>
            </div>
        </section>
    )
}

export default homepage
