import { createAsyncThunk } from "@reduxjs/toolkit";

import SubjectsApi from "../api/subjects.api";
import TopicsApi from "../api/topics.api";
import SubTopicsApi from "../api/subtopics.api";
import TestsApi from "../api/tests.api";
import type { CreateTestRequest, Test } from "../types/tests.types";

import {
  setLoading,
  setCreating,
  setError,
  setSubjects,
  setTopics,
  setSubTopics,
  setCreatedTest,
} from "../store/testCreationSlice";

// Async thunk for fetching subjects
export const thunkFetchSubjects = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("testCreation/fetchSubjects", async (_, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setLoading(true));
    const response = await SubjectsApi.getAll();
    if (response.success) {
      dispatch(setSubjects(response.data));
      dispatch(setLoading(false));
      return;
    }
    dispatch(setError("Failed to fetch subjects"));
    dispatch(setLoading(false));
    return rejectWithValue("Failed to fetch subjects");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch subjects";
    dispatch(setError(message));
    dispatch(setLoading(false));
    return rejectWithValue(message);
  }
});

// Async thunk for fetching topics by subject
export const thunkFetchTopicsBySubject = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("testCreation/fetchTopicsBySubject", async (subjectId, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setLoading(true));
    const response = await TopicsApi.getBySubject(subjectId);
    if (response.success) {
      dispatch(setTopics(response.data));
      dispatch(setLoading(false));
      return;
    }
    dispatch(setError("Failed to fetch topics"));
    dispatch(setLoading(false));
    return rejectWithValue("Failed to fetch topics");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch topics";
    dispatch(setError(message));
    dispatch(setLoading(false));
    return rejectWithValue(message);
  }
});

// Async thunk for fetching sub-topics by topic
export const thunkFetchSubTopicsByTopic = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("testCreation/fetchSubTopicsByTopic", async (topicId, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setLoading(true));
    const response = await SubTopicsApi.getByTopic(topicId);
    if (response.success) {
      dispatch(setSubTopics(response.data));
      dispatch(setLoading(false));
      return;
    }
    dispatch(setError("Failed to fetch sub-topics"));
    dispatch(setLoading(false));
    return rejectWithValue("Failed to fetch sub-topics");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch sub-topics";
    dispatch(setError(message));
    dispatch(setLoading(false));
    return rejectWithValue(message);
  }
});

// Async thunk for creating a test
export const thunkCreateTest = createAsyncThunk<
  Test,
  CreateTestRequest,
  { rejectValue: string }
>("testCreation/createTest", async (payload, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setCreating(true));
    const response = await TestsApi.create(payload);
    if (response.success) {
      dispatch(setCreatedTest(response.data));
      dispatch(setCreating(false));
      return response.data;
    }
    dispatch(setError("Failed to create test"));
    dispatch(setCreating(false));
    return rejectWithValue("Failed to create test");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create test";
    dispatch(setError(message));
    dispatch(setCreating(false));
    return rejectWithValue(message);
  }
});
