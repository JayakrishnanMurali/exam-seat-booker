import { Provider } from "react-redux";
import "../../styles/globals.css";
import { SideMenu } from "../component/sideMenu/SideMenu";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-5">
        <SideMenu />

        <div className="col-span-4">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
