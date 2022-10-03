@extends('layout.head_component')
<body>
    <div class="grid grid-cols-10 min-h-screen w-full">
        <div class="col-span-2 bg-[#ADCEFF] p-4">
            <p class="p-1 rounded-full bg-[#D8E8FB] text-[#07173F] font-bold">Carrington’s Algorithm</p>
        </div>
        <div class="col-span-8 p-4 bg-[#E7F2FF]">
            <div class="flex justify-center">
                <img src="{{ asset('images/blog.png')}}" alt="">
            </div>
            <div class="grid grid-cols-5 my-4 space-x-16">
                <div class="col-span-2 p-2 bg-[#D8E8FB] rounded-md">
                    <strong>The Faraday Cup</strong><br> is an instrument on board of the DSCVR and the WIND that provides primarily real-time measurements of the solar wind proton density, speed, velocity, and temperature. 
                    <a href="https://www.ngdc.noaa.gov/dscovr/portal/#/#swi" class="text-[#301FF3]">https://www.ngdc.noaa.gov/dscovr/portal/#/#swi</a>
                </div>
                <div class="col-span-2 p-2 bg-[#D8E8FB] rounded-md min-w-[40vw]">
                    <strong>The Faraday Cup</strong><br> Carrington’s Algorithm consists of a simple neural network pipeline model of three layers that leverages data from spacecrafts DSCVR and WIND to correctly keep track of peak solar wind velocity and predict the behavior of solar activity for future warning.
                    <a href="https://www.ngdc.noaa.gov/dscovr/portal/#/#swi" class="text-[#301FF3]">https://www.ngdc.noaa.gov/dscovr/portal/#/#swi</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>