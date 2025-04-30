import _ from "lodash";

export function formatMinutesToDuration(minutes) {
 const hours = Math.floor(minutes / 60);
 const remainingMinutes = minutes % 60;
 return `${hours} hour, ${_.padStart(remainingMinutes.toString(), 2, '0')} mins`;
}