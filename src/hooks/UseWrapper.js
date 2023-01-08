import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux";

const useWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default useWrapper;
