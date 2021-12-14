import { googleProvider, firebaseAuth } from "./firebase";

class AuthService {
  login(providerName) {
    const AuthProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(AuthProvider);
  }
  logOut() {
    firebaseAuth.signOut();
  }
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      default:
        throw new Error("not suported provider");
    }
  }
}

export default AuthService;
