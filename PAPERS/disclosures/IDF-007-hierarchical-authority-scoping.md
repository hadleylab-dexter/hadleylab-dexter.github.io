# INVENTION DISCLOSURE FORM

**IDF-007**

---

## ADMINISTRATIVE

**Title:** Hierarchical Authority Scoping with Irreversible Constraint Inheritance

**Inventor(s):** Dexter Hadley

**Disclosure Date:** 2026-01-13

**Related Disclosure:** IDF-001-canonic-governance.md

**Freeze Reference:** stack-freeze-2026-01-12

**Status:** Internal disclosure — not for publication

**Confidentiality:** PRIVILEGED AND CONFIDENTIAL — Prepared for patent counsel

---

## 1. CONTEXT

This disclosure documents an inventive governance architecture where authority is declaratively bounded at each layer and inheritance is strictly unidirectional. The architecture is documented in os/CANON.md and machine/CANON.md.

---

## 2. PROBLEM STATEMENT

In hierarchical governance systems:

1. Lower layers may inadvertently or intentionally override upper-layer constraints
2. Authority boundaries are implicit and unverifiable
3. Implementation layers re-interpret governance rules, creating semantic drift
4. No mechanism prevents subordinate scopes from asserting authority beyond their scope
5. Inheritance direction is not enforced, allowing constraint flow reversal

**The core problem:** No structural mechanism exists to declare and enforce authority boundaries between governance layers such that subordinate layers cannot override, reinterpret, or expand inherited constraints.

---

## 3. INVENTIVE INSIGHT

```mermaid
flowchart TB
    subgraph Hierarchy["Governance Hierarchy"]
        CANONIC[CANONIC<br/>Paradigm Layer]
        OS[OS<br/>Execution Layer]
        MACHINE[MACHINE<br/>Enforcement Layer]
    end

    subgraph Inheritance["Irreversible Inheritance"]
        direction TB
        I1[Constraints flow DOWN]
        I2[Cannot override UP]
        I3[Cannot add to parent]
    end

    CANONIC -->|inherits| OS
    OS -->|inherits| MACHINE

    CANONIC -.->|governs: paradigm, triad| CANONIC
    OS -.->|governs: execution| OS
    MACHINE -.->|governs: enforcement| MACHINE

    MACHINE -.x|CANNOT govern| CANONIC
    OS -.x|CANNOT override| CANONIC

    style CANONIC fill:#e1f5fe
    style OS fill:#fff3e0
    style MACHINE fill:#f3e5f5
```

The invention establishes **hierarchical authority scoping** where:

1. Each governance layer explicitly declares its authority boundaries
2. Layers can only add constraints, never override inherited constraints
3. Authority declarations are mechanically verifiable
4. Inheritance is strictly unidirectional (parent → child, never reverse)

### 3.1 Authority Boundary Declaration

Each CANON explicitly states what it governs and what it does not:

```
CANONIC governs: paradigm, triad, inheritance, introspection
CANONIC does not govern: execution, enforcement, implementation

OS governs: execution coordination, session management
OS does not govern: validation implementation, paradigm definition

MACHINE governs: enforcement execution, validation binding
MACHINE does not govern: paradigm definition, scope creation
```

### 3.2 Scope Hierarchy

The hierarchy is strict:
```
CANONIC (paradigm)
    ↓ inherits
OS (execution)
    ↓ inherits
MACHINE (enforcement)
```

Each layer:
- Inherits all constraints from parent layers
- May add constraints within its declared scope
- May NOT modify or override inherited constraints
- May NOT govern outside its declared scope

### 3.3 Irreversible Inheritance

Inheritance properties:
- Child scopes receive parent constraints automatically
- Child cannot reject or modify inherited constraints
- Child additions do not propagate upward
- The inheritance graph is acyclic by construction

### 3.4 Authority Creep Prevention

The architecture prevents:
- **Upward authority creep:** MACHINE cannot add CANONIC axioms
- **Lateral authority creep:** OS cannot govern MACHINE-specific concerns
- **Override creep:** No layer can weaken inherited constraints
- **Implicit authority:** All authority must be declared in CANON

### 3.5 Layer-Discipline Principle (Extended 2026-01-13)

**Critical constraint discovered through violation analysis (ep128, ep129, ep100):**

Axioms belong in the layer governing the action they constrain, not the layer performing the action:

| Axiom | Action Governed | Correct Layer | Incorrect Layer |
|-------|-----------------|---------------|-----------------|
| vocab-closure | commits | /git CANON | /os CANON |
| episode | episode creation | /writing CANON | /os CANON |
| validation | enforcement | /machine CANON | /canonic CANON |

This principle ensures:
- Axioms are discoverable where their effects occur
- Layer boundaries remain clean
- No procedural constraints accumulate in paradigm layer

### 3.6 Self-Referential AI Governance Scope (Extended 2026-01-13)

**Explicit scope boundary axiom (ep124):**

> "Governance applies to AI behavior within scope; governance does not govern human work within scope."

This canonified constraint ensures:
- AI governance is self-referential (applies to AI outputs)
- Human creative work is not subject to AI enforcement
- Violations documented are AI violations, not human choices

**Locality justification (see IDF-013):** This axiom resides in OS CANON (not CANONIC root) because:
- The axiom governs *execution behavior*, not paradigm definition
- OS layer governs AI session execution—the axiom constrains that execution
- Placing it in CANONIC would violate root minimality (procedural constraint in paradigm layer)

See IDF-014 for full treatment of bidirectional scope boundaries.

---

## 4. HIGH-LEVEL METHOD

### 4.1 Authority Declaration

1. Each scope CANON includes explicit authority section
2. Authority section declares:
   - What this scope governs (positive declaration)
   - What this scope does not govern (negative declaration)
   - Parent scope from which constraints are inherited

### 4.2 Inheritance Verification

1. Extract parent scope identifier from child CANON
2. Load parent CANON constraints
3. Verify child CANON:
   - Contains all parent constraints (or references them)
   - Does not contradict any parent constraint
   - Does not assert authority outside declared scope

### 4.3 Authority Boundary Check

1. For each constraint in child CANON:
   - Identify constraint scope (what it governs)
   - Verify scope is within declared authority
   - Flag if constraint exceeds declared authority

### 4.4 Hierarchy Validation

1. Build inheritance graph from all CANONs
2. Verify graph is acyclic (no circular inheritance)
3. Verify all edges point downward (parent → child)
4. Report hierarchy violations

---

## 5. ADVANTAGES

### 5.1 Mechanically Detectable Authority Violations

Authority boundary violations are checkable by algorithm, not human interpretation.

### 5.2 Layer Isolation

Each layer can evolve independently within its declared scope without affecting other layers.

### 5.3 Governance Stability

Upper-layer constraints cannot be eroded by lower-layer implementations.

### 5.4 Clear Responsibility Assignment

Each layer's authority is explicit, enabling clear accountability.

### 5.5 Compositional Verification

Multiple governance hierarchies can be composed while preserving authority boundaries.

---

## 6. EXPLICIT EXCLUSIONS (NOT CLAIMED)

1. **Specific layer names** — CANONIC, OS, MACHINE are examples, not requirements
2. **Specific CANON syntax** — Declaration format is implementation detail
3. **Specific inheritance mechanisms** — How inheritance is implemented is not claimed
4. **Access control systems** — Authority is declarative, not permissions-based
5. **Specific verification algorithms** — Verification approach is implementation detail

---

## 7. EVIDENCE SUMMARY

### 7.1 CANON Evidence

- canonic/CANON.md: Root paradigm with minimal axioms
- os/CANON.md: Execution layer with declared authority boundaries
- machine/CANON.md: Enforcement layer with declared authority boundaries

### 7.2 Authority Declarations

Each CANON contains explicit sections:
- "This scope governs..."
- "This scope does not govern..."
- "Inherits from..."

### 7.3 Violation Evidence

Multiple episodes document authority violations:
- Implementation layer attempting to modify paradigm
- Enforcement layer attempting to create new scopes
- Corrections made by respecting authority boundaries
- ep100, ep128, ep129: Layer-discipline violations
- ep124: Scope boundary axiom discovery

---

## 8. RELATIONSHIP TO OTHER DISCLOSURES

### 8.1 Relationship to IDF-001

This disclosure extends IDF-001 by specifying:

- The authority declaration mechanism (IDF-001 specifies hierarchy but not authority bounds)
- The irreversible inheritance property (IDF-001 allows constraint addition but not override prevention)
- The negative authority declaration (IDF-001 does not specify what scopes may NOT govern)

IDF-001 establishes hierarchical scopes; IDF-007 specifies how authority is bounded within that hierarchy.

### 8.2 Relationship to IDF-013

IDF-013 (Canonical Locality) specifies *where* governance artifacts belong; IDF-007 specifies *what authority* each location has:

| IDF | Question Answered | Example |
|-----|-------------------|---------|
| IDF-007 | What can this scope govern? | OS governs execution, not paradigm |
| IDF-013 | Where should this constraint live? | Session rules belong in OS, not CANONIC |

The two are complementary: IDF-007's authority bounds guide IDF-013's placement decisions.

### 8.3 Relationship to IDF-014

IDF-014 (Bidirectional Scope Boundaries) specializes IDF-007's authority declaration for the AI/human boundary:

- IDF-007: Layers have bounded authority (cannot govern outside scope)
- IDF-014: AI governance specifically cannot govern human work

IDF-014's self-referential constraint is an instance of IDF-007's authority boundary principle.

---

## 9. PRIOR ART DISTINCTION

### 9.1 Role-Based Access Control (RBAC)

RBAC systems assign permissions to roles, and users inherit permissions from assigned roles.

**Distinction:** IDF-007 is about *declarative authority bounds*, not access permissions:
- RBAC controls what actors *can do*; IDF-007 declares what scopes *may govern*
- RBAC permissions are granted; IDF-007 authority is inherently bounded
- RBAC doesn't address governance hierarchy or irreversible inheritance

### 9.2 Hierarchical Access Control (DAC/MAC)

Discretionary and mandatory access control use hierarchies for permission inheritance.

**Distinction:** IDF-007's hierarchy is for *governance semantics*, not access:
- MAC classifies information sensitivity; IDF-007 classifies governance scope
- DAC allows permission delegation; IDF-007 forbids authority override
- Neither DAC nor MAC addresses negative authority declarations

### 9.3 Organizational Hierarchies (Corporate Governance)

Corporate governance uses hierarchical authority (board → executives → managers → employees).

**Distinction:** IDF-007 addresses *AI governance specifically* with:
- Explicit negative authority declarations (what scopes may NOT govern)
- Mechanically verifiable authority boundaries
- Irreversible inheritance (subordinates cannot override superiors)
- Layer-discipline principle for axiom placement

### 9.4 Type Systems (Variance, Subtyping)

Programming language type systems use inheritance and variance rules.

**Distinction:** IDF-007 applies inheritance to *governance constraints*, not types:
- Type variance is about substitutability; IDF-007 is about constraint propagation
- Type systems allow override (covariance/contravariance); IDF-007 forbids it
- Type hierarchies are for safety checking; IDF-007 hierarchy is for authority bounding

---

## 10. INVENTOR DECLARATION

I, **Dexter Hadley**, declare that:

1. I am the sole human inventor of this architecture
2. The inventive activity is documented in os/CANON.md and machine/CANON.md
3. AI systems contributed execution under my governance but are not inventors
4. This disclosure is bounded by the freeze date specified above

---

**END OF DISCLOSURE**

---
