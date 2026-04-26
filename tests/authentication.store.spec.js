import { vi, describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';
import { setActivePinia, createPinia } from 'pinia';
import { useKeyStore } from '../src/stores/authentication';

vi.mock('axios');

beforeEach(() => {
  setActivePinia(createPinia());
});

describe('authentication store', () => {
  it('sets key after getKey', async () => {
    axios.get.mockResolvedValue({ data: [{ key: 'abc' }] });
    const store = useKeyStore();
    await store.getKey();
    expect(store.key).toBe('abc');
    expect(axios.get).toHaveBeenCalled();
  });

  it('throws when axios fails', async () => {
    axios.get.mockRejectedValue(new Error('network'));
    const store = useKeyStore();
    await expect(store.getKey()).rejects.toThrow('network');
  });
});
