import { useCallback, useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useNotification } from "@/hooks/useNotification";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/router/routes";
import type { CreateTestRequest } from "../types/tests.types";

import {
  thunkCreateTest,
  thunkFetchSubjects,
  thunkFetchSubTopicsByTopic,
  thunkFetchTopicsBySubject,
} from "./useCreateTest";

import {
  selectCorrectMarks,
  selectCreatedTest,
  selectDifficulty,
  selectEditingTestId,
  selectError,
  selectIsCreating,
  selectIsLoading,
  selectIsLoadingSubTopics,
  selectIsLoadingTopics,
  selectName,
  selectSelectedSubjectId,
  selectSelectedSubTopicIds,
  selectSelectedTopicIds,
  selectShouldOpenSubTopicsDropdown,
  selectSubjects,
  selectSubTopics,
  selectTopics,
  selectTotalMarks,
  selectTotalQuestions,
  selectTotalTime,
  selectType,
  selectUnattemptMarks,
  selectWrongMarks,
} from "../store/testCreation.selectors";

import {
  loadTestForEdit,
  resetForm,
  resetFormFields,
  setCorrectMarks,
  setDifficulty,
  setEditingTestId,
  setName,
  setSelectedSubjectId,
  setSelectedSubTopicIds,
  setSelectedTopicIds,
  setShouldOpenSubTopicsDropdown,
  setSubTopics,
  setTopics,
  setTotalMarks,
  setTotalQuestions,
  setTotalTime,
  setType,
  setUnattemptMarks,
  setWrongMarks,
} from "../store/testCreationSlice";

export const useTestCreation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const notification = useNotification();

  // Selectors
  const subjects = useAppSelector(selectSubjects);
  const topics = useAppSelector(selectTopics);
  const subTopics = useAppSelector(selectSubTopics);
  const selectedSubjectId = useAppSelector(selectSelectedSubjectId);
  const selectedTopicIds = useAppSelector(selectSelectedTopicIds);
  const selectedSubTopicIds = useAppSelector(selectSelectedSubTopicIds);
  const name = useAppSelector(selectName);
  const type = useAppSelector(selectType);
  const difficulty = useAppSelector(selectDifficulty);
  const totalTime = useAppSelector(selectTotalTime);
  const totalQuestions = useAppSelector(selectTotalQuestions);
  const totalMarks = useAppSelector(selectTotalMarks);
  const correctMarks = useAppSelector(selectCorrectMarks);
  const wrongMarks = useAppSelector(selectWrongMarks);
  const unattemptMarks = useAppSelector(selectUnattemptMarks);
  const isLoading = useAppSelector(selectIsLoading);
  const isLoadingTopics = useAppSelector(selectIsLoadingTopics);
  const isLoadingSubTopics = useAppSelector(selectIsLoadingSubTopics);
  const isCreating = useAppSelector(selectIsCreating);
  const error = useAppSelector(selectError);
  const createdTest = useAppSelector(selectCreatedTest);
  const shouldOpenSubTopicsDropdown = useAppSelector(selectShouldOpenSubTopicsDropdown);
  const editingTestId = useAppSelector(selectEditingTestId);

  // Track whether we are in the edit-load cascade (subject → topics → subtopics)
  const isEditingTopicsLoading = useRef(false);
  const isEditingSubTopicsLoading = useRef(false);
  // Store the IDs we need to pre-select (they get set into state when the cascade completes)
  const editTopicIds = useRef<string[]>([]);
  const editSubTopicIds = useRef<string[]>([]);

  // Actions
  const fetchSubjects = useCallback(() => {
    dispatch(thunkFetchSubjects());
  }, [dispatch]);

  const loadTestForEditing = useCallback(
    (test: {
      id: string;
      name: string;
      type: string;
      subject: string;
      topics: string[];
      subTopics: string[];
      difficulty: string;
      totalTime: string;
      totalQuestions: string;
      totalMarks: string;
      correctMarks: string;
      wrongMarks: string;
      unattemptMarks: string;
    }) => {
      // Store target IDs to pre-select once dropdown data loads
      editTopicIds.current = test.topics;
      editSubTopicIds.current = test.subTopics;

      // Load form fields: name, difficulty, marks, etc.
      dispatch(loadTestForEdit(test));

      // Kick off the cascade: set subject → fetch topics → fetch subtopics
      isEditingTopicsLoading.current = true;
      dispatch(thunkFetchTopicsBySubject(test.subject));
    },
    [dispatch],
  );

  // Cascade step 1: topics fetched → now fetch subtopics
  useEffect(() => {
    if (!isEditingTopicsLoading.current) return;
    if (topics.length === 0) return;

    isEditingTopicsLoading.current = false;
    isEditingSubTopicsLoading.current = true;

    if (editTopicIds.current.length > 0) {
      dispatch(thunkFetchSubTopicsByTopic(editTopicIds.current));
    } else {
      // No topics to load subtopics for
      isEditingSubTopicsLoading.current = false;
    }
  }, [topics.length]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cascade step 2: subtopics fetched → restore the pre-selected IDs into dropdown state
  useEffect(() => {
    if (!isEditingSubTopicsLoading.current) return;
    if (subTopics.length === 0) return;

    isEditingSubTopicsLoading.current = false;

    // Re-apply the topic and subtopic selections so dropdowns show the checkmarks
    if (editTopicIds.current.length > 0) {
      dispatch(setSelectedTopicIds(editTopicIds.current));
    }
    if (editSubTopicIds.current.length > 0) {
      dispatch(setSelectedSubTopicIds(editSubTopicIds.current));
    }
  }, [subTopics.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const clearEditingTest = useCallback(() => {
    dispatch(setEditingTestId(null));
    // Reset cascade state
    isEditingTopicsLoading.current = false;
    isEditingSubTopicsLoading.current = false;
    editTopicIds.current = [];
    editSubTopicIds.current = [];
  }, [dispatch]);

  const handleSubjectChange = useCallback(
    (subjectId: string) => {
      dispatch(setSelectedSubjectId(subjectId));
      // Clear topics and subtopics when subject changes
      dispatch(setTopics([]));
      dispatch(setSubTopics([]));
      dispatch(setSelectedTopicIds([]));
      dispatch(setSelectedSubTopicIds([]));
    },
    [dispatch],
  );

  // Cascade: selectedSubjectId changed → fetch topics (normal user flow only)
  useEffect(() => {
    if (!selectedSubjectId) return;
    if (topics.length > 0) return; // already loaded
    dispatch(thunkFetchTopicsBySubject(selectedSubjectId));
  }, [selectedSubjectId, topics.length]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cascade: topics loaded (normal user flow) → fetch subtopics
  useEffect(() => {
    if (isEditingSubTopicsLoading.current) return; // skip, edit cascade handles it
    if (topics.length === 0) return;
    if (selectedTopicIds.length === 0) return; // no topic selected yet
    dispatch(thunkFetchSubTopicsByTopic(selectedTopicIds));
  }, [topics.length, selectedTopicIds.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTopicChange = useCallback(
    (topicIds: string[]) => {
      dispatch(setSelectedTopicIds(topicIds));
      // Clear subtopics when topics change
      dispatch(setSelectedSubTopicIds([]));
    },
    [dispatch],
  );

  const handleSubTopicChange = useCallback(
    (subTopicIds: string[]) => {
      dispatch(setSelectedSubTopicIds(subTopicIds));
    },
    [dispatch],
  );

  // Call this when subtopic dropdown is opened
  const handleSubTopicDropdownOpen = useCallback(() => {
    if (selectedTopicIds.length > 0) {
      dispatch(setShouldOpenSubTopicsDropdown(true));
      dispatch(thunkFetchSubTopicsByTopic(selectedTopicIds));
    }
  }, [dispatch, selectedTopicIds]);

  // Call this when subtopic dropdown is closed
  const handleSubTopicDropdownClose = useCallback(() => {
    dispatch(setShouldOpenSubTopicsDropdown(false));
  }, [dispatch]);

  const handleNameChange = useCallback(
    (value: string) => {
      dispatch(setName(value));
    },
    [dispatch],
  );

  const handleTypeChange = useCallback(
    (value: string) => {
      dispatch(setType(value));
    },
    [dispatch],
  );

  const handleDifficultyChange = useCallback(
    (value: string) => {
      dispatch(setDifficulty(value));
    },
    [dispatch],
  );

  const handleTotalTimeChange = useCallback(
    (value: string) => {
      dispatch(setTotalTime(value));
    },
    [dispatch],
  );

  const handleTotalQuestionsChange = useCallback(
    (value: string) => {
      dispatch(setTotalQuestions(value));
    },
    [dispatch],
  );

  const handleTotalMarksChange = useCallback(
    (value: string) => {
      dispatch(setTotalMarks(value));
    },
    [dispatch],
  );

  const handleCorrectMarksChange = useCallback(
    (value: string) => {
      dispatch(setCorrectMarks(value));
    },
    [dispatch],
  );

  const handleWrongMarksChange = useCallback(
    (value: string) => {
      dispatch(setWrongMarks(value));
    },
    [dispatch],
  );

  const handleUnattemptMarksChange = useCallback(
    (value: string) => {
      dispatch(setUnattemptMarks(value));
    },
    [dispatch],
  );

  const validateForm = useCallback(() => {
    if (!name.trim()) {
      notification.error("Test name is required");
      return false;
    }
    if (!selectedSubjectId) {
      notification.error("Subject is required");
      return false;
    }
    if (selectedTopicIds.length === 0) {
      notification.error("At least one topic is required");
      return false;
    }
    if (selectedSubTopicIds.length === 0) {
      notification.error("At least one sub-topic is required");
      return false;
    }
    if (!totalTime || Number(totalTime) <= 0) {
      notification.error("Valid duration is required");
      return false;
    }
    if (!totalQuestions || Number(totalQuestions) <= 0) {
      notification.error("Valid number of questions is required");
      return false;
    }
    if (!totalMarks || Number(totalMarks) <= 0) {
      notification.error("Valid total marks is required");
      return false;
    }
    return true;
  }, [
    name,
    selectedSubjectId,
    selectedTopicIds,
    selectedSubTopicIds,
    totalTime,
    totalQuestions,
    totalMarks,
    notification,
  ]);

  const handleCreateTest = useCallback(
    async (saveAsDraft: boolean = false) => {
      if (!validateForm()) return;

      const payload: CreateTestRequest = {
        name: name.trim(),
        type: type as "chapterwise" | "subjectwise",
        subject: selectedSubjectId,
        topics: selectedTopicIds,
        sub_topics: selectedSubTopicIds,
        correct_marks: Number(correctMarks) || 5,
        wrong_marks: Number(wrongMarks) || -1,
        unattempt_marks: Number(unattemptMarks) || 0,
        difficulty: difficulty as "easy" | "medium" | "hard",
        total_time: Number(totalTime),
        total_marks: Number(totalMarks),
        total_questions: Number(totalQuestions) || 0,
        status: saveAsDraft ? "draft" : "unpublished",
      };

      try {
        const result = await dispatch(thunkCreateTest(payload)).unwrap();
        if (saveAsDraft) {
          notification.success("Test saved as draft");
          dispatch(resetForm());
          navigate(ROUTES.DASHBOARD);
          return { success: true, isDraft: true };
        } else {
          notification.success("Test created successfully");
          return { success: true, isDraft: false, testId: result.id };
        }
      } catch (error) {
        // Handle validation errors from API
        if (error && typeof error === "object" && "errors" in error) {
          const errors = (error as { errors: Array<{ msg: string }> }).errors;
          const message = errors.map((e) => `• ${e.msg}`).join("\n");
          notification.error(message);
        } else {
          notification.error("Failed to create test. Please try again.");
        }
        return { success: false };
      }
    },
    [
      dispatch,
      navigate,
      notification,
      validateForm,
      name,
      type,
      selectedSubjectId,
      selectedTopicIds,
      selectedSubTopicIds,
      correctMarks,
      wrongMarks,
      unattemptMarks,
      difficulty,
      totalTime,
      totalMarks,
      totalQuestions,
    ],
  );

  const handleCancel = useCallback(() => {
    dispatch(resetForm());
    navigate(ROUTES.DASHBOARD);
  }, [dispatch, navigate]);

  const handleResetForm = useCallback(() => {
    dispatch(resetFormFields());
  }, [dispatch]);

  return {
    // Data
    subjects,
    topics,
    subTopics,
    // Selected values
    selectedSubjectId,
    selectedTopicIds,
    selectedSubTopicIds,
    // Form fields
    name,
    type,
    difficulty,
    totalTime,
    totalQuestions,
    totalMarks,
    correctMarks,
    wrongMarks,
    unattemptMarks,
    // States
    isLoading,
    isLoadingTopics,
    isLoadingSubTopics,
    isCreating,
    error,
    createdTest,
    shouldOpenSubTopicsDropdown,
    editingTestId,
    // Actions
    fetchSubjects,
    handleSubjectChange,
    handleTopicChange,
    handleSubTopicChange,
    handleNameChange,
    handleTypeChange,
    handleDifficultyChange,
    handleTotalTimeChange,
    handleTotalQuestionsChange,
    handleTotalMarksChange,
    handleCorrectMarksChange,
    handleWrongMarksChange,
    handleUnattemptMarksChange,
    handleCreateTest,
    handleCancel,
    validateForm,
    handleSubTopicDropdownOpen,
    handleSubTopicDropdownClose,
    handleResetForm,
    loadTestForEditing,
    clearEditingTest,
  };
};
