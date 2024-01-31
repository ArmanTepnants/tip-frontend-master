export default function ({ $auth, redirect }) {
    if ($auth.loggedIn || $auth.user) {
        return redirect('/profile');
    }
}
