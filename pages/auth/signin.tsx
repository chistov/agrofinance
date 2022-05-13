
// @ts-ignore
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function SignIn() {
// export default function SignIn({ csrfToken }) {
//   console.log('ls: ', localStorage);
  const router = useRouter();
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

  const singIn = async () => {
    await fetch('/api/login', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(async rsp => {

        if(rsp.status != 200) {
          console.log('bad response');
          return;
        }

        const json = await rsp.json()
        // @ts-ignore
        if(rsp.status == 200) {
          localStorage.setItem('token', json.token)
          await router.push('/adm321');
        }
      })
      .catch(e => console.log('err: ', e));
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container mt-3 mt-md-5">
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          {loading && <div>Загрузка</div>}
          <label>
             Имя пользователя
            <input name="user" type="text"
                   value={username} onChange={(e) => setUsername(e.target.value)}/>
          </label>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <label>
            Пароль
            <input name="password" type="password"
                   value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button onClick={singIn}>Войти</button>
        </div>
      </div>
    </div>
      )
}
