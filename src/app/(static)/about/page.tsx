import Image from 'next/image'
import Footer from '@/components/footer'
import { Navbar } from "@/components/navbar";

function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <Navbar />
        <div className="px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image src='/rlxbrain.png' alt='' width='400' height='400' className="mx-auto" />
            </div>
            <div>
              <p className="text-lg font-bold my-5">
                Our Vision
              </p>
              <p className="text-lg text-gray">
                In a world where challenges grow complex by the day, our vision is to harness the limitless capabilities of AI, crafting solutions previously deemed unattainable and opening doors to infinite possibilities.
              </p>
              <p className="text-lg font-bold my-5">
                Our Mission
              </p>
              <p className="text-lg text-gray">
                To reimagine the boundaries of artificial intelligence, melding human creativity with computational power, and to forge a future where technology not only complements but elevates human potential.
              </p>
            </div>
          </div>

          <div className="my-10">
            <p className="text-lg">
              At Relix, we stand at the cusp of the next revolution in artificial intelligence. Founded by Caleb Forestal, we&#39;ve taken the first steps in what promises to be a remarkable journey. Our ambition is to continuously redefine the realm of computing capabilities, and with each passing day, we&#39;re getting closer to that dream.
            </p>
            <p className="text-lg my-5">
              While our foundation is strong, our aspirations are vast. We&#39;re in search of passionate individuals to join our team, to share in our vision, and to help write the next chapter of our story. The road ahead is challenging, and to realize our ambitions, we&#39;re actively seeking both talented professionals and visionary investors who believe in our mission.
            </p>
          </div>

          <h2 className="text-2xl font-bold">The Team</h2>
          <div>
            <p className="text-lg">
              Caleb Forestal
              Founder & CEO
              A visionary with a deep passion for technology, Caleb started Relix to make a difference in the world of AI. With a rich history in software engineering, he brings to the table not only technical expertise but also a drive to innovate and inspire.
            </p>
          </div>

          <h3 className="text-xl font-bold my-5">We&#39;re expanding!</h3>
          <div>
            <p className="text-lg">
              Relix is on the lookout for passionate professionals who share our vision. If you believe in the transformative power of AI and wish to be a part of our journey, reach out. Additionally, as we scale our operations and innovations, we&#39;re also in search of funding partners to join us in this exciting venture.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default About
