# (Week 1 Code Challenge)

#### Date, 2024/03/24

#### By *Gerald Kisilu*

## Description
It's a webpage that shows the different challenges undertaken during this week one code challenge

## Installation
You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

### Installation instruction
```
Git clone https://geraldkisilu.github.io/WK1-Code-Challenge/

```

# Live Link
[Git](https://geraldkisilu.github.io/WK1-Code-Challenge/)

## Technologies used
HTML
ReadMe
Github
Javascript



# challenge 1
The StudentGrader function took in the student's marks provided for in the first challenge as input.
It checked the mark against different ranges to determine the grade.
If the mark is greater than 79, it returns 'A'.
If the mark is between 60 and 79 (inclusive), it returns 'B'.
If the mark is between 49 and 59 (inclusive), it returns 'C'.
If the mark is between 40 and 49 (inclusive), it returns 'D'.
Otherwise, it returned 'E'at the end.


# challenge 2
I defined the function calculateDemeritPoints that took the speed of a car as input.
The speed was set to 70km/h, km per demerit point to 5, and demerit points threshold to 12.
I checked if the speed is less than or equal to the speed limit. If true, print "Ok" as the output.
If the speed exceeded the speed limit, the number of demerit points was to be calculated based on how much the speed is over the limit.
If the demerit points exceed the threshold, print "License suspended"; otherwise, print the total demerit points.

# challenge 3
I defined the function calculatePayee and used it to calculate the Payee tax based on the provided gross salary. I also used the KRA tax rates to determine the payee amount.
The calculateNHIFDeductions function calculated the NHIF deductions based on the provided gross salary. I used the NHIF rates to determine the NHIF deductions.
The calculateNSSFDeductions function calculated the NSSF deductions based on the provided gross salary. I used the NSSF rates that were provided in the link to determine the NSSF deductions.
The calculateNetSalary function took in the basic salary and benefits, and I used it to calculate the gross salary, payee, NHIF deductions, NSSF deductions, and finally the net salary. It called the above helper functions to compute each component.