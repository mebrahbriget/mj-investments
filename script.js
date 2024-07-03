function calculateNSSF() {
    const age = parseInt(document.getElementById('age').value);
    const yearsWorked = parseInt(document.getElementById('yearsWorked').value);
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);

    if (isNaN(age) || isNaN(yearsWorked) || isNaN(basicSalary)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const retirementAge = 55;
    const nssfRate = 0.15;
    const monthsInYear = 12;

    const yearsToRetirement = retirementAge - age;
    const totalNSSF = yearsWorked * monthsInYear * (nssfRate * basicSalary);

    document.getElementById('result').innerHTML = `
        <p>Years to Retirement: ${yearsToRetirement}</p>
        <p>Total NSSF Accumulated: UGX ${totalNSSF.toLocaleString()}</p>
    `;
}
