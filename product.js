
document.querySelector('.search-input').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const keywords = product.getAttribute('data-keywords');

        if (searchQuery.includes('design') || searchQuery.includes('custom')||searchQuery.includes('image')||searchQuery.includes('picture')) {
            if (keywords.includes('custom') || keywords.includes('design')) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        } else {
            if (keywords.includes('wine') || keywords.includes('vin') || keywords.includes('duvin')) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    });
});
