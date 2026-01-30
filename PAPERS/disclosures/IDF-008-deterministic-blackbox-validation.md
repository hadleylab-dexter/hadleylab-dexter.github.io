# INVENTION DISCLOSURE FORM

**IDF-008**

---

## ADMINISTRATIVE

**Title:** Deterministic Black-Box Validation with Observable Input-Output Equivalence

**Inventor(s):** Dexter Hadley

**Disclosure Date:** 2026-01-13

**Related Disclosure:** IDF-001-canonic-governance.md

**Freeze Reference:** stack-freeze-2026-01-12

**Status:** Internal disclosure — not for publication

**Confidentiality:** PRIVILEGED AND CONFIDENTIAL — Prepared for patent counsel

---

## 1. CONTEXT

This disclosure documents an inventive validation architecture where validators are treated as opaque implementations evaluated solely by observable input-output behavior. The architecture is documented in machine/MACHINE.md and validators/VALIDATORS.md.

---

## 2. PROBLEM STATEMENT

In governance validation systems:

1. Validation logic is disclosed, enabling gaming and circumvention
2. Implementation details couple validators to specific technologies
3. Validator correctness requires understanding internal mechanisms
4. Multiple equivalent validators cannot coexist without semantic confusion
5. Auditability requires disclosure, creating security tension

**The core problem:** No structural mechanism exists to achieve both auditability (external verification) and opacity (hidden enforcement logic) in governance validation.

---

## 3. INVENTIVE INSIGHT

```mermaid
flowchart LR
    subgraph Input["Input"]
        Artifact[Governance<br/>Artifact]
        Context[Context]
    end

    subgraph BlackBox["Black Box Validators"]
        V1[Validator 1<br/>Implementation A]
        V2[Validator 2<br/>Implementation B]
    end

    subgraph Output["Output"]
        Result[Pass/Fail +<br/>Evidence]
    end

    subgraph Equivalence["Equivalence Test"]
        Test{V1(I) = V2(I)?}
        Substitute[Substitutable]
    end

    Artifact --> V1
    Context --> V1
    Artifact --> V2
    Context --> V2

    V1 --> Result
    V2 --> Result

    V1 --> Test
    V2 --> Test
    Test -->|yes| Substitute

    V1 -.->|internals hidden| V1
    V2 -.->|internals hidden| V2
```

The invention establishes **black-box validation** where:

1. Validators are evaluated solely by input-output behavior
2. Identical inputs MUST produce identical outputs regardless of implementation
3. Correctness is deterministic and reproducible without exposing internals
4. Multiple equivalent implementations can coexist and be substituted

### 3.1 Black-Box Property

A validator V is a black box if:
- V accepts input I (governance artifact + context)
- V produces output O (pass/fail + evidence)
- For all I: V(I) is deterministic
- Internal implementation of V is not observable

### 3.2 Input-Output Equivalence

Two validators V1 and V2 are equivalent if:
- For all valid inputs I: V1(I) = V2(I)
- Equivalence is verifiable without examining internals
- Equivalent validators are interchangeable

### 3.3 Separation of Semantics and Implementation

The architecture separates:
- **Validation semantics:** What the validator enforces (declared in MACHINE)
- **Validation implementation:** How enforcement is achieved (private to validator)

This separation enables:
- Semantic clarity without implementation disclosure
- Implementation evolution without semantic change
- Third-party reimplementation with equivalence verification

### 3.4 Auditability Without Disclosure

External auditors can:
- Submit test inputs
- Observe outputs
- Verify determinism (same input → same output)
- Verify equivalence (compare multiple implementations)
- Cannot observe internal logic

---

## 4. HIGH-LEVEL METHOD

### 4.1 Validator Specification

1. Declare validation semantics in MACHINE
2. Semantics specify:
   - What constraints are enforced
   - What inputs are accepted
   - What outputs are produced
   - What evidence accompanies results

### 4.2 Implementation Binding

1. Validator implementation is created (private)
2. Implementation is bound to semantic specification
3. Binding is verified through test suite
4. Implementation details remain undisclosed

### 4.3 Equivalence Testing

1. Define test input corpus
2. Execute both validators on all inputs
3. Compare outputs for each input
4. Validators are equivalent if all outputs match

### 4.4 Determinism Verification

1. Execute validator on input I
2. Record output O1
3. Execute validator on same input I
4. Record output O2
5. Validator is deterministic if O1 = O2 for all I

### 4.5 Substitution Protocol

1. Identify current validator V1
2. Identify candidate replacement V2
3. Verify equivalence (see 4.3)
4. If equivalent, substitute V2 for V1
5. Governance semantics unchanged

---

## 5. ADVANTAGES

### 5.1 Security Through Opacity

Enforcement logic cannot be reverse-engineered from validation interface.

### 5.2 Auditability Through Behavior

External parties can verify correctness without access to source code.

### 5.3 Implementation Independence

Validators can be reimplemented in different languages, platforms, or architectures.

### 5.4 Reproducible Verification

Any party can reproduce validation results given the same inputs.

### 5.5 Graceful Evolution

Implementations can be improved while maintaining semantic equivalence.

---

## 6. EXPLICIT EXCLUSIONS (NOT CLAIMED)

1. **Specific validator implementations** — Implementation details are explicitly excluded
2. **Specific programming languages** — Implementation language is not claimed
3. **Specific test corpus formats** — Test input structure is not claimed
4. **Specific equivalence algorithms** — Comparison method is not claimed
5. **Cryptographic verification methods** — Zero-knowledge proofs, etc. are not claimed

---

## 7. EVIDENCE SUMMARY

### 7.1 Specification Evidence

- machine/MACHINE.md: Validation semantics specification
- validators/VALIDATORS.md: Validator interface definition
- validators/CANON.md: Validator governance constraints

### 7.2 Implementation Evidence

- Multiple validator implementations exist (undisclosed)
- Equivalence testing performed across implementations
- Determinism verified through repeated execution

### 7.3 Substitution Evidence

- Validator substitution demonstrated without semantic change
- External verification possible through interface alone
- Implementation details remain private

---

## 8. RELATIONSHIP TO OTHER DISCLOSURES

### 8.1 Relationship to IDF-001

This disclosure extends IDF-001 by specifying:

- The separation of validation semantics from implementation (IDF-001 specifies validation role but not architecture)
- The equivalence verification method (IDF-001 requires determinism but not equivalence testing)
- The substitution protocol (IDF-001 does not specify how validators can be replaced)

IDF-001 establishes that validation is deterministic; IDF-008 specifies how to achieve and verify that determinism without disclosure.

### 8.2 Relationship to IDF-011 (Clarification)

IDF-011 (Evidence-Based Epistemic Writing) requires that readers can verify claims against ledger evidence. This creates an apparent tension with IDF-008's black-box opacity.

**Resolution:** The two disclosures operate at different layers:

| Layer | What's Verified | Disclosed? | IDF |
|-------|-----------------|------------|-----|
| **Semantic** | What constraints exist | Yes (MACHINE.md) | IDF-008 |
| **Implementation** | How validators enforce constraints | No (private) | IDF-008 |
| **Evidence** | What artifacts exist in ledger | Yes (ledger commits) | IDF-011 |
| **Claims** | What manuscript asserts | Yes (manuscript text) | IDF-011 |

IDF-011 verification answers: "Does the claim match the ledger artifact?"

IDF-008 black-box answers: "Did the validator produce the right pass/fail result?"

These are independent questions:
- A reader can verify that "ep030 exists and contains X" (IDF-011) without knowing how the validator determined ep030 was compliant (IDF-008)
- Validator opacity protects enforcement logic; evidence transparency enables claim verification
- The semantic specification (MACHINE.md) is public; only the implementation is private

---

## 9. PRIOR ART DISTINCTION

### 9.1 Black-Box Testing (Software Engineering)

Traditional black-box testing treats software under test as opaque, examining only inputs and outputs.

**Distinction:** IDF-008 applies black-box principles to governance validation specifically, with:
- Determinism as a structural requirement (not just observed behavior)
- Equivalence testing as a substitution protocol
- Semantic/implementation separation as an architectural principle
- Application to constitutional governance, not general software

### 9.2 Test Oracles

Test oracles determine whether software behavior is correct, often through comparison to a reference implementation.

**Distinction:** IDF-008's equivalence testing enables multiple validators to coexist and be substituted, not just compared to a reference. The focus is governance validation with:
- No privileged reference implementation
- Any equivalent validator is authoritative
- Substitution preserves semantic guarantees

### 9.3 Cryptographic Black Boxes

Cryptographic systems use black-box models for security proofs (e.g., random oracle model).

**Distinction:** IDF-008 does not claim cryptographic security properties. The black-box model is for:
- Implementation opacity (can't reverse-engineer enforcement logic)
- Behavioral auditability (can verify outputs match semantics)
- Not for cryptographic security guarantees

### 9.4 API Abstraction

Software APIs hide implementation details behind public interfaces.

**Distinction:** IDF-008 adds:
- Determinism verification protocol
- Equivalence testing for substitutability
- Application to governance validation specifically
- Semantic specification (MACHINE.md) as a first-class artifact

---

## 10. INVENTOR DECLARATION

I, **Dexter Hadley**, declare that:

1. I am the sole human inventor of this architecture
2. The inventive activity is documented in machine/MACHINE.md and validators/VALIDATORS.md
3. AI systems contributed execution under my governance but are not inventors
4. This disclosure is bounded by the freeze date specified above

---

**END OF DISCLOSURE**

---
