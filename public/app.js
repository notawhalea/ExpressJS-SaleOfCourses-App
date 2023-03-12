document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('en-EN', {
        currency: 'USD',
        style: 'currency'
    }).format(node.textContent)
})