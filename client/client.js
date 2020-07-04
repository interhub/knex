const user_btn = document.querySelector('#user_btn');
const order_btn = document.querySelector('#order_btn');
const list = document.querySelector('#list')

window.onload = () => {
  user_btn.onclick = () => sendData('user')
  order_btn.onclick = () => sendData('order')
  setList()
}

function sendData( type ) {
  let url = `/${type}`,
    req = {};
  let items = getInputs(type);
  items.forEach(( el, i ) => {
    req[el.placeholder] = el.value
  })
  fetch(window.location.origin + url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(req)
  })
  .then(r => r.json())
  .then(res => {
    console.log('result ', res)
    setList()
  })
  .catch(( e ) => {
    console.log(e, 'err')
  })
}

function getInputs( type ) {
  return document.querySelectorAll(`.${type} input`)
}

function setList() {
  fetch(window.location.origin + '/user')
  .then(r => r.json())
  .then(( res ) => {
    console.log(res, 'res all users')
    let mass = res.users.map(( el, i ) => {
      return `
<div style="cursor: pointer" onclick="getOrder(${el.id})" >
         <p>name: ${el.name}</p>
         <p>id: ${el.id}</p>
         <p>city: ${el.city}</p>
         <hr>
</div>
        `
    }).reverse()

    list.innerHTML = mass.join(' ')
  })
  .catch(( e ) => {
    console.log(e, 'err')
  })
}

function getOrder( id ) {
  console.log('req by id', id)
  fetch(window.location.origin + '/order/' + id)
  .then(r => r.json())
  .then(( res ) => {
    console.log(res, 'get order by id')
  })
  .catch(( e ) => {
    console.log(e, 'err')
  })
}
