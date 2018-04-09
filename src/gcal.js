import request from 'superagent';
import { REACT_APP_API_KEY } from './.env';
import { REACT_APP_CALENDAR_ID } from './.env';

let url = `https://www.googleapis.com/calendar/v3/calendars/${REACT_APP_CALENDAR_ID}/events?key=${REACT_APP_API_KEY}`
console.log(url);
console.log(process.env.NODE_ENV);
export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}
