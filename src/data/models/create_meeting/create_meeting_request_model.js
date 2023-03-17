import moment from "moment";
import * as Yup from "yup";

export class CreateMeetingRequestModel {
  constructor(
    eventName,
    eventDescription,
    eventStartDate,
    eventFinishDate,
    participants
  ) {
    this.eventName = eventName;
    this.eventDescription = eventDescription;
    this.eventStartDate = eventStartDate;
    this.eventFinishDate = eventFinishDate;
    this.participants = participants;
  }

  static empty() {
    const now = moment();
    const startOfNextHour = moment(now).startOf("hour").add(1, "hour");
    const endOfNextHour = moment(startOfNextHour).add(1, "hour");

    return new CreateMeetingRequestModel(
      "",
      "",
      startOfNextHour.toDate(),
      endOfNextHour.toDate(),
      []
    );
  }

  static validationSchema = Yup.object({
    eventName: Yup.string()
      .min(3, "Event name must be at least 3 characters")
      .required("Event name is required"),

    eventDescription: Yup.string().optional(),

    eventStartDate: Yup.date()
      .min(new Date(), "Event date-time cannot be in the past")
      .required("Event date-time is required"),

    eventFinishDate: Yup.date()
      .min(
        Yup.ref("eventStartDate"),
        "Event end date-time cannot be earlier than start date-time"
      )
      .test(
        "duration",
        "Event duration must be at least 10 minutes",
        function (value) {
          const { eventStartDate } = this.parent;
          const diffInMinutes = moment
            .duration(moment(value).diff(moment(eventStartDate)))
            .asMinutes();
          return diffInMinutes >= 10;
        }
      )
      .required("Event duration is required"),

    participants: Yup.array()
      .of(
        Yup.string()
          .email("Enter a valid email")
          .required("Participant email cannot be empty")
      )
      .min(1, "Include at least one participant."),
  });
}
