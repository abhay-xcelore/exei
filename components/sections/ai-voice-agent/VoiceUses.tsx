import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const WhereToUse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Where You Can Use Exei AI Voice Agent</title>
      </Head>

      <section className="bg-black text-white py-10 md:py-14 relative overflow-hidden rounded-2xl">
        {/* Background Image/Overlay for the lower section */}
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[url('/images/bg-img.png')] bg-bottom pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-center text-2xl md:text-[36px] font-medium tracking-tight mb-6">
            Where You Can Use Exei AI Voice Agent
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Inner Layout Container 1 */}
            <div className="bg-white rounded-3xl p-12 aspect-[4/3] flex items-center justify-center">
              {/* This inner part is currently white and empty in the image. 
                  This div defines its pixel-perfect style and dimensions.
                  Add content or an image here as needed.
              */}
              {/* <div className="text-black text-2xl font-bold">Inner Layout 1</div> */}
            </div>

            {/* Inner Layout Container 2 */}
            <div className="bg-white rounded-3xl p-12 aspect-[4/3] flex items-center justify-center">
              {/* <div className="text-black text-2xl font-bold">Inner Layout 2</div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhereToUse;