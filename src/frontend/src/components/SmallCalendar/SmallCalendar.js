import React, { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import GlobalContext from "../../context/GlobalContext";
import CreateEventButton from "../../components/CreateEvent/CreateEventButton";
import SmallCalendar from "../../components/SmallCalendar/SmallCalendar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styled from "styled-components";
import Labels from "../../components/Labels/Labels";
import Month from "../../components/Month/Month";
import logo from "../../assets/LOGO 1.png";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Link = styled.a`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  margin: 0 20px;
  padding-right: 40px;
`;

export default function UnifiedComponent() {
  const {
    monthIndex,
    setMonthIndex,
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    setSmallCalendarMonth,
    setDaySelected,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
  const [location, setLocation] = useState(
    selectedEvent ? selectedEvent.location : ""
  );
  const [clients, setClients] = useState(
    selectedEvent && selectedEvent.clients ? selectedEvent.clients.join(", ") : ""
  );

  useEffect(() => {
    dayjs.locale("pt-br");
    setSmallCalendarMonth(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      location,
      clients: clients.split(","),
      day: daySelected ? daySelected.valueOf() : dayjs().valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <header className="px-4 py-2 flex items-center" style={{ backgroundColor: 'teal', color: 'white' }}>
        <img src={logo} alt="calendar" className="mr-2 w-12 h-12 mt-1 mb-1" />
        <h1 className="mr-10 text-xl font-bold">
          Agendamento de Atividades
        </h1>
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer mx-2">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer mx-2">
            chevron_right
          </span>
        </button>
        <h2 className="ml-4 text-xl font-bold">
          {capitalizeFirstLetter(dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY"))}
        </h2>
        <Container>
          <Link href="#">INÍCIO</Link>
          <Link href="#">SERVIÇOS</Link>
          <Link href="#">AGENDA</Link>
          <Link href="#">FINANÇAS</Link>
        </Container>
      </header>
      <Sidebar>
        <aside className="border p-5 w-64">
          <CreateEventButton />
          <SmallCalendar />
          <Labels />
        </aside>
      </Sidebar>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <form className="bg-white rounded-lg shadow-2xl w-1/4">
          <header className="bg-teal-500 px-4 py-2 flex justify-between items-center">
            <span className="material-icons-outlined text-white">
              drag_handle
            </span>
            <div>
              {selectedEvent && (
                <span
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}
                  className="material-icons-outlined text-white cursor-pointer"
                >
                  delete
                </span>
              )}
              <button onClick={() => setShowEventModal(false)}>
                <span className="material-icons-outlined text-white">
                  close
                </span>
              </button>
            </div>
          </header>
          <div className="p-3">
            <div className="grid grid-cols-1/5 items-end gap-y-7">
              <div></div>
              <input
                type="text"
                name="title"
                placeholder="Adicione um título"
                value={title}
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />
              <span className="material-icons-outlined text-gray-400">
                schedule
              </span>
              <p>{daySelected && daySelected.format("dddd, MMMM DD")}</p>
              <span className="material-icons-outlined text-gray-400">
                segment
              </span>
              <input
                type="text"
                name="description"
                placeholder="Adicione a descrição da diária"
                value={description}
                required
                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
              <span className="material-icons-outlined text-gray-400">
                bookmark_border
              </span>
              <div className="flex gap-x-2">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="material-icons-outlined text-white text-sm">
                        check
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="material-icons-outlined text-gray-400">
                location_on
              </span>
              <input
                type="text"
                name="location"
                placeholder="Adicione o local da diária"
                value={location}
                required
                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setLocation(e.target.value)}
              />
              <span className="material-icons-outlined text-gray-400">
                people
              </span>
              <input
                type="text"
                name="clients"
                placeholder="Adicione o nome do cliente"
                value={clients}
                required
                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setClients(e.target.value)}
              />
            </div>
          </div>
          <footer className="flex justify-end border-t p-3 mt-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
            >
              Salvar
            </button>
          </footer>
        </form>
      </div>
    </>
  );
}
