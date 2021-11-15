export default {
  events: "Events",
  newEvent: "New Event",
  editEvent: "Edit Event",
  emptyEvents: "You have no current events",
  loadingEventError: "There was an error loading your events",
  form: {
    name: "Name",
    description: "Description",
    company: "Company",
    color: "Color",
    isRequired: (value) => `${value} is required`,
    mustValid: (value) => `${value} must be valid`,
    errorLoading: "There was an error loading your event"
  },
  modal: {
    successTitle: "Success",
    errorTitle: "Error",
    ohNoTitle: "Oh no!",
    wohooTitle: "Wohooo!",
    deletePrompt: "Are you sure you want to delete this event?",
    deleteSuccess: "Your event was deleted successfully",
    editSuccess: "Your event was edited successfully",
    createSuccess: "Your event was created successfully"
  },
  submit: "Submit",
  cancel: "Cancel"
};
