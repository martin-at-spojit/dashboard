import { WidgetLayout } from '@/config/dashboard';
import type { Breakpoint } from '@/data/dashboard/config/mock-data';

interface DashboardHeaderProps {
  currentConfig: {
    type: string;
    layouts: Record<string, WidgetLayout[]>;
  };
  currentBreakpoint: Breakpoint;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  handleSwitchLayout: () => void;
  handleAddWidget: () => void;
}

export default function DashboardHeader({
  currentConfig,
  currentBreakpoint,
  editMode,
  setEditMode,
  handleSwitchLayout,
  handleAddWidget,
}: DashboardHeaderProps) {
  return (
    <div className="dashboard-header">
      <div>Layout: {currentConfig.type}</div>
      <div>Widgets:</div>
      <div>{JSON.stringify(currentConfig.layouts['lg'])}</div>
      {currentBreakpoint === 'lg' && (
        <>
          <button onClick={() => setEditMode(!editMode)}>
            {editMode ? 'Exit Edit Mode' : 'Edit Dashboard'}
          </button>
          {editMode && <button onClick={handleAddWidget}>Add widget</button>}
        </>
      )}
      <button onClick={handleSwitchLayout}>Switch layout</button>
    </div>
  );
}
