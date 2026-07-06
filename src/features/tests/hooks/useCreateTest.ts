import { createAsyncThunk } from "@reduxjs/toolkit";

import SubjectsApi from "../api/subjects.api";
import TopicsApi from "../api/topics.api";
import SubTopicsApi from "../api/subtopics.api";
import TestsApi from "../api/tests.api";
import type { CreateTestRequest, Subject, SubTopic, Test, Topic } from "../types/tests.types";

// Async thunk for fetching subjects
export const thunkFetchSubjects = createAsyncThunk<
  Subject[],
  void,
  { rejectValue: string }
>("testCreation/fetchSubjects", async (_, { rejectWithValue }) => {
  try {
    const response = await SubjectsApi.getAll();
    return response.data ?? [];
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch subjects";
    return rejectWithValue(message);
  }
});

// Async thunk for fetching topics by subject
export const thunkFetchTopicsBySubject = createAsyncThunk<
  Topic[],
  string,
  { rejectValue: string }
>("testCreation/fetchTopicsBySubject", async (subjectId, { rejectWithValue }) => {
  try {
    const response = await TopicsApi.getBySubject(subjectId);
    return response.data ?? [];
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch topics";
    return rejectWithValue(message);
  }
});

// Async thunk for fetching topics by multiple subject IDs
export const thunkFetchTopicsBySubjects = createAsyncThunk<
  Topic[],
  string[],
  { rejectValue: string }
>("testCreation/fetchTopicsBySubjects", async (subjectIds, { rejectWithValue }) => {
  try {
    const responses = await Promise.all(
      subjectIds.map((id) => TopicsApi.getBySubject(id)),
    );
    const allTopics = responses.flatMap((r) => r.data ?? []);
    // Remove duplicates by id
    const uniqueTopics = allTopics.filter(
      (topic, index, self) => index === self.findIndex((t) => t.id === topic.id),
    );
    return uniqueTopics;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch topics";
    return rejectWithValue(message);
  }
});

// Async thunk for fetching sub-topics by topics (can be multiple)
export const thunkFetchSubTopicsByTopic = createAsyncThunk<
  SubTopic[],
  string[],
  { rejectValue: string }
>("testCreation/fetchSubTopicsByTopic", async (topicIds, { rejectWithValue }) => {
  try {
    const response = await SubTopicsApi.getByTopics(topicIds);
    return response.data ?? [];
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch sub-topics";
    return rejectWithValue(message);
  }
});

// Async thunk for creating a test
export const thunkCreateTest = createAsyncThunk<
  Test,
  CreateTestRequest,
  { rejectValue: string }
>("testCreation/createTest", async (payload, { rejectWithValue }) => {
  try {
    const response = await TestsApi.create(payload);
    if (response.success || response.status === "success") {
      return response.data;
    }
    return rejectWithValue("Failed to create test");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create test";
    return rejectWithValue(message);
  }
});
