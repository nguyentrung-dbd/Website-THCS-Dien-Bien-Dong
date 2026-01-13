import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEZJqrLX1bwz49lWaeiepjqI0-WkruYiA",
  authDomain: "thcs-dienbiendong.firebaseapp.com",
  projectId: "thcs-dienbiendong",
  storageBucket: "thcs-dienbiendong.firebasestorage.app",
  messagingSenderId: "269199226382",
  appId: "1:269199226382:web:093ea0d63fbc5ebb962e5f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 🔐 Đăng nhập
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// 🚪 Đăng xuất
export function logout() {
  return signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}
