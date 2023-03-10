import * as Yup from "yup";

export class CreateMeetingRequestModel {
  constructor(
    eventName,
    eventDescription,
    eventStartDate,
    eventFinishDate,
    eventDuration,
    participants
  ) {
    this.eventName = eventName;
    this.eventDescription = eventDescription;
    this.eventStartDate = eventStartDate;
    this.eventFinishDate = eventFinishDate;
    this.eventDuration = eventDuration;
    this.participants = participants;
  }

  static empty() {
    return new CreateMeetingRequestModel("", "", new Date(), "", "", []);
  }
  a;
  static validationSchema = Yup.object({
    eventName: Yup.string()
      .min(3, "Event name must be at least 3 characters")
      .required("Event name is required"),

    eventDescription: Yup.string().optional(),

    eventStartDate: Yup.date()
      .min(new Date(), "Invalid Date-Time")
      .required("Event Date-Time is required"),

    eventDuration: Yup.number()
      .min(10, "Duration must be at least 10 minutes")
      .max(300, "Duration must not exceed 300 minutes")
      .required("Duration is required"),

    participants: Yup.array()
      .of(
        Yup.string()
          .email("Enter a valid email")
          .required("Participant list cannot be empty")
      )
      .min(1, "Include at least one participant."),
  });
}
