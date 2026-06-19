// js/concierge-router.js
// The architectural decision-tree engine that maps collector profiles to asset records.

document.addEventListener("DOMContentLoaded", () => {
    const vault = window.WINE_VAULT; // Fetch our isolated data shield cleanly
    
    // 1. State Ledger Object: Keeps track of user selections dynamically
    const userSelections = {
        category: null,
        budget: null
    };

    // DOM Elements Cache
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const resultStep = document.getElementById("concierge-result");
    const restartBtn = document.getElementById("restart-quiz");

    // 2. Main Routing Logic
    const quizButtons = document.querySelectorAll(".quiz-btn");
    
    quizButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const clickedButton = event.currentTarget;
            
            // Extract decision metadata attributes embedded in the HTML button
            const key = clickedButton.getAttribute("data-key");     // 'category' or 'budget'
            const value = clickedButton.getAttribute("data-value"); // e.g., 'Champagne', 'elite'
            
            // Save choice to our State Ledger
            userSelections[key] = value;

            // Route user smoothly to the next sequential phase
            if (key === "category") {
                transitionStep(step1, step2);
            } else if (key === "budget") {
                transitionStep(step2, resultStep);
                calculateBespokeMatch();
            }
        });
    });

    // 3. UI Layer Transition Function (Controls visibility layers cleanly)
    function transitionStep(currentStep, nextStep) {
        currentStep.classList.add("hidden");
        nextStep.classList.remove("hidden");
    }

    // 4. The Algorithmic Matching Matrix
    function calculateBespokeMatch() {
        if (!vault) {
            console.error("Database unavailable.");
            return;
        }

        // Filter the asset matrix by selected luxury category first
        let matches = vault.filter(wine => wine.category === userSelections.category);

        // Filter down further by liquidity/budget thresholds
        if (userSelections.budget === "elite") {
            // Premium allocations below $2,000 USD
            matches = matches.filter(wine => wine.currentPrice < 2000);
        } else if (userSelections.budget === "sovereign") {
            // Sovereign institutional assets equal to or above $2,000 USD
            matches = matches.filter(wine => wine.currentPrice >= 2000);
        }

        // 5. Render Results Object dynamically onto the layout layer
        if (matches.length > 0) {
            const perfectAsset = matches[0]; // Extract highest rank match
            
            document.getElementById("rec-title").textContent = perfectAsset.name;
            document.getElementById("rec-cat").textContent = perfectAsset.category;
            document.getElementById("rec-price").textContent = `$${perfectAsset.currentPrice.toLocaleString()} USD`;
            document.getElementById("rec-rarity").textContent = `Rarity Rating: ${perfectAsset.rarityScore}`;
        } else {
            // Elegant fallback interface state if no inventory matches exact criteria
            document.getElementById("rec-title").textContent = "Custom Allocation Sourced via Request Only";
            document.getElementById("rec-cat").textContent = "Private Reserve Reserve";
            document.getElementById("rec-price").textContent = "Market Valued Post-Consultation";
            document.getElementById("rec-rarity").textContent = "Rarity Rating: Ultra-Scarce Vault Allocation Only";
        }
    }

    // 6. Router Reset Sequence (Restores state variables safely back to pristine values)
    restartBtn.addEventListener("click", () => {
        userSelections.category = null;
        userSelections.budget = null;
        
        resultStep.classList.add("hidden");
        step2.classList.add("hidden");
        step1.classList.remove("hidden");
    });
});