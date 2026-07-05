import { useCallback } from "react";

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

  // Actions
  const fetchSubjects = useCallback(() => {
    dispatch(thunkFetchSubjects());
  }, [dispatch]);

  const loadTestForEditing = useCallback(
    async (test: {
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
      // First, set the form data
      dispatch(loadTestForEdit(test));
      // Then fetch topics for the subject
      await dispatch(thunkFetchTopicsBySubject(test.subject));
      // Fetch subtopics for the topics
      if (test.topics.length > 0) {
        await dispatch(thunkFetchSubTopicsByTopic(test.topics));
      }
    },
    [dispatch]
  );

  const clearEditingTest = useCallback(() => {
    dispatch(setEditingTestId(null));
  }, [dispatch]);

  const handleSubjectChange = useCallback(
    (subjectId: string) => {
      dispatch(setSelectedSubjectId(subjectId));
      if (subjectId) {
        dispatch(thunkFetchTopicsBySubject(subjectId));
      }
    },
    [dispatch],
  );

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
      // Fetch subtopics for all selected topics first
      if (selectedTopicIds.length > 0) {
        dispatch(thunkFetchSubTopicsByTopic(selectedTopicIds));
      }
      dispatch(setSelectedSubTopicIds(subTopicIds));
    },
    [dispatch, selectedTopicIds],
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
