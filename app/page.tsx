import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target } from "lucide-react"
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
