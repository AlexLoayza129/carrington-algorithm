import jQuery from 'jquery';
window.$ = jQuery;
var isProcess = false

$(document).ready(function(){

    $.ajaxSetup({
        headers:
        { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
    });

    

});

//Show chart function
function showChart(){
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['DSCOVR', 'CA', 'WIND'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['DSCOVR', 'CA', 'WIND'],
            datasets: [{
                label: '# of Votes',
                data: [5, 14, 32, 35, 8, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx3 = document.getElementById('myChart3').getContext('2d');
    const myChart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['DSCOVR', 'CA', 'WIND'],
            datasets: [{
                label: '# of Votes',
                data: [5, 14, 32, 35, 8, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
    

// Main index
$('#cover_index', function(){
    var html = $('#cover_index')
    html.fadeIn('slow')
});

// Contrast button
$('body').on('click', '#contrast', function(){
    var list = $('#contrast_list')
    $(this).parent().addClass('border border-[#00CB5D]')
    list.toggleClass('hidden')
})

// Contrast List
$('body').on('click', '#contrast_list li button', function(e){
    e.preventDefault();
    var option = $(this).data('id');
    var contrastOption = $('#contrastOption')
    var list = $('#contrast_list')
    var label = $('#contrast_text');

    contrastOption.attr('value', option)
    list.toggleClass('hidden')
    label.text($(this).text())
    $('#contrast').parent().removeClass('border border-[#00CB5D]')
    isProcess = true;

    if(isProcess){
        var processBtn = $('#process');

        processBtn.removeClass('text-gray-400 bg-gray-200 cursor-auto border-b-2 border-gray-400')
        processBtn.addClass('bg-[#07173F] text-white select-auto cursor-pointer border-b-2 border-blue-800')
        processBtn.attr('disabled', false)
    }
})


// Process button
$('body').on('click', '#process', function(e){
    e.preventDefault();

    $('#pre_loading').removeClass('hidden');

    var timeout = setTimeout(() => {
        $('#pre_loading').addClass('hidden');
        // Show detail
        var detail = $('#detail');

        detail.removeClass('hidden')
    },1500);

    // Get data
    var url = $('#contrast_list').attr('action');
    var id = $('#contrastOption').val();

    $.ajax({
        type: "POST",
        url: url,
        data: {
            id: id
        },
        dataType: "json",
        success: function (response) {
            console.log(response)
        }
    });

    //Hide process btn
    $(this).addClass('hidden')

    var boxContent = $('#detail_content');

    if(id == 1){
        var html = `<div class="hidden" id="detail">
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
                                <span class="border rounded-full py-1 px-3 bg-white mx-1 text-sm"><strong>i</strong></span>
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
                                <span class="border rounded-full py-1 px-3 bg-white mx-1 text-sm"><strong>i</strong></span>
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
                        <canvas id="myChart2" width="400" height="400"></canvas>
                    </div>
                </div>
                <div class="flex justify-center mt-10 mb-4">
                        <div>
                            <div class="flex items-center space-x-1">
                                <span class="p-2 rounded-full bg-[#F209A3]"></span><p><strong>Proton temperature</strong></p>
                            </div>
                            <canvas id="myChart3" width="400" height="400"></canvas>
                        </div>
                    </div>
            </div>
        </div>`

        boxContent.append(html)
        showChart();
    }else if(id == 2){
        var html = `<div class="hidden" id="detail">
        <div class="p-4 text-[#737373]">
            <div>
                <p class="bg-[#E7E7E7] rounded-md w-[30%] p-1 text-center"><strong>Range: 03/10/2022 - 05/10/2022</strong></p>
                <p class="my-2">This is the contrast between the <strong>WIND and CA</strong></p>
            </div>
            <div class="flex justify-center space-x-[10vw] mb-12">
                <div>
                    <div class="flex items-center relative">
                        <p class="mx-2"><strong>WIND</strong></p>
                    <div class="p-4 rounded-md bg-[#0098AD]"></div>
                        <button data-id="2" id="wind_info">
                            <span class="border rounded-full py-1 px-3 bg-white mx-1 text-sm"><strong>i</strong></span>
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
                <div>
                    <div class="flex items-center relative">
                        <p class="mx-2"><strong>CARRINGTON ALGORITHM</strong></p>
                        <div class="p-4 rounded-md bg-[#00CB5D]"></div>
                        <button data-id="2" id="ca_info">
                            <span class="border rounded-full py-1 px-3 bg-white mx-1 text-sm"><strong>i</strong></span>
                        </button>
                        <div id="ca_info_text" class="bg-white w-[22rem] p-4 rounded-lg absolute top-2 left-[90%] hidden z-10">
                            <div class="flex justify-end close_btn">
                                <button>X</button>
                            </div>
                            <p><strong>CARRINGTON’S ALGORITM:</strong><br> The Deep Space Climate Observatory, is an American space weather station launched in the midst of February in 2015. Its purpose is to monitor the changes in solar wind to provide early warnings of geomagnetic storms that could impact heavily technological systems back on Earth.</p>
                            <a target="_blank" href="#" class="text-[#301FF3] text-xs">https://www.carringtonsalgorithm.com</a>
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
                    <canvas id="myChart2" width="400" height="400"></canvas>
                </div>
            </div>
            <div class="flex justify-center mt-10 mb-4">
                    <div>
                        <div class="flex items-center space-x-1">
                            <span class="p-2 rounded-full bg-[#F209A3]"></span><p><strong>Proton temperature</strong></p>
                        </div>
                        <canvas id="myChart3" width="400" height="400"></canvas>
                    </div>
                </div>
        </div>
        </div>`

        boxContent.append(html)
        showChart();
    }else if(id == 3){
        var html = `<div class="hidden" id="detail">
        <div class="p-4 text-[#737373]">
            <div>
                <p class="bg-[#E7E7E7] rounded-md w-[30%] p-1 text-center"><strong>Range: 03/10/2022 - 05/10/2022</strong></p>
                <p class="my-2">This is the contrast between the <strong>WIND and CA</strong></p>
            </div>
            <div class="flex justify-center space-x-[10vw] mb-12">
                <div>
                    <div class="flex items-center relative">
                        <p class="mx-2"><strong>DSCOVR</strong></p>
                        <div class="p-4 rounded-md bg-[#042D53]"></div>
                        <button data-id="1" id="dscovr_info">
                            <span class="border rounded-full py-1 px-3 bg-white mx-1 text-sm"><strong>i</strong></span>
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
                        <p class="mx-2"><strong>CARRINGTON ALGORITHM</strong></p>
                        <div class="p-4 rounded-md bg-[#00CB5D]"></div>
                        <button data-id="2" id="ca_info">
                            <span class="border rounded-full py-1 px-3 bg-white mx-1 text-sm"><strong>i</strong></span>
                        </button>
                        <div id="ca_info_text" class="bg-white w-[22rem] p-4 rounded-lg absolute top-2 left-[90%] hidden z-10">
                            <div class="flex justify-end close_btn">
                                <button>X</button>
                            </div>
                            <p><strong>CARRINGTON’S ALGORITM:</strong><br> The Deep Space Climate Observatory, is an American space weather station launched in the midst of February in 2015. Its purpose is to monitor the changes in solar wind to provide early warnings of geomagnetic storms that could impact heavily technological systems back on Earth.</p>
                            <a target="_blank" href="#" class="text-[#301FF3] text-xs">https://www.carringtonsalgorithm.com</a>
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
                    <canvas id="myChart2" width="400" height="400"></canvas>
                </div>
            </div>
            <div class="flex justify-center mt-10 mb-4">
                    <div>
                        <div class="flex items-center space-x-1">
                            <span class="p-2 rounded-full bg-[#F209A3]"></span><p><strong>Proton temperature</strong></p>
                        </div>
                        <canvas id="myChart3" width="400" height="400"></canvas>
                    </div>
                </div>
        </div>
        </div>`

        boxContent.append(html)
        showChart();
    }else{
        var html = `<div class="hidden" id="detail">
        <div class="p-4 text-[#737373]">
            <div>
                <p class="bg-[#E7E7E7] rounded-md w-[30%] p-1 text-center"><strong>Range: 03/10/2022 - 05/10/2022</strong></p>
                <p class="my-2">This is the contrast between the <strong>DSCOVR, CA and WIND</strong></p>
            </div>
            <div class="flex justify-center space-x-[10vw] mb-12">
                <div>
                    <div class="flex items-center relative">
                        <p class="mx-2"><strong>DSCOVR</strong></p>
                        <div class="p-4 rounded-md bg-[#042D53]"></div>
                        <button data-id="1" id="dscovr_info">
                            <span class="border rounded-full py-1 px-3 bg-white mx-1 text-sm"><strong>i</strong></span>
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
                        <p class="mx-2"><strong>CARRINGTON ALGORITHM</strong></p>
                        <div class="p-4 rounded-md bg-[#00CB5D]"></div>
                        <button data-id="2" id="ca_info">
                            <span class="border rounded-full py-1 px-3 bg-white mx-1 text-sm"><strong>i</strong></span>
                        </button>
                        <div id="ca_info_text" class="bg-white w-[22rem] p-4 rounded-lg absolute top-2 left-[90%] hidden z-10">
                            <div class="flex justify-end close_btn">
                                <button>X</button>
                            </div>
                            <p><strong>CARRINGTON’S ALGORITM:</strong><br> The Deep Space Climate Observatory, is an American space weather station launched in the midst of February in 2015. Its purpose is to monitor the changes in solar wind to provide early warnings of geomagnetic storms that could impact heavily technological systems back on Earth.</p>
                            <a target="_blank" href="#" class="text-[#301FF3] text-xs">https://www.carringtonsalgorithm.com</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center relative">
                        <p class="mx-2"><strong>WIND</strong></p>
                        <div class="p-4 rounded-md bg-[#0098AD]"></div>
                        <button data-id="2" id="wind_info">
                            <span class="border rounded-full py-1 px-3 bg-white mx-1 text-sm"><strong>i</strong></span>
                        </button>
                        <div id="wind_info_text" class="bg-white w-[22rem] p-4 rounded-lg absolute top-2 left-0 hidden z-10">
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
                    <canvas id="myChart2" width="400" height="400"></canvas>
                </div>
            </div>
            <div class="flex justify-center mt-10 mb-4">
                <div>
                    <div class="flex items-center space-x-1">
                        <span class="p-2 rounded-full bg-[#F209A3]"></span><p><strong>Proton temperature</strong></p>
                    </div>
                    <canvas id="myChart3" width="400" height="400"></canvas>
                </div>
            </div>
        </div>
        </div>`
        boxContent.append(html)
        showChart();
    }

});

// Dscovr info
$('body').on('click', '#dscovr_info', function(){
    var textBox = $('#dscovr_info_text');
    textBox.toggleClass('hidden');
});

// Wind info
$('body').on('click', '#wind_info', function(){
    var textBox = $('#wind_info_text');
    textBox.toggleClass('hidden');
});

// CA info
$('body').on('click', '#ca_info', function(){
    var textBox = $('#ca_info_text');
    textBox.toggleClass('hidden');
});

// Close info btn class
$('body').on('click', '.close_btn', function(){
    var parent = $(this).parent();
    parent.addClass('hidden');
});

// Contrast option
$('body').on('click', '.contrast_option', function(){
    var option = $('#contrastOption').val();
    var boxContent = $('#detail_content');

   
});

            