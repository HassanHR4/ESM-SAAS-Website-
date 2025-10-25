import Header from "@/components/header"
import Banner from "@/components/banner"
import Features from "@/components/features"
import MoreFeatures from "@/components/moreFeatures"
import PowerfulSolution from "@/components/powerfulSolution"
import Partners from "@/components/partners"
import ProductFeatures from "@/components/productFeatures"
import Trail from "@/components/trail"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import Head from "next/head"
const page = () => {
  return (
    <>  
      <Head>
        <title>ESM Software</title>
        <meta name="description" content="Discover how Awesome Product can revolutionize your workflow with cutting-edge features and seamless integration." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>
      <Features/>
      <PowerfulSolution/>
      <MoreFeatures/>
      <ProductFeatures/>
      <Partners/>
      <Trail/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default page