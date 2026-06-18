let globalCart = JSON.parse(localStorage.getItem('vintology_cart')) || [];

function toggleCartDrawer() {
    document.getElementById('cartDrawer').classList.toggle('open');
    document.getElementById('drawerOverlay').classList.toggle('open');
}

function addToCart(id) {
    // Find the item details safely within the inventory array context
    const inventory = window.wineInventory || [];
    const wine = inventory.find(item => item.id === id);
    if (!wine) return;

    const existingItem = globalCart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        globalCart.push({ id: wine.id, title: wine.name, price: wine.price, quantity: 1 });
    }
    localStorage.setItem('vintology_cart', JSON.stringify(globalCart));
    syncCartUI();
    
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('drawerOverlay').classList.add('open');
}

function removeCartItem(id) {
    globalCart = globalCart.filter(item => item.id !== id);
    localStorage.setItem('vintology_cart', JSON.stringify(globalCart));
    syncCartUI();
}

function syncCartUI() {
    const totalQty = globalCart.reduce((sum, item) => sum + item.quantity, 0);
    const totalValue = globalCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    document.querySelectorAll('.cart-count').forEach(badge => badge.textContent = totalQty);
    
    const displayTotal = document.getElementById('cartTotalDisplay');
    if (displayTotal) {
        displayTotal.textContent = `$${totalValue.toLocaleString(undefined, {minimumFractionDigits: 2})} USD`;
    }

    const container = document.getElementById('cartItemsContainer');
    if (!container) return;

    if (globalCart.length === 0) {
        container.innerHTML = `<div style="color: #a0a0a0; text-align: center; padding-top: 50px;">The acquisition vault is vacant.</div>`;
        return;
    }

    container.innerHTML = globalCart.map(item => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #222;">
            <div>
                <div style="font-family: 'Cinzel', serif; font-size: 13px; color: #fff;">${item.title}</div>
                <div style="font-size: 12px; color: #c5a880;">$${item.price.toLocaleString()} x ${item.quantity}</div>
            </div>
            <button onclick="removeCartItem('${item.id}')" style="background: none; border: none; color: #a0a0a0; cursor: pointer; text-transform: uppercase; font-size: 11px;">Remove</button>
        </div>
    `).join('');
}

function secureCheckout() {
    if (globalCart.length === 0) return;
    alert("🔒 Establishing encrypted pathway to clearing house security core...");
    globalCart = [];
    localStorage.removeItem('vintology_cart');
    syncCartUI();
    toggleCartDrawer();
}

window.toggleCartDrawer = toggleCartDrawer;
window.addToCart = addToCart;
window.removeCartItem = removeCartItem;
window.secureCheckout = secureCheckout;

document.addEventListener("DOMContentLoaded", syncCartUI);
function toggleAccountDrawer() {
    const drawer = document.getElementById('accountDrawer');
    const overlay = document.getElementById('drawerOverlay');
    
    if (drawer.style.right === "0px") {
        drawer.style.right = "-450px";
        if (overlay) overlay.classList.remove('open');
    } else {
        drawer.style.right = "0px";
        if (overlay) overlay.classList.add('open');
    }
}

window.toggleAccountDrawer = toggleAccountDrawer;