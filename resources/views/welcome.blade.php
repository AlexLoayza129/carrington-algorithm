@extends('layout.head_component')
<body>
    <div class="container-fluid min-h-screen">
        <div class="bg-[#07173F] w-full min-h-screen flex justify-center items-center relative ease-in-out duration-500 transition-all" id="cover_index">
            <img src="{{ asset('images/nasa_logo.png')}}" alt="Nasa Logo" class="absolute left-0 top-0">
            <div>
                <img src="{{ asset('images/cover_img.png')}}" alt="Portada de index">
                <p class="text-white text-center text-xl">The Machine Learning of today for humanity's tomorrow</p>
                <div class="flex justify-center my-4">
                    <a href="{{ route('main')}}" class="uppercase text-[#00CB5D] font-bold text-2xl bg-[#042D53] rounded-md px-8 py-2 cursor-pointer hover:opacity-[80%]">Start</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>