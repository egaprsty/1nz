import React from 'react';

function Our() {
    return (
         <div className="bg-black text-white">
            <div className="space y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
                <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">

                <div className="text-center font-bold text-4xl mt-10">
                    <h1 className="font-serif">ALL MEMBER & STAFF</h1>
                </div>

                <div className="text-center font-serif mt-10">
                    <Link href="/">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-3">
                            NEWS
                    </button>
                </Link>
                    <Link href="/our">
                         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-3">
                            OUR
                    </button>
            </Link>
                    <Link href="/info">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                             INFO
                    </button>
                </Link>
            </div>
            <br />
            <br />

            <div>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
    <div data-aos="fade-right" class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/kemal.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Mal</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">FIROZ</p>
      </div>
    </div>
    
    <div data-aos="fade-up" class="bg-gray-100 border-red-600  bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 rounded-full" src="/jbr.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Ber</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">FIROZ</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/rie.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Riefird</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">JOKAS</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/dimas.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Dimas</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Xavier</p>
      </div>
    </div>
  </div>
</div>
<br />

<div>
  <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
    
    
    <div data-aos="fade-right" class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/wahyu.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">fLow</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Xavier</p>
      </div>
    </div>
    
    <div data-aos="fade-up" class="bg-gray-100 border-red-600  bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 rounded-full" src="/arya.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Arya</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">FIROZ</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/delum.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">dLum</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Xavier</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/mail.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Mail</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">FIROZ</p>
      </div>
    </div>
  </div>
</div>
<br />


<div>
  <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
    <div data-aos="fade-right" class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/salvio.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Salvio</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">FIROZ</p>
      </div>
    </div>
    
    <div data-aos="fade-up" class="bg-gray-100 border-red-600  bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 rounded-full" src="/ricky.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Ricky</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Xavier</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/yuli.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Yoelee</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Xavier</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/danar.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Danar</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Jokas</p>
      </div>
    </div>
  </div>
</div>
<br />


<div>
  <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
    <div data-aos="fade-right" class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/muna.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Muna</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Garasi</p>
      </div>
    </div>
    
    <div data-aos="fade-up" class="bg-gray-100 border-red-600  bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 rounded-full" src="/kimung.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Mung</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Stress</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/vandy.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">vandy</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">JOKAS</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/ryn.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Cyrus</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Gave</p>
      </div>
    </div>
  </div>
</div>
<br />


<div>
  <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
    <div data-aos="fade-right" class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/rifan.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Rifan</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">JOKAS</p>
      </div>
    </div>
    
    <div data-aos="fade-up" class="bg-gray-100 border-red-600  bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 rounded-full" src="/ebod.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Ebod</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Xavier</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-yellow-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/tocil.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Tocil</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Gjelas</p>
      </div>
    </div>
    
    <div class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
      <img class="w-16 h-16 object-cover rounded-full" src="/rendy.jpg" alt="" />
      <div class="flex flex-col justify-center">
        <p class="text-gray-900 dark:text-gray-300 font-semibold">Rendy</p>
        <p class="text-black dark:text-gray-100 text-justify font-semibold">Gatau</p>
      </div>
    </div>
  </div>
</div>
<br />
<br />


<div className="text-center">
      <div className="font-bold font-serif">
        <h1>BEST PARTNER</h1>
        <br />
        <Image
          src="/garasi80.jpg"
          width={200}
          height={100} 
        />
      </div>
    </div>
    <br/>
    <br/>

    <hr />
    <br />
    <div className="text-center font-serial font-bold">
      <h1><i>Estabilished Independent Group 2018</i></h1>
    </div>


              </header>
            </div>
        </div>
    )
}

export default Our;
