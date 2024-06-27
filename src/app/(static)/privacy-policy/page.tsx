import Footer from '@/components/footer'
import { Navbar } from "@/components/navbar";
import { TOS } from '@/components/tos';

function TOSPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <Navbar />
        <TOS />
        <Footer />
      </div>
    </div>
  )
}

export default TOSPage
