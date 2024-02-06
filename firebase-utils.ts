import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { NotificationPlacement } from "antd/es/notification/interface";

// eslint-disable-next-line no-unused-vars
const getAuth = async (
  email: string,
  password: string,
  router: any,
  isSignUp: any,
  openNotification: (placement: NotificationPlacement) => void
) => {
  if (isSignUp) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCred) => {
        fetch("/api/auth", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${await userCred.user.getIdToken()}`
          }
        }).then((response) => {
          if (response.status === 200) {
            router.push("/");
          }
        });
      })
      .catch((error) => {
        alert(`Sign up failed: ${error.message} - ${error.code}`);
      });
  } else {
    signInWithEmailAndPassword(auth, email.trim(), password)
      .then(async (userCred) => {
        fetch("/api/auth", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${await userCred.user.getIdToken()}`
          }
        }).then((response) => {
          if (response.status === 200) {
            router.push("/");
          }
        });
      })
      .catch(() => {
        openNotification("topRight");
        // alert(`Login failed: ${error.message} - ${error.code}`);
      });
  }
};

export { getAuth };
