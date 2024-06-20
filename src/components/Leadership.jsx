import React from 'react';

const leadershipExperiences = [
  {
    title: "President of Coding Club",
    description: "Led a team of 30 students to organize coding competitions and workshops...",
    image: "https://via.placeholder.com/300",
    color: "bg-purple-600",
  },
  {
    title: "Community Volunteer",
    description: "Organized community clean-ups and awareness campaigns...",
    image: "https://via.placeholder.com/300",
    color: "bg-teal-600",
  },
];

const Leadership = () => {
  return (
    <div className="bg-black py-16">
      <h1 className="text-4xl text-white font-bold text-center mb-16">Leadership</h1>
      <div className="px-8">
        <h2 className="text-3xl text-white font-semibold text-center mb-10">Leadership Philosophy</h2>
        <p className="text-lightGray italic text-center mb-20">"The best way to predict the future is to create it." - Peter Drucker</p>
        
        <h2 className="text-3xl text-white font-semibold text-center mb-10">Leadership and Community</h2>
        <div className="space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-64 transform hover:scale-105 transition duration-300 bg-gray-800 rounded-lg p-0.25">
            <div className="relative rounded-lg overflow-hidden">
              <img src={leadershipExperiences[0].image} alt={leadershipExperiences[0].title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${leadershipExperiences[0].color} opacity-50`} />
            </div>
            <div className="p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-2">{leadershipExperiences[0].title}</h3>
              <p className="text-lightGray">{leadershipExperiences[0].description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-64 transform hover:scale-105 transition duration-300 bg-gray-800 rounded-lg p-0.25">
            <div className="bg-gray-800 p-8 rounded-lg order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-2">{leadershipExperiences[1].title}</h3>
              <p className="text-lightGray">{leadershipExperiences[1].description}</p>
            </div>
            <div className="relative order-1 md:order-2 rounded-lg overflow-hidden">
              <img src={leadershipExperiences[1].image} alt={leadershipExperiences[1].title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${leadershipExperiences[1].color} opacity-50`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;

// import React from 'react';

// const leadershipExperiences = [
//   {
//     title: "President of Coding Club",
//     description: "Led a team of 30 students to organize coding competitions and workshops...",
//     image: "https://via.placeholder.com/300",
//     color: "bg-purple-600",
//   },
//   {
//     title: "Community Volunteer",
//     description: "Organized community clean-ups and awareness campaigns...",
//     image: "https://via.placeholder.com/300",
//     color: "bg-teal-600",
//   },
// ];

// const Leadership = () => {
//   return (
//     <div className="bg-black py-16">
//       <h1 className="text-4xl text-white font-bold text-center mb-12">Leadership</h1>
//       <div className="px-8">
//         <h2 className="text-3xl text-white font-semibold text-center mb-4">Leadership Philosophy</h2>
//         <p className="text-lightGray italic text-center mb-8">"The best way to predict the future is to create it." - Peter Drucker</p>
        
//         <h2 className="text-3xl text-white font-semibold text-center mb-4">Leadership and Community</h2>
//         <div className="space-y-16">
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-64 transform hover:scale-105 transition duration-300 bg-gray-800 rounded-lg p-0.25">
//             <div className="relative" >
//               <img src={leadershipExperiences[0].image} alt={leadershipExperiences[0].title} className="w-full h-full object-cover rounded-lg" />
//               <div className={`absolute inset-0 ${leadershipExperiences[0].color} opacity-50 rounded-lg`} />
//             </div>
//             <div className="p-8 rounded-lg">
//               <h3 className="text-2xl font-bold text-white mb-2">{leadershipExperiences[0].title}</h3>
//               <p className="">{leadershipExperiences[0].description}</p>
//             </div>
//           </div>
          

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-64 transform hover:scale-105 transition duration-300 bg-gray-800 rounded-lg p-0.25">
//             <div className="bg-gray-800 p-8 rounded-lg order-2 md:order-1">
//               <h3 className="text-2xl font-bold text-white mb-2">{leadershipExperiences[1].title}</h3>
//               <p className="text-lightGray">{leadershipExperiences[1].description}</p>
//             </div>
//             <div className="relative order-1 md:order-2">
//               <img src={leadershipExperiences[1].image} alt={leadershipExperiences[1].title} className="w-full h-full object-cover rounded-lg" />
//               <div className={`absolute inset-0 ${leadershipExperiences[1].color} opacity-50 rounded-lg`} />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leadership;
