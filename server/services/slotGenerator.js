const convertTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");

    hours = parseInt(hours);

    if (modifier === "PM" && hours !== 12) {
        hours += 12;
    }

    if (modifier === "AM" && hours === 12) {
        hours = 0;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes}`;
};

export const generateSlots = (startTime, endTime, interval = 20) => {
    const slots = [];

    const start24 = convertTo24Hour(startTime);
    const end24 = convertTo24Hour(endTime);

    const start = new Date(`1970-01-01T${start24}:00`);
    const end = new Date(`1970-01-01T${end24}:00`);

    while (start < end) {
        slots.push(
            start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            })
        );

        start.setMinutes(start.getMinutes() + interval);
    }

    return slots;
};