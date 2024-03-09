document.addEventListener('DOMContentLoaded', function() {
    const ageBar = document.getElementById("age")
    const heightBar = document.getElementById("height")
    const weightBar = document.getElementById("weight")
    const sbpBar = document.getElementById("systolic-blood-pressure")
    const dbpBar = document.getElementById("diastolic-blood-pressure")
    const diabetesBar = document.getElementById("diabetes")
    const cancerBar = document.getElementById("cancer")
    const alzheimersBar = document.getElementById("alzheimers")



    const calculateRiskButton = document.getElementById("calculateRisk")
    calculateRiskButton.addEventListener('click', async function() {
        const response = await fetch(`http://localhost:3000/calculate?age=${ageBar.value}
        &height=${heightBar.value}&weight=${weightBar.value}&sbp=${sbpBar.value}&dbp=${dbpBar.value}
        &diabetes=${diabetesBar.value}&cancer=${cancerBar.value}&alzheimers=${alzheimersBar.value}`
        )
        const points = await response.json()
        console.log(points)
    })
})