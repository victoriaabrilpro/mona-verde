import { useEffect } from 'react';

const Studio = () => {
  useEffect(() => {
    // Redirect to your deployed Sanity Studio
    window.location.href = 'https://mona-verde-cms.sanity.studio/'; // Change this to your actual studio URL
  }, []);

  return (
    <div className="min-h-screen bg-[#4E5A48] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg font-colfax-regular">Redirecting to Studio...</p>
      </div>
    </div>
  );
};

export default Studio;