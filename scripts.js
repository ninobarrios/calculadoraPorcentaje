document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.querySelector('.graficotabla table tbody');
    const input1 = document.getElementById('input1');
    const percentageDisplay = document.getElementById('percentageDisplay');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const resultado = document.getElementById('resultado');
    const discountPercentageSpan = document.getElementById('discount-percentage');
    const errorMessage = document.getElementById('error-message');

    // Crear la tabla con 10x10 celdas
    for (let i = 0; i < 10; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement('td');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    // Actualizar la tabla basada en el valor del input1
    function updateTable() {
        const value = parseInt(input1.value, 10);

        // Validar el valor ingresado
        if (isNaN(value) || value < 0 || value > 100) {
            errorMessage.textContent = 'Ingrese un valor entre 0 y 100.';
            return;
        }

        // Si es válido, limpiar mensaje de error y actualizar la tabla
        errorMessage.textContent = '';
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.style.backgroundColor = '');

        for (let i = 0; i < value; i++) {
            if (i < cells.length) {
                cells[i].style.backgroundColor = '#F29F05';
            }
        }

        // Mostrar el valor en el label
        percentageDisplay.textContent = `% de 100`;
    }

    // Validar y actualizar input2
    function validarInput2() {
        let valor = parseFloat(input2.value);
        if (isNaN(valor) || valor < 0 || valor > 100) {
            errorMessage.textContent = 'Ingrese un descuento válido (0-100).';
            input2.value = '';
        } else {
            errorMessage.textContent = '';
        }
        calcularPorcentaje();
    }

    // Calcular el porcentaje y mostrar el resultado en el input de resultado
    function calcularPorcentaje() {
        const percent = parseFloat(input2.value);
        const number = parseFloat(input3.value);
        if (!isNaN(percent) && !isNaN(number)) {
            const result = (percent / 100) * number;
            resultado.value = result.toFixed(2); // Mostrar el resultado con dos decimales
        } else {
            resultado.value = ''; // Limpiar si los valores no son válidos
        }
    }

    // Escuchar cambios en los inputs y actualizar
    input1.addEventListener('input', updateTable);
    input2.addEventListener('input', validarInput2);
    input3.addEventListener('input', calcularPorcentaje);

    // Actualizar tabla y porcentaje al cargar la página
    updateTable();
    calcularPorcentaje();
});

document.addEventListener('DOMContentLoaded', function () {
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const discountPercentageSpan = document.getElementById('discount-percentage');
    const productPriceSpan = document.getElementById('product-price');
    const discountAmountSpan = document.getElementById('discount-amount');

    function updateDiscountDetails() {
        const discountValue = parseFloat(input2.value);
        const productPrice = parseFloat(input3.value);

        // Actualiza el porcentaje y el precio
        discountPercentageSpan.textContent = `${discountValue}%`;
        productPriceSpan.textContent = `$${productPrice}`;

        // Calcula el monto del descuento
        const discountAmount = (productPrice * (discountValue / 100)).toFixed(2);
        discountAmountSpan.textContent = `$${discountAmount}`;
    }

    // Actualiza el caso práctico cuando cambien los valores de los inputs
    input2.addEventListener('input', updateDiscountDetails);
    input3.addEventListener('input', updateDiscountDetails);

    // Inicializa el valor de los spans al cargar la página
    updateDiscountDetails();
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const toggleButton2 = document.getElementById("toggle-button2");
    const toggleButton3 = document.getElementById("toggle-button3");
    const toggleButton4 = document.getElementById("toggle-button4");

    const extraContent = document.getElementById("extra-content");
    const extraContent2 = document.getElementById("extra-content2");
    const extraContent3 = document.getElementById("extra-content3");
    const extraContent4 = document.getElementById("extra-content4");

    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (extraContent.style.display === "none") {
            extraContent.style.display = "block";
            extraContent.style.display = "flex";
            toggleButton.textContent = "Ocultar Fórmula";
        } else {
            extraContent.style.display = "none";
            toggleButton.textContent = "Ver Fórmula";
        }
    });
    toggleButton2.addEventListener("click", function (event) {
        event.preventDefault();
        if (extraContent2.style.display === "none") {
            extraContent2.style.display = "block";
            extraContent2.style.display = "flex";
            toggleButton2.textContent = "Ocultar Fórmula";
        } else {
            extraContent2.style.display = "none";
            toggleButton2.textContent = "Ver Fórmula";
        }
    });
    toggleButton3.addEventListener("click", function (event) {
        event.preventDefault();
        if (extraContent3.style.display === "none") {
            extraContent3.style.display = "block";
            extraContent3.style.display = "flex";
            toggleButton3.textContent = "Ocultar Fórmula";
        } else {
            extraContent3.style.display = "none";
            toggleButton3.textContent = "Ver Fórmula";
        }
    });
    toggleButton4.addEventListener("click", function (event) {
        event.preventDefault();
        if (extraContent4.style.display === "none") {
            extraContent4.style.display = "block";
            extraContent4.style.display = "flex";
            toggleButton4.textContent = "Ocultar Fórmula";
        } else {
            extraContent4.style.display = "none";
            toggleButton4.textContent = "Ver Fórmula";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const resultado = document.getElementById("resultado");

    // Función para actualizar los elementos con una clase específica
    function updateLabels(className, value) {
        const labels = document.querySelectorAll(className);
        labels.forEach(label => {
            label.textContent = value;
        });
    }

    // Función para calcular el resultado y actualizar los labels
    function updateValues() {
        const percentage = parseFloat(input2.value) || 0;
        const number = parseFloat(input3.value) || 0;
        const result = (percentage / 100) * number;

        // Actualizar las etiquetas correspondientes
        updateLabels('.input2-value-label', `${percentage}`);  // Actualiza todas las etiquetas que usan input2
        updateLabels('.input3-value-label', `${number}`);        // Actualiza todas las etiquetas que usan input3
        updateLabels('.resultado-value-label', `${result.toFixed(2)}`); // Actualiza todas las etiquetas que usan el resultado

        resultado.value = result.toFixed(2);  // Mostrar el resultado en el campo de texto
    }

    input2.addEventListener("input", updateValues);
    input3.addEventListener("input", updateValues);

    updateValues();
});

function obtenerNumero() {
    // Recuperar los valores de porcentaje y total
    var porcentaje = document.getElementById("input2").value;
    var total = document.getElementById("input3").value;

    porcentaje = parseFloat(porcentaje) || 0; // Usa 0 si el valor no es un número
    total = parseFloat(total) || 0; // Usa 0 si el valor no es un número

    var resultado = (porcentaje / 100) * total;

    document.getElementById("resultado").textContent = resultado.toFixed(2); // Formatear a 2 decimales
}


document.addEventListener('DOMContentLoaded', () => {
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input2ValueLabel = document.querySelector('.input2-value-label');
    const input3ValueLabel = document.querySelector('.input3-value-label');
    const ctx = document.getElementById('myPieChart').getContext('2d');

    // Crear el gráfico
    let pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['% Aplicado', 'Restante'],  // Añade las etiquetas para la leyenda
            datasets: [{
                label: 'Valores',
                data: [0, 0],  // Inicializa con valores en 0
                backgroundColor: ['#fcae11', '#38c958'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            let total = pieChart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            let value = tooltipItem.raw;
                            let percentage = ((value / total) * 100).toFixed(2);
                            return `${tooltipItem.label}: ${value} (${percentage}%)`;  // Muestra el porcentaje y el valor
                        }
                    }
                }
            }
        }
    });

    const updateChart = () => {
        const porcentaje = parseFloat(input2.value) || 0;
        const precio = parseFloat(input3.value) || 0;

        const descuentoAplicado = (porcentaje / 100) * precio;
        const restante = precio - descuentoAplicado;

        // Actualizar las etiquetas de valores en la página
        input2ValueLabel.textContent = `${porcentaje}%`;
        input3ValueLabel.textContent = `${precio}`;

        // Actualizar los datos del gráfico
        pieChart.data.datasets[0].data = [descuentoAplicado, restante];
        
        pieChart.update();
    };

    // Asignar eventos a los inputs para actualizar el gráfico en tiempo real
    input2.addEventListener('input', updateChart);
    input3.addEventListener('input', updateChart);

    // Inicializar el gráfico con los valores iniciales
    updateChart();
});









document.addEventListener('DOMContentLoaded', function () {
    const porcentajebox2 = document.getElementById('porcentajebox2');
    const parteporcentajebox2 = document.getElementById('parteporcentajebox2');
    const resultadototalbox2 = document.getElementById('resultadototalbox2');

    const labelPorcentajebox2 = document.getElementById('labelPorcentajebox2');
    const labelParteporcentajebox2 = document.getElementById('labelParteporcentajebox2');
    const labelResultadototalbox2 = document.getElementById('labelResultadototalbox2');

    const inputValueLabels = document.querySelectorAll('.input2-value-label2');
    const inputPercentageLabels = document.querySelectorAll('.input2-percentage-label');
    const input3ValueLabels = document.querySelectorAll('.input3-value-label2');

    const ctx = document.getElementById('myPieChart2').getContext('2d');

    // Crear el gráfico circular
    const myPieChart2 = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [0, 100], // Valores iniciales
                backgroundColor: ['#fcae11', '#38c958'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            const dataset = tooltipItem.dataset;
                            const total = dataset.data.reduce((sum, value) => sum + value, 0);
                            const value = dataset.data[tooltipItem.dataIndex];
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${tooltipItem.label}`;
                        }
                    }
                }
            }
        }
    });

    function calcularResultado() {
        const porcentaje = parseFloat(porcentajebox2.value) || 0;
        const parte = parseFloat(parteporcentajebox2.value) || 0;

        if (porcentaje > 0 && parte > 0) {
            const resultadototal = (parte * 100) / porcentaje;
            resultadototalbox2.value = resultadototal.toFixed(2);
            labelResultadototalbox2.textContent = resultadototal.toFixed(2);

            labelPorcentajebox2.textContent = porcentaje;
            labelParteporcentajebox2.textContent = parte;

            inputValueLabels.forEach(label => {
                label.textContent = parte;
            });
            inputPercentageLabels.forEach(label => {
                label.textContent = porcentaje;
            });
            input3ValueLabels.forEach(label => {
                label.textContent = resultadototal.toFixed(2);
            });

            // Actualiza el gráfico circular
            const partePorcentaje = (parte * 100) / resultadototal;
            const restante = 100 - partePorcentaje;
            myPieChart2.data.datasets[0].data = [partePorcentaje, restante];

            // Actualiza las etiquetas del gráfico
            myPieChart2.data.labels = [
                `% Aplicado: (${partePorcentaje.toFixed(2)}%) ${parte.toFixed(2)} `,
                `Restante: (${restante.toFixed(2)}%) ${(resultadototal - parte).toFixed(2)} `
            ];

            myPieChart2.update();
        } else {
            resultadototalbox2.value = 'Error';
            labelResultadototalbox2.textContent = 'Error';

            inputValueLabels.forEach(label => {
                label.textContent = '';
            });
            inputPercentageLabels.forEach(label => {
                label.textContent = '';
            });
            input3ValueLabels.forEach(label => {
                label.textContent = '';
            });

            // Resetea el gráfico circular
            myPieChart2.data.datasets[0].data = [0, 100];
            myPieChart2.update();
        }
    }

    // Inicializar el gráfico con los valores del input
    calcularResultado();
    porcentajebox2.addEventListener('input', calcularResultado);
    parteporcentajebox2.addEventListener('input', calcularResultado);
});











document.addEventListener('DOMContentLoaded', function () {
    const porcentajebox3 = document.getElementById('porcentajebox3');
    const parteporcentajebox3 = document.getElementById('parteporcentajebox3');
    const resultadototalbox3 = document.getElementById('resultadototalbox3');

    const labelPorcentajebox3 = document.getElementById('labelPorcentajebox3');
    const labelParteporcentajebox3 = document.getElementById('labelParteporcentajebox3');
    const labelResultadototalbox3 = document.getElementById('labelResultadototalbox3');

    const inputValueLabels3 = document.querySelectorAll('.input2-value-label3');
    const inputPercentageLabels3 = document.querySelectorAll('.input2-percentage-label3');
    const input3ValueLabels3 = document.querySelectorAll('.input3-value-label3');

    const ctx = document.getElementById('myPieChart3').getContext('2d');

    // Función para obtener el valor numérico de un elemento de etiqueta
    function getLabelValue(labelElement) {
        const value = parseFloat(labelElement.textContent);
        return isNaN(value) ? 0 : value;
    }

    // Crear el gráfico circular
    const myPieChart3 = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Restante', 'Parte'], // Etiquetas personalizadas para la leyenda
            datasets: [{
                label: 'Distribución',
                data: [0, 100], // Valores iniciales (para ser actualizados)
                backgroundColor: ['#fcae11', '#38c958'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        generateLabels: function (chart) {
                            const dataset = chart.data.datasets[0];
                            const total = dataset.data.reduce((sum, value) => sum + value, 0);

                            return dataset.data.map((data, index) => {
                                const percentage = ((data / total) * 100).toFixed(2);
                                return {
                                    text: `${percentage}%`, // Solo muestra el porcentaje en la leyenda
                                    fillStyle: dataset.backgroundColor[index],
                                    strokeStyle: dataset.borderColor ? dataset.borderColor[index] : dataset.backgroundColor[index],
                                    lineWidth: dataset.borderWidth,
                                    hidden: isNaN(dataset.data[index]) || chart.getDatasetMeta(0).data[index].hidden,
                                    index: index
                                };
                            });
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            let total = myPieChart3.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            let value = tooltipItem.raw;
                            let percentage = ((value / total) * 100).toFixed(2);
                            return `${tooltipItem.label}: (${percentage}%) ${value.toFixed(2)} `;  // Muestra el valor y el porcentaje
                        }
                    }
                }
            }
        }
    });

    function calcularResultado() {
        const porcentaje = parseFloat(porcentajebox3.value);
        const parte = parseFloat(parteporcentajebox3.value);

        if (!isNaN(porcentaje) && !isNaN(parte) && porcentaje > 0) {
            const resultadototal = (parte * 100) / porcentaje;
            resultadototalbox3.value = resultadototal.toFixed(2);
            labelResultadototalbox3.textContent = resultadototal.toFixed(2);

            labelPorcentajebox3.textContent = porcentaje;
            labelParteporcentajebox3.textContent = parte;

            inputValueLabels3.forEach(label => {
                label.textContent = parte;
            });
            inputPercentageLabels3.forEach(label => {
                label.textContent = porcentaje;
            });
            input3ValueLabels3.forEach(label => {
                label.textContent = resultadototal.toFixed(2);
            });

            // Actualiza el gráfico circular
            const partePorcentaje = (parte * 100) / porcentaje;
            myPieChart3.data.datasets[0].data = [porcentaje - parte, parte];
            myPieChart3.update();
        } else {
            resultadototalbox3.value = 'Error';
            labelResultadototalbox3.textContent = 'Error';

            inputValueLabels3.forEach(label => {
                label.textContent = '';
            });
            inputPercentageLabels3.forEach(label => {
                label.textContent = '';
            });
            input3ValueLabels3.forEach(label => {
                label.textContent = '';
            });

            // Resetea el gráfico circular
            myPieChart3.data.datasets[0].data = [0, 100];
            myPieChart3.update();
        }
    }

    // Inicializar el gráfico con el valor del input
    calcularResultado();
    porcentajebox3.addEventListener('input', calcularResultado);
    parteporcentajebox3.addEventListener('input', calcularResultado);
});






document.addEventListener('DOMContentLoaded', function () {
    const porcentajebox4 = document.getElementById('porcentajebox4');
    const parteporcentajebox4 = document.getElementById('parteporcentajebox4');
    const parteporcentajebox42 = document.getElementById('parteporcentajebox42');
    const resultadototalbox4 = document.getElementById('resultadototalbox4');

    const labelPorcentajebox4 = document.getElementById('labelPorcentajebox4');
    const labelParteporcentajebox4 = document.getElementById('labelParteporcentajebox4');
    const labelResultadototalbox4 = document.getElementById('labelResultadototalbox4');
    const partePorcentajeLabel = document.getElementById('partePorcentajeLabel'); 

    const inputValueLabels4 = document.querySelectorAll('.input2-value-label4');
    const inputPercentageLabels4 = document.querySelectorAll('.input2-percentage-label4');
    const input3ValueLabels4 = document.querySelectorAll('.input3-value-label4');
    const partePorcentajeLabels42 = document.querySelectorAll('.parteporcentajebox42');

    const ctx = document.getElementById('myPieChart4').getContext('2d');

    let resultadototal = 0; // Variable global para almacenar el valor de resultadototal

    const myPieChart4 = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Porcentaje', ' % Restante'],  
            datasets: [{
                label: 'Distribución',
                data: [0, 100], 
                backgroundColor: ['#fcae11', '#38c958'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top', 
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            const value = tooltipItem.raw; // Valor del segmento
                            const total = myPieChart4.data.datasets[0].data.reduce((a, b) => a + b, 0); // Total de todos los valores del gráfico
                            const percentage = (value / total * 100).toFixed(2); // Porcentaje del valor en el gráfico

                            // Devolver el texto formateado para el tooltip
                            return `${tooltipItem.label}: (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    function manejarError() {
        resultadototalbox4.value = 'Error';
        labelResultadototalbox4.textContent = 'Error';

        inputValueLabels4.forEach(label => label.textContent = '');
        inputPercentageLabels4.forEach(label => label.textContent = '');
        input3ValueLabels4.forEach(label => label.textContent = '');
        partePorcentajeLabels42.forEach(label => label.textContent = '');

        // Resetear gráfico
        myPieChart4.data.datasets[0].data = [0, 100];
        myPieChart4.update();
    }

    function calcularResultado() {
        const porcentaje = parseFloat(porcentajebox4.value);
        const parte = parseFloat(parteporcentajebox4.value);
        const parteExtra = parseFloat(parteporcentajebox42.value);

        if (!isNaN(porcentaje) && !isNaN(parte) && !isNaN(parteExtra) && porcentaje > 0) {
            resultadototal = (parte * parteExtra) / porcentaje; // Calcular y almacenar resultadototal
            resultadototalbox4.value = resultadototal.toFixed(2);
            labelResultadototalbox4.textContent = resultadototal.toFixed(2);

            labelPorcentajebox4.textContent = porcentaje;
            labelParteporcentajebox4.textContent = parte;

            inputValueLabels4.forEach(label => label.textContent = parte);
            inputPercentageLabels4.forEach(label => label.textContent = porcentaje);
            input3ValueLabels4.forEach(label => label.textContent = resultadototal.toFixed(2));
            partePorcentajeLabels42.forEach(label => label.textContent = parteExtra); 

            // Calcular porcentaje basado en parte y parteExtra
            const total = (parte * 100) / porcentaje;
            const parteExtraPorcentaje = (parte * parteExtra) / porcentaje;
            // Actualizar gráfico circular
            myPieChart4.data.datasets[0].data = [parteExtra, 100-parteExtra];
            myPieChart4.update();

            // Mostrar el porcentaje en el label
            partePorcentajeLabel.textContent = `Total: ${total.toFixed(2)} / Porcentaje: ${parteExtra.toFixed(2)}% / Resultado: ${parteExtraPorcentaje.toFixed(2)}`;
        } else {
            manejarError();
        }
    }

    // Inicializar cálculo
    calcularResultado();
    porcentajebox4.addEventListener('input', calcularResultado);
    parteporcentajebox4.addEventListener('input', calcularResultado);
    parteporcentajebox42.addEventListener('input', calcularResultado);
});













function checkAnswers() {
    const correctAnswers = {
        q1: 30,   // 50% de 60
        q2: 12,   // 50% de 24
        q3: 210,  // 25% de 840
        q4: 500,  // 25% de 2000
        q5: 300,  // 75% de 400
        q6: 15,   // 75% de 20
        q7: 9,    // 10% de 90
        q8: 100   // 20% de 500
    };

    for (let i = 1; i <= 8; i++) {
        const userAnswer = parseInt(document.getElementById(`q${i}`).value);
        const resultSpan = document.getElementById(`result${i}`);

        if (userAnswer === correctAnswers[`q${i}`]) {
            resultSpan.textContent = "Correcto";
            resultSpan.className = "correct";
        } else {
            resultSpan.textContent = "Incorrecto";
            resultSpan.className = "incorrect";
        }
    }
}
