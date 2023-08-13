
const AccountSettings = ({ name, email }: { name: string, email: string }) => {
    return (
        <section className="AS-page">
            <h2>Account Settings</h2>

            <div className="user-details">
                <img src="/user.jpg" alt='profile picture' />

                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>

            <div className="user-bio">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus accusantium numquam ipsum nihil!
                    Dolorum animi vitae laudantium optio, ipsa aliquam.
                </p>
            </div>
        </section>
    )
}

export default AccountSettings
