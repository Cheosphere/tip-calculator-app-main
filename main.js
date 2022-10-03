const totalPerson = document.getElementById('total_person')
const tipAmountPerson = document.getElementById('tip_amount')
const tipValues = document.querySelectorAll('.tip_values_item')
const resetBtn = document.getElementById('reset')


function total() {

    const billInput = Number(document.getElementById('bill').value)
    const billInputReset = document.getElementById('bill')
    const peopleNumber = Number(document.getElementById('people').value)
    const peopleNumberReset = document.getElementById('people')
    const tipCustom = document.getElementById('custom').value
    const tipCustomReset = document.getElementById('custom')
    const spanPeople = document.getElementById('span_people')
    const spanBill = document.getElementById('span_bill')

    if (billInput === 0) {
        spanBill.classList.add('span_visible')
        billInputReset.classList.add('input_error')
        tipAmountPerson.innerHTML = 0
        totalPerson.innerHTML = 0
        tipValues.forEach(item => {item.classList.remove('tip_active')})
    } else if (peopleNumber === 0) {
        spanBill.classList.remove('span_visible')
        billInputReset.classList.remove('input_error')
        spanPeople.classList.add('span_visible')
        peopleNumberReset.classList.add('input_error')
        tipAmountPerson.innerHTML = 0
        totalPerson.innerHTML = 0
        tipValues.forEach(item => {item.classList.remove('tip_active')})
    } else {
        tipValues.forEach(item => {item.classList.remove('tip_active')})
        spanBill.classList.remove('span_visible')
        billInputReset.classList.remove('input_error')
        spanPeople.classList.remove('span_visible')
        peopleNumberReset.classList.remove('input_error')
        resetBtn.classList.add('reset_active')
        resetBtn.addEventListener('click', () => {
            billInputReset.value = ''
            peopleNumberReset.value = ''
            window.location.reload()
        })
        tipAmountPerson.innerHTML = 0

        let totalPersonResult = (billInput / peopleNumber)
        totalPerson.innerHTML = `$${totalPersonResult.toFixed(2)}`

        if (tipCustom > 0) {
            tipValues.forEach(item => {item.classList.remove('tip_active')})
            tipAmountPerson.innerHTML = 0
            const tipAmount = ((billInput / 100) * tipCustom) / peopleNumber
            totalPersonResult = (billInput / peopleNumber) + tipAmount

            tipAmountPerson.innerHTML = `$${tipAmount.toFixed(2)}`
            totalPerson.innerHTML = `$${totalPersonResult.toFixed(2)}`
        } else {
            tipValues.forEach(tip => {
                tip.addEventListener('click', () => {
                    tipValues.forEach(item => {item.classList.remove('tip_active')})
                    tipCustomReset.value = ''
                    tip.classList.add('tip_active')
                    const tipLength = tip.value.length
                    const tipSelected = Number(tip.value.substring(0, tipLength - 1))
                    const tipAmount = ((billInput / 100) * tipSelected) / peopleNumber
                    totalPersonResult = (billInput / peopleNumber) + tipAmount

                    tipAmountPerson.innerHTML = `$${tipAmount.toFixed(2)}`
                    totalPerson.innerHTML = `$${totalPersonResult.toFixed(2)}`
                })
            });
        }
    }
}












