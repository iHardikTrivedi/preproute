import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import AppBreadcrumbs from "@/components/common/AppBreadcrumbs";
import AppButton from "@/components/common/AppButton";
import PageLoader from "@/components/common/PageLoader";
import AppMultiSelectField from "@/components/form/AppMultiSelectField";
import AppNumberField from "@/components/form/AppNumberField";
import AppRadioGroup from "@/components/form/AppRadioGroup";
import type { AppSelectOption } from "@/components/form/AppSelectField";
import AppSelectField from "@/components/form/AppSelectField";
import AppTextFieldSimple from "@/components/form/AppTextFieldSimple";
import COLORS from "@/theme/colors";
import QuestionsPage from "@/features/questions/pages/QuestionsPage";
import type { TestItem } from "@/features/dashboard/types/dashboard.types";
import TestTabs from "../components/TestTabs";
import { DIFFICULTY_OPTIONS } from "../constants";
import { useTestCreation } from "../hooks/useTestCreation";

const CreateTestPage = () => {
  const [createdTestId, setCreatedTestId] = useState<string | null>(null);
  const location = useLocation();
  const editTest = location.state?.test as TestItem | undefined;

  const {
    subjects,
    topics,
    subTopics,
    selectedSubjectId,
    selectedTopicIds,
    selectedSubTopicIds,
    name,
    type,
    difficulty,
    totalTime,
    totalQuestions,
    totalMarks,
    correctMarks,
    wrongMarks,
    unattemptMarks,
    isLoading,
    isLoadingTopics,
    isLoadingSubTopics,
    isCreating,
    shouldOpenSubTopicsDropdown,
    editingTestId,
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
    handleSubTopicDropdownOpen,
    handleSubTopicDropdownClose,
    handleResetForm,
    loadTestForEditing,
    clearEditingTest,
  } = useTestCreation();

  // Load test data for editing when editTest is provided
  useEffect(() => {
    if (editTest) {
      loadTestForEditing({
        id: editTest.id,
        name: editTest.name,
        type: editTest.type,
        subject: editTest.subject,
        topics: editTest.topics,
        subTopics: editTest.subTopics,
        difficulty: editTest.difficulty,
        totalTime: String(editTest.totalTime),
        totalQuestions: String(editTest.totalQuestions),
        totalMarks: String(editTest.totalMarks),
        correctMarks: String(editTest.correctMarks),
        wrongMarks: String(editTest.wrongMarks),
        unattemptMarks: String(editTest.unattemptMarks),
      });
    }
    return () => {
      clearEditingTest();
    };
  }, [editTest, loadTestForEditing, clearEditingTest]);

  useEffect(() => {
    // Only fetch subjects if not already loaded
    if (subjects.length === 0) {
      fetchSubjects();
    }
  }, [fetchSubjects, subjects.length]);

  const handleNext = async () => {
    if (editingTestId) {
      // TODO: Call update API
      return;
    }
    const result = await handleCreateTest(false);
    if (result?.success && result?.testId) {
      setCreatedTestId(result.testId);
    }
  };

  // Show QuestionsPage if test was created successfully
  if (createdTestId) {
    return (
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
        <QuestionsPage testId={createdTestId} />
      </Box>
    );
  }

  // Only show full PageLoader on initial load (no subjects and loading)
  if (isLoading && subjects.length === 0) {
    return <PageLoader fullPage />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        bgcolor: "background.paper",
      }}
    >
      {/* Breadcrumb Header */}
      <Box
        sx={{
          height: 72,
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          pl: { xs: 2.5, md: 3 },
          pr: { xs: 2.5, md: 3 },
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <AppBreadcrumbs items={[{ label: "Dashboard" }, { label: editingTestId ? "Edit Test" : "Create Test" }]} />
      </Box>

      {/* Form Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
          pl: { xs: 2.5, md: 3 },
          pr: { xs: 2.5, md: 3 },
          pt: 3,
          pb: 3,
          overflow: "auto",
        }}
      >
        {/* Test Type Tabs */}
        <Box
          sx={{
            display: "flex",
            columnGap: { md: 4.5 },
            width: "100%",
            pb: 3,
          }}
        >
          <TestTabs value={type as never} onChange={(val) => handleTypeChange(val as string)} />
        </Box>

        {/* Primary Form Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            columnGap: { md: 4.5 },
            rowGap: 3,
            width: "100%",
          }}
        >
          {/* Subject */}
          <AppSelectField
            label="Subject"
            value={selectedSubjectId}
            options={subjects.map((s): AppSelectOption => ({ label: s.name, value: s.id }))}
            placeholder="Choose from Drop-down"
            onChange={handleSubjectChange}
          />

          {/* Name of Test */}
          <AppTextFieldSimple
            label="Name of Test"
            value={name}
            placeholder="Enter name of Test"
            onChange={handleNameChange}
          />

          {/* Topic */}
          <AppMultiSelectField
            label="Topic"
            values={selectedTopicIds}
            options={topics.map((t) => ({ label: t.name, value: t.id }))}
            placeholder="Choose from Drop-down"
            onChange={handleTopicChange}
            disabled={!selectedSubjectId}
            loading={isLoadingTopics}
          />

          {/* Sub Topic */}
          <AppMultiSelectField
            label="Sub Topic"
            values={selectedSubTopicIds}
            options={subTopics.map((st) => ({
              label: st.name,
              value: st.id,
            }))}
            placeholder="Choose from Drop-down"
            onChange={handleSubTopicChange}
            onOpen={handleSubTopicDropdownOpen}
            onClose={handleSubTopicDropdownClose}
            disabled={selectedTopicIds.length === 0}
            loading={isLoadingSubTopics}
            open={shouldOpenSubTopicsDropdown}
          />

          {/* Duration */}
          <AppNumberField
            label="Duration (Minutes)"
            value={totalTime}
            placeholder="Enter the time"
            onChange={handleTotalTimeChange}
            min={1}
          />

          {/* Test Difficulty Level */}
          <AppRadioGroup
            label="Test Difficulty Level"
            value={difficulty}
            options={DIFFICULTY_OPTIONS}
            onChange={handleDifficultyChange}
          />
        </Box>

        {/* Marking Scheme Section */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
            Marking Scheme:
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(3, 1fr)",
                md: "minmax(110px, 0.65fr) minmax(110px, 0.65fr) minmax(110px, 0.65fr) minmax(180px, 1fr) minmax(180px, 1fr)",
              },
              gap: { xs: 2, md: 4.5 },
              width: "100%",
            }}
          >
            {/* Wrong Answer */}
            <AppNumberField
              label="Wrong Answer"
              value={wrongMarks}
              onChange={handleWrongMarksChange}
              step={1}
            />

            {/* Unattempted */}
            <AppNumberField
              label="Unattempted"
              value={unattemptMarks}
              onChange={handleUnattemptMarksChange}
              step={1}
            />

            {/* Correct Answer */}
            <AppNumberField
              label="Correct Answer"
              value={correctMarks}
              onChange={handleCorrectMarksChange}
              step={1}
            />

            {/* No of Questions */}
            <AppNumberField
              label="No of Questions"
              value={totalQuestions}
              placeholder="Ex:250 Questions"
              onChange={handleTotalQuestionsChange}
              min={1}
            />

            {/* Total Marks */}
            <AppNumberField
              label="Total Marks"
              value={totalMarks}
              placeholder="Ex:250 Marks"
              onChange={handleTotalMarksChange}
              min={1}
            />
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "flex-end",
            gap: 2,
            mt: 4.5,
          }}
        >
          <AppButton
            variant="outlined"
            onClick={handleCancel}
            sx={{
              minWidth: 120,
              maxWidth: { xs: "100%", sm: 130 },
              backgroundColor: COLORS.sidebar.activeBackground,
              borderColor: "transparent",
            }}
          >
            Cancel
          </AppButton>

          <AppButton
            onClick={handleNext}
            loading={isCreating}
            sx={{
              minWidth: 120,
              maxWidth: { xs: "100%", sm: 130 },
            }}
          >
            {editingTestId ? "Update" : "Next"}
          </AppButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateTestPage;
