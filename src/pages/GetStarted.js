import React from "react";
import Header from "../partials/Header";
import { spotify_link } from "../utils/constants";

function GetStarted() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  There is a song out there to describe just about any
                  situation.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <a href={spotify_link} target="_blank" rel="noreferrer">
                      <button
                        style={{ backgroundColor: "#1DB954" }}
                        className="btn px-0 text-white hover:bg-gray-800 w-full relative flex items-center"
                      >
                        <svg
                          className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                          viewBox="0 0 64 64"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            data-name="layer1"
                            d="M32 0a32 32 0 1 0 32 32A31.966 31.966 0 0 0 32 0zm12.3 47.2a2.654 2.654 0 0 1-1.4-.5 32.041 32.041 0 0 0-16.6-4.3 48.082 48.082 0 0 0-10.1 1.1 11.045 11.045 0 0 1-1.6.3 2 2 0 0 1-2-2 2.11 2.11 0 0 1 1.7-2.2 53.9 53.9 0 0 1 12-1.4A35.787 35.787 0 0 1 44.9 43a2.131 2.131 0 0 1 1.3 2.1 1.846 1.846 0 0 1-1.9 2.1zm3.5-8.5a2.834 2.834 0 0 1-1.6-.6A41.422 41.422 0 0 0 25.9 33a43.3 43.3 0 0 0-10.4 1.3 4.707 4.707 0 0 1-1.6.4 2.476 2.476 0 0 1-2.5-2.5 2.6 2.6 0 0 1 2-2.7A43.762 43.762 0 0 1 26 27.7a44.707 44.707 0 0 1 22.8 5.9 2.583 2.583 0 0 1 1.5 2.5 2.5 2.5 0 0 1-2.5 2.6zm4-9.8a3.022 3.022 0 0 1-1.6-.5C44.3 24.9 35.3 23 26.7 23a49.826 49.826 0 0 0-12.8 1.5 9.005 9.005 0 0 1-1.6.3 3.031 3.031 0 0 1-3-3.1 3.213 3.213 0 0 1 2.2-3.1 55.906 55.906 0 0 1 15.2-2c9.4 0 19.3 1.9 26.5 6.2a3.025 3.025 0 0 1 1.6 2.9 3.058 3.058 0 0 1-3 3.2z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Connect with Spotify
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GetStarted;
