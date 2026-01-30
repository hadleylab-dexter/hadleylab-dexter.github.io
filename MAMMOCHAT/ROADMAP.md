# MAMMOCHAT — ROADMAP

inherits: MED.ONCO.MAMMO

---

## Axiom

**MAMMOCHAT = CHAT + LEARNING + MATCHING on mCODE**

---

## COVERAGE TO CLOSURE

| Need | Ontology | v0 | v1 | v2 | v3 |
|------|----------|----|----|----|----|
| Patient matching | mCODE | x | x | x | x |
| Trials matching | CDISC | x | x | x | x |
| Physician matching | NPI | x | x | x | x |
| Second opinion | - | x | x | x | x |
| SDOH | Gravity | x | x | x | x |
| Financial | CPT/HCPCS | | x | x | x |
| Navigation | (build) | | x | x | x |
| Mental health | PHQ-9/GAD-7 | | x | x | x |
| Genetic | ClinVar/BRCA | | x | x | x |
| Survivorship | mCODE | | | x | x |
| Side effects | MedDRA | | | x | x |
| Caregiver | SDOH | | | x | x |
| Adherence | (build) | | | | x |
| Fertility | (build) | | | | x |
| Rehab | ICF | | | | x |

---

## VERSION ROADMAP

### v0 — Foundation (current)
- [x] CHAT interface
- [x] LEARNING view (MATCHING insights)
- [x] MATCH view (patient/trials/physician/second-op)
- [x] mCODE embedding (DCIS vs Invasive)
- [x] SDOH integration (Gravity)
- [ ] BioPortal API integration

### v1 — Critical Path
- [ ] Financial matching (CPT → cost prediction)
- [ ] Navigation matching (care coordination)
- [ ] Mental health screening (PHQ-9, GAD-7)
- [ ] Genetic matching (BRCA → counseling)

### v2 — Quality
- [ ] Survivorship matching (recurrence monitoring)
- [ ] Side effects matching (MedDRA → management)
- [ ] Caregiver matching (support network)

### v3 — Complete Closure
- [ ] Adherence prediction
- [ ] Fertility preservation matching
- [ ] Rehab matching (ICF → PT/lymphedema)

---

## ONTOLOGY STACK

```
MED.ONCO.MAMMO
├── mCODE (cancer precision)
├── SNOMED (clinical terms)
├── BI-RADS (imaging)
├── NCCN (guidelines)
├── CDISC (trials)
├── Gravity (SDOH)
├── CPT/HCPCS (financial)
├── ClinVar (genetic)
├── MedDRA (side effects)
├── ICF (function/rehab)
├── PHQ-9/GAD-7 (mental health)
└── BioPortal (ontology resolution)
```

---

## CROSS-DOMAIN MATCHING

| From | To | Via |
|------|----|-----|
| MED.ONCO.MAMMO | TRIALS | mCODE ↔ CDISC |
| MED.ONCO.MAMMO | FIN | mCODE ↔ CPT |
| MED.ONCO.MAMMO | GENETICS | mCODE ↔ ClinVar |
| MED.ONCO.MAMMO | SDOH | mCODE ↔ Gravity |
| MED.ONCO.MAMMO | MENTAL | mCODE ↔ PHQ-9 |

---

## EVIDENCE

```
Grant: $2M Casey DeSantis Cancer Innovation (FCIF 354)
Trial: NCT06604078 (Active)
Patients: 20,000+ encounters
I-Corps: NSF customer discovery (active)
Trademark: MammoChat (filed)
```

---

*ROADMAP | MAMMOCHAT | MED.ONCO.MAMMO*
