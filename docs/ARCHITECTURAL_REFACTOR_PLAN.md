# Architectural Refactor Plan - 5 Week Cleanup

## Executive Summary

Based on comprehensive architectural audit, this codebase requires systematic cleanup to reduce complexity from 65,000+ LOC to ~15,000 LOC target.

**Status**: Week 1, Day 1 Complete ✅

---

## Progress Tracker

### Week 1: Quick Wins & Critical Fixes

#### Day 1: Dead Code Removal ✅ COMPLETE
- ✅ Deleted ViewfinderContext.tsx (300 LOC, 0 consumers)
- ✅ Deleted CameraController.tsx (400 LOC, unused)
- ✅ Deleted EnhancedCameraController.tsx (627 LOC, unused)
- ✅ Deleted 6 redundant performance files (2,450 LOC)
- **Total Removed**: ~3,500 LOC (6% reduction)
- **Commit**: 12af59f

#### Day 2: CursorLens Fix & Stats.js Removal 🔄 IN PROGRESS
- [ ] Create CursorLensV2.tsx minimal implementation (~200 LOC)
- [ ] Test CursorLensV2 in isolation
- [ ] Remove Stats.js integration
- [ ] Swap CursorLens → CursorLensV2
- **Target**: Eliminate infinite loop bug, -700 LOC

#### Day 3: RAF Loop Consolidation
- [ ] Create central RAF scheduler
- [ ] Migrate existing RAF loops
- [ ] Test performance
- **Target**: Single coordinated animation system

---

## Audit Findings Summary

### Critical Issues Identified

| Issue | Severity | LOC | Status |
|-------|----------|-----|--------|
| Dead code (ViewfinderContext, CameraControllers) | CRITICAL | 1,327 | ✅ FIXED |
| Redundant performance monitoring (7 files) | CRITICAL | 4,100 | ✅ FIXED |
| CursorLens over-engineering | CRITICAL | 920 | 🔄 NEXT |
| UnifiedGameFlowContext god object | CRITICAL | 1,074 | Week 3 |
| Content adapters over-engineering | HIGH | 4,000 | Week 4 |
| Sports system complexity | HIGH | 5,000 | Week 4 |
| 34 concurrent RAF loops | HIGH | N/A | Day 3 |

### Architecture Metrics

**Before Cleanup:**
- Total Files: 163 TypeScript files
- Components: 64 files
- Custom Hooks: 28 files
- Performance Code: 10,000+ LOC
- RAF Loops: 34 concurrent
- Dead Code: 4,100+ LOC

**Target After Cleanup:**
- Total LOC: ~15,000 (from 65,000)
- Custom Hooks: 10-12 (from 28)
- Performance Code: 500 LOC optional
- RAF Loops: 1-2 coordinated
- Dead Code: 0 LOC

---

## Week-by-Week Plan

### Week 1: Quick Wins (Current)
- Delete dead code
- Fix CursorLens infinite loop
- Remove Stats.js
- Consolidate RAF loops
- **Expected Impact**: -5,000 LOC, eliminate critical bugs

### Week 2: Strategic Architecture Decision
- **Choose ONE layout mode** (traditional OR canvas)
- Remove unused layout implementation
- Consolidate navigation patterns
- **Expected Impact**: -5,000 LOC, clearer direction

### Week 3: Context Refactoring
- Split UnifiedGameFlowContext into domain contexts
- Simplify CanvasStateProvider
- Eliminate circular dependencies
- **Expected Impact**: -2,000 LOC, better separation

### Week 4: Component Simplification
- Simplify content adapters (1000+ → 300 LOC each)
- Reduce hook ecosystem (28 → 12 hooks)
- Simplify sports demo system
- **Expected Impact**: -10,000 LOC, maintainability

### Week 5: Testing & Validation
- Comprehensive testing
- Performance benchmarking
- Documentation updates
- **Expected Impact**: Production-ready codebase

---

## Key Decisions Needed

### Decision 1: Layout Mode (Week 2)
**Options:**
- **A) Keep Traditional** - Scroll-based, conventional, easier
- **B) Keep Canvas** - 2D spatial, unique, complex

**Recommendation**: Traditional (simpler, more maintainable)

### Decision 2: Performance Monitoring (Week 3)
**Options:**
- **A) Browser DevTools Only** - Zero overhead
- **B) Minimal Custom** - ~500 LOC, opt-in

**Recommendation**: Browser DevTools only

### Decision 3: Sports System (Week 4)
**Options:**
- **A) Simple Demo** - Basic transitions, ~500 LOC
- **B) Remove Entirely** - Portfolio focus

**Recommendation**: Simple demo

---

## Success Metrics

### Code Quality
- [ ] LOC reduced by 75% (65k → 15k)
- [ ] Hooks reduced by 60% (28 → 12)
- [ ] Zero circular dependencies
- [ ] Zero infinite loop risks
- [ ] Single RAF scheduler

### Performance
- [ ] Initial load < 2s
- [ ] Time to Interactive < 3s
- [ ] No runtime errors
- [ ] Smooth 60fps animations

### Maintainability
- [ ] Clear separation of concerns
- [ ] Single source of truth for state
- [ ] Documented architecture
- [ ] Easy to onboard new developers

---

## Risk Mitigation

### Approach: Incremental with Validation
- Commit after each task
- Test before moving forward
- Keep rollback options
- Document all changes

### Safety Nets
- Git for version control
- Continuous dev server monitoring
- Immediate testing after changes
- Stakeholder communication

---

## Files Deleted (Week 1, Day 1)

```
✅ src/contexts/ViewfinderContext.tsx
✅ src/components/canvas/CameraController.tsx
✅ src/components/canvas/EnhancedCameraController.tsx
✅ test/CameraController.test.tsx
✅ src/utils/performanceAccuracyValidator.ts
✅ src/utils/performanceDataExport.ts
✅ src/utils/performanceOverheadProfiler.ts
✅ src/utils/performanceAnalysis.ts
✅ src/utils/performanceDataCache.ts
✅ src/utils/canvasPerformanceDebugger.ts
```

**Total**: 10 files, ~3,500 LOC removed

---

## Next Steps (Week 1, Day 2)

1. Create CursorLensV2 minimal implementation
2. Test in isolation
3. Remove Stats.js integration
4. Swap implementations
5. Verify infinite loops resolved

**ETA**: 2-3 hours
