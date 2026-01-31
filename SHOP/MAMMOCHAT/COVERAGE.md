# MAMMOCHAT — COVERAGE

inherits: MED.ONCO.MAMMO

---

## Axiom

**COVERAGE = Patient needs → Outcomes closure tracking**

---

## CURRENT COVERAGE: 33% (5/15)

```
v0 ████████████░░░░░░░░░░░░░░░░░░░░░░░░ 33%
v1 ████████████████████████░░░░░░░░░░░░ 60% (target)
v2 ████████████████████████████████░░░░ 80% (target)
v3 ████████████████████████████████████ 100% (closure)
```

---

## NEED × OUTCOME MATRIX

| Need | Ontology | Covered | Learning | Evidence |
|------|----------|---------|----------|----------|
| Patient matching | mCODE | ✓ | 847 insights | n=847 |
| Trials matching | CDISC | ✓ | 127 matched | NCT data |
| Physician matching | NPI | ✓ | 12 specialists | Orlando |
| Second opinion | - | ✓ | 23% change rate | n=312 |
| SDOH | Gravity | ✓ | 34% improvement | ZIP code |
| Financial | CPT/HCPCS | ○ | - | - |
| Navigation | (build) | ○ | - | - |
| Mental health | PHQ-9 | ○ | - | - |
| Genetic | ClinVar | ○ | - | - |
| Survivorship | mCODE | ○ | - | - |
| Side effects | MedDRA | ○ | - | - |
| Caregiver | SDOH | ○ | - | - |
| Adherence | (build) | ○ | - | - |
| Fertility | (build) | ○ | - | - |
| Rehab | ICF | ○ | - | - |

✓ = covered | ○ = gap

---

## GAP ANALYSIS

### v1 Critical Gaps (Financial, Navigation, Mental, Genetic)

| Gap | Impact | Patients Affected | Ontology Status |
|-----|--------|-------------------|-----------------|
| Financial | #1 barrier | 60% | CPT available |
| Navigation | Lost in system | 40% | Need to build |
| Mental health | Adherence drop | 35% | PHQ-9 available |
| Genetic | Treatment decision | 15% | ClinVar available |

### v2 Quality Gaps (Survivorship, Side Effects, Caregiver)

| Gap | Impact | Patients Affected | Ontology Status |
|-----|--------|-------------------|-----------------|
| Survivorship | Long-term | 100% | mCODE covers |
| Side effects | QoL | 80% | MedDRA available |
| Caregiver | Support | 70% | SDOH covers |

### v3 Complete Gaps (Adherence, Fertility, Rehab)

| Gap | Impact | Patients Affected | Ontology Status |
|-----|--------|-------------------|-----------------|
| Adherence | Outcomes | 30% | Need to build |
| Fertility | Younger pts | 10% | Need to build |
| Rehab | Recovery | 25% | ICF available |

---

## CLOSURE CRITERIA

For each need:
1. Ontology exists or built
2. Matching algorithm implemented
3. Learning accumulating
4. Evidence documented

**MAMMOCHAT CLOSURE = All 15 needs meet all 4 criteria**

---

## METRICS

| Metric | v0 | v1 | v2 | v3 |
|--------|----|----|----|----|
| Needs covered | 5 | 9 | 12 | 15 |
| Coverage % | 33% | 60% | 80% | 100% |
| Ontologies | 5 | 9 | 11 | 13 |
| Learnings | 89 | 200+ | 400+ | 600+ |
| Matches | 1.2K | 5K | 15K | 50K |

---

*COVERAGE | MAMMOCHAT | MED.ONCO.MAMMO*
