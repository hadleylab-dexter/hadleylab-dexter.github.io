/**
 * CHAT Base - Core chat functionality
 *
 * inherits: canonic-shop/CHAT/
 *
 * Provides: LEARNING integration, markdown, API calls, message display
 * Domain apps extend: CHAT.create({ systemPrompt, welcome, ... })
 *
 * Inheritance hierarchy:
 *   CHAT (base)
 *   ├── MEDCHAT (medical compliance/billing)
 *   │   └── ONCOCHAT (oncology)
 *   │       └── MAMMOCHAT (breast cancer)
 *   ├── FINCHAT (financial)
 *   └── LAWCHAT (legal)
 */

const CHAT = {
    // Endpoints
    LEARNING_URL: 'http://localhost:3334',
    API_URL: 'https://mammochat-api.dexter-hadley.workers.dev',

    // Create a new chat instance with config
    create(config) {
        const instance = Object.create(this);
        instance.messages = [];
        instance.learningOnline = false;
        instance.config = config;
        instance.els = {};
        return instance;
    },

    // Extend an existing chat type with additional config
    extend(baseConfig, overrides) {
        return { ...baseConfig, ...overrides };
    },

    // Initialize DOM and start
    init() {
        this.els = {
            messages: document.getElementById('messages'),
            input: document.getElementById('input'),
            sendBtn: document.getElementById('send'),
            learningStatus: document.getElementById('learning-status')
        };

        // Event listeners
        this.els.sendBtn.addEventListener('click', () => this.sendMessage());
        this.els.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Check LEARNING status
        this.checkLearning();
        setInterval(() => this.checkLearning(), 30000);

        // Welcome message
        if (this.config.welcome) {
            this.addMessage(this.config.welcome, 'assistant');
        }
    },

    // Check LEARNING engine status
    async checkLearning() {
        try {
            const res = await fetch(`${this.LEARNING_URL}/api/stats`);
            if (res.ok) {
                const data = await res.json();
                this.els.learningStatus.textContent = `LEARNING: ${data.total} axioms`;
                this.els.learningStatus.classList.remove('offline');
                this.learningOnline = true;
            }
        } catch (e) {
            this.els.learningStatus.textContent = 'LEARNING: offline';
            this.els.learningStatus.classList.add('offline');
            this.learningOnline = false;
        }
    },

    // Check compliance for a message
    async checkCompliance(text) {
        if (!this.learningOnline) return null;
        try {
            const res = await fetch(`${this.LEARNING_URL}/api/check?axiom=${encodeURIComponent(text)}`);
            if (res.ok) return await res.json();
        } catch (e) {
            console.log('Compliance check failed:', e);
        }
        return null;
    },

    // Simple markdown parser
    parseMarkdown(text) {
        return text
            .replace(/^### (.+)$/gm, '<h4>$1</h4>')
            .replace(/^## (.+)$/gm, '<h3>$1</h3>')
            .replace(/^# (.+)$/gm, '<h2>$1</h2>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/^- (.+)$/gm, '<li>$1</li>')
            .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>');
    },

    // Add message to display
    addMessage(content, role, compliance = null) {
        const div = document.createElement('div');
        div.className = `message ${role}`;

        const textDiv = document.createElement('div');
        if (role === 'assistant' && !content.includes('Thinking')) {
            textDiv.innerHTML = this.parseMarkdown(content);
        } else {
            textDiv.textContent = content;
        }
        div.appendChild(textDiv);

        // Add compliance references if present
        if (compliance && compliance.matches && compliance.matches.length > 0) {
            const refsDiv = document.createElement('div');
            refsDiv.className = 'compliance-refs';
            refsDiv.innerHTML = '<strong>References:</strong> ';
            compliance.matches.slice(0, 3).forEach(match => {
                const ref = document.createElement('span');
                ref.className = 'ref';
                ref.textContent = `${match.id} (${Math.round(match.compliance * 100)}%)`;
                ref.title = match.title;
                refsDiv.appendChild(ref);
            });
            div.appendChild(refsDiv);
        }

        this.els.messages.appendChild(div);
        this.els.messages.scrollTop = this.els.messages.scrollHeight;
        return div;
    },

    // Build system prompt with compliance context
    buildPrompt(compliance) {
        let prompt = this.config.systemPrompt;

        // Add CANONIC compliance header
        prompt = `CANONIC COMPLIANCE:
- Check LEARNING before making claims
- Reference existing IDFs when available
- Surface uncertainty explicitly
- Defer to human expertise

${prompt}`;

        // Add relevant curriculum if compliant
        if (compliance && compliance.state === 'COMPLIANT') {
            const refs = compliance.matches.map(m => `${m.id}: ${m.title}`).join('\n');
            prompt += `\n\nRELEVANT CURRICULUM (from LEARNING):\n${refs}\n\nReference these in your response where applicable.`;
        }

        return prompt;
    },

    // Send message
    async sendMessage() {
        const text = this.els.input.value.trim();
        if (!text) return;

        this.els.input.value = '';
        this.els.sendBtn.disabled = true;

        this.addMessage(text, 'user');
        this.messages.push({ role: 'user', content: text });

        // Check compliance first
        const compliance = await this.checkCompliance(text);
        const systemPrompt = this.buildPrompt(compliance);

        const typingEl = this.addMessage('Thinking...', 'assistant typing');

        try {
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: this.messages.slice(-10),
                    system: systemPrompt
                })
            });

            if (!response.ok) throw new Error('API error');

            const data = await response.json();
            typingEl.remove();

            const reply = data.message || data.content?.[0]?.text || 'Sorry, I could not process that.';
            this.addMessage(reply, 'assistant', compliance);
            this.messages.push({ role: 'assistant', content: reply });

        } catch (error) {
            typingEl.remove();
            this.addMessage('Connection error. Please try again.', 'error');
        }

        this.els.sendBtn.disabled = false;
        this.els.input.focus();
    }
};

// Domain configurations - each vertical extends base
const CHAT_CONFIGS = {
    // MEDCHAT - Medical compliance/billing base
    MEDCHAT: {
        name: 'MedChat',
        subtitle: 'Medical Information Assistant',
        logo: '🩺',
        accent: '#3b82f6',
        placeholder: 'Ask a medical question...',
        disclaimer: 'For informational purposes only. Not a substitute for professional medical advice.',
        welcome: "Hello! I'm MedChat, your medical information assistant with LEARNING compliance. How can I help?",
        systemPrompt: `You are MedChat, a medical information assistant.

Role: Explain medical conditions, symptoms, treatments. Help prepare questions for healthcare providers.
Guidelines: Recommend consulting professionals. Never diagnose. Cite Mayo Clinic, NIH, CDC.`
    },

    // ONCOCHAT - Oncology (inherits MEDCHAT)
    ONCOCHAT: {
        name: 'OncoChat',
        subtitle: 'Oncology Information Assistant',
        logo: '🔬',
        accent: '#8b5cf6',
        placeholder: 'Ask about cancer treatment or trials...',
        disclaimer: 'For informational purposes only. Always consult your oncology team.',
        welcome: "Hello! I'm OncoChat, specializing in oncology with LEARNING compliance. I can help with cancer treatments and clinical trials.",
        systemPrompt: `You are OncoChat, an oncology-focused information assistant.

Role: Explain cancer types, staging, treatments. Help understand clinical trials and mCODE concepts.
Guidelines: Recommend consulting oncology team. Be sensitive. Reference NCI, ASCO, ClinicalTrials.gov.`
    },

    // MAMMOCHAT - Breast cancer (inherits ONCOCHAT)
    MAMMOCHAT: {
        name: 'MammoChat',
        subtitle: 'Breast Health Information Assistant',
        logo: '🎀',
        accent: '#ec4899',
        placeholder: 'Ask about breast health or mammography...',
        disclaimer: 'For informational purposes only. Always consult your healthcare provider.',
        welcome: "Hello! I'm MammoChat, your breast health assistant with LEARNING compliance. Ask me about mammography, breast cancer, or related topics.",
        systemPrompt: `You are MammoChat, a breast health information assistant specializing in mammography and breast cancer.

Role: Explain mammography screening (2D/3D), BI-RADS categories, breast cancer types, staging, and treatment options.
Guidelines: Recommend consulting healthcare providers. Be compassionate. Reference ACR, NCI, breastcancer.org.`
    },

    // FINCHAT - Financial (inherits base)
    FINCHAT: {
        name: 'FinChat',
        subtitle: 'Financial Information Assistant',
        logo: '💰',
        accent: '#10b981',
        placeholder: 'Ask a financial question...',
        disclaimer: 'For informational purposes only. Not financial advice. Consult a licensed advisor.',
        welcome: "Hello! I'm FinChat, your financial information assistant with LEARNING compliance. What would you like to know?",
        systemPrompt: `You are FinChat, a financial information assistant.

Role: Explain financial concepts, investment strategies, personal finance topics.
Guidelines: Never provide specific investment advice. Recommend licensed advisors. Reference SEC.gov, Investopedia.`
    },

    // LAWCHAT - Legal (inherits base)
    LAWCHAT: {
        name: 'LawChat',
        subtitle: 'Legal Information Assistant',
        logo: '⚖️',
        accent: '#dc2626',
        placeholder: 'Ask a legal question...',
        disclaimer: 'For informational purposes only. Not legal advice. Consult a licensed attorney.',
        welcome: "Hello! I'm LawChat, a legal information assistant with LEARNING compliance. What legal topic can I help explain?",
        systemPrompt: `You are LawChat, a legal information assistant.

Role: Explain legal concepts, terminology, processes. Help understand rights and procedures.
Guidelines: NEVER provide specific legal advice. Recommend licensed attorneys. Note jurisdiction differences. Reference Legal Information Institute.`
    }
};
