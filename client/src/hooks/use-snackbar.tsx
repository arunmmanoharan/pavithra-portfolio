import { createContext, useContext, useState, useCallback } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import type { AlertColor } from "@mui/material/Alert";

interface SnackbarMessage {
  title: string;
  description?: string;
  severity?: AlertColor;
}

interface SnackbarContextType {
  showSnackbar: (msg: SnackbarMessage) => void;
}

const SnackbarContext = createContext<SnackbarContextType | null>(null);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<SnackbarMessage>({ title: "" });

  const showSnackbar = useCallback((msg: SnackbarMessage) => {
    setMessage(msg);
    setOpen(true);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={message.severity || "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          <strong>{message.title}</strong>
          {message.description && (
            <span style={{ display: "block", fontSize: "0.85rem", marginTop: 2 }}>
              {message.description}
            </span>
          )}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const ctx = useContext(SnackbarContext);
  if (!ctx) throw new Error("useSnackbar must be used within SnackbarProvider");
  return ctx;
}
