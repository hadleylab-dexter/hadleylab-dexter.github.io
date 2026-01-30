# INVENTION DISCLOSURE FORM

**IDF-020**

---

## ADMINISTRATIVE

**Title:** Governance Convergence Metrics for Constitutional System Maturity

**Inventor(s):** Dexter Hadley

**Disclosure Date:** 2026-01-14

**Freeze Reference:** Post stack-freeze-2026-01-12 (v0.2 scope)

**Status:** Internal disclosure — not for publication

**Confidentiality:** PRIVILEGED AND CONFIDENTIAL — Prepared for patent counsel

---

## 1. PROBLEM STATEMENT

Governance systems evolve toward stability, but there is no method to detect or
measure convergence. Current approaches:

- Rely on human judgment ("the system feels stable")
- No quantitative definition of convergence
- No automatic detection of fixed-point arrival
- No comparison of convergence rates across systems

**The core problem:** No method exists to quantitatively define, detect, and measure
governance convergence—the point at which constitutional constraints stabilize.

---

## 2. CORE INVENTIVE INSIGHT

Convergence is mechanically detectable through signal analysis. A governed system
has **converged** when multiple metrics simultaneously stabilize:

### 2.1 Convergence Signals

| Signal | Convergence Criterion | Measurement |
|--------|----------------------|-------------|
| Axiom count | No change for N commits | `Δ(axiom_count) = 0` for N |
| Axiom content | No modifications for N commits | `Σ(axiom_diffs) = 0` for N |
| Vocabulary size | Stable within threshold | `|Δ(vocab_size)| < ε` for N |
| Scope count | No new scopes for N commits | `Δ(scope_count) = 0` for N |
| Violation rate | Below threshold | `violation_rate < τ` for N |

### 2.2 Convergence Definition

A governance system has converged at commit C when:

```
converged(C) =
    axiom_stable(C, N) ∧
    vocab_stable(C, N, ε) ∧
    scope_stable(C, N) ∧
    violation_low(C, N, τ)
```

Where:
- `N` = stability window (commits)
- `ε` = vocabulary stability threshold
- `τ` = violation rate threshold

### 2.3 Convergence Types

| Type | Definition | Implication |
|------|------------|-------------|
| **Strong convergence** | All signals stable | System mature |
| **Weak convergence** | Axioms stable, vocabulary drifting | Governance stable, terminology evolving |
| **False convergence** | Temporarily stable | May diverge |
| **Forced convergence** | Freeze declared before natural | Human intervention |

### 2.4 Convergence Rate

The **convergence rate** measures how quickly a system approaches stability:

```
convergence_rate = 1 / time_to_convergence
```

Where `time_to_convergence` = commits from first CANON to convergence detection.

Faster convergence suggests:
- Clear initial requirements
- Effective governance primitives
- Skilled operators

---

## 3. TECHNICAL APPROACH

### 3.1 Signal Extraction

For each commit in history:
1. Parse CANON.md for axiom count and content
2. Parse VOCAB.md for term count
3. Count governed scopes (triad-complete directories)
4. Count violation-labeled episodes

### 3.2 Convergence Detection Algorithm

```
for each commit C from N to HEAD:
    window = commits[C-N : C]

    axiom_stable = (max(axiom_count[window]) == min(axiom_count[window]))
    vocab_stable = (std(vocab_size[window]) < ε)
    scope_stable = (max(scope_count[window]) == min(scope_count[window]))
    violation_low = (mean(violation_rate[window]) < τ)

    if axiom_stable and vocab_stable and scope_stable and violation_low:
        report_convergence(C)
        break
```

### 3.3 Convergence Visualization

Plot signals over commit history with:
- Convergence detection point marked
- Stability window highlighted
- Threshold lines shown

---

## 4. ADVANTAGES

### 4.1 Objective Maturity Assessment

Eliminates subjective maturity claims. "The system has converged" becomes
"convergence detected at commit X with stability window N."

### 4.2 Freeze Timing Guidance

Convergence detection informs when to declare freeze:
- Converged → safe to freeze
- Not converged → premature freeze

### 4.3 System Comparison

Convergence rate enables comparison:
- System A: converged in 50 commits
- System B: converged in 120 commits
- Conclusion: A's governance more efficient

### 4.4 Regression Detection

Post-convergence divergence signals regression:
- "System diverged at commit Y after convergence at X"

---

## 5. RELATIONSHIP TO OTHER IDFS

| IDF | Relationship |
|-----|--------------|
| IDF-005 | Drift detection is pre-convergence; this is convergence detection |
| IDF-015 | Quality dimensions; convergence is stability of quality |
| IDF-018 | Signal extraction; this adds convergence detection logic |

---

## 6. EVIDENCE SUMMARY

### 6.1 Observed Convergence

In CANONIC stack at `stack-freeze-2026-01-12`:

| Signal | Initial | Final | Convergence Evidence |
|--------|---------|-------|---------------------|
| Root axioms | Many | 3 | Stable for final commits |
| Vocabulary | Growing | Stable | Per-scope stabilization |
| Scopes | 1 | 12 | No new scopes in final window |
| Violations | High | Decreasing | ep019, ep053, ep060 |

### 6.2 Freeze Correlation

Human freeze declaration occurred after natural convergence signals, validating
the detection method.

---

## 7. EXPLICIT EXCLUSIONS

1. **Specific threshold values** — N, ε, τ are tuning parameters
2. **Specific parsing implementations** — How to extract signals is not claimed
3. **Specific visualization methods** — How to display is not claimed
4. **Prediction of convergence** — Only detection is claimed

---

## 8. PRIOR ART DISTINCTION

### 8.1 Statistical Convergence Tests (Unit Root, Stationarity)

Time series analysis tests for stationarity.

| Aspect | Statistical Tests | IDF-020 |
|--------|------------------|---------|
| Domain | Time series | Governance artifacts |
| Signals | Numerical data | Axioms, vocabulary, scopes |
| Output | p-value | Convergence point + type |

**Distinction:** IDF-020 applies convergence to governance, not generic data.

### 8.2 Software Stabilization Metrics

Software projects track bug rates approaching release.

| Aspect | Bug Rate Metrics | IDF-020 |
|--------|-----------------|---------|
| Focus | Code defects | Governance constraints |
| Signals | Bug counts | Axiom count, vocab size |
| Interpretation | Release readiness | Governance maturity |

**Distinction:** IDF-020 measures constitutional convergence, not code quality.

### 8.3 Process Capability (Cp, Cpk)

Manufacturing uses capability indices for process stability.

| Aspect | Cp/Cpk | IDF-020 |
|--------|--------|---------|
| Domain | Manufacturing | Governance |
| Measurement | Process variation | Constraint evolution |
| Thresholds | Spec limits | Stability windows |

**Distinction:** IDF-020 applies capability concepts to governance systems.

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
