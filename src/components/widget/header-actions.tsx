'use client';

interface WidgetHeaderActionsProps {
  onRemove: () => void;
  onEdit: () => void;
}

export default function WidgetHeaderActions({
  onRemove,
  onEdit,
}: WidgetHeaderActionsProps) {
  return (
    <>
      <button onClick={onEdit} className="widget-action edit">
        Edit
      </button>
      <button onClick={onRemove} className="widget-action remove">
        Remove
      </button>
    </>
  );
}
