/**
 * CHAT Overlay Logic - EVO + SHOP panels
 *
 * inherits: base/chat.js
 *
 * Provides: Panel switching, tab navigation
 * Usage: Include after chat.js in demos
 *
 * Formula: AGENT = EVO + CHAT + SHOP
 */

// Panel switching
function showPanel(panel) {
    // Hide all panels
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

    // Deactivate all tabs
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

    // Show target panel
    const targetPanel = document.getElementById('panel-' + panel);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }

    // Activate clicked tab
    const tabBtn = document.querySelector(`.tab-btn[data-panel="${panel}"]`);
    if (tabBtn) {
        tabBtn.classList.add('active');
    }
}

// Initialize overlay tabs
function initOverlay() {
    // Add click handlers to tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const panel = this.dataset.panel || this.textContent.toLowerCase().trim();
            showPanel(panel);
        });
    });

    // Default to CHAT panel
    showPanel('chat');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOverlay);
} else {
    initOverlay();
}

// EVO stats configuration per vertical
const EVO_CONFIGS = {
    MEDCHAT: {
        stats: [
            { value: '420', label: 'Axioms' },
            { value: '25', label: 'IDFs' },
            { value: '15K+', label: 'Encounters' }
        ],
        timeline: [
            { date: '2026-01-30', text: 'Learned: ICD-10 code mapping' },
            { date: '2026-01-29', text: 'Learned: Drug interaction patterns' },
            { date: '2026-01-28', text: 'Learned: Symptom triage protocols' },
            { date: '2026-01-27', text: 'Learned: HIPAA compliance rules' }
        ]
    },
    ONCOCHAT: {
        stats: [
            { value: '528', label: 'Axioms' },
            { value: '38', label: 'IDFs' },
            { value: '20K+', label: 'Encounters' }
        ],
        timeline: [
            { date: '2026-01-30', text: 'Learned: mCODE staging standards' },
            { date: '2026-01-29', text: 'Learned: NCCN pathway updates' },
            { date: '2026-01-28', text: 'Learned: Trial eligibility parsing' },
            { date: '2026-01-27', text: 'Learned: Biomarker interpretation' }
        ]
    },
    FINCHAT: {
        stats: [
            { value: '312', label: 'Axioms' },
            { value: '18', label: 'IDFs' },
            { value: '8K+', label: 'Encounters' }
        ],
        timeline: [
            { date: '2026-01-30', text: 'Learned: SEC regulation updates' },
            { date: '2026-01-29', text: 'Learned: Tax code patterns' },
            { date: '2026-01-28', text: 'Learned: Investment risk models' },
            { date: '2026-01-27', text: 'Learned: Portfolio optimization' }
        ]
    },
    LAWCHAT: {
        stats: [
            { value: '256', label: 'Axioms' },
            { value: '22', label: 'IDFs' },
            { value: '6K+', label: 'Encounters' }
        ],
        timeline: [
            { date: '2026-01-30', text: 'Learned: Case law citations' },
            { date: '2026-01-29', text: 'Learned: Jurisdiction patterns' },
            { date: '2026-01-28', text: 'Learned: Contract clause analysis' },
            { date: '2026-01-27', text: 'Learned: Statute interpretation' }
        ]
    },
    MAMMOCHAT: {
        stats: [
            { value: '528', label: 'Axioms' },
            { value: '38', label: 'IDFs' },
            { value: '20K+', label: 'Encounters' }
        ],
        timeline: [
            { date: '2026-01-30', text: 'Learned: DCIS ≠ Invasive distinction' },
            { date: '2026-01-29', text: 'Learned: mCODE embedding for histology' },
            { date: '2026-01-28', text: 'Learned: BI-RADS 5ed classification' },
            { date: '2026-01-27', text: 'Learned: NCCN 2024 treatment pathways' }
        ]
    }
};

// SHOP products configuration per vertical
const SHOP_CONFIGS = {
    MEDCHAT: [
        { name: 'Personal', desc: 'Patient education, symptom info', price: 'Free', tier: 'COMMUNITY' },
        { name: 'Clinical', desc: 'EHR integration, clinical decision support', price: '$25K/yr', tier: 'BUSINESS' },
        { name: 'VaaS Enterprise', desc: 'DETROS compliance, custom validators', price: '$100K/yr', tier: 'ENTERPRISE' }
    ],
    ONCOCHAT: [
        { name: 'Personal', desc: 'Cancer education, support resources', price: 'Free', tier: 'COMMUNITY' },
        { name: 'Clinical', desc: 'mCODE extraction, tumor boards', price: '$50K/yr', tier: 'BUSINESS' },
        { name: 'TrialsChat', desc: 'Clinical trials matching, eligibility', price: '$25K/yr', tier: 'BUSINESS' }
    ],
    FINCHAT: [
        { name: 'Personal', desc: 'Financial education, basics', price: 'Free', tier: 'COMMUNITY' },
        { name: 'Advisor', desc: 'Portfolio analysis, planning tools', price: '$10K/yr', tier: 'BUSINESS' },
        { name: 'Enterprise', desc: 'Compliance automation, reporting', price: '$75K/yr', tier: 'ENTERPRISE' }
    ],
    LAWCHAT: [
        { name: 'Personal', desc: 'Legal education, rights info', price: 'Free', tier: 'COMMUNITY' },
        { name: 'Attorney', desc: 'Research assistant, case analysis', price: '$15K/yr', tier: 'BUSINESS' },
        { name: 'Enterprise', desc: 'Contract analysis, due diligence', price: '$80K/yr', tier: 'ENTERPRISE' }
    ],
    MAMMOCHAT: [
        { name: 'Personal', desc: 'Patient education, support', price: 'Free', tier: 'COMMUNITY' },
        { name: 'Clinical', desc: 'Epic integration, mCODE extraction', price: '$50K/yr', tier: 'BUSINESS' },
        { name: 'TrialsChat', desc: 'Trial matching, eligibility', price: '$25K/yr', tier: 'BUSINESS' },
        { name: 'VaaS Enterprise', desc: 'DETROS compliance, custom domains', price: '$100K/yr', tier: 'ENTERPRISE' }
    ]
};

// Render EVO panel content
function renderEvoPanel(vertical) {
    const config = EVO_CONFIGS[vertical];
    if (!config) return '';

    const statsHtml = config.stats.map(s => `
        <div class="evo-stat">
            <div class="value">${s.value}</div>
            <div class="label">${s.label}</div>
        </div>
    `).join('');

    const timelineHtml = config.timeline.map(t => `
        <div class="evo-item">
            <span class="time">${t.date}</span>
            <span class="learned">→ ${t.text}</span>
        </div>
    `).join('');

    return `
        <div class="evo-content">
            <div class="evo-header">Learning Ledger</div>
            <div class="evo-stats">${statsHtml}</div>
            <div class="evo-list">${timelineHtml}</div>
        </div>
    `;
}

// Render SHOP panel content
function renderShopPanel(vertical, serviceName) {
    const products = SHOP_CONFIGS[vertical];
    if (!products) return '';

    const cardsHtml = products.map((p, i) => `
        <div class="shop-card">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price">${p.price}</div>
            <div class="tier">${p.tier} tier</div>
            <button ${i === 0 ? '' : 'disabled'}>${i === 0 ? 'Active' : 'Contact Sales'}</button>
        </div>
    `).join('');

    return `
        <div class="shop-content">
            <div class="shop-header">${serviceName} Services</div>
            <div class="shop-grid">${cardsHtml}</div>
        </div>
    `;
}
