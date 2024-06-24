import Image from 'next/image';

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Step into the Future!</div>
            <h1 className="text-2xl text-white font-extrabold mb-4">The Next Generation of AI Chat Solutions</h1>
            <p className="text-xl text-gray-400">Bridging the gap between innovation and interaction, we introduce a chatbot experience that sets new standards in digital communication.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src='/platform1.svg' width={405} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">AI Like Never Before!</div>
                  <h3 className="text-2xl text-white font-extrabold mb-3">Designed for the Modern User</h3>
                  <p className="text-xl text-gray-400 mb-4">Engage with our state-of-the-art chatbot, designed to provide you with instant responses and a seamless experience.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Cutting-edge AI technology</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Smart, evolving interactions</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Tailored user responses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src='/platform2.svg' width={405} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Chat Dynamics</div>
                  <h3 className="text-2xl text-white font-extrabold mb-3">Where Speed Meets Simplicity</h3>
                  <p className="text-xl text-gray-400 mb-4">Dive into a world of seamless chat design, where instant access meets efficient problem resolution.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Intuitive chat design</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Instant user access</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Rapid data retrieval</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src='/platform3.svg' width={405} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Unlimited Memory, Unlimited Potential</div>
                  <h3 className="text-2xl text-white font-extrabold mb-3">Harness the Power of Vectors</h3>
                  <p className="text-xl text-gray-400 mb-4">Discover unparalleled data storage and retrieval, all powered by our advanced vector database technology.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Efficient vector database</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Rapid data retrieval</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Expansive memory capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}


// import Image from 'next/image'

// export default function Zigzag() {
//   return (
//     <section>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20 border-t border-gray-800">

//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//             <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Step into the Future!</div>
//             <h1 className="text-center text-2xl text-white font-extrabold mb-4">The Next Generation of AI Chat Solutions</h1>
//             <p className="text-xl text-gray-400">Bridging the gap between innovation and interaction, we introduce a chatbot experience that sets new standards in digital communication.</p>
//           </div>

//           {/* Items */}
//           <div className="grid gap-20">

//             {/* 1st item */}
//             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
//               {/* Image */}
//               <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
//                 <Image className="max-w-full mx-auto md:max-w-none h-auto" src='/brain.png' width={405} height={405} alt="Features 01" />
//               </div>
//               {/* Content */}
//               <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
//                 <div className="md:pr-4 lg:pr-12 xl:pr-16">
//                   <div className="font-architects-daughter text-xl text-purple-600 mb-2">AI Like Never Before!</div>
//                   <h3 className="text-2xl text-white font-extrabold mb-3">Designed for the Modern User</h3>
//                   <p className="text-xl text-gray-400 mb-4">Engage with our state-of-the-art chatbot, designed to provide you with instant responses and a seamless experience.</p>
//                   <ul className="text-lg text-gray-400 -mb-2">
//                     <li className="flex items-center mb-2">
//                       <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Cutting-edge AI technology</span>
//                     </li>
//                     <li className="flex items-center mb-2">
//                       <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Smart, evolving interactions</span>
//                     </li>
//                     <li className="flex items-center">
//                       <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Tailored user responses</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* 2nd item */}
//             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
//               {/* Image */}
//               <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
//                 <Image className="max-w-full mx-auto md:max-w-none h-auto" src='/chat.png' width={405} height={405} alt="Features 02" />
//               </div>
//               {/* Content */}
//               <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
//                 <div className="md:pl-4 lg:pl-12 xl:pl-16">
//                   <div className="font-architects-daughter text-xl text-purple-600 mb-2">Chat Dynamics</div>
//                   <h3 className="text-2xl text-white font-extrabold mb-3">Where Speed Meets Simplicity</h3>
//                   <p className="text-xl text-gray-400 mb-4">Dive into a world of seamless chat design, where instant access meets efficient problem resolution.</p>
//                   <ul className="text-lg text-gray-400 -mb-2">
//                     <li className="flex items-center mb-2">
//                       <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Intuitive chat design</span>
//                     </li>
//                     <li className="flex items-center mb-2">
//                       <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Instant user access</span>
//                     </li>
//                     <li className="flex items-center">
//                       <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Rapid data retrieval</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* 3rd item */}
//             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
//               {/* Image */}
//               <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
//                 <Image className="max-w-full mx-auto md:max-w-none h-auto" src='/chip.png' width={405} height={405} alt="Features 03" />
//               </div>
//               {/* Content */}
//               <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
//                 <div className="md:pr-4 lg:pr-12 xl:pr-16">
//                   <div className="font-architects-daughter text-xl text-purple-600 mb-2">Unlimited Memory, Unlimited Potential</div>
//                   <h3 className="text-2xl text-white font-extrabold mb-3">Harness the Power of Vectors</h3>
//                   <p className="text-xl text-gray-400 mb-4">Discover unparalleled data storage and retrieval, all powered by our advanced vector database technology.</p>
//                   <ul className="text-lg text-gray-400 -mb-2">
//                     <li className="flex items-center mb-2">
//                       <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Efficient vector database</span>
//                     </li>
//                     <li className="flex items-center mb-2">
//                       <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Rapid data retrieval</span>
//                     </li>
//                     <li className="flex items-center">
//                       <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Expansive memory capabilities</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }
