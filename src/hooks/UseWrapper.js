import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux";
import { AuthProvider } from "react-auth-kit";

const useWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <BrowserRouter>{children}</BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default useWrapper;
