
formsubmit.addEventListener('click',(event)=>
{
    event.preventDefault()
    
    const userheightinput=height.value
    const userweightinput=weight.value
    const userAgeinput=Age.value
    const usergenderinput=gender.value
    var bmiCategorycalculated
    bmiexplaination.classList.remove('text-center');
    var userheightinmeter=userheightinput/100
    let remark = "";

    var BMI=userweightinput/(userheightinmeter*userheightinmeter)
    bmiCategory.innerHTML=BMI
   
    if(isNaN(BMI) || BMI <= 0)
    {
        alert("Please recheck the input: values must be positive numbers.");
    }
    
    else if(BMI<18.5)
    {
        bmiCategory.innerHTML="Underweight"
        bmiValue.innerHTML=BMI.toFixed(1)
        remark = "Your BMI is below the healthy range. Focus on nutrient-rich foods.";
    }
    else if(BMI < 25.0)
    {
        bmiCategory.innerHTML="Normal Weight"
        bmiValue.innerHTML=BMI.toFixed(1)
        remark = "Great job! Your BMI is in the healthy range.";
    }
    else if(BMI < 30.0)
    {
        bmiCategory.innerHTML="Overweight"
        bmiValue.innerHTML=BMI.toFixed(1)
        remark = "Your BMI is slightly elevated. Adding daily physical activity can help.";
    }
    else
    {
        bmiCategory.innerHTML="Obese"
        bmiValue.innerHTML=BMI.toFixed(1)
        remark = "Your BMI is high. We recommend consulting a healthcare provider for personalized advice.";
    }
  
    // Remarks
    if (userAgeinput <= 20 && BMI >= 25.0) 
        {
        remark += "<br>  <b>Note</b>: BMI cutoffs for teens and young adults vary significantly as the body is still developing.";
        }
    else if (userAgeinput >= 65 && BMI >= 25.0)
        {
        remark += "<br><br> <b>Note</b>: For seniors, a slightly higher BMI is often considered protective.";
        }
    if(usergenderinput=="female" && BMI >= 25.0)
    {
        remark += "<br><br><b>Gender Difference:</b> Women naturally require a higher percentage of essential body fat for hormonal health, which standard BMI metrics do not differentiate.<br>Also Standard BMI formulas do not account for fluid retention during hormonal cycles, pregnancy, or lactation, which temporarily alter body mass.";
    }
    remark += "<hr><p class='text-secondary  mt-3 mb-0'><b>Note:</b> BMI estimates overall body mass and does not distinguish between muscle and body fat.</p>";
bmiexplaination.innerHTML = remark;
    
})