import { createAsyncThunk } from "@reduxjs/toolkit";

import SubjectsApi from "../api/subjects.api";
import TopicsApi from "../api/topics.api";
import SubTopicsApi from "../api/subtopics.api";
import TestsApi from "../api/tests.api";
import type { CreateTestRequest, Test } from "../types/tests.types";

import {
  setLoading,
  setLoadingTopics,
  setLoadingSubTopics,
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
    // Set subjects - API returns data directly without success wrapper
    dispatch(setSubjects(response.data || []));
    dispatch(setLoading(false));
    return;
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
    dispatch(setLoadingTopics(true));
    const response = await TopicsApi.getBySubject(subjectId);
    // API returns status: "success" instead of success: true
    if (response.status === "success") {
      dispatch(setTopics(response.data));
      dispatch(setLoadingTopics(false));
      return;
    }
    dispatch(setError("Failed to fetch topics"));
    dispatch(setLoadingTopics(false));
    return rejectWithValue("Failed to fetch topics");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch topics";
    dispatch(setError(message));
    dispatch(setLoadingTopics(false));
    return rejectWithValue(message);
  }
});

// Async thunk for fetching topics by multiple subject IDs
export const thunkFetchTopicsBySubjects = createAsyncThunk<
  void,
  string[],
  { rejectValue: string }
>("testCreation/fetchTopicsBySubjects", async (subjectIds, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setLoadingTopics(true));
    // Fetch topics for all subjects and combine
    const responses = await Promise.all(
      subjectIds.map((id) => TopicsApi.getBySubject(id))
    );
    const allTopics = responses.flatMap((r) => r.data?.data || [] || []);
    // Remove duplicates by id
    const uniqueTopics = allTopics.filter(
      (topic, index, self) => index === self.findIndex((t) => t.id === topic.id)
    );
    dispatch(setTopics(uniqueTopics));
    dispatch(setLoadingTopics(false));
    return;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch topics";
    dispatch(setError(message));
    dispatch(setLoadingTopics(false));
    return rejectWithValue(message);
  }
});

// Async thunk for fetching sub-topics by topics (can be multiple)
export const thunkFetchSubTopicsByTopic = createAsyncThunk<
  void,
  string[],
  { rejectValue: string }
>("testCreation/fetchSubTopicsByTopic", async (topicIds, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setLoadingSubTopics(true));
    const response = await SubTopicsApi.getByTopics(topicIds);
    // API returns status: "success" instead of success: true
    if (response.status === "success" || response.success) {
      dispatch(setSubTopics(response.data));
      dispatch(setLoadingSubTopics(false));
      return;
    }
    dispatch(setError("Failed to fetch sub-topics"));
    dispatch(setLoadingSubTopics(false));
    return rejectWithValue("Failed to fetch sub-topics");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch sub-topics";
    dispatch(setError(message));
    dispatch(setLoadingSubTopics(false));
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
    // API returns status: "success" instead of success: true
    if (response.success || response.status === "success") {
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
