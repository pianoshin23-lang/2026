const map = L.map('map').setView(
})

const dayBtn = document.getElementById('dayBtn')

dayBtn.addEventListener('click',()=>{

  alert(
`Day 1
도고온천 → 마쓰야마성

Day 2
오카이도`
  )

})

const addSpotBtn = document.getElementById('addSpotBtn')

addSpotBtn.addEventListener('click',()=>{

  const lat = 33.8392 + Math.random() * 0.03
  const lng = 132.7657 + Math.random() * 0.03

  L.circleMarker([lat,lng],{
    radius:8,
    color:'#243447',
    fillColor:'#243447',
    fillOpacity:1
  })
  .addTo(map)
  .bindPopup('커스텀 스팟')

})

async function fetchRate(){

  try{

    const response = await fetch(
      'https://api.exchangerate.host/latest?base=JPY&symbols=KRW'
    )

    const data = await response.json()

    if(data && data.rates && data.rates.KRW){

      const krw = Math.round(
        630 * data.rates.KRW
      )

      document.getElementById('krwPrice').innerText =
        krw.toLocaleString() + '원'

    }

  }catch(error){

    document.getElementById('krwPrice').innerText =
      '환율 오류'

  }

}

fetchRate()
