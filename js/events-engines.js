function openPassTerminal(eventName) {
    // 1. Force find the backdrop overlay and make it visible
    const overlay = document.getElementById('passOverlay');
    if (overlay) {
        overlay.style.setProperty('display', 'flex', 'important');
    }
    
    // 2. Set the event title context cleanly
    const titleNode = document.getElementById('targetEventTitle');
    if (titleNode) {
        titleNode.textContent = eventName.toUpperCase();
    }
    
    // 3. Ensure the registration form input state is shown and receipt is hidden
    const formNode = document.getElementById('passRegistrationForm');
    const receiptNode = document.getElementById('passSuccessReceipt');
    if (formNode) formNode.style.display = 'flex';
    if (receiptNode) receiptNode.style.display = 'none';
}

function closePassTerminal() {
    const overlay = document.getElementById('passOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

function processPassAllocation(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('regName').value;
    const emailInput = document.getElementById('regEmail').value;
    
    if (!nameInput || !emailInput) return;

    const uniqueKey = `VNTG-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    document.getElementById('passRegistrationForm').style.display = 'none';
    document.getElementById('generatedPassKey').textContent = uniqueKey;
    document.getElementById('passSuccessReceipt').style.display = 'flex';
}

function toggleCartDrawer() {
    const cart = document.getElementById('cartDrawer');
    if (cart) {
        if (cart.style.right === "0px") {
            cart.style.right = "-450px";
        } else {
            cart.style.right = "0px";
        }
    }
}

function toggleAccountDrawer() {
    const account = document.getElementById('accountDrawer');
    if (account) {
        if (account.style.right === "0px") {
            account.style.right = "-450px";
        } else {
            account.style.right = "0px";
        }
    }
}

function closeAllDrawers() {
    closePassTerminal();
    const cart = document.getElementById('cartDrawer');
    const account = document.getElementById('accountDrawer');
    if (cart) cart.style.right = "-450px";
    if (account) account.style.right = "-450px";
}

// Map explicitly to window execution layer
window.openPassTerminal = openPassTerminal;
window.closePassTerminal = closePassTerminal;
window.processPassAllocation = processPassAllocation;
window.toggleCartDrawer = toggleCartDrawer;
window.toggleAccountDrawer = toggleAccountDrawer;
window.closeAllDrawers = closeAllDrawers;