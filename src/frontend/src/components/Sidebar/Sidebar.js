import React from "react";
import CreateEventButton from "../CreateEvent/CreateEventButton";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
import Labels from "../Labels/Labels";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
