import { Button } from "@material-ui/core";
// import firebase from "firebase/app";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

function LoginPage() {
    const handleGoogleSignIn = (firebase) => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider);
    };

    return (
        <>
            <h1>Chattela</h1>
            <h2>Login</h2>
            <FirebaseAuthConsumer>
                {({ firebase }) => (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleGoogleSignIn(firebase)}
                    >
                        Sign in with Google
                    </Button>
                )}
            </FirebaseAuthConsumer>
        </>
    );
}

export default LoginPage;