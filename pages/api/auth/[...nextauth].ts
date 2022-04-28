import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth";
import execQuery from "../../../db";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'basic-login',
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      // async authorize(credentials, req) {
      authorize: async (credentials) => {

        // db look up
        const [creds] = await execQuery("select * from `users`;", []);
        console.log('user: ', creds);
        if(credentials?.username == creds.user && credentials?.password == creds.pwd) {
          console.log('inside');
          return {
            id: 1,
            name: 'Sergey',
            email: "serg@example.com"
          }
        }

        console.log('outside');
        // const res = await fetch("/your/endpoint", {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()
        //
        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user
        // }
        // Return null if user data could not be retrieved
        return null
      },
    })
  ],

  callbacks: {
    jwt: ({token, user}) => {
      console.log('jwt');
      // first time run
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({session, token}) => {
      console.log('be sess');
      if(token) {
        session.id = token.id;
      }

      return session;
    },
    redirect({url, baseUrl }) {
      return '/adm321';
    }
  },
  secret: "test",
  jwt: {
    secret: "test",
    maxAge: 60*60
  }

})
