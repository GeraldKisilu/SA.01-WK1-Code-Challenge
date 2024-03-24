
function calculatePayee(grossSalary) {
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = 0;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        payee = (0.1 * (grossSalary - 24000));
    } else if (grossSalary > 32333 && grossSalary <= 40667) {
        payee = 833 + (0.15 * (grossSalary - 32333));
    } else if (grossSalary > 40667 && grossSalary <= 49000) {
        payee = 2499 + (0.2 * (grossSalary - 40667));
    } else if (grossSalary > 49000 && grossSalary <= 57333) {
        payee = 4999 + (0.25 * (grossSalary - 49000));
    } else if (grossSalary > 57333 && grossSalary <= 65667) {
        payee = 8999 + (0.3 * (grossSalary - 57333));
    } else {
        payee = 13499 + (0.35 * (grossSalary - 65667));
    }
    return payee;
}
function calculateNHIFDeductions(grossSalary) {
    let nhifDeductions = 0;
    if (grossSalary <= 5999) {
        nhifDeductions = 150;
    } else if (grossSalary > 5999 && grossSalary <= 7999) {
        nhifDeductions = 300;
    } else if (grossSalary > 7999 && grossSalary <= 11999) {
        nhifDeductions = 400;
    } else if (grossSalary > 11999 && grossSalary <= 14999) {
        nhifDeductions = 500;
    } else if (grossSalary > 14999 && grossSalary <= 19999) {
        nhifDeductions = 600;
    } else if (grossSalary > 19999 && grossSalary <= 24999) {
        nhifDeductions = 750;
    } else if (grossSalary > 24999 && grossSalary <= 29999) {
        nhifDeductions = 850;
    } else if (grossSalary > 29999 && grossSalary <= 34999) {
        nhifDeductions = 900;
    } else if (grossSalary > 34999 && grossSalary <= 39999) {
        nhifDeductions = 1000;
    } else if (grossSalary > 39999 && grossSalary <= 44999) {
        nhifDeductions = 1100;
    } else if (grossSalary > 44999 && grossSalary <= 49999) {
        nhifDeductions = 1200;
    } else if (grossSalary > 49999 && grossSalary <= 54999) {
        nhifDeductions = 1300;
    } else if (grossSalary > 54999 && grossSalary <= 69999) {
        nhifDeductions = 1400;
    } else if (grossSalary > 69999 && grossSalary <= 74999) {
        nhifDeductions = 1500;
    } else if (grossSalary > 74999 && grossSalary <= 89999) {
        nhifDeductions = 1600;
    } else if (grossSalary > 89999 && grossSalary <= 94999) {
        nhifDeductions = 1700;
    } else if (grossSalary > 94999 && grossSalary <= 99999) {
        nhifDeductions = 1800;
    } else if (grossSalary > 99999 && grossSalary <= 104999) {
        nhifDeductions = 1900;
    } else if (grossSalary > 104999 && grossSalary <= 109999) {
        nhifDeductions = 2000;
    } else if (grossSalary > 109999 && grossSalary <= 114999) {
        nhifDeductions = 2100;
    } else if (grossSalary > 114999 && grossSalary <= 119999) {
        nhifDeductions = 2200;
    } else{
        nhifDeductions = 2300;
    }
    return nhifDeductions;
}
function calculateNSSFDeductions(grossSalary) {
    let nssfDeductions = 0;
    if (grossSalary <= 6000) {
        nssfDeductions = 360;
    } else if (grossSalary > 6000 && grossSalary <= 18000) {
        nssfDeductions = 720;
    } else {
        nssfDeductions = 2300;
    }
    return nssfDeductions;
}
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhifDeductions = calculateNHIFDeductions(grossSalary);
    const nssfDeductions = calculateNSSFDeductions(grossSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

console.log("Gross Salary:",result.grossSalary);
// console.log("Tax:",result,tax);
// console.log("NHIF Deductions:",result.nhifDeductions);
// console.log("NSSF Deductions",result.nssfDeductions);
// console.log("Net Salary:",result.netSalary);
