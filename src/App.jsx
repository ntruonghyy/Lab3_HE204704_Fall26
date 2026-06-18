import StudentManager from "./component/useReducer";
import { ThemeProvider, ThemeToggleButton, useTheme } from "./component/ThemeManagement";

function AppContent() {
    const { styles } = useTheme();

    return (
        <div style={styles.app}>
            <div style={{ marginBottom: '20px' }}>
                <h1 style={{ margin: "0 0 16px 0" }}>Student Management</h1>
                <ThemeToggleButton />
            </div>
            <StudentManager />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;