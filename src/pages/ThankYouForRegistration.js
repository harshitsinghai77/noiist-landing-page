import Header from "../partials/Header";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { APP_NAME } from "../utils/constants";

function ThankYouForRegistration() {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  let intro = `Thanks for subscribing to ${APP_NAME}.`;
  let info =
    "Welcome aboard! Head over to Spotify and listen to your favourite songs, we will take care of the rest. See you around 🙂";
  if (parsed["name"]) {
    intro = `Hey ${parsed["name"]}, thank you for connecting to ${APP_NAME} 🥳`;
  }

  if (parsed["already_exists"] === "True") {
    intro = `Hey ${parsed["name"]}, I think we've already met 😅`;
    info = `A little birdie told me that you've already registered for ${APP_NAME}.`;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">{intro}</h1>
              </div>

              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h4">{info}</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ThankYouForRegistration;
