
export default function AuthorPage() {
  return (
    <div className='min-h-screen flex items-center justify-center mt-24 md:mt-20 mb-8 md:mb-20 px-4 md:px-6 lg:px-8'>
      <div className='w-full max-w-7xl mx-auto p-2 md:p-4 lg:p-6'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800'>Our Team</h1>
          <p className='text-lg md:text-xl text-gray-600 mt-4'>Meet the researchers behind FDP</p>
        </div>
        
        {/* Author Cards Row */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10'>
          
          {/* Dr. Sushil Kumar Card */}
          <div className='bg-white rounded-xl shadow-lg overflow-hidden relative'>
            {/* Blue Gradient Header Section */}
            <div className='w-full h-24 bg-gradient-to-r from-blue-500 to-blue-700'></div>
            
            {/* Circular Profile Image - Overlapping Header */}
            <div className='absolute top-12 left-1/2 transform -translate-x-1/2'>
              <div className='w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white overflow-hidden'>
                {/* Profile Image - Replace src with your actual image path */}
                <img 
                  src="/Dr. Sushil Kumar.jpeg"
                  alt="Dr. Sushil Kumar"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white" style={{display: 'none'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>
            
            {/* Author Information - White Body */}
            <div className='pt-16 pb-6 px-6 text-center'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>Dr. Sushil Kumar</h2>
              <p className='text-sm text-gray-600 leading-relaxed mb-6'>
              I am an Associate Professor in the Department of Botany at Chaudhary Charan Singh University, 
                Ramgarhi, Meerut, Uttar Pradesh. My research focuses on plant secondary metabolites and 
                their applications in pharmacology and food science.
              </p>
              
              {/* Contact Button */}
              <a 
                href="mailto:skg1979@gmail.com?subject=Contact from FDP Website&body=Hello Dr. Sushil Kumar,%0D%0A%0D%0AI would like to get in touch with you regarding your research on plant secondary metabolites.%0D%0A%0D%0ABest regards,"
                className='inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg'
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Dr. Gourav Choudhir Card */}
          <div className='bg-white rounded-xl shadow-lg overflow-hidden relative'>
            {/* Green Gradient Header Section */}
            <div className='w-full h-24 bg-gradient-to-r from-green-500 to-green-700'></div>
            
            {/* Circular Profile Image - Overlapping Header */}
            <div className='absolute top-12 left-1/2 transform -translate-x-1/2'>
              <div className='w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white overflow-hidden'>
                {/* Profile Image - Replace src with your actual image path */}
                <img 
                  src="/Dr. Gourav Choudhir.jpeg"
                  alt="Dr. Gourav Choudhir"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white" style={{display: 'none'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>
            
            {/* Author Information - White Body */}
            <div className='pt-16 pb-6 px-6 text-center'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>Dr. Gourav Choudhir</h2>
              <p className='text-sm text-gray-600 leading-relaxed mb-6'>
                I am a Research Assistant at Jamia Millia Islamia, Centre For Interdisciplinary Research In Basic Sciences. 
                My work involves interdisciplinary research approaches and advancing scientific knowledge in multiple domains.
              </p>
              
              {/* Contact Button */}
              <a 
                href="mailto:gouravbotany@gmail.com?subject=Contact from FDP Website&body=Hello Dr. Gourav Choudhir,%0D%0A%0D%0AI would like to get in touch with you regarding your research on plant secondary metabolites.%0D%0A%0D%0ABest regards,"
                className='inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg'
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Sakshi Sharma Card */}
          <div className='bg-white rounded-xl shadow-lg overflow-hidden relative'>
            {/* Purple Gradient Header Section */}
            <div className='w-full h-24 bg-gradient-to-r from-purple-500 to-purple-700'></div>
            
            {/* Circular Profile Image - Overlapping Header */}
            <div className='absolute top-12 left-1/2 transform -translate-x-1/2'>
              <div className='w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white overflow-hidden'>
                {/* Profile Image - Replace src with your actual image path */}
                <img 
                  src="/Sakshi Sharma.jpeg"
                  alt="Sakshi Sharma"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white" style={{display: 'none'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>
            
            {/* Author Information - White Body */}
            <div className='pt-16 pb-6 px-6 text-center'>
              <h2 className='text-xl font-bold text-gray-800 mb-3'>Sakshi Sharma</h2>
              <p className='text-sm text-gray-600 leading-relaxed mb-6'>
                I am a Research Scholar in the Department of Botany at Chaudhary Charan Singh University, 
                Ramgarhi, Meerut, Uttar Pradesh. My research focuses on Plant-based drug discovery through the identification and pharmacological evaluation of bioactive secondary metabolites, with applications in pharmacology, food science, and human health.
              </p>
              
              {/* Contact Button */}
              <a 
                href="mailto:sakshisharma78757@gmail.com?subject=Contact from FDP Website&body=Hello Sakshi Sharma,%0D%0A%0D%0AI would like to get in touch with you regarding your research on plant biology and secondary metabolites.%0D%0A%0D%0ABest regards,"
                className='inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg'
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>

        {/* Team Description */}
        <div className='mt-16 text-center'>
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>Our Mission</h3>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Together, we are dedicated to advancing research in plant secondary metabolites, 
              creating comprehensive databases, and contributing to the scientific community's 
              understanding of natural compounds and their applications in pharmacology and food science.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
