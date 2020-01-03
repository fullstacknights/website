import React from "react";

import { GradientBackground, Layout, SEO } from "../components/index.js";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <GradientBackground className="flex flex-col items-center justify-center pt-13 lg:block">
      <div className="flex flex-col text-center mt-10 lg:mt-20">
        <h2 className="text-h2 font-bold text-white">NOT FOUND</h2>
        <h4 className="text-h4 text-white mb-8">
          You just hit a route that doesn&#39;t exist... the sadness.
        </h4>
        <div className="w-full m-auto mb-10 max-w-6xl lg:mb-20 lg:w-2/3">
          <div className="flex flex-col items-center w-full mb-4">
            <img
              src="https://media.giphy.com/media/a9xhxAxaqOfQs/source.gif"
              className="lg:w-1/2 md:w-full"
              alt="Sad David Tennant in the rain"
            />
          </div>
        </div>
      </div>
    </GradientBackground>
  </Layout>
);

export default NotFoundPage;
