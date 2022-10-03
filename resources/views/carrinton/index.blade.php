@extends('layout.head_component')
<body>
    <div class="container-fluid w-full min-h-screen">
        <div class="min-h-screen w-full bg-[#D8E8FB]">
            <div class="flex justify-between items-center p-4">
                <a href="{{ route('home') }}">
                    <img src="{{ asset('images/carrinton_logo.png')}}" alt="Carrinton's algorithm">
                </a>
                <!-- Start date-->
                {{-- <div class="bg-white rounded-full flex justify-evenly items-center px-4 py-3 space-x-2 relative">
                    <img src="{{ asset('images/icons/date_icon.svg')}}" alt="date icon">
                    <span class="text-[#737373] text-center">Start Date</span>
                    {{-- <input type="date" name="star_date" class="outline-none bg-transparent placeholder:font-bold" value="" min="1997-01-01" max="2030-12-31" required>
                    <button><img src="{{ asset('images/icons/down_arrow.png') }}"></button>
                </div> --}}
                <div class="flex flex-col">
                    <label class="text-center font-bold">Start Date</label>
                    <select name="startDate" id="startDate" class="pl-2 pr-12 py-2 rounded-md mx-1 focus:outline-[#00CB5D]">
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                    </select>
                </div>
                <!-- End date-->
                {{-- <div class="bg-white rounded-full flex justify-evenly items-center px-4 py-3 space-x-2 relative">
                    <img src="{{ asset('images/icons/date_icon.svg')}}" alt="date icon">
                    <span class="text-[#737373] text-center">End Date</span>
                    <input type="date" name="star_date" class="outline-none bg-transparent placeholder:font-bold" value="" min="1997-01-01" max="2030-12-31" required>
                    <button><img src="{{ asset('images/icons/down_arrow.png') }}"></button>
                </div> --}}
                <div class="flex flex-col">
                    <label class="text-center font-bold">End Date</label>
                    <select name="endDate" id="endDate" class="pl-2 pr-12 py-2 rounded-md mx-1 focus:outline-[#00CB5D]">
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                    </select>
                </div>
                <!-- Contrast-->
                <div class="relative bg-white rounded-full flex justify-evenly items-center px-4 py-3 space-x-2">
                    <img src="{{ asset('images/icons/check_icon.svg')}}" alt="date icon">
                    <span class="text-[#737373] text-center" id="contrast_text">Contrast</span>
                    {{-- <input type="date" name="star_date" class="outline-none bg-transparent placeholder:font-bold" value="" min="1997-01-01" max="2030-12-31" required> --}}
                    <button id="contrast"><img src="{{ asset('images/icons/down_arrow.png') }}"></button>
                    <ul action="{{ route('getData') }}" id="contrast_list" class="absolute hidden bg-white top-14 w-[155%] p-4 rounded-md transition-all ease-in-out duration-500 z-10">
                        <li><button class="hover:bg-[#07173F] hover:text-white rounded-full p-1 contrast_option" data-url="{{ route('getData')}}" data-id="1">DSCOVR vs WIND</button></li>
                        <li><button class="hover:bg-[#07173F] hover:text-white rounded-full p-1 contrast_option" data-url="{{ route('getData')}}" data-id="2">WIND vs CA</button></li>
                        <li><button class="hover:bg-[#07173F] hover:text-white rounded-full p-1 contrast_option" data-url="{{ route('getData')}}" data-id="3">DSCOVR vs CA</button></li>
                        <li><button class="hover:bg-[#07173F] hover:text-white rounded-full p-1 contrast_option" data-url="{{ route('getData')}}" data-id="4">DSCOVR vs WIND vs CA</button></li>
                    </ul>
                    <input type="hidden" name="contrastOption" id="contrastOption" value="1">
                </div>
                <button id="process" disabled class="text-gray-400 bg-gray-200 cursor-auto border-b-2 border-gray-400 text-lg px-12 py-2 rounded-md">Process</button>
            </div>
            <!-- Pre-loading -->
            <div class="hidden" id="pre_loading">
                <div class="flex justify-center items-center w-full min-h-[80%] transition-all ease-in-out duration-800">
                    <div class="space-y-8">
                        <div class="flex justify-center">
                            <img src="{{ asset('images/search.png')}}" alt="Search data">
                        </div>
                        <p class="uppercase text-[#737373] font-bold text-center text-2xl">Processing</p>
                    </div>
                </div>
            </div>
            <!-- Detail-->
            <div id="detail_content"></div>
        </div>
    </div>
</body>
</html>