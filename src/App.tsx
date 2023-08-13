import { useState, FormEvent } from "react";
import Homepage from "./components/Homepage";
import Signinpage from "./components/Signinpage";
import Signuppage from "./components/Signuppage";
import AccountSettings from "./components/AccountSettings";

type Pages = {
  createAcc: boolean,
  login: boolean,
  accountSettings: boolean,
  homepage: boolean
}

type CreateUser = {
  name: string,
  password: string,
  email: string,
  phone: string,
  company: string,
  isAgency: string,
}

function App() {
  const [pages, setPages] = useState<Pages>({
    createAcc: false,
    login: false,
    accountSettings: false,
    homepage: true
  });

  const [userDetails, setUserDetails] = useState<CreateUser>({
    name: '',
    password: '',
    email: '',
    phone: '',
    company: '',
    isAgency: '0',
  });

  const [error, setError] = useState(false);

  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserDetails(prevUD => ({ ...prevUD, [name]: value.trim() }))
  }

  const onLoginHandler = (email: string, password: string) => {

    if (userDetails.email !== email || userDetails.password !== password) {
      return setError(true);
    }

    PAGES('accountSettings')
    setError(false);
  }


  const PAGES = (page: string) => {
    const newPages: Pages = {
      createAcc: false,
      login: false,
      accountSettings: false,
      homepage: false,
    }

    for (const key in pages) {

      if (key === page) newPages[key as keyof typeof pages] = true;
      else newPages[key as keyof typeof pages] = false
    }
    setPages(newPages);
    setError(false);
  }

  return (
    <main>
      {pages.homepage && < Homepage CRA={PAGES} />}
      {pages.login && <Signinpage error={error} loginHandler={onLoginHandler} CRA={PAGES} />}
      {pages.createAcc && <Signuppage onChange={onChangeHandler} CRA={PAGES} />}
      {pages.accountSettings && <AccountSettings name={userDetails.name} email={userDetails.email} />}
      {!pages.accountSettings
        && !pages.homepage
        && !pages.createAcc
        && !pages.accountSettings
        && <Homepage CRA={PAGES} />}
    </main>
  )
}

export default App
