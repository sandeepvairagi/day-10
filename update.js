const features = document.getElementById('features');


for (const p of features.querySelectorAll('p')) {
    p.textContent = `✓ ${p.textContent}`;
}