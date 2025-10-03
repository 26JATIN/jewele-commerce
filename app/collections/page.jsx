import { Suspense } from 'react';
import Collections from "../components/Collections";

function CollectionsFallback() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-16 pb-20 lg:pt-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="mb-8 lg:mb-12">
          <p className="text-sm text-[#D4AF76] font-light tracking-widest uppercase mb-2">Shop</p>
          <h1 className="text-5xl md:text-6xl font-light text-[#2C2C2C] mb-4 tracking-tight">All Collections</h1>
          <p className="text-gray-600 font-light">Loading collections...</p>
        </div>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF76]"></div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<CollectionsFallback />}>
      <Collections />
    </Suspense>
  );
}