document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('fiscal-amount');
    const taxSavingDisplay = document.getElementById('tax-saving');
    const netCostDisplay = document.getElementById('net-cost');

    if (!amountInput || !taxSavingDisplay || !netCostDisplay) return;

    const updateCalculator = () => {
        const amount = parseFloat(amountInput.value) || 0;
        
        // Loi Aillagon: 60% tax reduction
        const taxSaving = amount * 0.60;
        const netCost = amount - taxSaving;

        // Formatting with spaces as thousand separators
        const formatter = new Intl.NumberFormat('fr-FR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        taxSavingDisplay.textContent = formatter.format(taxSaving) + ' €';
        netCostDisplay.textContent = formatter.format(netCost);
    };

    amountInput.addEventListener('input', updateCalculator);
    
    // Initial calculation
    updateCalculator();
});
