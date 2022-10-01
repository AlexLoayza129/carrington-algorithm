@extends('layout.head_component')
<body>
    <div class="container-fluid w-full min-h-screen">
        <div class="min-h-screen w-full bg-[#D8E8FB]">
            <div class="flex justify-between items-center p-4">
                <a href="{{ route('home') }}">
                    <img src="{{ asset('images/carrinton_logo.png')}}" alt="Carrinton's algorithm">
                </a>
                <!-- Start date-->
                <div class="bg-white rounded-full flex justify-evenly items-center px-4 py-3 space-x-2 relative">
                    <img src="{{ asset('images/icons/date_icon.svg')}}" alt="date icon">
                    <span class="text-[#737373] text-center">Start Date</span>
                    {{-- <input type="date" name="star_date" class="outline-none bg-transparent placeholder:font-bold" value="" min="1997-01-01" max="2030-12-31" required> --}}
                    <button><img src="{{ asset('images/icons/down_arrow.png') }}"></button>
                </div>
                <!-- End date-->
                <div class="bg-white rounded-full flex justify-evenly items-center px-4 py-3 space-x-2 relative">
                    <img src="{{ asset('images/icons/date_icon.svg')}}" alt="date icon">
                    <span class="text-[#737373] text-center">End Date</span>
                    {{-- <input type="date" name="star_date" class="outline-none bg-transparent placeholder:font-bold" value="" min="1997-01-01" max="2030-12-31" required> --}}
                    <button><img src="{{ asset('images/icons/down_arrow.png') }}"></button>
                </div>
                <!-- Constrast-->
                <div class="relative bg-white rounded-full flex justify-evenly items-center px-4 py-3 space-x-2">
                    <img src="{{ asset('images/icons/check_icon.svg')}}" alt="date icon">
                    <span class="text-[#737373] text-center">Contrast</span>
                    {{-- <input type="date" name="star_date" class="outline-none bg-transparent placeholder:font-bold" value="" min="1997-01-01" max="2030-12-31" required> --}}
                    <button id="contrast"><img src="{{ asset('images/icons/down_arrow.png') }}"></button>
                    <ul id="contrast_list" class="absolute hidden bg-white top-14 w-[155%] p-4 rounded-md transition-all ease-in-out duration-500">
                        <li><button class="hover:bg-[#07173F] hover:text-white rounded-full p-1">DSCOVR vs WIND</button></li>
                        <li><button class="hover:bg-[#07173F] hover:text-white rounded-full p-1">WIND vs CA</button></li>
                        <li><button class="hover:bg-[#07173F] hover:text-white rounded-full p-1">DSCOVR vs CA</button></li>
                        <li><button class="hover:bg-[#07173F] hover:text-white rounded-full p-1">DSCOVR vs WIND vs CA</button></li>
                    </ul>
                </div>
                <button id="process" class="bg-[#07173F] text-white text-lg px-12 py-2 rounded-md">Process</button>
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
            <!-- Detail -->
            <div class="hidden" id="detail">
                <div class="p-4 text-[#737373]">
                    <div>
                        <p class="bg-[#E7E7E7] rounded-md w-[30%] p-1 text-center"><strong>Range: 03/10/2022 - 05/10/2022</strong></p>
                        <p class="my-2">This is the contrast between the <strong>DSCOVR and WIND</strong></p>
                    </div>
                    <div class="flex justify-center space-x-[10vw] mb-12">
                        <div>
                            <div class="flex items-center relative">
                                <p class="mx-2"><strong>DSCOVR</strong></p>
                                <div class="p-4 rounded-md bg-[#042D53]"></div>
                                <button data-id="1" id="dscovr_info">
                                    <img src="{{ asset('images/icons/info_icon.png') }}" alt="More info" class="mx-1">
                                </button>
                                <div id="dscovr_info_text" class="bg-white w-[22rem] p-4 rounded-lg absolute top-2 left-[90%] hidden z-10">
                                    <div class="flex justify-end close_btn">
                                        <button>X</button>
                                    </div>
                                    <p><strong>DSCOVR:</strong><br>The Deep Space Climate Observatory, is an American space weather station launched in the midst of February in 2015. Its purpose is to monitor the changes in solar wind to provide early warnings of geomagnetic storms that could impact heavily technological systems back on Earth.</p>
                                    <a target="_blank" href="https://www.ngdc.noaa.gov/dscovr/portal/#/#swi" class="text-[#301FF3] text-xs">https://www.ngdc.noaa.gov/dscovr/portal/#/#swi</a>
                                </div>                                
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center relative">
                                <p class="mx-2"><strong>WIND</strong></p>
                                <div class="p-4 rounded-md bg-[#0098AD]"></div>
                                <button data-id="2" id="wind_info">
                                    <img src="{{ asset('images/icons/info_icon.png') }}" alt="More info" class="mx-1">
                                </button>
                                <div id="wind_info_text" class="bg-white w-[22rem] p-4 rounded-lg absolute top-2 left-[90%] hidden z-10">
                                    <div class="flex justify-end close_btn">
                                        <button>X</button>
                                    </div>
                                    <p><strong>WIND:</strong><br>The Wind spacecraft was launched by NASA in 1994 as part of the Global Geospace Science program. Its primary objectives are to provide complete plasma, energetic particle and magnetic field for magnetospheric and ionospheric studies, investigate basic plasma processes occurring in the near-Earth solar wind, and provide baseline, 1 AU, ecliptic plane observations for inner and outer heliospheric missions.</p>
                                    <a target="_blank" href="https://wind.nasa.gov/" class="text-[#301FF3] text-xs">https://wind.nasa.gov/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-evenly">
                        <div>
                            <div class="flex items-center space-x-1">
                                <span class="p-2 rounded-full bg-[#F39C1A]"></span><p><strong>Magnitude of the magnetic field</strong></p>
                            </div>
                            <canvas id="myChart" width="400" height="400"></canvas>
                        </div>
                        <div>
                            <div class="flex items-center space-x-1">
                                <span class="p-2 rounded-full bg-[#990ADD] opacity-[75%]"></span><p><strong>Solar wind speed</strong></p>
                            </div>
                            <canvas id="myChart2" width="400" height="400" class="border"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>