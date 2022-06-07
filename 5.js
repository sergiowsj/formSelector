function showInfo() {
  let name = document.querySelector("input[name='name']").value
  let color = document.querySelector("select[id='color'] option:checked").text
  let likePrograming = document.querySelector(
    "input[name='likePrograming']:checked"
  ).value
  let developerOption = document.querySelectorAll(
    "input[name='developerOptions']:checked"
  )
  let optionValue = []
  developerOption.forEach(element => {
    optionValue.push(element.value)
  })
  let optionChecked = optionValue.join(', ')
  alert(
    `Nome: ${name}, Cor primária: ${color} - Gosta de programar? ${likePrograming} - Conhecimentos em programação: ${optionChecked}`
  )
}
