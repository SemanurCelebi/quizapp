import { vi, describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';
import { setActivePinia, createPinia } from 'pinia';

vi.mock('axios');

beforeEach(() => {
  setActivePinia(createPinia());
});

describe('questions store', () => {
  it('sets selected questions and user answers', async () => {
    const { useQuestionsStore } = await import('../src/stores/questions');
    const store = useQuestionsStore();
    store.setSelectedQuestions([1,2,3]);
    store.setUserAnswers(['a','b']);
    expect(store.selectedQuestions).toEqual([1,2,3]);
    expect(store.userAnswers).toEqual(['a','b']);
  });

  it('fetches questions and sets state', async () => {
    const fakeData = [{ id: 1, question: 'Q1' }];
    axios.get.mockResolvedValue({ data: fakeData });

    // Mock authentication store before importing questions store
    vi.mock('../src/stores/authentication', () => ({
      useKeyStore: () => ({ key: 'test-key' })
    }));

    const { useQuestionsStore } = await import('../src/stores/questions');
    const store = useQuestionsStore();

    await store.getQuestions();
    expect(store.questions).toEqual(fakeData);
    expect(axios.get).toHaveBeenCalled();
  });
});
