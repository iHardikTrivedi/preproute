export const DASHBOARD_TEXT = {
  TITLE: "Dashboard",

  ALL_TESTS: "All Tests",
  NO_TESTS_FOUND: "No Tests Found",
  NO_TESTS_FOUND_SUBTITLE:
    "You have not created any tests yet. Create your first test to get started.",

  CREATE_TEST: "Create Test",
} as const;

export const TEST_TABLE_COLUMNS = [
  {
    key: "name",
    label: "Test Name",
    width: "35%",
    align: "left",
  },
  {
    key: "subject",
    label: "Subject",
    width: "20%",
    align: "left",
  },
  {
    key: "status",
    label: "Status",
    width: "15%",
    align: "left",
  },
  {
    key: "createdAt",
    label: "Created Date",
    width: "20%",
    align: "left",
  },
  {
    key: "actions",
    label: "Actions",
    width: "10%",
    align: "right",
  },
] as const;
