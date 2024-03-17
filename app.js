document.addEventListener('DOMContentLoaded', function() {
    // User input data
    const ageBar = document.getElementById("age")
    const heightBar = document.getElementById("height")
    const weightBar = document.getElementById("weight")
    const sbpBar = document.getElementById("systolic-blood-pressure")
    const dbpBar = document.getElementById("diastolic-blood-pressure")
    const diabetesBar = document.getElementById("diabetes")
    const cancerBar = document.getElementById("cancer")
    const alzheimersBar = document.getElementById("alzheimers")

    // Call API for risk calculations
    const calculateRiskButton = document.getElementById("calculateRisk")
    calculateRiskButton.addEventListener('click', async function() {
        const response = await fetch(`https://health-calculator-api.azurewebsites.net//calculate?age=${ageBar.value}
        &height=${heightBar.value}&weight=${weightBar.value}&sbp=${sbpBar.value}&dbp=${dbpBar.value}
        &diabetes=${diabetesBar.value}&cancer=${cancerBar.value}&alzheimers=${alzheimersBar.value}`
        )
        const message = await response.text()
        document.getElementById('riskResult').innerText = message;
    });

    const clearFieldsButton = document.getElementById("clearFields");
        clearFieldsButton.addEventListener("click", () => {
        document.getElementById("age").value = "";
        document.getElementById("height").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("systolic-blood-pressure").value = "";
        document.getElementById("diastolic-blood-pressure").value = "";
        document.getElementById("diabetes").value = "";
        document.getElementById("cancer").value = "";
        document.getElementById("alzheimers").value = "";
        document.getElementById("riskResult").innerText = "";
    });

    // Function to call the ping endpoint
    function pingServer() {
        fetch('http://localhost:3000/api/ping')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to ping server');
                }
                return response.text();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error pinging server:', error.message);
            });
    }

    pingServer();
})



