import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Switch, StyleSheet, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [notifications, setNotifications] = useState(false);
  const [evaluation, setEvaluation] = useState(""); // New state for evaluation
  const [selectEvent, setSelectEvent] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const newMarkedDates = {};
    events.forEach(event => {
      newMarkedDates[event.date] = { marked: true, dotColor: 'green', selectedColor: 'green' };
    });
    if (selectedDate) {
      newMarkedDates[selectedDate] = { selected: true, selectedColor: 'blue' };
    }
    setMarkedDates(newMarkedDates);
  }, [events, selectedDate]);

  const handleSelectSlot = (day) => {
    setSelectedDate(day.dateString);
  };

  const openForm = () => {
    if (selectedDate) {
      setShowModal(true);
      resetForm();
    }
  };

  const handleSelectedEvent = (event) => {
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event.title);
    setClientName(event.clientName || '');
    setLocation(event.location || '');
    setNotes(event.notes || '');
    setNotifications(event.notifications || false);
    setEvaluation(event.evaluation || ""); // Set evaluation state
  };

  const saveEvent = () => {
    if (eventTitle && selectedDate) {
      const eventDetails = {
        title: eventTitle,
        clientName,
        location,
        notes,
        notifications,
        date: selectedDate,
        evaluation // Include evaluation in event details
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
      resetForm();
    }
  };

  const deleteEvents = () => {
    if (selectEvent) {
      const updatedEvents = events.filter((event) => event.id !== selectEvent.id);
      setEvents(updatedEvents);
      setShowModal(false);
      resetForm();
    }
  };

  const resetForm = () => {
    setEventTitle('');
    setClientName('');
    setLocation('');
    setNotes('');
    setNotifications(false);
    setSelectEvent(null);
    setEvaluation(''); // Reset evaluation
  };

  const cancelEvent = () => {
    setShowModal(false);
    resetForm();
  };

  const getEventsForSelectedDate = () => {
    return events.filter(event => event.date === selectedDate);
  };

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        onDayPress={handleSelectSlot}
        markedDates={markedDates}
      />
      <TouchableOpacity
        style={[styles.createButton, !selectedDate && styles.createButtonDisabled]}
        onPress={openForm}
        disabled={!selectedDate}
      >
        <Text style={styles.createButtonText}>Criar</Text>
      </TouchableOpacity>

      <FlatList
        data={getEventsForSelectedDate()}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectedEvent(item)}>
            <View style={styles.eventItem}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text>{item.clientName}</Text>
              <Text>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          selectedDate ? <Text style={styles.noEventsText}>Nenhum evento para esta data.</Text> : null
        }
      />

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectEvent ? 'Editar Evento' : 'Adicionar Evento'}</Text>
          <TextInput
            style={styles.input}
            value={eventTitle}
            onChangeText={setEventTitle}
            placeholder="Título do Evento"
          />
          <TextInput
            style={styles.input}
            value={clientName}
            onChangeText={setClientName}
            placeholder="Nome do Cliente"
          />
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Local"
          />
          <TextInput
            style={styles.input}
            value={notes}
            onChangeText={setNotes}
            placeholder="Descrição"
            multiline
          />
          <View style={styles.switchContainer}>
            <Text>Receber Notificações</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#767577', true: '#4CAF50' }}
              thumbColor={notifications ? '#4CAF50' : '#f4f3f4'}
            />
          </View>
          <Text style={styles.label}>Avaliação da Diária:</Text>
          <View style={styles.evaluationContainer}>
            {["Muito Bom", "Bom", "Médio", "Ruim", "Muito Ruim"].map((evalText, index) => (
              <Text
                key={index}
                style={[styles.evaluationOption, evaluation === evalText && styles.evaluationSelected]}
                onPress={() => setEvaluation(evalText)}
              >
                {evalText === "Muito Bom" && "😀"}
                {evalText === "Bom" && "😊"}
                {evalText === "Médio" && "😐"}
                {evalText === "Ruim" && "😟"}
                {evalText === "Muito Ruim" && "😢"}
              </Text>
            ))}
          </View>
          <Text style={styles.selectedEvaluation}>Avaliação Selecionada: {evaluation}</Text>
          <TouchableOpacity style={styles.saveButton} onPress={saveEvent}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
          {selectEvent && (
            <TouchableOpacity style={styles.deleteButton} onPress={deleteEvents}>
              <Text style={styles.deleteButtonText}>Deletar Evento</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.cancelButton} onPress={cancelEvent}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#aaaaaa',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  createButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20,
  },
  createButtonDisabled: {
    backgroundColor: '#aaaaaa',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  eventItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noEventsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  evaluationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  evaluationOption: {
    fontSize: 24,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  evaluationSelected: {
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  selectedEvaluation: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
});

export default App;