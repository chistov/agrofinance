
// @ts-ignore
import {useEffect, useState} from "react";

export default function SignIn() {
// export default function SignIn({ csrfToken }) {
//   console.log('ls: ', localStorage);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      console.log('You are on the browser')
      setLoading(false);

      // 👉️ can use localStorage here
    } else {
      console.log('You are on the server')
      // 👉️ can't use localStorage
    }
  }, [typeof localStorage])

  const test = async () => {
    await fetch('/api/login', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(rsp => rsp.json())
      .then(rsp => {
        // @ts-ignore
        localStorage.setItem('token', rsp.token)
        console.log('rsp: ', rsp)
      })
      .catch(e => console.log('err: ', e));
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    {loading && <div>Loading</div>}
      <div>
      {/*<form method="post" action="/api/auth/callback/credentials">*/}
        <label>
          Username
          <input name="user" type="text"
             value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
          Password
          <input name="password" type="password"
             value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button onClick={ () => test()}>Sign in</button>
      </div>
    </>
)
}

// @ts-ignore
// export async function getStaticProps(context) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   }
// }
