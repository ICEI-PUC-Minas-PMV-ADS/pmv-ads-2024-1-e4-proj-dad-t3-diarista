import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br"; // Import the Portuguese locale
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from "../../components/HeaderSaory2";

moment.locale("pt-br"); // Set the moment locale to Portuguese
const localizer = momentLocalizer(moment);

const messages = {
  allDay: 'Dia inteiro',
  previous: 'Anterior',
  next: 'Próximo',
  today: 'Hoje',
  month: 'Mês',
  week: 'Semana',
  day: 'Dia',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
  noEventsInRange: 'Não há eventos nesta faixa de datas.',
  showMore: (total) => `+ Ver mais (${total})`
};

const App = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [selectEvent, setSelectEvent] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setSelectEvent(null);
    setEventTitle("");
    setClientName("");
    setLocation("");
    setNotes("");
    setNotifications(false);
  };

  const handleSelectedEvent = (event) => {
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event.title);
    setClientName(event.clientName || "");
    setLocation(event.location || "");
    setNotes(event.notes || "");
    setNotifications(event.notifications || false);
  };

  const saveEvent = () => {
    if (eventTitle && selectedDate) {
      const eventDetails = {
        title: eventTitle,
        start: selectedDate,
        end: moment(selectedDate).add(1, "hours").toDate(),
        clientName,
        location,
        notes,
        notifications
      };

      if (selectEvent) {
        const updatedEvent = { ...selectEvent, ...eventDetails };
        const updatedEvents = events.map((event) =>
          event.id === selectEvent.id ? updatedEvent : event
        );
        setEvents(updatedEvents);
      } else {
        setEvents([...events, { ...eventDetails, id: events.length + 1 }]);
      }

      setShowModal(false);
      setEventTitle("");
      setClientName("");
      setLocation("");
      setNotes("");
      setNotifications(false);
      setSelectEvent(null);
    }
  };

  const deleteEvents = () => {
    if (selectEvent) {
      const updatedEvents = events.filter((event) => event.id !== selectEvent.id);
      setEvents(updatedEvents);
      setShowModal(false);
      setEventTitle("");
      setClientName("");
      setLocation("");
      setNotes("");
      setNotifications(false);
      setSelectEvent(null);
    }
  };

  return (
    <div style={{ height: "500px" }}>
      <Header />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "50px" }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectedEvent}
        messages={messages} // Apply the custom messages
        views={['month', 'week', 'day', 'agenda']} // Ensure all views are available
      />

      {showModal && (
        <div
          className="modal"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectEvent ? "Editar Evento" : "Adicionar Evento"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    setEventTitle("");
                    setClientName("");
                    setLocation("");
                    setNotes("");
                    setNotifications(false);
                    setSelectEvent(null);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <label htmlFor="eventTitle" className="form-label">
                  Título do Evento:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="eventTitle"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                />

                <label htmlFor="clientName" className="form-label mt-3">
                  Cliente:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="clientName"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />

                <label htmlFor="location" className="form-label mt-3">
                  Local:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />

                <label htmlFor="notes" className="form-label mt-3">
                  Anotações Adicionais:
                </label>
                <textarea
                  className="form-control"
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>

                <div className="form-check mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="notifications"
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="notifications">
                    Notificações
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                {selectEvent && (
                  <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={deleteEvents}
                  >
                    Deletar Evento
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveEvent}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
