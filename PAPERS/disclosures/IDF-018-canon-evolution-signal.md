# INVENTION DISCLOSURE FORM

**IDF-018**

---

## ADMINISTRATIVE

**Title:** CANON Evolution as Measurable Governance Signal

**Inventor(s):** Dexter Hadley

**Disclosure Date:** 2026-01-14

**Freeze Reference:** Post stack-freeze-2026-01-12 (v0.2 scope)

**Status:** Internal disclosure — not for publication

**Confidentiality:** PRIVILEGED AND CONFIDENTIAL — Prepared for patent counsel

---

## 1. PROBLEM STATEMENT

Governance systems evolve over time, but there is no established method for measuring
governance maturity or convergence. Current approaches rely on:

- Subjective assessment ("the governance feels mature")
- Expert opinion without quantifiable basis
- Ad-hoc metrics that vary across systems

**The core problem:** No method exists to quantify governance evolution as a time-series
signal that enables objective comparison of governance maturity across systems or over
time within a single system.

---

## 2. CORE INVENTIVE INSIGHT

CANON evolution is measurable. The insight is that constitutional governance artifacts
(CANON files) produce quantifiable signals over commit history:

1. **Axiom count** — Number of rules in CANON at each commit
2. **Axiom churn** — Rate of axiom addition, modification, or removal
3. **Vocabulary stability** — Term definition changes over time
4. **Scope expansion** — Rate at which new governed scopes are created

These signals are extractable from version control history without human interpretation.
Governance convergence becomes data, not opinion.

### 2.1 Signal Extraction

Given a governed repository with CANON artifacts:

```
For each commit C in history:
  axiom_count[C] = count(axioms in CANON at C)
  vocab_size[C] = count(terms in VOCAB at C)
  scope_count[C] = count(governed scopes at C)
```

The resulting time series reveals governance patterns:

| Pattern | Signal Shape | Interpretation |
|---------|--------------|----------------|
| Compression | Decreasing axiom count | Governance maturing |
| Expansion | Increasing scope count | System growing |
| Stabilization | Flat axiom churn | Fixed-point reached |
| Churn | High axiom modification rate | Governance unstable |

### 2.2 Convergence Detection

A governance system has **converged** when:

1. Axiom count stabilizes (no additions for N commits)
2. Vocabulary churn approaches zero
3. Scope boundaries stabilize

Convergence is mechanically detectable from the signal, not declared by opinion.

---

## 3. TECHNICAL APPROACH

### 3.1 Signal Sources

| Signal | Source | Extraction Method |
|--------|--------|-------------------|
| Axiom count | CANON.md | Parse markdown headers |
| Vocabulary size | VOCAB.md | Count defined terms |
| Scope count | Directory structure | Count triad-complete directories |
| Churn rate | Git diff | Compare CANON across commits |

### 3.2 Normalization

For cross-system comparison, signals are normalized:

- **Per-scope axiom density** = axiom_count / scope_count
- **Vocabulary coverage** = defined_terms / terms_used_in_CANON
- **Compression ratio** = initial_axiom_count / final_axiom_count

### 3.3 Freeze Boundary Detection

Freeze declarations create discontinuities in the signal. The method detects:

1. Pre-freeze trajectory (evolution phase)
2. Freeze point (fixation boundary)
3. Post-freeze trajectory (reconstruction phase)

---

## 4. ADVANTAGES

### 4.1 Objective Governance Assessment

Eliminates subjective maturity claims. "The governance is mature" becomes
"axiom count compressed 3:1 over 50 commits with zero churn in final 20."

### 4.2 Cross-System Comparison

Different governed systems can be compared on the same metrics:

| System | Compression Ratio | Time to Convergence | Final Axiom Count |
|--------|-------------------|---------------------|-------------------|
| System A | 3:1 | 50 commits | 3 |
| System B | 5:1 | 120 commits | 7 |

### 4.3 Predictive Capability

Signal trends predict governance outcomes:

- Accelerating compression → approaching convergence
- Increasing churn → governance instability
- Flat trajectory → stable or stagnant

### 4.4 Automated Monitoring

Signals can trigger alerts:

- "Axiom count increased after declared freeze"
- "Vocabulary churn exceeds threshold"
- "New scope created without triad completion"

---

## 5. RELATIONSHIP TO IDF-001

IDF-001 establishes constitutional governance. IDF-018 adds:

- **Signal extraction** from governance artifacts
- **Convergence detection** as mechanical process
- **Cross-system comparison** capability

IDF-018 does not modify IDF-001's governance primitives; it measures them.

---

## 6. EVIDENCE SUMMARY

### 6.1 Observed Signal

In the CANONIC stack (stack-freeze-2026-01-12):

| Metric | Initial | Final | Ratio |
|--------|---------|-------|-------|
| Root axiom count | Many | 3 | High compression |
| Governed scopes | 1 | 12 | 12x expansion |
| Time to freeze | — | 7 days | — |

The compression from many axioms to three is documented in ep019, ep053, ep060.

### 6.2 Convergence Evidence

The system reached a fixed point where:
- No axiom additions for final commits before freeze
- Vocabulary stabilized at scope level
- Human declared freeze (fixation boundary)

---

## 7. EXPLICIT EXCLUSIONS

1. **Specific parsing implementations** — Any markdown parser suffices
2. **Specific version control systems** — Any commit history suffices
3. **Threshold values** — System-specific tuning not claimed
4. **Visualization methods** — Signal presentation not claimed

---

## 8. PRIOR ART DISTINCTION

### 8.1 Code Quality Metrics (SonarQube, etc.)

Code quality tools measure code properties (complexity, coverage, duplication).

| Aspect | Code Quality Metrics | IDF-018 |
|--------|---------------------|---------|
| Target | Source code | Governance artifacts |
| Signals | Cyclomatic complexity, etc. | Axiom count, churn, etc. |
| Purpose | Code health | Governance maturity |

**Distinction:** IDF-018 measures governance evolution, not code quality.

### 8.2 Process Maturity Models (CMMI, etc.)

Maturity models assess organizational process capability.

| Aspect | CMMI | IDF-018 |
|--------|------|---------|
| Assessment | Human evaluation | Automated extraction |
| Evidence | Interviews, artifacts | Version control history |
| Output | Maturity level (1-5) | Continuous time series |

**Distinction:** IDF-018 produces quantitative signals, not categorical assessments.

### 8.3 Git Analytics Tools

Git analytics measure repository activity (commits, contributors, etc.).

| Aspect | Git Analytics | IDF-018 |
|--------|--------------|---------|
| Focus | Development activity | Governance evolution |
| Signals | Commit frequency, etc. | Axiom count, vocab stability |
| Interpretation | Team productivity | Governance convergence |

**Distinction:** IDF-018 extracts governance-specific signals, not general activity.

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
