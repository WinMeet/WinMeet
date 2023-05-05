import moment from "moment";
import * as Yup from "yup";

export class CreateMeetingRequestModel {
  constructor(
    eventName,
    eventDescription,
    location,
    eventStartDate,
    eventEndDate,
    eventStartDate2,
    eventEndDate2,
    eventStartDate3,
    eventEndDate3,
    participants,
    owner
  ) {
    this.eventName = eventName;
    this.eventDescription = eventDescription;
    this.location = location;
    this.eventStartDate = eventStartDate;
    this.eventEndDate = eventEndDate;
    this.eventStartDate2 = eventStartDate2;
    this.eventEndDate2 = eventEndDate2;
    this.eventStartDate3 = eventStartDate3;
    this.eventEndDate3 = eventEndDate3;
    this.participants = participants;
    this.owner = owner;
  }

  static empty() {
    const now = moment();
    const startOfNextHour = moment(now).startOf("hour").add(1, "hour");
    const endOfNextHour = moment(startOfNextHour).add(1, "hour");

    return new CreateMeetingRequestModel(
      "",
      "",
      "",
      startOfNextHour.toDate(),
      endOfNextHour.toDate(),
      "",
      "",
      "",
      "",
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

    eventEndDate: Yup.date()
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

    eventStartDate2: Yup.date().nullable(),

    eventEndDate2: Yup.date()
      .nullable()
      .when("eventStartDate2", {
        is: (val) => val != null,
        then: Yup.date()
          .min(
            Yup.ref("eventStartDate2"),
            "Event end date-time cannot be earlier than start date-time"
          )
          .test(
            "duration",
            "Event duration must be at least 10 minutes",
            function (value) {
              const { eventStartDate2 } = this.parent;
              const diffInMinutes = moment
                .duration(moment(value).diff(moment(eventStartDate2)))
                .asMinutes();
              return diffInMinutes >= 10;
            }
          ),
      }),

    eventStartDate3: Yup.date().nullable(),

    eventEndDate3: Yup.date()
      .nullable()
      .when("eventStartDate3", {
        is: (val) => val != null,
        then: Yup.date()
          .min(
            Yup.ref("eventStartDate3"),
            "Event end date-time cannot be earlier than start date-time"
          )
          .test(
            "duration",
            "Event duration must be at least 10 minutes",
            function (value) {
              const { eventStartDate3 } = this.parent;
              const diffInMinutes = moment
                .duration(moment(value).diff(moment(eventStartDate3)))
                .asMinutes();
              return diffInMinutes >= 10;
            }
          ),
      }),

    participants: Yup.array()
      .of(
        Yup.string()
          .email("Enter a valid email")
          .required("Participant email cannot be empty")
      )
      .min(1, "Include at least one participant."),
  });
}
