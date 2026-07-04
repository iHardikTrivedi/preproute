import { useState } from "react";

import { Box, Typography } from "@mui/material";

import AppBreadcrumbs from "@/components/common/AppBreadcrumbs";
import AppButton from "@/components/common/AppButton";
import PageLoader from "@/components/common/PageLoader";
import AppNumberField from "@/components/form/AppNumberField";
import AppRadioGroup from "@/components/form/AppRadioGroup";
import type { AppSelectOption } from "@/components/form/AppSelectField";
import AppSelectField from "@/components/form/AppSelectField";
import AppTextFieldSimple from "@/components/form/AppTextFieldSimple";
import COLORS from "@/theme/colors";
import TestTabs from "../components/TestTabs";
import { DIFFICULTY_OPTIONS } from "../constants";

// Mock data for testing
const MOCK_SUBJECTS = [
  { id: "1", name: "Mathematics" },
  { id: "2", name: "Physics" },
  { id: "3", name: "Chemistry" },
  { id: "4", name: "Biology" },
];

const MOCK_TOPICS = [
  { id: "1", name: "Algebra" },
  { id: "2", name: "Geometry" },
  { id: "3", name: "Calculus" },
  { id: "4", name: "Statistics" },
];

const MOCK_SUBTOPICS = [
  { id: "1", name: "Linear Equations" },
  { id: "2", name: "Quadratic Equations" },
  { id: "3", name: "Polynomials" },
  { id: "4", name: "Binomial Theorem" },
];

interface FormData {
  testType: string;
  subject: string;
  name: string;
  topic: string;
  subTopic: string;
  duration: string;
  difficulty: string;
  wrongMarks: string;
  unattemptedMarks: string;
  correctMarks: string;
  noOfQuestions: string;
  totalMarks: string;
}

const initialFormData: FormData = {
  testType: "chapterwise",
  subject: "",
  name: "",
  topic: "",
  subTopic: "",
  duration: "",
  difficulty: "easy",
  wrongMarks: "-1",
  unattemptedMarks: "0",
  correctMarks: "5",
  noOfQuestions: "",
  totalMarks: "",
};

const CreateTestPage = () => {
  const [isLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleNext = () => {
    console.log("Form data:", formData);
  };

  if (isLoading) {
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
        <AppBreadcrumbs items={[{ label: "Dashboard" }, { label: "Create Test" }]} />
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
          }}
        >
          <TestTabs
            value={formData.testType as any}
            onChange={(val) => handleChange("testType", val as string)}
          />
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
            value={formData.subject}
            options={MOCK_SUBJECTS.map((s): AppSelectOption => ({ label: s.name, value: s.id }))}
            placeholder="Choose from Drop-down"
            onChange={(value) => handleChange("subject", value)}
          />

          {/* Name of Test */}
          <AppTextFieldSimple
            label="Name of Test"
            value={formData.name}
            placeholder="Enter name of Test"
            onChange={(value) => handleChange("name", value)}
          />

          {/* Topic */}
          <AppSelectField
            label="Topic"
            value={formData.topic}
            options={MOCK_TOPICS.map((t): AppSelectOption => ({ label: t.name, value: t.id }))}
            placeholder="Choose from Drop-down"
            onChange={(value) => handleChange("topic", value)}
            disabled={!formData.subject}
          />

          {/* Sub Topic */}
          <AppSelectField
            label="Sub Topic"
            value={formData.subTopic}
            options={MOCK_SUBTOPICS.map((st): AppSelectOption => ({
              label: st.name,
              value: st.id,
            }))}
            placeholder="Choose from Drop-down"
            onChange={(value) => handleChange("subTopic", value)}
            disabled={!formData.topic}
          />

          {/* Duration */}
          <AppNumberField
            label="Duration (Minutes)"
            value={formData.duration}
            placeholder="Enter the time"
            onChange={(value) => handleChange("duration", value)}
            min={1}
          />

          {/* Test Difficulty Level */}
          <AppRadioGroup
            label="Test Difficulty Level"
            value={formData.difficulty}
            options={DIFFICULTY_OPTIONS}
            onChange={(value) => handleChange("difficulty", value)}
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
              value={formData.wrongMarks}
              onChange={(value) => handleChange("wrongMarks", value)}
              step={1}
            />

            {/* Unattempted */}
            <AppNumberField
              label="Unattempted"
              value={formData.unattemptedMarks}
              onChange={(value) => handleChange("unattemptedMarks", value)}
              step={1}
            />

            {/* Correct Answer */}
            <AppNumberField
              label="Correct Answer"
              value={formData.correctMarks}
              onChange={(value) => handleChange("correctMarks", value)}
              step={1}
            />

            {/* No of Questions */}
            <AppNumberField
              label="No of Questions"
              value={formData.noOfQuestions}
              placeholder="Ex:250 Questions"
              onChange={(value) => handleChange("noOfQuestions", value)}
              min={1}
            />

            {/* Total Marks */}
            <AppNumberField
              label="Total Marks"
              value={formData.totalMarks}
              placeholder="Ex:250 Marks"
              onChange={(value) => handleChange("totalMarks", value)}
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
            sx={{
              minWidth: 120,
              maxWidth: { xs: "100%", sm: 130 },
            }}
          >
            Next
          </AppButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateTestPage;
