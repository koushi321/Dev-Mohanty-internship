import React from 'react';

const Biography = () => {
  return (
    <div
      id="biography"
      className="scroll-mt-28 bg-[#996633] py-20 px-6 sm:px-16 text-white"
    >
      {/* Stylish Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide">
          Biography
        </h2>
        <div className="mt-3 w-24 h-[3px] bg-yellow-400 mx-auto rounded-full"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-lg leading-relaxed space-y-6 text-gray-100">
        <p className="relative pl-4 border-l-4 border-yellow-300 italic">
          <span className="text-white font-bold">Utkal Jyoti Dr. Dev Mohanty</span> was born on 27 February, 1957 to Parvati Devi and Shri Loknath Mohanty...
        </p>

        <p className="bg-[#aa7733]/30 p-4 rounded-xl shadow-inner">
          <span className="text-yellow-200 font-semibold">Early Life & Education:</span> Born in Khandasahi, Odisha, he completed his schooling from Khandasahi Jagannath Bidyapith and earned his Diploma and B.E. in Electrical Engineering from Valsura Jamnagar, followed by an MBA and a PhD in Entrepreneurship from Ashley University, USA.
        </p>

        <p className="bg-[#aa7733]/20 p-4 rounded-lg">
          <span className="text-yellow-200 font-semibold">Professional Contributions:</span> Dr. Mohanty is the visionary founder of ASMACS Group of Companies, which spans multiple industries such as IT, Construction, Marine, and HR services.
        </p>

        <p className="bg-[#aa7733]/10 p-4 rounded-lg">
          <span className="text-yellow-200 font-semibold">Social Initiatives:</span> As President of Bombay Utkal Samiti and founder of trusts like BRAJ GAURI TRUST, DEV LOKA EDUCATIONAL TRUST, and KALINGANS, he has transformed thousands of lives by providing jobs, training, education, and healthcare.
        </p>

        <p className="border-l-4 border-yellow-300 pl-4 italic">
          With a rare AB+ blood group, he has selflessly donated blood in emergencies, symbolizing his deep humanitarian commitment.
        </p>

        <p className="bg-[#aa7733]/30 p-4 rounded-lg shadow-lg">
          <span className="text-yellow-200 font-semibold">Awards & Recognition:</span> Honored with <span className="text-white font-semibold">UTKAL JYOTI SAMMAN (2010)</span>, <span className="text-white font-semibold">ODISHA GAURAV SAMMAN (2011)</span>, and the <span className="text-white font-semibold">SURENDRA MOHANTY SARASWAT SAMMAN (2012)</span> for his outstanding contributions to society.
        </p>
      </div>
    </div>
  );
};

export default Biography;
