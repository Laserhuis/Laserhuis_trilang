import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { CNC_TUTORIALS } from '../data/tutorials/cncGenmitsu';

export default function CNCTutorials() {
  const { lang, t } = useContext(LanguageContext);

  // Safe translation helper
  const translateKey = (obj, prop, id) => {
    try {
      const transObj = t.tutorials?.[id];
      if (transObj && transObj[prop]) {
        return transObj[prop];
      }
    } catch (e) {}
    return obj[prop];
  };

  const translateSteps = (obj) => {
    try {
      const transObj = t.tutorials?.[obj.id];
      if (transObj && transObj.steps) {
        return transObj.steps;
      }
    } catch (e) {}
    return obj.steps || [];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 border-b border-gray-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Genmitsu CNC Tutorials</h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Core tutorials for CNC hobbyists with a well-defined structure. Master Genmitsu machines for high-precision routing and milling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CNC_TUTORIALS.map((tutorial) => (
          <div key={tutorial.id} className="bg-[#0f172a] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-colors flex flex-col group cursor-pointer h-[500px]">
            <div className="relative h-48 flex-shrink-0 overflow-hidden">
              <img src={tutorial.image} alt={translateKey(tutorial, 'title', tutorial.id)} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 flex space-x-2">
                <span className="px-3 py-1 bg-cyan-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm shadow-lg">
                  {translateKey(tutorial, 'difficulty', tutorial.id)}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded">
                    CNC
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {translateKey(tutorial, 'title', tutorial.id)}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                  {translateKey(tutorial, 'summary', tutorial.id)}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-800/50">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {translateKey(tutorial, 'readTime', tutorial.id)}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {tutorial.tools.length} Tools
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 border-t border-gray-800 text-center">
              <span className="text-cyan-400 font-medium text-sm group-hover:text-cyan-300">
                Read More &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
