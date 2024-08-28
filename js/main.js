// main.js


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0:00', '1:00', '2:00', '3:00', '4:00'], // Dữ liệu thời gian
        datasets: [
            {
                label: 'Nhiệt độ (°C)',
                data: [22, 24, 20, 19, 21], // Giá trị nhiệt độ
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Độ ẩm (%)',
                data: [30, 35, 33, 31, 37], // Giá trị độ ẩm
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Ánh sáng (lux)',
                data: [50, 60, 55, 70, 65], // Giá trị ánh sáng
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y-axis-light'
            }
        ]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Thời gian'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Nhiệt độ & Độ ẩm'
                }
            },
            'y-axis-light': {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Ánh sáng (lux)'
                },
                max: 100, // Giá trị tối đa cho ánh sáng
                min: 0
            }
        }
    }
});


const buttons = document.querySelectorAll('.onbutton, .offbutton');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = this.id;
        if (buttonId == 'air-on'){
            const p = document.getElementById('status-air')
            p.textContent = 'Status: ON'
        }

        if (buttonId == 'air-off'){
            const p = document.getElementById('status-air')
            p.textContent = 'Status: OFF'
        }

        if (buttonId == 'light-on'){
            const p = document.getElementById('status-light')
            p.textContent = 'Status: ON'
        }

        if (buttonId == 'light-off'){
            const p = document.getElementById('status-light')
            p.textContent = 'Status: OFF'
        }

        if (buttonId == 'fan-on'){
            const p = document.getElementById('status-fan')
            p.textContent = 'Status: ON'
        }

        if (buttonId == 'fan-off'){
            const p = document.getElementById('status-fan')
            p.textContent = 'Status: OFF'
        }
    });
});



