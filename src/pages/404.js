import React from "react"

import {
  GradientBackground,
  Layout,
  SEO
} from "../components/index.js";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <GradientBackground className="flex flex-col items-center justify-center pt-13 lg:block">
      <div className="flex flex-col text-center lg:mt-18">
        <h2 className="text-h2 font-bold text-white">NOT FOUND</h2>
        <h4 className="text-h4 text-white mb-8">
          You just hit a route that doesn&#39;t exist... the sadness.
        </h4>
      </div>
    </GradientBackground>
    <div className="w-11/12 m-auto mb-20 lg:mt-20 lg:w-2/3 lg:-mt-52 max-w-6xl">
      <div className="flex flex-col items-center w-full mb-4 -mt-20 lg:mt-10">
        <img src="https://media.giphy.com/media/a9xhxAxaqOfQs/source.gif" className="lg:w-1/2 md:w-full"></img> 
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
