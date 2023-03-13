const toCurrency = price => {
    return new Intl.NumberFormat('en-EN', {
        currency: 'USD',
        style: 'currency'
    }).format(price)
}

document.querySelectorAll('.price').forEach(node => {
    node.textContent = toCurrency(node.textContent)
})
const $card = document.querySelector('#card')
if ($card) {
    $card.addEventListener('click', (event) => {
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id
            fetch('/card/remove/' + id, {
                method: 'delete'
            }).then(res => res.json())
                .then(card => {
                    if (card.courses.length){
                        const html = card.courses.map( c => {
                            return `
                              <tr>
                                <td>${c.title}</td>
                                <td>${c.count}</td>
                                <td>
                                    <button class="btn btm-small js-remove" data-id="${c.id}">Delete</button>
                                </td>
                              </tr>
                            `
                        }).join('')
                        $card.querySelector('tbody').innerHTML = html
                        $card.querySelector('.price').textContent = toCurrency(card.price)
                    } else {
                        $card.innerHTML = `<p>Card is empty</p>
                        <p>BUT WE HAVE A DOGE!!!</p>
                        <img src="https://sun9-2.userapi.com/impg/dQJ0idtEa3uhOeEN82yX3MU8-yCM-SDWwsLQiA/eq01S3ioRKw.jpg?size=800x776&quality=95&sign=e6b602497cb5ad5a57e01089ea42e403&type=album" alt="doge">
                        `
                    }
                })
        }
    })
}