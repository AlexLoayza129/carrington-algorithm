@extends('layout.head_component')
<body>
    <div class="container-fluid min-h-screen relative">
        <div class="bg-[#07173F] w-full min-h-screen flex justify-center items-center relative ease-in-out duration-500 transition-all" id="cover_index">
            <img src="{{ asset('images/nasa_logo.png')}}" alt="Nasa Logo" class="absolute left-0 top-0">
            <img src="{{ asset('images/deepthink_logo.png')}}" alt="Deepthink logo" class="absolute right-5 top-5">
            <div class="relative">
                <img src="{{ asset('images/cover_left_binary.png')}}" alt="left_binary" class="absolute left-[-15vw] top-[22vh] z-1">
                <img src="{{ asset('images/cover_right_binary.png')}}" alt="right_binary" class="absolute right-[-15vw] top-[22vh] z-1">
                <img src="{{ asset('images/cover_img.png')}}" alt="Portada de index" class="z-10 relative">
                <p class="text-white text-center text-xl">The Machine Learning of today for humanity's tomorrow</p>
                <div class="flex justify-center my-4">
                    <a href="{{ route('main')}}" class="uppercase text-[#00CB5D] font-bold text-2xl bg-[#0042A6] rounded-md px-16 py-2 cursor-pointer hover:opacity-[80%]">Start</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>