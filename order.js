
document.getElementById('custom-checkbox').addEventListener('change', function() {
    const customUploadSection = document.getElementById('custom-upload-section');
    if (this.checked) {
        customUploadSection.style.display = 'block';
    } else {
        customUploadSection.style.display = 'none';
    }
});



const price = document.getElementById('Price');
const quantity = document.getElementById('quantity');
const customCheckbox = document.getElementById('custom-checkbox');
const customImage = document.getElementById('custom-image');

function updatePrice() {
    let basePrice = quantity.value == 1 ? 25 : quantity.value * 25;

    if (customCheckbox.checked) {
        basePrice += 2; 
        if (customImage.files.length > 0) {
            basePrice += 2 * (customImage.files.length - 1); 
        }
    }

    price.textContent = "Price: $" + basePrice.toFixed(2);
}


quantity.addEventListener('input', updatePrice);
customCheckbox.addEventListener('change', updatePrice);
customImage.addEventListener('change', updatePrice);
