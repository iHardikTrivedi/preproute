import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, IconButton, Tooltip } from "@mui/material";

interface TestActionsProps {
  id: string;

  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const TestActions = ({ id, onView, onEdit, onDelete }: TestActionsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <Tooltip title="View">
        <IconButton size="small" onClick={() => onView?.(id)}>
          <VisibilityOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Edit">
        <IconButton size="small" onClick={() => onEdit?.(id)}>
          <EditOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton size="small" color="error" onClick={() => onDelete?.(id)}>
          <DeleteOutlineRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TestActions;
