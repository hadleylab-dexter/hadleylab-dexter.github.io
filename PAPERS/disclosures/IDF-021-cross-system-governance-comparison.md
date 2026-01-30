# INVENTION DISCLOSURE FORM

**IDF-021**

---

## ADMINISTRATIVE

**Title:** Cross-System Governance Comparison Through Normalized Signal Metrics

**Inventor(s):** Dexter Hadley

**Disclosure Date:** 2026-01-14

**Freeze Reference:** Post stack-freeze-2026-01-12 (v0.2 scope)

**Status:** Internal disclosure — not for publication

**Confidentiality:** PRIVILEGED AND CONFIDENTIAL — Prepared for patent counsel

---

## 1. PROBLEM STATEMENT

When multiple governance systems exist, there is no method to compare them objectively.
Current approaches:

- Subjective comparison ("System A seems better governed")
- Different metrics across systems (incomparable)
- No normalization for system size or complexity
- No standard benchmark for governance quality

**The core problem:** No method exists to compare governance maturity, efficiency, or
quality across independent governed systems using normalized metrics.

---

## 2. CORE INVENTIVE INSIGHT

Governance systems can be compared through **normalized signal metrics** that account
for system size and complexity.

### 2.1 Raw vs. Normalized Metrics

| Raw Metric | Problem | Normalized Metric |
|------------|---------|-------------------|
| Axiom count | Larger systems have more | Axioms per scope |
| Violation count | More episodes = more violations | Violation rate |
| Time to converge | Different start dates | Commits to convergence |
| Vocabulary size | Different domains | Terms per axiom |

### 2.2 Normalization Formulas

**Axiom density:**
```
axiom_density = axiom_count / scope_count
```

**Violation rate:**
```
violation_rate = violation_episodes / total_episodes
```

**Compression ratio:**
```
compression_ratio = initial_axiom_count / final_axiom_count
```

**Vocabulary efficiency:**
```
vocab_efficiency = axiom_count / vocab_size
```

**Convergence velocity:**
```
convergence_velocity = 1 / commits_to_convergence
```

### 2.3 Comparison Matrix

Systems can be compared on normalized dimensions:

| Metric | System A | System B | Winner |
|--------|----------|----------|--------|
| Axiom density | 2.5 | 4.0 | A (leaner) |
| Violation rate | 0.15 | 0.25 | A (cleaner) |
| Compression ratio | 3:1 | 2:1 | A (more compression) |
| Convergence velocity | 0.02 | 0.01 | A (faster) |

### 2.4 Composite Governance Score

A single score can be computed:

```
governance_score = w1 * (1/axiom_density) +
                   w2 * (1 - violation_rate) +
                   w3 * compression_ratio +
                   w4 * convergence_velocity
```

Where w1..w4 are configurable weights.

---

## 3. TECHNICAL APPROACH

### 3.1 Data Collection

For each system:
1. Extract governance signals (IDF-018)
2. Detect convergence point (IDF-020)
3. Compute raw metrics

### 3.2 Normalization

Apply normalization formulas to raw metrics.

### 3.3 Comparison

1. Align systems by comparable dimensions
2. Compute per-dimension rankings
3. Optionally compute composite scores
4. Generate comparison report

### 3.4 Benchmark Definition

A **governance benchmark** is a reference system against which others are compared:

- The CANONIC stack at `stack-freeze-2026-01-12` is the first benchmark
- Future systems compare against this benchmark
- Benchmarks can be versioned as governance practices evolve

---

## 4. ADVANTAGES

### 4.1 Objective System Selection

When choosing a governance framework, compare normalized metrics.

### 4.2 Progress Tracking

Compare current system against past versions:
- "v2 has 30% better violation rate than v1"

### 4.3 Best Practice Identification

High-scoring systems reveal governance best practices.

### 4.4 Ecosystem Health

Aggregate metrics reveal ecosystem-wide governance quality.

---

## 5. RELATIONSHIP TO OTHER IDFS

| IDF | Relationship |
|-----|--------------|
| IDF-018 | Signal extraction (raw metrics) |
| IDF-020 | Convergence detection (convergence velocity) |
| IDF-015 | Quality dimensions (compliance/coherence per system) |

IDF-021 consumes outputs from these IDFs for cross-system comparison.

---

## 6. EVIDENCE SUMMARY

### 6.1 Single-System Evidence

The CANONIC stack provides the first data point:

| Metric | Value |
|--------|-------|
| Axiom density | 3 / 12 = 0.25 |
| Violation rate | 33 / 129 = 0.26 |
| Compression ratio | Many:3 (high) |
| Convergence velocity | 1 / ~100 commits |

### 6.2 Comparison Readiness

The metrics are defined and extractable. Cross-system comparison awaits
additional governed systems to compare against.

---

## 7. EXPLICIT EXCLUSIONS

1. **Specific weight values** — Composite score weights are tuning parameters
2. **Specific benchmark systems** — Which systems are benchmarks is not claimed
3. **Ranking algorithms** — How to rank systems is implementation detail
4. **Visualization methods** — How to display comparisons is not claimed

---

## 8. PRIOR ART DISTINCTION

### 8.1 Software Project Metrics (LOC, Complexity)

Software metrics compare projects on code characteristics.

| Aspect | Software Metrics | IDF-021 |
|--------|-----------------|---------|
| Focus | Code | Governance |
| Metrics | LOC, cyclomatic | Axioms, violations |
| Normalization | Per-file, per-function | Per-scope, per-episode |

**Distinction:** IDF-021 compares governance, not code.

### 8.2 Maturity Model Comparisons (CMMI Levels)

Organizations compare CMMI levels.

| Aspect | CMMI | IDF-021 |
|--------|------|---------|
| Scale | 1-5 categorical | Continuous metrics |
| Assessment | Human evaluation | Automated extraction |
| Granularity | Organization-level | System-level |

**Distinction:** IDF-021 provides continuous, automated, system-level comparison.

### 8.3 Benchmark Suites (SPEC, TPC)

Performance benchmarks compare systems on standardized workloads.

| Aspect | SPEC/TPC | IDF-021 |
|--------|----------|---------|
| Domain | Performance | Governance |
| Workload | Standard tests | Governance evolution |
| Output | Scores | Normalized metrics |

**Distinction:** IDF-021 benchmarks governance quality, not performance.

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
