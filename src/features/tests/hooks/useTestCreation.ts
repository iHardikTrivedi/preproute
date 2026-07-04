import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useNotification } from "@/hooks/useNotification";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/router/routes";
import type { CreateTestRequest } from "../types/tests.types";

import {
  thunkFetchSubjects,
  thunkFetchTopicsBySubject,
  thunkFetchSubTopicsByTopic,
  thunkCreateTest,
} from "./useCreateTest";

import {
  selectSubjects,
  selectTopics,
  selectSubTopics,
  selectSelectedSubjectId,
  selectSelectedTopicId,
  selectSelectedSubTopicId,
  selectName,
  selectType,
  selectDifficulty,
  selectTotalTime,
  selectTotalQuestions,
  selectTotalMarks,
  selectCorrectMarks,
  selectWrongMarks,
  selectUnattemptMarks,
  selectIsLoading,
  selectIsCreating,
  selectError,
  selectCreatedTest,
} from "../store/testCreation.selectors";

import {
  setSelectedSubjectId,
  setSelectedTopicId,
  setSelectedSubTopicId,
  setName,
  setType,
  setDifficulty,
  setTotalTime,
  setTotalQuestions,
  setTotalMarks,
  setCorrectMarks,
  setWrongMarks,
  setUnattemptMarks,
  resetForm,
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
  const selectedTopicId = useAppSelector(selectSelectedTopicId);
  const selectedSubTopicId = useAppSelector(selectSelectedSubTopicId);
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
  const isCreating = useAppSelector(selectIsCreating);
  const error = useAppSelector(selectError);
  const createdTest = useAppSelector(selectCreatedTest);

  // Actions
  const fetchSubjects = useCallback(() => {
    dispatch(thunkFetchSubjects());
  }, [dispatch]);

  const handleSubjectChange = useCallback(
    (subjectId: string) => {
      dispatch(setSelectedSubjectId(subjectId));
      if (subjectId) {
        dispatch(thunkFetchTopicsBySubject(subjectId));
      }
    },
    [dispatch]
  );

  const handleTopicChange = useCallback(
    (topicId: string) => {
      dispatch(setSelectedTopicId(topicId));
      if (topicId) {
        dispatch(thunkFetchSubTopicsByTopic(topicId));
      }
    },
    [dispatch]
  );

  const handleSubTopicChange = useCallback(
    (subTopicId: string) => {
      dispatch(setSelectedSubTopicId(subTopicId));
    },
    [dispatch]
  );

  const handleNameChange = useCallback(
    (value: string) => {
      dispatch(setName(value));
    },
    [dispatch]
  );

  const handleTypeChange = useCallback(
    (value: string) => {
      dispatch(setType(value));
    },
    [dispatch]
  );

  const handleDifficultyChange = useCallback(
    (value: string) => {
      dispatch(setDifficulty(value));
    },
    [dispatch]
  );

  const handleTotalTimeChange = useCallback(
    (value: string) => {
      dispatch(setTotalTime(value));
    },
    [dispatch]
  );

  const handleTotalQuestionsChange = useCallback(
    (value: string) => {
      dispatch(setTotalQuestions(value));
    },
    [dispatch]
  );

  const handleTotalMarksChange = useCallback(
    (value: string) => {
      dispatch(setTotalMarks(value));
    },
    [dispatch]
  );

  const handleCorrectMarksChange = useCallback(
    (value: string) => {
      dispatch(setCorrectMarks(value));
    },
    [dispatch]
  );

  const handleWrongMarksChange = useCallback(
    (value: string) => {
      dispatch(setWrongMarks(value));
    },
    [dispatch]
  );

  const handleUnattemptMarksChange = useCallback(
    (value: string) => {
      dispatch(setUnattemptMarks(value));
    },
    [dispatch]
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
    if (!selectedTopicId) {
      notification.error("Topic is required");
      return false;
    }
    if (!selectedSubTopicId) {
      notification.error("Sub Topic is required");
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
  }, [name, selectedSubjectId, selectedTopicId, selectedSubTopicId, totalTime, totalQuestions, totalMarks, notification]);

  const handleCreateTest = useCallback(
    async (saveAsDraft: boolean = false) => {
      if (!validateForm()) return;

      const payload: CreateTestRequest = {
        name: name.trim(),
        type: type as "chapterwise" | "subjectwise",
        subject: selectedSubjectId,
        topics: [selectedTopicId],
        sub_topics: [selectedSubTopicId],
        correct_marks: Number(correctMarks) || 5,
        wrong_marks: Number(wrongMarks) || -1,
        unattempt_marks: Number(unattemptMarks) || 0,
        difficulty: difficulty as "easy" | "medium" | "hard",
        total_time: Number(totalTime),
        total_marks: Number(totalMarks),
        total_questions: Number(totalQuestions) || 0,
        status: saveAsDraft ? "draft" : null,
      };

      try {
        const result = await dispatch(thunkCreateTest(payload)).unwrap();
        if (saveAsDraft) {
          notification.success("Test saved as draft");
          dispatch(resetForm());
          navigate(ROUTES.DASHBOARD);
        } else {
          notification.success("Test created successfully");
          navigate(`${ROUTES.QUESTIONS.replace(":testId", result.id)}`);
        }
      } catch {
        notification.error("Failed to create test. Please try again.");
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
      selectedTopicId,
      selectedSubTopicId,
      correctMarks,
      wrongMarks,
      unattemptMarks,
      difficulty,
      totalTime,
      totalMarks,
      totalQuestions,
    ]
  );

  const handleCancel = useCallback(() => {
    dispatch(resetForm());
    navigate(ROUTES.DASHBOARD);
  }, [dispatch, navigate]);

  return {
    // Data
    subjects,
    topics,
    subTopics,
    // Selected values
    selectedSubjectId,
    selectedTopicId,
    selectedSubTopicId,
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
    isCreating,
    error,
    createdTest,
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
  };
};
