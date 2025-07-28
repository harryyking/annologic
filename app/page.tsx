
import Header from "@/components/Header"
import SubHeader from "@/components/SubHeader"
import Footer from "@/components/Footer"
import SectionList from "@/components/SectionList"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Header/>

      {/* Features Section */}
      <SubHeader/>

      {/* Services Grid */}
     <SectionList/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
