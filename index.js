const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const btnCalcula = document.getElementById('btnCalcular')
const mostraResultado = document.getElementById('mostraResultado')
const fechaInfo = document.getElementById('fechaInfo')
const btnRecalcula = document.getElementById('btnRecalcula')
const informativo = document.getElementById('informativo')
const explicativo = document.getElementById('explicativo')
const telaResultado = document.getElementById('telaResultado')
var resultado = 0

fechaInfo.addEventListener('click', () => {
  informativo.style.display = 'none'
  altura.focus()
})

btnCalcula.addEventListener('click', () => {
  if (altura.value !== '' && peso.value !== '') {
	  resultado = (peso.value / Math.pow(altura.value, 2) * 10000).toFixed(1)
    console.log(resultado)
    telaFinal()
  } else {
  	  alert(
  	  	`Para calcular digite sua altura em centimetros (Exemplo: 1,5 metros => 150 centimetros) e o peso em quilogramas (kg).`
  	  	)
  	}
})

function telaFinal() {
  telaResultado.style.display = 'block'
  mostraResultado.innerHTML = ' ' + resultado
  if (resultado < 18.5) {
    explicativo.innerHTML = `
      <strong>Abaixo do peso ideal.</strong><br>
      <p>Consequências para a saúde:</p>
      <p>Fadiga, stress, ansiedade</p>
      <p>Quando se está abaixo do peso ideal deve-se aumentar 
      o consumo de alimentos ricos em calorias e nutrientes para que 
      o corpo tenha o necessário para se proteger de doenças. </p>
      
    `
  }
  if (resultado >= 18.5 && resultado <= 24.9){
    explicativo.innerHTML = `
      <strong>Normal</strong><br><br>
      <p>Consequências para a saúde:</p>
      <p>Menor risco de doenças cardíacas e vasculares</p>
    `
  }
  if (resultado > 24.9 && resultado <= 29.9){
    explicativo.innerHTML = `
      <strong>Acima do peso</strong><br><br>
      Consequências para a saúde:<br>
      Fadiga, má circulação, varizes
    `
  }
  if (resultado > 29.9 && resultado <= 34.9){
    explicativo.innerHTML = `
      <strong>Obesidade I</strong><br><br>
      Diabetes, angina, infarto, aterosclerose
    `
  }
  if (resultado > 34.9 && resultado <= 40){
    explicativo.innerHTML = `
      <strong>Obesidade II (severa)</strong><br><br>
      Apneia do sono, falta de ar
    `
  }
  if (resultado > 40){
    explicativo.innerHTML = `
      <strong>Obesidade III (mórbida)</strong><br>
      Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC
    `
  }
}

btnRecalcula.addEventListener('click', () => {
	telaResultado.style.display = 'none'
	altura.value = ''
	peso.value = ''
  altura.focus()
})
