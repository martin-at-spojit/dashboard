import WidgetHeader from './header';
import WidgetContent from './content';
import { WidgetData } from './content';

interface WidgetProps {
  editMode: boolean;
  widget: {
    i: string;
    type: string;
  };
  widgetHeaderActions: React.ReactNode;
  widgetData: WidgetData;
}

export default function Widget({
  editMode,
  widget,
  widgetHeaderActions,
  widgetData,
}: WidgetProps) {
  return (
    <>
      <WidgetHeader title={widget.type} icon={null}>
        {editMode && widgetHeaderActions}
      </WidgetHeader>
      <WidgetContent type={widget.type} data={widgetData} editMode={editMode} />
    </>
  );
}
