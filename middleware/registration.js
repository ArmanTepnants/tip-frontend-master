export default function ({ redirect, env }) {
  if (env.DISABLE_REGISTRATION) {
    return redirect('/');
  }
}
