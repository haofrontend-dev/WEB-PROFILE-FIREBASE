import { auth } from "@/config/filsebase";
import { onAuthStateChanged } from "firebase/auth";

let user = auth.currentUser;

onAuthStateChanged(auth, (currentUser) => {
  user = currentUser;
});

function getUser() {
  if (user) {
    return user;
  } else {
    console.log("User chưa đăng nhập");
    return;
  }
}
export function useUser() {
  return { getUser };
}
