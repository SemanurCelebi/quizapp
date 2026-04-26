import { beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';

// Ensure there is an active Pinia instance for tests that create stores immediately
setActivePinia(createPinia());

// Recreate a fresh Pinia before each test to avoid cross-test state
beforeEach(() => {
  setActivePinia(createPinia());
});
