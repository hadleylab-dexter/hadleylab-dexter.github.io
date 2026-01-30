# INVENTION DISCLOSURE FORM

**IDF-019**

---

## ADMINISTRATIVE

**Title:** Self-Evidencing Paper as Reproducible Governance Template

**Inventor(s):** Dexter Hadley

**Disclosure Date:** 2026-01-14

**Freeze Reference:** Post stack-freeze-2026-01-12 (v0.2 scope)

**Status:** Internal disclosure — not for publication

**Confidentiality:** PRIVILEGED AND CONFIDENTIAL — Prepared for patent counsel

---

## 1. PROBLEM STATEMENT

Research papers describe experiments but are not themselves reproducible artifacts.
Current approaches:

- Papers reference methods but methods are not embedded in the paper
- Reproducibility requires external resources (code, data, environments)
- No structural connection between paper claims and verification evidence
- Each paper is a one-off artifact, not a reusable template

**The core problem:** No method exists to produce research papers that are themselves
reproducible templates—where the paper structure, governance rules, and evidence
pipeline can be instantiated by others to produce their own self-evidencing papers.

---

## 2. CORE INVENTIVE INSIGHT

A governed PAPER is not just a report—it is a **reproducible template**.

The structure (Triad, inheritance, introspection, ledger-first evidence, insight-law
separation) can be instantiated by anyone:

1. **Fork the stack** — Copy the governance structure
2. **Define your own CANON** — Establish your validity rules
3. **Run your own freeze** — Fix your evidence window
4. **Produce your own self-evidencing paper** — Claims trace to your ledger

### 2.1 Template Components

| Component | Template Function | Instantiation |
|-----------|------------------|---------------|
| CANON.md | Validity rules | Inheritor defines scope-specific axioms |
| VOCAB.md | Term definitions | Inheritor defines domain vocabulary |
| README.md | Scope description | Inheritor describes their system |
| Ledger | Evidence source | Inheritor uses their commit history |
| Freeze | Evidence boundary | Inheritor declares their fixation |

### 2.2 Reproducibility Pipeline

```
Template PAPER (source)
    ↓ Fork
Instantiated PAPER (new system)
    ↓ Customize CANON
Governed scope (new rules)
    ↓ Execute work
Ledger evidence (new commits)
    ↓ Declare freeze
Evidence window (new boundary)
    ↓ Reconstruct
Self-evidencing paper (new output)
```

### 2.3 Template Inheritance

The template inherits from the CANONIC stack but permits:

- **Additive axioms** — New rules for new domains
- **Domain vocabulary** — New terms for new fields
- **Scope extension** — New governed scopes

The template prohibits:

- **Axiom override** — Cannot weaken inherited constraints
- **Evidence fabrication** — Cannot claim without ledger support
- **AI self-promotion** — Cannot let AI modify governance

---

## 3. TECHNICAL APPROACH

### 3.1 Template Distribution

The template is distributed as:

1. **Public repositories** — Governance artifacts under open license
2. **Frozen reference** — Tagged version for stability
3. **Documentation** — How to instantiate

### 3.2 Instantiation Process

1. Clone the stack repositories
2. Create new scope inheriting from template
3. Define domain-specific CANON extensions
4. Execute governed work
5. Record evidence to ledger
6. Declare freeze when stable
7. Reconstruct PAPER from frozen evidence

### 3.3 Verification Portability

Because claims trace to ledger evidence:

1. Anyone can clone instantiated repositories
2. Anyone can verify claims against evidence
3. Verification is portable across instances
4. No trust in author required

---

## 4. ADVANTAGES

### 4.1 Reproducible Research Infrastructure

Research papers become reproducible by construction, not by effort.

### 4.2 Governance Portability

Governance rules transfer to new domains without reinvention.

### 4.3 Evidence Standardization

Evidence format is consistent across instances, enabling cross-paper verification.

### 4.4 Learning Transfer

Governance insights from one instance inform others through the template.

### 4.5 Ecosystem Development

Multiple self-evidencing papers form a verification ecosystem.

---

## 5. RELATIONSHIP TO IDF-001

IDF-001 establishes constitutional governance. IDF-019 adds:

- **Template instantiation** — How to create new governed systems from existing ones
- **Reproducibility pipeline** — How evidence becomes portable claims
- **Ecosystem concept** — Multiple instances forming verification network

IDF-019 does not modify IDF-001; it enables IDF-001's application across domains.

---

## 6. EVIDENCE SUMMARY

### 6.1 Template Existence

The CANONIC stack at `stack-freeze-2026-01-12` constitutes the first template:

- 9 public repositories
- 12 triad-compliant scopes
- Complete governance structure

### 6.2 Reproducibility Evidence

The paper `paper/manuscript.md` demonstrates:

- Claims trace to ledger evidence
- Evidence is publicly verifiable
- Structure is documented and replicable

---

## 7. EXPLICIT EXCLUSIONS

1. **Specific domain applications** — Which fields use the template is not claimed
2. **Specific repository hosting** — Where templates live is not claimed
3. **Specific license terms** — How templates are licensed is not claimed
4. **Training or education methods** — How to teach template use is not claimed

---

## 8. PRIOR ART DISTINCTION

### 8.1 Paper Templates (LaTeX, Journal Templates)

Academic templates provide formatting structure.

| Aspect | Journal Templates | IDF-019 |
|--------|------------------|---------|
| Content | Formatting | Governance + evidence |
| Reproducibility | None | Built-in |
| Verification | External | Self-contained |

**Distinction:** IDF-019 templates include governance and evidence, not just formatting.

### 8.2 Reproducibility Frameworks (Docker, Binder)

Reproducibility tools package code and environments.

| Aspect | Docker/Binder | IDF-019 |
|--------|---------------|---------|
| Focus | Computational reproduction | Governance reproduction |
| Output | Same computation results | Same evidence structure |
| Claims | Not addressed | Traceable to ledger |

**Distinction:** IDF-019 reproduces governance, not computation.

### 8.3 Knowledge Base Templates (Wikis, Notion)

Knowledge templates provide document structure.

| Aspect | Wiki Templates | IDF-019 |
|--------|---------------|---------|
| Governance | None | Constitutional |
| Evidence | None | Ledger-linked |
| Verification | Trust-based | Trustless |

**Distinction:** IDF-019 templates are governed and self-evidencing.

---

## 9. INVENTOR DECLARATION

I, **Dexter Hadley**, declare that:

1. I am the sole human inventor of this method
2. The discovery is documented in ep160 and this IDF
3. AI systems contributed execution under governance but are not inventors
4. This disclosure is post-freeze IP (v0.2 scope)

---

**END OF DISCLOSURE**

---
